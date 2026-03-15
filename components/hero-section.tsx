'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  subtitle?: string
  imageSrc?: string
  videoSrc?: string
  imageAlt?: string
}

export function HeroSection({
  title,
  subtitle,
  imageSrc,
  videoSrc,
  imageAlt = 'Agua y Vacío Hero',
}: HeroSectionProps) {
  return (
    // 1. Cambiamos min-h-[92vh] por min-h-[100svh] (evita problemas con la barra de Safari/Chrome en móviles)
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white pt-20">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Renderizado de Video si existe */}
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            // object-cover garantiza que el video no se deforme en vertical
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : null}

        {/* Imagen de fondo / Fallback */}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className={`object-cover ${videoSrc ? 'opacity-30' : 'opacity-70'}`}
            sizes="100vw"
          />
        )}
        
        {/* Overlay Zen adaptado para móviles (un poco más oscuro arriba para leer bajo el header) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 md:from-white/20 via-transparent to-white" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.4, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2 
          }}
        >
          {/* 2. TIPOGRAFÍA RESPONSIVA: text-4xl en móviles, escalando hasta 9xl en escritorio */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight text-[#1A1A1A] mb-6 md:mb-8 leading-[1.1] md:leading-none">
            {title}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8, delay: 0.8 }}
              // 3. Texto del subtítulo ajustado para pantallas pequeñas (text-base en móviles)
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed italic px-4"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Sello Rojo Carmesí */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, delay: 1.5 }}
            className="mt-8 md:mt-12 flex justify-center"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#B22222] flex items-center justify-center">
              <span className="text-[#B22222] text-[10px] font-bold leading-none select-none">
                水空
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Indicador de scroll sutil */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-px h-8 md:h-12 bg-gradient-to-b from-[#1A1A1A] to-transparent opacity-20"
      />
    </section>
  )
}