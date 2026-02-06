"use client"

import Image from "next/image"
import { useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"

export type ProjectDetail = {
  title: string
  descriptions: string[]
  tags: string[]
  image: string
  imageAlt: string
  githubUrl: string
  summary: string
  skills: string[]
  demoUrl?: string
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectDetail | null
  onClose: () => void
}) {
  const backdropRef = useRef<HTMLDivElement>(null)
  const handleClose = useCallback(() => onClose(), [onClose])

  useEffect(() => {
    if (!project) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [project, handleClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={backdropRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 flex items-end sm:items-center justify-center"
          style={{ zIndex: 99999 }}
          onClick={(e) => {
            if (e.target === backdropRef.current) handleClose()
          }}
        >
          {/* Backdrop blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

          {/* iOS-style sheet */}
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            className="relative w-full max-w-lg mx-4 sm:mx-auto max-h-[85vh] overflow-hidden"
            style={{ zIndex: 100000 }}
          >
            {/* Card container */}
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(40px) saturate(180%)",
                WebkitBackdropFilter: "blur(40px) saturate(180%)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-2 pb-1 sm:hidden">
                <div className="w-9 h-1 rounded-full bg-black/15" />
              </div>

              {/* Header with close button */}
              <div className="flex items-center justify-between px-5 pt-3 pb-2" style={{ position: "relative", zIndex: 100001 }}>
                <div className="w-8" />
                <h3
                  className="text-base font-semibold text-center truncate flex-1 px-2"
                  style={{ color: "#1c1c1e" }}
                >
                  {project.title}
                </h3>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClose()
                  }}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/10 cursor-pointer"
                  style={{ background: "rgba(0,0,0,0.08)", position: "relative", zIndex: 100002 }}
                  aria-label="Close"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="#3c3c43"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M1 1l10 10M11 1L1 11" />
                  </svg>
                </button>
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto max-h-[70vh] px-5 pb-6">
                {/* Hero image */}
                <div className="rounded-xl overflow-hidden mt-2 mb-4">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={500}
                    height={280}
                    className="object-cover"
                    style={{ width: "100%", height: "200px" }}
                  />
                </div>

                {/* Summary */}
                <div
                  className="rounded-xl p-4 mb-4"
                  style={{ background: "rgba(0,0,0,0.03)" }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "#8e8e93" }}
                  >
                    Overview
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#1c1c1e" }}
                  >
                    {project.summary}
                  </p>
                </div>

                {/* Descriptions */}
                <div className="mb-4">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "#8e8e93" }}
                  >
                    Details
                  </p>
                  {project.descriptions.map((desc, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed mb-2"
                      style={{ color: "#3c3c43" }}
                    >
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="mb-5">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "#8e8e93" }}
                  >
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{
                          background: "rgba(0,0,0,0.05)",
                          color: "#1c1c1e",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{
                        background: "#34c759",
                        color: "#fff",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
                    style={{
                      background: "#007aff",
                      color: "#fff",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
