"use client"

import { useRef } from "react"
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
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.querySelector("div")?.offsetWidth ?? 400
    scrollRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24,
      behavior: "smooth",
    })
  }

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground text-balance">
            What Others Say
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left text-xs" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right text-xs" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex-shrink-0 w-[90vw] sm:w-[500px] snap-start rounded-lg border border-border p-6 bg-background"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  style={{ width: "48px", height: "48px" }}
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    {t.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                {t.linkedinUrl && (
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${t.name}'s LinkedIn`}
                  >
                    <i className="fab fa-linkedin text-lg" />
                  </a>
                )}
              </div>
              <div className="space-y-3">
                {t.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-sm text-foreground/80 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">{t.date}</p>
            </div>
          ))}

          {/* Placeholder card */}
          <div className="flex-shrink-0 w-[90vw] sm:w-[500px] snap-start rounded-lg border border-border border-dashed p-6 bg-background flex flex-col justify-center items-center text-center">
            <Image
              src="/assets/testimonial images/default.png"
              alt="Future collaborator"
              width={48}
              height={48}
              className="rounded-full object-cover mb-4"
              style={{ width: "48px", height: "48px" }}
            />
            <h3 className="text-sm font-semibold text-foreground">You</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Future Collaborator
            </p>
            <p className="text-sm text-foreground/60 mb-4">
              After we work together?
            </p>
            <a
              href="#connect"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-foreground text-background text-sm font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
