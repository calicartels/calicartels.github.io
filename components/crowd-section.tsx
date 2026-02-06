"use client"

import { CrowdCanvas } from "@/components/crowd-canvas"

export function CrowdSection() {
  return (
    <section className="relative h-[90vh] w-full bg-background text-foreground">
      <div className="absolute left-1/2 top-22 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center z-10">
        <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-background after:to-foreground after:content-['']">
          Crowd Canvas
        </span>
      </div>
      <div className="absolute bottom-0 h-full w-full">
        <CrowdCanvas
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png"
          rows={15}
          cols={7}
        />
      </div>
    </section>
  )
}
