"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import DecryptedText from "@/components/decrypted-text"

export function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const strings = ["Data Scientist.", "AI Enthusiast.", "Social Worker."]
    let stringIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeout: NodeJS.Timeout

    function type() {
      const current = strings[stringIndex]
      if (!typedRef.current) return

      if (isDeleting) {
        typedRef.current.textContent = current.substring(0, charIndex - 1)
        charIndex--
      } else {
        typedRef.current.textContent = current.substring(0, charIndex + 1)
        charIndex++
      }

      if (!isDeleting && charIndex === current.length) {
        timeout = setTimeout(() => {
          isDeleting = true
          type()
        }, 1500)
        return
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        stringIndex = (stringIndex + 1) % strings.length
      }

      timeout = setTimeout(type, isDeleting ? 30 : 60)
    }

    type()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <header className="relative min-h-screen flex items-center pt-20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[2px] text-muted-foreground mb-4">
              &mdash; Portfolio
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight text-foreground text-balance">
              {"Hi, my name is "}
              <span className="relative inline-block">
                <DecryptedText
                  text="Vishnu"
                  speed={60}
                  maxIterations={12}
                  animateOn="view"
                  className="text-foreground"
                  encryptedClassName="text-muted-foreground/60"
                  parentClassName=""
                />
                {/* Underline accent */}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-foreground/20 rounded-full" />
              </span>
              {","}
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-foreground mt-3">
              {"I am a "}
              <span ref={typedRef} className="text-muted-foreground" />
              <span className="animate-pulse text-muted-foreground">|</span>
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/70 max-w-xl text-pretty">
              MEng in AI for Product Innovation from Duke University.
              Passionate about Data Science, Artificial Intelligence, &amp;
              Computer Vision.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="/assets/file/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground text-background font-medium text-sm shadow-md hover:shadow-lg transition-shadow"
              >
                Resume
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-background text-foreground font-medium text-sm shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                Discover
              </a>
            </div>
          </div>

          <div className="lg:w-2/5 hidden lg:flex items-center justify-center">
            <Image
              src="/assets/image/absurd_lightbuld.gif"
              alt="Lightbulb illustration"
              width={300}
              height={300}
              className="w-[300px] h-auto"
              unoptimized
              priority
            />
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-8 animate-bounce-slow">
          <div className="flex flex-col items-center">
            <div className="w-[1.5px] h-6 bg-foreground" />
            <span className="text-xs uppercase tracking-wider font-heading font-medium mt-2">
              scroll
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
