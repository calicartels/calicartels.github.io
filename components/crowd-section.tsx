"use client"

import { CrowdCanvas } from "@/components/crowd-canvas"

export function CrowdSection() {
  return (
    <section className="relative bg-foreground overflow-hidden">
      {/* Top fade gradient for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-foreground to-transparent z-10" />
      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-foreground to-transparent z-10" />

      <div className="relative" style={{ height: "clamp(280px, 40vh, 420px)" }}>
        <CrowdCanvas
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png"
          rows={15}
          cols={7}
        />
      </div>
    </section>
  )
}
