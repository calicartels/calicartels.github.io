"use client"

import { gsap } from "gsap"
import { useEffect, useRef } from "react"

interface CrowdCanvasProps {
  src: string
  rows?: number
  cols?: number
}

type Peep = {
  image: HTMLImageElement
  rect: number[]
  width: number
  height: number
  drawArgs: unknown[]
  x: number
  y: number
  anchorY: number
  scaleX: number
  walk: gsap.core.Timeline | null
  setRect: (rect: number[]) => void
  render: (ctx: CanvasRenderingContext2D) => void
}

const createPeep = ({
  image,
  rect,
}: {
  image: HTMLImageElement
  rect: number[]
}): Peep => {
  const peep: Peep = {
    image,
    rect: [],
    width: 0,
    height: 0,
    drawArgs: [],
    x: 0,
    y: 0,
    anchorY: 0,
    scaleX: 1,
    walk: null,
    setRect: (r: number[]) => {
      peep.rect = r
      peep.width = r[2]
      peep.height = r[3]
      peep.drawArgs = [peep.image, ...r, 0, 0, peep.width, peep.height]
    },
    render: (ctx: CanvasRenderingContext2D) => {
      ctx.save()
      ctx.translate(peep.x, peep.y)
      ctx.scale(peep.scaleX, 1)
      ctx.drawImage(
        peep.image,
        peep.rect[0],
        peep.rect[1],
        peep.rect[2],
        peep.rect[3],
        0,
        0,
        peep.width,
        peep.height
      )
      ctx.restore()
    },
  }

  peep.setRect(rect)
  return peep
}

export function CrowdCanvas({ src, rows = 15, cols = 7 }: CrowdCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const randomRange = (min: number, max: number) =>
      min + Math.random() * (max - min)
    const randomIndex = (arr: unknown[]) => (randomRange(0, arr.length) | 0)
    const removeFromArray = (arr: unknown[], i: number) => arr.splice(i, 1)[0]
    const removeItemFromArray = (arr: unknown[], item: unknown) =>
      removeFromArray(arr, arr.indexOf(item))
    const removeRandomFromArray = (arr: unknown[]) =>
      removeFromArray(arr, randomIndex(arr))
    const getRandomFromArray = (arr: unknown[]) => arr[randomIndex(arr) | 0]

    const stage = { width: 0, height: 0 }
    const allPeeps: Peep[] = []
    const availablePeeps: Peep[] = []
    const crowd: Peep[] = []

    const resetPeep = ({ stage: s, peep }: { stage: typeof stage; peep: Peep }) => {
      const direction = Math.random() > 0.5 ? 1 : -1
      const offsetY = 60 - 180 * gsap.parseEase("power2.in")(Math.random())
      const startY = s.height - peep.height * 1.15 + offsetY
      let startX: number
      let endX: number

      if (direction === 1) {
        startX = -peep.width
        endX = s.width
        peep.scaleX = 1
      } else {
        startX = s.width + peep.width
        endX = 0
        peep.scaleX = -1
      }

      peep.x = startX
      peep.y = startY
      peep.anchorY = startY

      return { startX, startY, endX }
    }

    const normalWalk = ({ peep, props }: { peep: Peep; props: { startX: number; startY: number; endX: number } }) => {
      const { startY, endX } = props
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

    type WalkFn = typeof normalWalk
    const walks: WalkFn[] = [normalWalk]

    const createPeeps = () => {
      const { naturalWidth: width, naturalHeight: height } = img
      const rectWidth = width / rows
      const rectHeight = height / cols
      const total = rows * cols

      for (let i = 0; i < total; i++) {
        allPeeps.push(
          createPeep({
            image: img,
            rect: [
              (i % rows) * rectWidth,
              ((i / rows) | 0) * rectHeight,
              rectWidth,
              rectHeight,
            ],
          })
        )
      }
    }

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps) as Peep
      if (!peep) return peep
      const walkFn = getRandomFromArray(walks) as WalkFn
      const walk = walkFn({
        peep,
        props: resetPeep({ peep, stage }),
      }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep)
        addPeepToCrowd()
      })

      peep.walk = walk
      crowd.push(peep)
      crowd.sort((a, b) => a.anchorY - b.anchorY)

      return peep
    }

    const removePeepFromCrowd = (peep: Peep) => {
      removeItemFromArray(crowd, peep)
      availablePeeps.push(peep)
    }

    const initCrowd = () => {
      while (availablePeeps.length) {
        const p = addPeepToCrowd()
        if (p?.walk) p.walk.progress(Math.random())
      }
    }

    const render = () => {
      if (!canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.scale(devicePixelRatio, devicePixelRatio)
      crowd.forEach((peep) => peep.render(ctx))
      ctx.restore()
    }

    const resize = () => {
      if (!canvas) return
      stage.width = canvas.clientWidth
      stage.height = canvas.clientHeight
      canvas.width = stage.width * devicePixelRatio
      canvas.height = stage.height * devicePixelRatio

      crowd.forEach((p) => p.walk?.kill())
      crowd.length = 0
      availablePeeps.length = 0
      availablePeeps.push(...allPeeps)
      initCrowd()
    }

    const img = new window.Image()
    img.crossOrigin = "anonymous"

    const init = () => {
      createPeeps()
      resize()
      gsap.ticker.add(render)
    }

    img.onload = init
    img.src = src

    const handleResize = () => resize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      gsap.ticker.remove(render)
      crowd.forEach((p) => p.walk?.kill())
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
