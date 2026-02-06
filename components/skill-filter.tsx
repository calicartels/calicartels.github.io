"use client"

import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"

const skills = [
  "All",
  "Python",
  "Machine Learning",
  "Deep Learning",
  "LLM",
  "NLP",
  "Computer Vision",
  "Data Science",
  "Flask",
  "Streamlit",
  "React",
  "Flutter",
] as const

export type Skill = (typeof skills)[number]

export function SkillFilter({
  selectedSkills,
  onSkillsChange,
}: {
  selectedSkills: Skill[]
  onSkillsChange: (skills: Skill[]) => void
}) {
  const toggleSkill = useCallback(
    (skill: Skill) => {
      if (skill === "All") {
        onSkillsChange(["All"])
        return
      }

      let next: Skill[]
      if (selectedSkills.includes(skill)) {
        next = selectedSkills.filter((s) => s !== skill)
        if (next.length === 0) next = ["All"]
      } else {
        next = [...selectedSkills.filter((s) => s !== "All"), skill]
      }
      onSkillsChange(next)
    },
    [selectedSkills, onSkillsChange]
  )

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => {
        const isActive = selectedSkills.includes(skill)
        return (
          <button
            key={skill}
            onClick={() => toggleSkill(skill)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
              isActive
                ? "bg-foreground text-background border-foreground shadow-sm"
                : "bg-transparent text-foreground/70 border-border hover:border-foreground/40 hover:text-foreground"
            )}
          >
            {skill}
          </button>
        )
      })}
    </div>
  )
}
