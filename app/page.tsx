import { EyeCursor } from "@/components/eye-cursor"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PersonalIntro } from "@/components/personal-intro"
import { ExperienceSection } from "@/components/experience-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CrowdSection } from "@/components/crowd-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <EyeCursor />
      <Navbar />
      <main>
        <Hero />
        <PersonalIntro />
        <ExperienceSection />
        <AboutSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CrowdSection />
      </main>
      <Footer />
    </>
  )
}
