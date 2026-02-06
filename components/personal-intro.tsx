"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

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

export function PersonalIntro() {
  return (
    <section className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <FadeIn className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-normal leading-snug text-background text-balance">
              A bit about me
            </h2>
            <div className="w-10 h-[2px] bg-background/20 mt-4" />
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-background/70">
              <p>
                I am extremely{" "}
                <strong className="text-background">passionate</strong> about
                all aspects of{" "}
                <strong className="text-background">
                  Computer Vision, Product Development
                </strong>{" "}
                and{" "}
                <strong className="text-background">Generative AI</strong>. I
                embrace working on research and development in those topics to{" "}
                <strong className="text-background">improve lives</strong> and{" "}
                <strong className="text-background">experiences</strong>.
              </p>
              <p>
                The <strong className="text-background">atmosphere</strong> in
                which I work is{" "}
                <strong className="text-background">essential</strong>, and I
                find it difficult to collaborate with individuals who
                aren&apos;t{" "}
                <strong className="text-background">inspired</strong>.
                I&apos;m driven to{" "}
                <strong className="text-background">grow</strong> as a
                developer and{" "}
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
      </div>
    </section>
  )
}
