'use client'

import { motion } from 'framer-motion'
import { SectionContainer } from './section-container'
import { PortfolioItem } from './portfolio-item'

const portfolioWorks = [
  {
    title: 'Vacío',
    imageSrc: 'https://images.unsplash.com/photo-1607274686620-bb131fca2d17?q=80&w=1200&auto=format&fit=crop',
    medium: 'Tinta sobre papel',
    description: 'La esencia del no-ser, capturada en trazo único',
  },
  {
    title: 'Flujo',
    imageSrc: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?q=80&w=1200&auto=format&fit=crop',
    medium: 'Caligrafía cursiva',
    description: 'El movimiento continuo del agua, la impermanencia',
  },
  {
    title: 'Meditación',
    imageSrc: 'https://images.unsplash.com/photo-1605273715550-75e4ede1d024?q=80&w=1200&auto=format&fit=crop',
    medium: 'Técnica mixta',
    description: 'Tranquilidad visual, paz plasmada en caracteres',
  },
  {
    title: 'Transformación',
    imageSrc: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?q=80&w=1200&auto=format&fit=crop',
    medium: 'Caligrafía tradicional',
    description: 'El cambio perpetuo, la danza del ser y el no-ser',
  },
]

export function PortfolioSection() {
  return (
    <SectionContainer id="obras" className="bg-secondary/30">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-3 text-foreground text-center">
          Obras
        </h2>
        <p className="text-center text-muted-foreground font-light">
          Una selección de trabajos que representan la evolución y la filosofía de Agua y Vacío
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {portfolioWorks.map((work, index) => (
          <PortfolioItem
            key={`${work.title}-${index}`}
            title={work.title}
            imageSrc={work.imageSrc}
            medium={work.medium}
            description={work.description}
          />
        ))}
      </div>
    </SectionContainer>
  )
}
