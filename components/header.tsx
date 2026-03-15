'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const menuItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Obras', href: '#obras' },
  { name: 'Talleres', href: '#talleres' },
  { name: 'Contacto', href: '#contacto' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Controlar el cambio de estado al hacer scroll para efectos de transparencia
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-gray-100' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo y Marca Personal */}
        <Link 
          href="#inicio" 
          className="flex items-center gap-4 group"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-200">
            <Image
              src="/logo.png"
              alt="Agua y Vacío Logo"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg leading-none text-[#1A1A1A] tracking-tight">
              Agua y Vacío
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-1">
              José Bladimir
            </span>
          </div>
        </Link>

        {/* Desktop Menu: Espaciado amplio y tipografía ligera */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[11px] font-medium tracking-[0.2em] text-[#1A1A1A] hover:text-[#B22222] transition-colors duration-300 uppercase"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Botón Menú Móvil */}
        <button 
          className="md:hidden p-2 text-[#1A1A1A] hover:bg-gray-50 rounded-full transition-colors"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu size={24} strokeWidth={1.2} />
        </button>
      </div>

      {/* Menú Móvil Full-Screen (Pantalla Completa) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center p-8"
          >
            <button 
              className="absolute top-8 right-8 p-3 text-gray-400 hover:text-[#1A1A1A]"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} strokeWidth={1} />
            </button>

            <div className="flex flex-col gap-10 text-center">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-serif text-[#1A1A1A] hover:text-[#B22222] transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Detalle decorativo al final del menú móvil */}
            <div className="absolute bottom-12 text-gray-300 font-serif italic">
              — El arte del trazo presente —
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}