
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://horizonte24h.com.br'),

  title: {
    default:
      'Horizonte Desentupidora | Desentupimento 24 horas em BH e Região',
    template: '%s | Horizonte Desentupidora',
  },

  description:
    'Desentupidora 24 horas em Belo Horizonte e Região Metropolitana. Desentupimento de vasos sanitários, pias, ralos, redes de esgoto, caixas de gordura e hidrojateamento. Orçamento antes da execução.',

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Horizonte Desentupidora',
    title:
      'Horizonte Desentupidora | Desentupimento 24 horas em BH e Região',
    description:
      'Desentupidora 24 horas em Belo Horizonte e Região Metropolitana. Atendimento para residências, empresas e condomínios.',
  },

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
        {/* Google Tag Manager - NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TK86FQ9K"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Pixel da OpenAI */}
        <Script
          id="openai-pixel"
          strategy="afterInteractive"
        >
          {`!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=true;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"13nKPsYeHHDcrWFTWRBa2E",debug:true});`}
        </Script>

        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
