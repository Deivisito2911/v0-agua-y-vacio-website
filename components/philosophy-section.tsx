'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionContainer } from './section-container'

export function PhilosophySection() {
  return (
    <SectionContainer id="sobre-mí">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-foreground">
            Sobre Mí
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed font-light text-base md:text-lg">
            <p>
              La caligrafía china es más que el trazo de caracteres; es la meditación hecha visible, la contemplación de lo vacío, y la danza entre el pincel, la tinta y el papel.
            </p>
            <p>
              Bajo el filosofía de "Agua y Vacío", cada obra busca capturar el momento presente, donde la técnica se desvanece y solo queda la esencia del ser.
            </p>
            <p>
              Con más de una década de práctica, guío a mis estudiantes no solo a dominar el trazo, sino a comprender la meditación y el mindfulness que subyace en cada carácter.
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2070&auto=format&fit=crop"
            alt="Tinta y pincel de caligrafía"
            fill
            className="object-cover rounded-lg"
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 800'%3E%3Crect fill='%23e8e8e8' width='600' height='800'/%3E%3C/svg%3E"
          />
        </motion.div>
      </div>
    </SectionContainer>
  )
}
