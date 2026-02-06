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
  },
  {
    years: "2019 \u2014 2024",
    school: "Vellore Institute of Technology",
    degree: "Integrated MTech in Computer Science",
    gpa: "Specialization in Data Science",
  },
  {
    years: "2004 \u2014 2019",
    school: "Bala Vidya Mandir Senior Secondary School",
    degree: "",
    gpa: "",
  },
]

const certifications = [
  {
    title: "Introduction to TensorFlow for AI, ML, and DL",
    issuer: "Coursera",
    year: "2022",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2022",
  },
  {
    title: "Developing AI Applications on Azure",
    issuer: "Coursera",
    year: "2022",
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
        {/* Heading + Bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-normal leading-snug text-balance">
              Studying MEng in Artificial Intelligence for Product Innovation
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-sm leading-relaxed text-background/80">
              <p>
                I am extremely{" "}
                <strong className="text-background">passionate</strong> about
                all aspects of{" "}
                <strong className="text-background">
                  Computer Vision, Product Development
                </strong>{" "}
                and{" "}
                <strong className="text-background">Generative AI</strong>. I
                embrace{" "}
                <strong className="text-background">working</strong> on research
                and development in those topics to{" "}
                <strong className="text-background">improve lives</strong> and{" "}
                <strong className="text-background">experiences</strong>.
              </p>
              <p>
                The <strong className="text-background">atmosphere</strong> in
                which I work is{" "}
                <strong className="text-background">essential</strong>, and I
                find it difficult to{" "}
                <strong className="text-background">collaborate</strong> with
                individuals who aren&apos;t{" "}
                <strong className="text-background">inspired</strong>.
                I&apos;m driven to{" "}
                <strong className="text-background">grow</strong> as a{" "}
                <strong className="text-background">developer</strong> and{" "}
                <strong className="text-background">learn</strong> from others.
              </p>
              <p>
                I enjoy spending time with my{" "}
                <strong className="text-background">friends</strong>, training
                myself in the arts of{" "}
                <strong className="text-background">Mixed Martial Arts</strong>,
                going to the{" "}
                <strong className="text-background">gym</strong>, and at the{" "}
                <strong className="text-background">beach</strong> where I{" "}
                <strong className="text-background">Surf</strong> and{" "}
                <strong className="text-background">Scuba dive</strong>.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Technologies */}
        <FadeIn delay={0.15} className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-lg font-semibold tracking-wide uppercase text-background/90">
              Technologies
            </h3>
            <div className="flex-1 h-px bg-background/15" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.entries(technologies).map(([category, items], catIdx) => (
              <FadeIn key={category} delay={0.2 + catIdx * 0.08}>
                <div className="rounded-xl border border-background/10 bg-background/[0.04] p-6 h-full">
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

        {/* Education */}
        <FadeIn delay={0.15} className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-lg font-semibold tracking-wide uppercase text-background/90">
              Education
            </h3>
            <div className="flex-1 h-px bg-background/15" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <FadeIn key={edu.school} delay={0.2 + i * 0.08}>
                <div className="rounded-xl border border-background/10 bg-background/[0.04] p-6 h-full flex flex-col">
                  <span className="text-xs font-mono text-background/40 mb-3">
                    {edu.years}
                  </span>
                  <h4 className="text-base font-semibold text-background mb-1">
                    {edu.school}
                  </h4>
                  {edu.degree && (
                    <p className="text-sm text-background/70 leading-relaxed">
                      {edu.degree}
                    </p>
                  )}
                  {edu.gpa && (
                    <p className="text-xs text-background/50 mt-auto pt-3">
                      {edu.gpa}
                    </p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Certifications */}
        <FadeIn delay={0.15}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-lg font-semibold tracking-wide uppercase text-background/90">
              Certifications
            </h3>
            <div className="flex-1 h-px bg-background/15" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <FadeIn key={cert.title} delay={0.2 + i * 0.08}>
                <div className="rounded-xl border border-background/10 bg-background/[0.04] p-6 h-full flex flex-col">
                  <h4 className="text-sm font-semibold text-background mb-2 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-background/50 mt-auto">
                    {cert.issuer} ({cert.year})
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
