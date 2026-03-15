'use client'

import { motion } from 'framer-motion'
import { Mail, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const contactItems = [
    {
      icon: Mail,
      label: 'aguayvacio.caligrafia@gmail.com',
      href: 'mailto:aguayvacio.caligrafia@gmail.com',
    },
    {
      icon: Instagram,
      label: '@aguayvacio.caligrafia',
      href: 'https://instagram.com/aguayvacio.caligrafia',
    },
  ]

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Contact Links */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 hover:text-accent transition-colors duration-200"
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base font-light">{item.label}</span>
              </a>
            )
          })}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-8" />

        {/* Copyright */}
        <motion.div
          className="text-center font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="mb-2">
            © {currentYear} Agua y Vacío Caligrafía. Todos los derechos reservados.
          </p>
          <p className="text-white/70 text-xs md:text-sm">
            Caligrafía China • Meditación • Arte del Trazo Presente
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
