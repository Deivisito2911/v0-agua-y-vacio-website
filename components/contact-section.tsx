'use client'

import { motion } from 'framer-motion'
import { Mail, Instagram } from 'lucide-react'
import { SectionContainer } from './section-container'
import { ContactForm } from './contact-form'

export function ContactSection() {
  return (
    <SectionContainer id="contacto" className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[#B22222] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#1A1A1A] mb-6">
            Iniciar una conversación
          </h2>
          <p className="text-gray-500 font-light italic leading-relaxed">
            "Cada trazo comienza con una intención. Escríbeme para consultar sobre clases, obras o colaboraciones."
          </p>
        </motion.div>

        {/* Formulario Refactorizado */}
        <div className="mb-20">
          <ContactForm />
        </div>

        {/* Enlaces de contacto minimalistas */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 pt-12 border-t border-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <a
            href="mailto:aguayvacio.caligrafia@gmail.com"
            className="group flex flex-col items-center gap-3 transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-gray-300 group-hover:text-[#B22222] transition-colors" strokeWidth={1} />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 group-hover:text-[#1A1A1A] transition-colors">
              aguayvacio.caligrafia@gmail.com
            </span>
          </a>

          <a
            href="https://instagram.com/aguayvacio.caligrafia"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-gray-300 group-hover:text-[#B22222] transition-colors" strokeWidth={1} />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 group-hover:text-[#1A1A1A] transition-colors">
              @aguayvacio.caligrafia
            </span>
          </a>
        </motion.div>
      </div>
    </SectionContainer>
  )
}