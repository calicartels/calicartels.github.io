"use client"

import { CrowdCanvas } from "@/components/crowd-canvas"

export function CrowdSection() {
  return (
    <section
      className="relative bg-foreground overflow-hidden"
      style={{ height: "clamp(200px, 30vh, 350px)" }}
    >
      <div className="absolute inset-0">
        <CrowdCanvas
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png"
          rows={15}
          cols={7}
        />
      </div>
    </section>
  )
}
