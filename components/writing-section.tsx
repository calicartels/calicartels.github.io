"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import DecryptedText from "@/components/decrypted-text"

type Article = {
  title: string
  description: string
  tags: string[]
  url: string
  platform: string
}

const articles: Article[] = [
  {
    title: "Building a Voice AI Agent for Group Conversations",
    description:
      "How I built SpeakWhenSpoken2 — a voice agent that handles 4-person meetings using Voice Activity Projection, Streaming Sortformer diarization, and Mercury 2 diffusion LLM on a single 3090 for under $10.",
    tags: ["Voice AI", "VAP", "Sortformer", "Mercury 2", "vLLM"],
    url: "https://x.com/vishnutm244412/status/2028279537717432717",
    platform: "Twitter",
  },
  {
    title: "Cheap Spatiotemporal Filtering for Egocentric Factory Video",
    description:
      "The full writeup on EgoCut — using frozen V-JEPA 2 embeddings and a 578K-param attentive probe to gate egocentric headcam windows before Gemini inference, cutting annotation costs by 80% across 9 factories.",
    tags: ["V-JEPA 2", "Gemini", "Computer Vision", "Robotics"],
    url: "https://x.com/vishnutm244412/status/2026030438637080579",
    platform: "Twitter",
  },
]

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5"
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors leading-snug">
            {article.title}
          </h3>
          <span className="flex-shrink-0 text-xs font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
            {article.platform}
          </span>
        </div>

        <p className="text-sm text-foreground/65 leading-relaxed mb-4">
          {article.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-foreground/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>
      </a>
    </motion.div>
  )
}

export function WritingSection() {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-normal text-foreground mb-2 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <DecryptedText
            text="Writing"
            speed={60}
            maxIterations={12}
            sequential
            animateOn="view"
            className="text-foreground"
            encryptedClassName="text-muted-foreground/40"
          />
        </motion.h2>
        <motion.div
          className="w-12 h-[2px] bg-foreground mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <ArticleCard key={article.url} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
