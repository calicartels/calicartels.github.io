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
      style={{ willChange: "transform", zIndex: 100001, mixBlendMode: "difference" }}
    >
      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          border: "2.5px solid white",
          backgroundColor: "transparent",
        }}
      >
        <div
          ref={pupilRef}
          className="rounded-full"
          style={{
            width: 8,
            height: 8,
            willChange: "transform",
            backgroundColor: "white",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 3,
            height: 3,
            top: 7,
            right: 8,
            backgroundColor: "#000",
          }}
        />
      </div>
    </div>
  )
}
