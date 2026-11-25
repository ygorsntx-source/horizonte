
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import { CNPJ } from '@/lib/site'
import { MAIN_CITIES, OTHER_CITIES } from '@/lib/areas'
import { GOOGLE_MAPS_URL } from '@/lib/reviews'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://prumodesentupidora.com.br'),

  title: {
    default:
      'Prumo Desentupidora | Desentupimento 24 horas em BH e Região',
    template: '%s | Prumo Desentupidora',
  },

  description:
    'Desentupidora 24 horas em BH e região. Vaso, pia, ralo, esgoto, caixa de gordura e hidrojateamento. Visita sem custo e preço combinado antes de começar.',

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Prumo Desentupidora',
    title:
      'Prumo Desentupidora | Desentupimento 24 horas em BH e Região',
    description:
      'Desentupidora 24 horas em Belo Horizonte e Região Metropolitana. Atendimento para residências, empresas e condomínios.',
    images: [
      {
        url: '/images/prumo-compartilhamento.jpg',
        width: 1200,
        height: 630,
        alt: 'Prumo Desentupidora — desentupimento 24 horas em BH e Região Metropolitana',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  themeColor: '#082b4c',
}

// Dados estruturados da Prumo Desentupidora (Schema.org).
// "Plumber" é o tipo de empresa local do Schema.org que inclui desentupidoras.
// Quando os perfis das redes sociais estiverem prontos, acrescente em sameAs.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  '@id': 'https://prumodesentupidora.com.br/#organization',
  name: 'Prumo Desentupidora',
  url: 'https://prumodesentupidora.com.br/',
  logo: 'https://prumodesentupidora.com.br/images/prumo-logo-quadrado.png',
  image: 'https://prumodesentupidora.com.br/images/prumo-compartilhamento.jpg',
  telephone: '+5531990174346',
  taxID: CNPJ,
  description:
    'Desentupidora 24 horas em Belo Horizonte e Região Metropolitana. Desentupimento de vaso sanitário, pia, ralo e rede de esgoto, limpeza de caixa de gordura e hidrojateamento.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: [...MAIN_CITIES, ...OTHER_CITIES].map((city) => ({
    '@type': 'City',
    name: `${city}, MG`,
  })),
  hasMap: GOOGLE_MAPS_URL,
  sameAs: [GOOGLE_MAPS_URL],
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
        {/* Schema.org - Identificação da empresa */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              '\\u003c',
            ),
          }}
        />

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
      </body>
    </html>
  )
}
