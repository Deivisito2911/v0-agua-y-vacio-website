'use client'

import { HeroSection } from '@/components/hero-section'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PhilosophySection } from '@/components/philosophy-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ServicesSection } from '@/components/services-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {

  return (
    <div className="w-full bg-white">
      <Header />

      <HeroSection
        title="Agua y Vacío"
        subtitle="El arte del trazo presente"
        imageSrc="https://images.unsplash.com/photo-1537903904737-13fc0a7f1e1d?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Caligrafía china tradicional"
      />

      <PhilosophySection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />

      <Footer />
    </div>
  )
}
