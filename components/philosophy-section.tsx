'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionContainer } from './section-container'

export function PhilosophySection() {
  return (
    <SectionContainer id="sobre-mi">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center py-12 md:py-24">
        
        {/* Lado de la Imagen */}
        <motion.div
          className="lg:col-span-5 relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 border border-gray-100 rounded-sm -z-10 group-hover:inset-0 transition-all duration-700" />
          
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="José Bladimir - Maestro de Caligrafía"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          
          <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#B22222]/90 flex items-center justify-center shadow-lg">
            <span className="text-white text-[10px] font-bold leading-none uppercase tracking-tighter select-none">
              印
            </span>
          </div>
        </motion.div>

        {/* Lado del Texto */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-[#B22222] text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Filosofía y Camino
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#1A1A1A] mb-8 leading-tight">
            Agua y Vacío: <br />
            <span className="italic">El trazo del ser</span>
          </h2>

          <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed max-w-xl">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#1A1A1A]">
              La caligrafía china es más que el trazo de caracteres; es la meditación hecha visible, la contemplación de lo vacío, y la danza entre el pincel, la tinta y el papel.
            </p>
            <p>
              Bajo la filosofía de <span className="text-[#1A1A1A] font-medium italic">"Agua y Vacío"</span>, cada obra busca capturar el momento presente, donde la técnica se desvanece y solo queda la esencia del ser.
            </p>
            <p className="border-l-2 border-[#B22222]/20 pl-6 py-2 italic text-gray-500">
              "Con más de una década de práctica, guío a mis estudiantes no solo a dominar el trazo, sino a comprender la meditación y el mindfulness que subyace en cada carácter".
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-12 bg-gray-200" />
            <span className="font-serif italic text-xl text-[#1A1A1A]">José Bladimir Castillo</span>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}