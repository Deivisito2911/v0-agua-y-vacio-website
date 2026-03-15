'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PortfolioItemProps {
  title: string
  imageSrc: string
  imageAlt?: string
  description?: string
  medium?: string
}

export function PortfolioItem({
  title,
  imageSrc,
  imageAlt = 'Portfolio work',
  description,
  medium,
}: PortfolioItemProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-secondary h-80 md:h-96 cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        placeholder="blur"
        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23e8e8e8' width='400' height='500'/%3E%3C/svg%3E"
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-2">
          {title}
        </h3>

        {medium && (
          <p className="text-sm text-gray-300 mb-3 font-light">{medium}</p>
        )}

        {description && (
          <p className="text-sm text-gray-200 leading-relaxed font-light">
            {description}
          </p>
        )}
      </motion.div>
    </motion.div>
  )
}
