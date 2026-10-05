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
  icons: {
    icon: '/images/favicon.webp',
  },
}

export const viewport: Viewport = {
  themeColor: '#082b4c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`light ${inter.variable}`}>
  <head>
    {/* Google Tag Manager */}
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TK86FQ9K');
        `,
      }}
    />
    {/* End Google Tag Manager */}
  </head>
      <body className="antialiased">
        <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-TK86FQ9K"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  />
</noscript>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
