"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

const technologies = {
  Languages: ["Python", "JavaScript", "SQL", "HTML", "Excel", "Statistics"],
  Frameworks: [
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "OpenCV",
    "LangChain / LangGraph",
    "HuggingFace",
    "NumPy / Pandas",
    "PySpark",
  ],
  Platforms: ["AWS", "GCP", "Microsoft Azure", "Docker", "Kubernetes", "Git"],
}

const education = [
  {
    years: "2024 \u2014 2025",
    school: "Duke University",
    degree: "MEng in AI for Product Innovation",
    gpa: "GPA: 3.72 / 4.0",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      </svg>
    ),
  },
  {
    years: "2019 \u2014 2024",
    school: "Vellore Institute of Technology",
    degree: "Integrated MTech in Computer Science",
    gpa: "Specialization in Data Science",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    years: "2004 \u2014 2019",
    school: "Bala Vidya Mandir Senior Secondary School",
    degree: "",
    gpa: "",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
]

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-5xl mx-auto">
        {/* Education */}
        <FadeIn className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-lg font-semibold tracking-wide uppercase text-background/90">
              Education
            </h3>
            <div className="flex-1 h-px bg-background/15" />
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-background/15 hidden md:block" />

            <div className="space-y-0">
              {education.map((edu, i) => (
                <FadeIn key={edu.school} delay={0.1 + i * 0.1}>
                  <div className="flex gap-6 group relative">
                    {/* Timeline node */}
                    <div className="hidden md:flex flex-col items-center pt-1">
                      <div className="relative z-10 w-10 h-10 rounded-full border border-background/20 bg-foreground flex items-center justify-center text-background/60 group-hover:text-background group-hover:border-background/40 transition-colors">
                        {edu.icon}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 pb-8">
                      <div className="rounded-xl border border-background/10 bg-background/[0.04] p-6 group-hover:border-background/20 group-hover:bg-background/[0.06] transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <div>
                            <h4 className="text-base font-semibold text-background">
                              {edu.school}
                            </h4>
                            {edu.degree && (
                              <p className="text-sm text-background/70 mt-0.5">
                                {edu.degree}
                              </p>
                            )}
                          </div>
                          <span className="text-xs font-mono text-background/40 whitespace-nowrap shrink-0">
                            {edu.years}
                          </span>
                        </div>
                        {edu.gpa && (
                          <p className="text-xs text-background/50 mt-2 font-mono">
                            {edu.gpa}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Technologies */}
        <FadeIn delay={0.15}>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-lg font-semibold tracking-wide uppercase text-background/90">
              Technologies
            </h3>
            <div className="flex-1 h-px bg-background/15" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.entries(technologies).map(([category, items], catIdx) => (
              <FadeIn key={category} delay={0.2 + catIdx * 0.08}>
                <div className="rounded-xl border border-background/10 bg-background/[0.04] p-6 h-full hover:border-background/20 hover:bg-background/[0.06] transition-all">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-background/50 mb-4">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="inline-block text-sm px-3 py-1.5 rounded-full border border-background/15 text-background/80 hover:text-background hover:border-background/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
