'use client'

import { motion } from 'framer-motion'
import { SectionContainer } from './section-container'
import { PortfolioItem } from './portfolio-item'

const portfolioWorks = [
  {
    title: 'Vacío',
    imageSrc: 'https://res.cloudinary.com/dnwyno39r/image/upload/v1765393597/cld-sample-4.jpg',
    medium: 'Tinta sobre papel',
    description: 'La esencia del no-ser, capturada en un trazo único que nace de la quietud y el silencio presente.',
    instagramUrl: 'https://www.instagram.com/p/DR5uqq3iMy4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', // Enlace real de IG
    aspect: 'aspect-[4/5]'
  },
  {
    title: 'Flujo',
    imageSrc: 'https://res.cloudinary.com/dnwyno39r/image/upload/v1765393596/samples/waves.png',
    medium: 'Caligrafía cursiva',
    description: 'Representación del movimiento continuo del agua y la impermanencia de todas las cosas.',
    instagramUrl: 'https://www.instagram.com/p/DSYKA17kd53/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    aspect: 'aspect-square'
  },
  {
    title: 'Meditación',
    imageSrc: 'https://res.cloudinary.com/dnwyno39r/image/upload/v1765393594/samples/zoom.avif',
    medium: 'Técnica mixta',
    description: 'Tranquilidad visual y paz plasmada a través de caracteres tradicionales de gran fuerza espiritual.',
    instagramUrl: 'https://www.instagram.com/reel/DV1_uZ9jkjP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    aspect: 'aspect-square'
  },
  {
    title: 'Transformación',
    imageSrc: 'https://res.cloudinary.com/dnwyno39r/image/upload/v1765393589/samples/breakfast.jpg',
    medium: 'Caligrafía tradicional',
    description: 'El cambio perpetuo, la danza eterna entre el ser y el no-ser capturada en papel de arroz.',
    instagramUrl: 'https://www.instagram.com/reel/DV59bRujudT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    aspect: 'aspect-[4/3]'
  },
]

export function PortfolioSection() {
  return (
    <SectionContainer id="obras" className="bg-white py-24">
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[#B22222] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
          Portafolio
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1A1A1A] mb-6">
          Obras Seleccionadas
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500 font-light italic">
          "El trazo no se piensa, se siente. Una selección que representa la evolución y la filosofía de Agua y Vacío."
        </p>
      </motion.div>

      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {portfolioWorks.map((work, index) => (
          <PortfolioItem
            key={`${work.title}-${index}`}
            {...work}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  )
}