"use client"

import { gsap } from "gsap"
import { useEffect, useRef } from "react"

interface CrowdCanvasProps {
  src: string
  rows?: number
  cols?: number
}

class Peep {
  rect: number[]
  x: number
  y: number
  anchorY: number
  scaleX: number
  walk: gsap.core.Timeline | null
  img: HTMLImageElement
  width: number
  height: number

  constructor(rect: number[], img: HTMLImageElement) {
    this.rect = rect
    this.x = 0
    this.y = 0
    this.anchorY = 0
    this.scaleX = 1
    this.walk = null
    this.img = img
    this.width = rect[2]
    this.height = rect[3]
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.scale(this.scaleX, 1)
    ctx.drawImage(
      this.img,
      this.rect[0],
      this.rect[1],
      this.rect[2],
      this.rect[3],
      -this.width * 0.5,
      -this.height,
      this.width,
      this.height
    )
    ctx.restore()
  }
}

export function CrowdCanvas({ src, rows = 15, cols = 7 }: CrowdCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const randomRange = (min: number, max: number) => min + Math.random() * (max - min)
    const randomIndex = (arr: unknown[]) => (randomRange(0, arr.length) | 0)
    const removeFromArray = (arr: unknown[], i: number) => arr.splice(i, 1)[0]
    const removeRandomFromArray = (arr: unknown[]) => removeFromArray(arr, randomIndex(arr))
    const getRandomFromArray = (arr: unknown[]) => arr[randomIndex(arr) | 0]

    const stage = { width: 0, height: 0 }
    const allPeeps: Peep[] = []
    const availablePeeps: Peep[] = []
    const crowd: Peep[] = []

    const resetPeep = (peep: Peep) => {
      const direction = Math.random() > 0.5 ? 1 : -1
      const offsetY = 100 - 250 * gsap.parseEase("power2.in")(Math.random())
      const startY = stage.height - peep.height + offsetY
      let startX: number, endX: number

      if (direction === 1) {
        startX = -peep.width
        endX = stage.width
        peep.scaleX = 1
      } else {
        startX = stage.width + peep.width
        endX = 0
        peep.scaleX = -1
      }

      peep.x = startX
      peep.y = startY
      peep.anchorY = startY

      return { startX, startY, endX }
    }

    const normalWalk = (peep: Peep, props: { startX: number; startY: number; endX: number }) => {
      const { startX, startY, endX } = props
      const xDuration = 10
      const yDuration = 0.25

      const tl = gsap.timeline()
      tl.timeScale(randomRange(0.5, 1.5))
      tl.to(peep, { duration: xDuration, x: endX, ease: "none" }, 0)
      tl.to(
        peep,
        {
          duration: yDuration,
          repeat: xDuration / yDuration,
          yoyo: true,
          y: startY - 10,
        },
        0
      )

      return tl
    }

    const walks = [normalWalk]

    const addPeep = () => {
      const peep = removeRandomFromArray(availablePeeps) as Peep
      if (!peep) return
      const props = resetPeep(peep)
      const walkFn = getRandomFromArray(walks) as typeof normalWalk
      const tl = walkFn(peep, props)

      peep.walk = tl
      tl.eventCallback("onComplete", () => {
        removeItemFromArray(crowd, peep)
        availablePeeps.push(peep)
        addPeep()
      })

      crowd.push(peep)
    }

    const removeItemFromArray = (arr: Peep[], item: Peep) => {
      const idx = arr.indexOf(item)
      if (idx !== -1) arr.splice(idx, 1)
    }

    const resize = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      stage.width = canvas.width
      stage.height = canvas.height
    }

    const render = () => {
      if (!ctx || !canvas) return
      canvas.width = canvas.width // clear
      crowd.sort((a, b) => a.anchorY - b.anchorY)
      crowd.forEach((p) => p.render(ctx))
    }

    const img = new window.Image()
    img.crossOrigin = "anonymous"

    const init = () => {
      createPeeps(img)
      resize()

      gsap.ticker.add(render)

      const crowdCount = Math.min(20, allPeeps.length)
      for (let i = 0; i < crowdCount; i++) {
        addPeep()
      }
    }

    const createPeeps = (loadedImg: HTMLImageElement) => {
      const { naturalWidth: w, naturalHeight: h } = loadedImg
      const fw = w / cols
      const fh = h / rows

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          allPeeps.push(new Peep([col * fw, row * fh, fw, fh], loadedImg))
        }
      }

      // Shuffle into available
      for (let i = allPeeps.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[allPeeps[i], allPeeps[j]] = [allPeeps[j], allPeeps[i]]
      }
      availablePeeps.push(...allPeeps)
    }

    img.onload = init
    img.src = src

    const handleResize = () => resize()
    window.addEventListener("resize", handleResize)

    return () => {
      gsap.ticker.remove(render)
      crowd.forEach((p) => p.walk?.kill())
      window.removeEventListener("resize", handleResize)
    }
  }, [src, rows, cols])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  )
}
