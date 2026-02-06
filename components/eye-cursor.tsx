"use client"

import { useEffect, useRef } from "react"

export function EyeCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pupilRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    // Don't show on touch-only devices
    const isTouchOnly = window.matchMedia("(hover: none)").matches
    if (isTouchOnly) return

    function onMouseMove(e: MouseEvent) {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    function animate() {
      const lerp = 0.15
      posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp
      posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`
      }

      // Calculate pupil offset based on velocity
      if (pupilRef.current) {
        const dx = targetRef.current.x - posRef.current.x
        const dy = targetRef.current.y - posRef.current.y
        const maxOffset = 3
        const pupilX = Math.max(-maxOffset, Math.min(maxOffset, dx * 0.3))
        const pupilY = Math.max(-maxOffset, Math.min(maxOffset, dy * 0.3))
        pupilRef.current.style.transform = `translate(${pupilX}px, ${pupilY}px)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    // Hide default cursor
    document.body.style.cursor = "none"

    // Add cursor-none to all interactive elements
    const style = document.createElement("style")
    style.textContent = `
      *, *::before, *::after { cursor: none !important; }
    `
    document.head.appendChild(style)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(rafRef.current)
      document.body.style.cursor = ""
      style.remove()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none hidden md:block"
      style={{ willChange: "transform", zIndex: 100001 }}
    >
      {/* Eye outer - white of the eye */}
      <div
        className="relative flex items-center justify-center rounded-full bg-background border-2 border-foreground/80 shadow-lg"
        style={{
          width: 28,
          height: 28,
          marginLeft: -14,
          marginTop: -14,
        }}
      >
        {/* Pupil */}
        <div
          ref={pupilRef}
          className="rounded-full bg-foreground"
          style={{
            width: 10,
            height: 10,
            willChange: "transform",
          }}
        />
        {/* Light reflection */}
        <div
          className="absolute rounded-full bg-background/90"
          style={{
            width: 4,
            height: 4,
            top: 6,
            right: 7,
          }}
        />
      </div>
    </div>
  )
}
