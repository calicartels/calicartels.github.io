"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"

type Testimonial = {
  name: string
  role: string
  image: string
  linkedinUrl?: string
  paragraphs: string[]
  date: string
}

const testimonials: Testimonial[] = [
  {
    name: "Eric Murray",
    role: "Business Leader & Innovator",
    image: "/assets/testimonial images/eric.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/eric-jl-murray/",
    paragraphs: [
      "Vishnu was part of a three person Capstone Project ProAxion worked with to explore AI, vision, and engagement applications that would simplify our user interface such that maintenance personnel could take action of Machine Health Diagnostics we provided.",
      "What I appreciated most about Vishnu's contribution was that he implemented advanced technology with a clear grasp that many maintenance users don't have advanced IT skills and need intuitive tools they can apply with urgency when the plant is down.",
      "Vishnu always came prepared to demonstrate working examples of his work to engage and capture input from team members, was on time and present in the moment during our work, and showed a high level of commitment/accountability.",
    ],
    date: "May 9, 2025",
  },
  {
    name: "William Raffe",
    role: "A/Prof of Emerging Technology, Deakin University",
    image: "/assets/testimonial images/will.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/william-raffe-71878053/",
    paragraphs: [
      "I supervised Vishnu during his Deakin University Research Internship. He had an incredible amount of work ethic and determination, identifying areas of potential innovation in his project and planning a course of action to achieve his objectives.",
      "He takes feedback very well, only needing to be provided with suggestions and guidance once before acting on it. Finally, his ability to pickup new skills and technology across a wide spectrum of IT domains (such as computer vision, mixed reality development, and networking) has been inspiring to see.",
      "Best of luck in the future, Vishnu!",
    ],
    date: "June 11, 2024",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const totalSlides = testimonials.length + 1

  const goTo = useCallback(
    (newIndex: number) => {
      if (isAnimating || newIndex === activeIndex) return
      setIsAnimating(true)
      setActiveIndex(newIndex)
    },
    [isAnimating, activeIndex],
  )

  const next = useCallback(() => {
    goTo((activeIndex + 1) % totalSlides)
  }, [activeIndex, totalSlides, goTo])

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + totalSlides) % totalSlides)
  }, [activeIndex, totalSlides, goTo])

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 450)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const currentIsPlaceholder = activeIndex === testimonials.length

  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal text-foreground text-balance">
              What Others Say
            </h2>
            <div className="w-10 h-[2px] bg-foreground/20 mt-3" />
          </div>
          {/* Navigation arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="relative rounded-2xl border border-border bg-background overflow-hidden">
          {/* Large decorative quote */}
          <div className="absolute top-6 left-8 text-7xl md:text-9xl font-serif text-foreground/[0.04] leading-none select-none pointer-events-none">
            {"\u201C"}
          </div>

          <div className="relative min-h-[380px] md:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="p-8 md:p-12"
              >
                {currentIsPlaceholder ? (
                  <div className="flex flex-col items-center justify-center text-center py-6">
                    <Image
                      src="/assets/testimonial images/default.png"
                      alt="Future collaborator"
                      width={72}
                      height={72}
                      className="rounded-full object-cover mb-6 ring-2 ring-border"
                      style={{ width: "72px", height: "72px" }}
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      You
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Future Collaborator
                    </p>
                    <p className="text-base text-foreground/60 mb-8 max-w-md leading-relaxed">
                      This space is reserved for what you&apos;ll say after we
                      work together.
                    </p>
                    <a
                      href="#connect"
                      className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      {"Let's Connect"}
                    </a>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    {/* Testimonial text */}
                    <div className="flex-1 space-y-4 mb-10">
                      {testimonials[activeIndex].paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-base md:text-lg text-foreground/75 leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <Image
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover ring-2 ring-border"
                        style={{ width: "48px", height: "48px" }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-semibold text-foreground truncate">
                            {testimonials[activeIndex].name}
                          </h3>
                          {testimonials[activeIndex].linkedinUrl && (
                            <a
                              href={testimonials[activeIndex].linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                              aria-label={`${testimonials[activeIndex].name}'s LinkedIn`}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {testimonials[activeIndex].role}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground hidden sm:block whitespace-nowrap">
                        {testimonials[activeIndex].date}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress dots at bottom */}
          <div className="flex justify-center gap-2 pb-6">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-foreground"
                    : "w-1.5 bg-foreground/15 hover:bg-foreground/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
