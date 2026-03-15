'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronUp } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white border-t border-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* Simbolismo del Ciclo: Botón volver arriba */}
        <motion.button
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-[#B22222] transition-colors duration-500">
            <ChevronUp size={18} strokeWidth={1} className="text-gray-300 group-hover:text-[#B22222] transition-colors" />
          </div>
          <span className="text-[9px] tracking-[0.5em] uppercase text-gray-400 group-hover:text-[#1A1A1A] transition-colors">
            Volver al inicio
          </span>
        </motion.button>

        {/* Identidad Final */}
        <div className="text-center space-y-6">
          <h3 className="font-serif text-2xl text-[#1A1A1A] tracking-tight">
            Agua y Vacío
          </h3>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] tracking-[0.3em] uppercase text-gray-400">
            <span>Caligrafía China</span>
            <span className="hidden md:block text-gray-200">•</span>
            <span>Meditación</span>
            <span className="hidden md:block text-gray-200">•</span>
            <span>Arte del Trazo Presente</span>
          </div>
        </div>

        {/* Divider Minimalista */}
        <div className="w-12 h-px bg-gray-100 my-12" />

        {/* Copyright y Créditos */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] tracking-widest text-gray-400 uppercase">
          <p>
            © {currentYear} José Bladimir Castillo Tuta
          </p>
          <div className="hidden md:block w-1 h-1 bg-gray-200 rounded-full" />
          <p className="italic">
            Diseñado con presencia y calma
          </p>
        </div>

        {/* El Sello Final */}
        <div className="mt-16 opacity-5 select-none">
          <div className="w-8 h-8 border border-[#1A1A1A] flex items-center justify-center text-[8px] font-bold">
            水空
          </div>
        </div>
      </div>
    </footer>
  )
}