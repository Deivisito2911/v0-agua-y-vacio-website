import { HeroSection } from '@/components/hero-section'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PhilosophySection } from '@/components/philosophy-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ServicesSection } from '@/components/services-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <main className="relative w-full bg-white">
      <Header />
      
      <div id="inicio">
        <HeroSection
          title="Agua y Vacío"
          subtitle="El arte del trazo presente"
          // Si quieres usar video, pon la URL aquí. Si no, déjala vacía o bórrala.
          videoSrc="https://res.cloudinary.com/dnwyno39r/video/upload/v1773584290/Agua_y_Vacio_1_1_jm9o3z.mp4" 
          // imageSrc siempre servirá como fallback de alta calidad
          //imageSrc="https://res.cloudinary.com/dnwyno39r/image/upload/v1765393580/samples/animals/kitten-playing.gif"
        />
      </div>

      <PhilosophySection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />

      <Footer />
    </main>
  )
}