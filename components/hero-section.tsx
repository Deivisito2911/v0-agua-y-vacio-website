'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  subtitle?: string
  imageSrc?: string
  imageAlt?: string
}

export function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt = 'Hero image',
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background image with overlay */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23f5f5f5' width='1200' height='800'/%3E%3C/svg%3E"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold mb-6 md:mb-8 text-foreground leading-tight"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.section>
  )
}
