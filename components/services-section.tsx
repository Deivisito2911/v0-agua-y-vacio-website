'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users } from 'lucide-react'
import { SectionContainer } from './section-container'
import { ServiceCard } from './service-card'

const tallers = [
  {
    title: "Clases Online",
    description: "Vive la experiencia de la caligrafía desde la comodidad de tu hogar, conectando con la práctica ancestral a través de sesiones interactivas en tiempo real.",
    icon: BookOpen,
    details: [
      'Sesiones en vivo de 60 minutos',
      'Grupos pequeños (máximo 8 estudiantes)',
      'Acceso a recursos digitales',
      'Certificado de participación',
    ],
    highlight: "$25 USD por sesión"
  },
  {
    title: "Clases Presenciales",
    description: "Experimenta el arte en su forma más pura, en nuestro estudio tranquilo donde el silencio es parte de la enseñanza.",
    icon: Users,
    details: [
      'Sesiones de 90 minutos',
      'Máximo 6 estudiantes',
      'Materiales incluidos (pincel, tinta, papel)',
      'Ubicación: Estudio privado, zona centro',
    ],
    highlight: "$40 USD por sesión"
  }
]

export function ServicesSection() {
  return (
    <SectionContainer id="talleres" className="bg-[#FBFBFB] py-24 md:py-32">
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[#B22222] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
          Formación
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1A1A1A] mb-6">
          Talleres y Clases
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500 font-light italic leading-relaxed">
          "No enseñamos caligrafía como una técnica, sino como un camino hacia la presencia. Aprende a dominar el trazo mientras cultivas la quietud interior."
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
        {tallers.map((taller, index) => (
          <ServiceCard
            key={index}
            title={taller.title}
            description={taller.description}
            icon={taller.icon}
            details={taller.details}
            highlight={taller.highlight}
          />
        ))}
      </div>

      {/* Detalle final decorativo */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-20 flex flex-col items-center justify-center text-center space-y-4"
      >
        <div className="h-px w-16 bg-gray-200" />
        <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">
          Cupos limitados para preservar la atención personalizada
        </p>
      </motion.div>
    </SectionContainer>
  )
}