import React from 'react'

interface SectionContainerProps {
  children: React.ReactNode
  id?: string // Añadimos ID para el scroll del Header
  className?: string
  centered?: boolean
  fullWidth?: boolean
}

export function SectionContainer({
  children,
  id,
  className = '',
  centered = false,
  fullWidth = false,
}: SectionContainerProps) {
  
  // Clases del contenedor interno (el que limita el ancho del contenido)
  const contentClasses = fullWidth
    ? 'w-full px-6 md:px-12 lg:px-16'
    : 'max-w-7xl mx-auto px-6 md:px-12 lg:px-16' // Subimos a 7xl para dar más aire en pantallas grandes

  // Lógica de centrado
  const layoutClasses = centered ? 'flex flex-col items-center text-center' : ''

  return (
    <section 
      id={id} 
      className={`w-full py-20 md:py-32 overflow-hidden ${className}`}
    >
      <div className={`${contentClasses} ${layoutClasses}`}>
        {children}
      </div>
    </section>
  )
}