import type { Metadata } from 'next'
import { Crimson_Text, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const crimsonText = Crimson_Text({ 
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-serif',
})

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Agua y Vacío - Caligrafía China',
  description: 'Caligrafía china tradicional, meditación y arte del trazo. Clases online y presenciales con José Bladimir Castillo Tuta.',
  generator: 'v0.app',
  keywords: 'caligrafía, caligrafía china, arte, meditación, trazo, agua y vacío',
  creator: 'José Bladimir Castillo Tuta',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Agua y Vacío - Caligrafía China',
    description: 'Caligrafía china tradicional, meditación y arte del trazo',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${crimsonText.variable} ${lora.variable}`}>
      <body className="font-sans antialiased bg-white text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
