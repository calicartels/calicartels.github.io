"use client"

import { CrowdCanvas } from "@/components/crowd-canvas"

export function QuoteSection() {
  return (
    <section
      id="quote"
      className="relative bg-foreground text-background overflow-hidden"
      style={{ height: "clamp(320px, 50vh, 500px)" }}
    >
      {/* Crowd Canvas fills the section */}
      <div className="absolute inset-0">
        <CrowdCanvas
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png"
          rows={15}
          cols={7}
        />
      </div>

      {/* Quote overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-3xl text-center">
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight text-balance drop-shadow-lg">
            <span className="text-background/90">
              {"Once you bid "}
            </span>
            <span className="text-background/60">farewell</span>
            <span className="text-background/90">{" to "}</span>
            <span className="text-background/60">discipline</span>
            <span className="text-background/90">{" you say "}</span>
            <span className="text-background/60">goodbye</span>
            <span className="text-background/90">{" to "}</span>
            <span className="text-background/60">success</span>
            <span className="text-background/90">.</span>
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-background/70" />
            <cite className="text-base not-italic font-normal text-background/80 drop-shadow-sm">
              Sir Alex Ferguson
            </cite>
          </div>
        </div>
      </div>

      {/* Gradient overlays so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/70 pointer-events-none z-[5]" />
    </section>
  )
}
