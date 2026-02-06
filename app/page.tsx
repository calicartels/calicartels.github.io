import { EyeCursor } from "@/components/eye-cursor"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { QuoteSection } from "@/components/quote-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <EyeCursor />
      <Navbar />
      <main>
        <Hero />
        <QuoteSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
