"use client"

import { useState } from "react"
import { SkillFilter, type Skill } from "@/components/skill-filter"
import { FeaturedProjects } from "@/components/featured-projects"
import { OtherProjects } from "@/components/other-projects"

export function ProjectsSection() {
  const [activeSkills, setActiveSkills] = useState<Skill[]>(["All"])

  return (
    <div>
      {/* Sticky skill filter bar */}
      <section className="py-12 px-6 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Filter by skill
          </p>
          <SkillFilter
            selectedSkills={activeSkills}
            onSkillsChange={setActiveSkills}
          />
        </div>
      </section>

      <FeaturedProjects activeSkills={activeSkills} />
      <OtherProjects activeSkills={activeSkills} />
    </div>
  )
}
