'use client'

import { motion } from 'framer-motion'
import { LucideIcon, ArrowRight } from 'lucide-react'

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
      className="group relative border border-gray-100 rounded-sm p-10 md:p-12 bg-white transition-all duration-700 cursor-pointer flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Icono con animación de "tinta" */}
      {Icon && (
        <div className="mb-10 inline-block relative">
          <Icon className="w-12 h-12 text-[#1A1A1A] group-hover:text-[#B22222] transition-colors duration-500 relative z-10" strokeWidth={1} />
          <motion.div 
            className="absolute -inset-2 bg-[#B22222]/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"
          />
        </div>
      )}

      {/* Título: Elegancia Serif */}
      <h3 className="text-3xl font-serif font-light mb-6 text-[#1A1A1A] tracking-tight group-hover:text-[#B22222] transition-colors duration-500">
        {title}
      </h3>

      {/* Descripción: Lectura pausada */}
      <p className="text-gray-500 mb-8 leading-[1.8] font-light text-base italic flex-grow">
        {description}
      </p>

      {/* Lista de detalles refinada */}
      {details && details.length > 0 && (
        <ul className="space-y-4 mb-10">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-4 text-sm text-gray-600 font-light tracking-wide">
              <span className="w-1 h-1 mt-2 bg-[#B22222] rounded-full flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Highlight y CTA sutil */}
      <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
        {highlight && (
          <p className="text-[10px] font-bold text-[#B22222] uppercase tracking-[0.3em]">
            {highlight}
          </p>
        )}
        <ArrowRight className="w-5 h-5 text-[#1A1A1A] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700" strokeWidth={1} />
      </div>
    </motion.div>
  )
}