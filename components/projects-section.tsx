"use client"

import { useState, useCallback } from "react"
import { SkillFilter, type Skill } from "@/components/skill-filter"
import { FeaturedProjects } from "@/components/featured-projects"
import { OtherProjects } from "@/components/other-projects"
import { ProjectModal, type ProjectDetail } from "@/components/project-modal"

export function ProjectsSection() {
  const [activeSkills, setActiveSkills] = useState<Skill[]>(["All"])
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null)

  const handleProjectClick = useCallback((project: ProjectDetail) => {
    setSelectedProject(project)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

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

      <FeaturedProjects activeSkills={activeSkills} onProjectClick={handleProjectClick} />
      <OtherProjects activeSkills={activeSkills} onProjectClick={handleProjectClick} />

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  )
}
