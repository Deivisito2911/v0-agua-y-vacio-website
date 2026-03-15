'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  subtitle?: string
  imageSrc: string // Requerida para mantener la estética Zen
}

export function HeroSection({ title, subtitle, imageSrc }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Layer - Optimización de imagen para Cloudinary */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt="Atmósfera de Caligrafía China"
          fill
          priority
          className="object-cover opacity-70" // Suavizamos la imagen para que el texto respire
          sizes="100vw"
          quality={90}
        />
        {/* Overlay Zen: Degradado suave que simula el papel de arroz */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.4, 
            ease: [0.22, 1, 0.36, 1], // "The Brush Stroke" ease
            delay: 0.2 
          }}
        >
          {/* Título con tracking ajustado para elegancia */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight text-[#1A1A1A] mb-8 leading-none">
            {title}
          </h1>

          {/* Subtítulo con mayor interlineado para legibilidad */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8, delay: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed italic"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Elemento decorativo: El sello (Rojo Carmesí) */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 1.5 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-10 h-10 border-2 border-[#B22222] flex items-center justify-center">
              <span className="text-[#B22222] text-xs font-bold leading-none select-none">
                水空
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator minimalista */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#1A1A1A] to-transparent opacity-20"
      />
    </section>
  )
}