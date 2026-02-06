import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { QuoteSection } from "@/components/quote-section"
import { ExperienceSection } from "@/components/experience-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { OtherProjects } from "@/components/other-projects"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuoteSection />
        <ExperienceSection />
        <FeaturedProjects />
        <OtherProjects />
        <TestimonialsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
