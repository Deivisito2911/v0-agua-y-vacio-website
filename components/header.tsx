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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    
    // Bloquear scroll cuando el menú móvil está abierto
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 border-b border-gray-100 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="#inicio" 
          className="flex items-center gap-3 group relative z-[110]"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-9 h-9 md:w-10 md:h-10 overflow-hidden rounded-full border border-gray-100">
            <Image
              src="/logo.png"
              alt="Agua y Vacío"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base md:text-lg leading-none text-[#1A1A1A] tracking-tight">
              Agua y Vacío
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-1">
              José Bladimir
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[11px] font-medium tracking-[0.2em] text-[#1A1A1A] hover:text-[#B22222] transition-colors uppercase"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden relative z-[110] p-2 text-[#1A1A1A]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-serif text-[#1A1A1A] active:text-[#B22222]"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}