'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  // Asegúrate de importar DialogTitle
  DialogTitle, 
  DialogTrigger,
} from "@/components/ui/dialog"

// Si tu proyecto no tiene un componente VisuallyHidden, 
// usaremos la clase "sr-only" de Tailwind que es el estándar.

interface PortfolioItemProps {
  title: string
  medium: string
  description: string
  imageSrc: string
  instagramUrl: string
  aspect: string
  index: number
}

export function PortfolioItem({ 
  title, 
  medium, 
  description, 
  imageSrc, 
  instagramUrl, 
  aspect, 
  index 
}: PortfolioItemProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className={`relative group cursor-pointer overflow-hidden rounded-sm bg-gray-50 ${aspect}`}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-[2px]">
            <span className="text-[#1A1A1A] text-[10px] tracking-[0.4em] font-light border-b border-[#1A1A1A]/30 pb-1 uppercase">
              Contemplar
            </span>
          </div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl bg-white border-none p-0 overflow-y-auto max-h-[95vh] sm:rounded-none shadow-none focus:outline-none">
        
        {/* SOLUCIÓN AL ERROR: Título invisible para accesibilidad */}
        <DialogTitle className="sr-only">
          Detalle de la obra: {title}
        </DialogTitle>

        <div className="flex flex-col w-full">
          <div className="relative w-full flex justify-center bg-[#FBFBFB] py-4">
            <img
              src={imageSrc}
              alt={title}
              className="max-w-full h-auto max-h-[70vh] object-contain select-none"
            />
          </div>

          <div className="px-8 py-16 md:px-20 md:py-24 flex flex-col items-center">
            
            {/* Seguimos usando nuestro div centrado para el diseño visual */}
            <div className="flex flex-col items-center text-center w-full mb-12">
              <span className="text-[#B22222] text-[10px] font-bold tracking-[0.6em] uppercase mb-6 block">
                {medium}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1A1A1A] tracking-tight leading-tight">
                {title}
              </h2>
            </div>

            <div className="max-w-md text-center">
              <p className="text-gray-500 font-light leading-[2.2] mb-16 text-sm md:text-base italic tracking-wide">
                "{description}"
              </p>
            </div>

            <div className="flex justify-center w-full pt-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-5 transition-all duration-300"
              >
                <Instagram size={18} strokeWidth={1} className="text-gray-300 group-hover:text-[#B22222] transition-colors" />
                <span className="text-[9px] font-light tracking-[0.6em] uppercase text-gray-400 group-hover:text-[#1A1A1A] transition-colors border-b border-transparent group-hover:border-gray-200 pb-1 translate-x-[0.3em]">
                  Ver en Instagram
                </span>
              </a>
            </div>

            <div className="mt-24 opacity-10 flex justify-center">
              <div className="w-7 h-7 border border-[#1A1A1A] flex items-center justify-center text-[7px] font-bold select-none">
                水空
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}