import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Horizonte Desentupidora | Desentupimento 24 horas em BH e Região',
  description:
    'Desentupimento 24 horas em Belo Horizonte e Região Metropolitana. Atendimento para vasos, pias, ralos, redes de esgoto, fossas e hidrojateamento. Ligue agora.',
  generator: 'v0.app',
  keywords: [
    'desentupidora em Belo Horizonte',
    'desentupimento 24 horas em BH',
    'desentupidora em Contagem',
    'desentupidora em Betim',
    'desentupimento de vaso sanitário',
    'desentupimento de pia',
    'desentupimento de ralo',
    'desentupimento de esgoto',
    'hidrojateamento em BH',
  ],
}

export const viewport: Viewport = {
  themeColor: '#082b4c',
}
  icons: {
    icon: '/images/favicon.webp',
  },

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`light ${inter.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
