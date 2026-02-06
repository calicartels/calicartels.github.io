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
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <FadeIn className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-normal leading-snug text-foreground text-balance">
              A bit about me
            </h2>
            <div className="w-10 h-[2px] bg-foreground/20 mt-4" />
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-foreground/70">
              <p>
                I am extremely{" "}
                <strong className="text-foreground">passionate</strong> about
                all aspects of{" "}
                <strong className="text-foreground">
                  Computer Vision, Product Development
                </strong>{" "}
                and{" "}
                <strong className="text-foreground">Generative AI</strong>. I
                embrace working on research and development in those topics to{" "}
                <strong className="text-foreground">improve lives</strong> and{" "}
                <strong className="text-foreground">experiences</strong>.
              </p>
              <p>
                The <strong className="text-foreground">atmosphere</strong> in
                which I work is{" "}
                <strong className="text-foreground">essential</strong>, and I
                find it difficult to collaborate with individuals who
                aren&apos;t{" "}
                <strong className="text-foreground">inspired</strong>.
                I&apos;m driven to{" "}
                <strong className="text-foreground">grow</strong> as a
                developer and{" "}
                <strong className="text-foreground">learn</strong> from others.
              </p>
              <p>
                I enjoy spending time with my{" "}
                <strong className="text-foreground">friends</strong>, training
                myself in the arts of{" "}
                <strong className="text-foreground">Mixed Martial Arts</strong>,
                going to the{" "}
                <strong className="text-foreground">gym</strong>, and at the{" "}
                <strong className="text-foreground">beach</strong> where I{" "}
                <strong className="text-foreground">Surf</strong> and{" "}
                <strong className="text-foreground">Scuba dive</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
