'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: LucideIcon
  details?: string[]
  highlight?: string
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  details,
  highlight,
}: ServiceCardProps) {
  return (
    <motion.div
      className="group border border-border rounded-lg p-8 md:p-10 bg-white hover:border-accent transition-all duration-300 cursor-pointer"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon */}
      {Icon && (
        <motion.div
          className="mb-6 inline-block"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-10 h-10 text-accent" />
        </motion.div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-serif font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed font-light text-base">
        {description}
      </p>

      {/* Details list */}
      {details && details.length > 0 && (
        <ul className="space-y-2 mb-4">
          {details.map((detail, index) => (
            <li key={index} className="flex gap-3 text-sm text-foreground">
              <span className="inline-block w-1 h-1 mt-2 rounded-full bg-accent flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Highlight */}
      {highlight && (
        <div className="pt-4 border-t border-border">
          <p className="text-sm font-semibold text-accent">{highlight}</p>
        </div>
      )}
    </motion.div>
  )
}
