import React from 'react'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  centered?: boolean
  fullWidth?: boolean
}

export function SectionContainer({
  children,
  className = '',
  centered = false,
  fullWidth = false,
}: SectionContainerProps) {
  const baseClasses = fullWidth
    ? 'w-full px-6 md:px-12 lg:px-16'
    : 'max-w-6xl mx-auto px-6 md:px-12 lg:px-16'

  const layoutClasses = centered ? 'flex flex-col items-center justify-center' : ''

  return (
    <section className={`py-16 md:py-24 lg:py-32 ${baseClasses} ${layoutClasses} ${className}`}>
      {children}
    </section>
  )
}
