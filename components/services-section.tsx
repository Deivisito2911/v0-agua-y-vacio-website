'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users } from 'lucide-react'
import { SectionContainer } from './section-container'
import { ServiceCard } from './service-card'

export function ServicesSection() {
  return (
    <SectionContainer id="talleres">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-3 text-foreground text-center">
          Talleres
        </h2>
        <p className="text-center text-muted-foreground font-light">
          Aprende caligrafía china con enfoque en la meditación y el mindfulness
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceCard
          title="Clases Online"
          description="Vive la experiencia de la caligrafía desde la comodidad de tu hogar, conectando con la práctica ancestral a través de sesiones interactivas en tiempo real."
          icon={BookOpen}
          details={[
            'Sesiones en vivo de 60 minutos',
            'Grupos pequeños (máximo 8 estudiantes)',
            'Acceso a recursos digitales',
            'Certificado de participación',
          ]}
          highlight="$25 USD por sesión"
        />
        <ServiceCard
          title="Clases Presenciales"
          description="Experimenta el arte en su forma más pura, en nuestro estudio tranquilo donde el silencio es parte de la enseñanza."
          icon={Users}
          details={[
            'Sesiones de 90 minutos',
            'Máximo 6 estudiantes',
            'Materiales incluidos',
            'Ambiente meditativo',
          ]}
          highlight="$40 USD por sesión"
        />
      </div>

      <motion.div
        className="mt-12 p-6 md:p-8 bg-accent/10 border border-accent/20 rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-foreground font-light">
          <span className="font-semibold">Ubicación:</span> Estudio privado, zona centro (detalles compartidos tras reserva)
        </p>
      </motion.div>
    </SectionContainer>
  )
}
