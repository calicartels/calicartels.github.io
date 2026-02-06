"use client"

import { useEffect, useState, useRef } from "react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#featured-projects" },
  { label: "Github", href: "https://github.com/calicartels", external: true },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/vishnu-mukundan-tm/",
    external: true,
  },
]

function GlowMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [glowStyle, setGlowStyle] = useState<{
    left: number
    width: number
    opacity: number
  }>({ left: 0, width: 0, opacity: 0 })

  useEffect(() => {
    const idx = hoveredIndex ?? activeIndex
    if (idx === null || !containerRef.current || !itemRefs.current[idx]) {
      setGlowStyle((prev) => ({ ...prev, opacity: 0 }))
      return
    }
    const container = containerRef.current.getBoundingClientRect()
    const item = itemRefs.current[idx]!.getBoundingClientRect()
    setGlowStyle({
      left: item.left - container.left,
      width: item.width,
      opacity: 1,
    })
  }, [hoveredIndex, activeIndex])

  return (
    <div ref={containerRef} className="relative flex items-center">
      {/* Glow backdrop */}
      <div
        className="absolute top-0 h-full rounded-full transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: glowStyle.left - 4,
          width: glowStyle.width + 8,
          opacity: glowStyle.opacity,
          background:
            "radial-gradient(ellipse at center, hsl(var(--foreground) / 0.08) 0%, transparent 70%)",
          boxShadow: "0 0 20px 4px hsl(var(--foreground) / 0.06)",
        }}
      />

      <div className="flex items-center gap-1">
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="relative z-10 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground rounded-full"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => !link.external && setActiveIndex(i)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let prevScroll = window.scrollY
    function onScroll() {
      const curr = window.scrollY
      setHidden(curr > prevScroll && curr > 100)
      prevScroll = curr
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between rounded-full border border-border/60 bg-background/80 backdrop-blur-md px-6 py-2 shadow-sm">
          <a href="#" className="text-base font-semibold text-foreground">
            Vishnu
          </a>

          {/* Desktop glow menu */}
          <div className="hidden md:block">
            <GlowMenu />
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-6 mt-1 rounded-2xl border border-border/60 bg-background/95 backdrop-blur-md px-6 py-4 shadow-lg">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block text-sm font-medium text-foreground py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
