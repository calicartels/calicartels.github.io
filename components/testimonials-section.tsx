"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

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
  const [direction, setDirection] = useState<"left" | "right">("left")
  const [isAnimating, setIsAnimating] = useState(false)

  const totalSlides = testimonials.length + 1 // +1 for the "You" placeholder

  const goTo = useCallback(
    (newIndex: number, dir: "left" | "right") => {
      if (isAnimating) return
      setDirection(dir)
      setIsAnimating(true)
      setActiveIndex(newIndex)
    },
    [isAnimating]
  )

  const next = useCallback(() => {
    goTo((activeIndex + 1) % totalSlides, "left")
  }, [activeIndex, totalSlides, goTo])

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + totalSlides) % totalSlides, "right")
  }, [activeIndex, totalSlides, goTo])

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const getSlideClass = () => {
    const base = "transition-all duration-500 ease-in-out"
    if (!isAnimating) return `${base} opacity-100 translate-x-0`
    if (direction === "left")
      return `${base} animate-slide-in-left`
    return `${base} animate-slide-in-right`
  }

  const currentIsPlaceholder = activeIndex === testimonials.length

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-2 text-balance">
          What Others Say
        </h2>
        <div className="w-12 h-[2px] bg-foreground mb-12" />

        <div className="relative">
          {/* Quote icon */}
          <div className="absolute -top-2 left-0 text-6xl md:text-8xl text-foreground/5 font-serif select-none pointer-events-none leading-none">
            {'\u201C'}
          </div>

          <div className="relative overflow-hidden min-h-[340px] md:min-h-[280px]">
            <div key={activeIndex} className={getSlideClass()}>
              {currentIsPlaceholder ? (
                /* Placeholder "You" card */
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <Image
                    src="/assets/testimonial images/default.png"
                    alt="Future collaborator"
                    width={64}
                    height={64}
                    className="rounded-full object-cover mb-6"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    You
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Future Collaborator
                  </p>
                  <p className="text-base text-foreground/60 mb-6 max-w-md">
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
                /* Actual testimonial */
                <div>
                  <div className="space-y-4 mb-8">
                    {testimonials[activeIndex].paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-base md:text-lg text-foreground/80 leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                      style={{ width: "48px", height: "48px" }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-foreground">
                          {testimonials[activeIndex].name}
                        </h3>
                        {testimonials[activeIndex].linkedinUrl && (
                          <a
                            href={testimonials[activeIndex].linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label={`${testimonials[activeIndex].name}'s LinkedIn`}
                          >
                            <i className="fab fa-linkedin" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground hidden sm:block">
                      {testimonials[activeIndex].date}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() =>
                    goTo(i, i > activeIndex ? "left" : "right")
                  }
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
