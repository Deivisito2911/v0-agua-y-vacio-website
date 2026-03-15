'use client'

import { motion } from 'framer-motion'
import { Mail, Instagram } from 'lucide-react'
import { SectionContainer } from './section-container'
import { ContactForm } from './contact-form'

export function ContactSection() {
  return (
    <SectionContainer id="contacto" className="bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-3 text-foreground text-center">
            Contacto
          </h2>
          <p className="text-center text-muted-foreground font-light">
            Conecta conmigo para consultar, reservar clases o colaborar
          </p>
        </motion.div>

        <ContactForm />

        {/* Contact Info */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row gap-8 md:gap-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="mailto:aguayvacio.caligrafia@gmail.com"
            className="flex items-center gap-3 hover:text-accent transition-colors duration-200"
          >
            <Mail className="w-6 h-6 text-accent flex-shrink-0" />
            <span className="font-light">aguayvacio.caligrafia@gmail.com</span>
          </a>

          <a
            href="https://instagram.com/aguayvacio.caligrafia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-accent transition-colors duration-200"
          >
            <Instagram className="w-6 h-6 text-accent flex-shrink-0" />
            <span className="font-light">@aguayvacio.caligrafia</span>
          </a>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
