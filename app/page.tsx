import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection, Footer } from "@/components/contact-section"
import { Marquee } from "@/components/marquee"

export default function Home() {
  return (
    <main className="min-h-screen bg-background bg-grid">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Marquee />
      <Footer />
    </main>
  )
}
