import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Phone,
  MessageCircle,
  Clock3,
  Handshake,
  ClipboardCheck,
  BadgeCheck,
  MapPin,
  Star,
  ArrowRight,
} from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/site'
import { SERVICES } from '@/lib/services'
import { CITIES, cityFaqs, type CityContent } from '@/lib/cities'
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL } from '@/lib/reviews'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { TrustStrip } from '@/components/trust-strip'
import { Testimonials } from '@/components/testimonials'
import { HowItWorks } from '@/components/how-it-works'
import { Faq } from '@/components/faq'
import { ContactSection } from '@/components/contact-section'

const SITE = 'https://prumodesentupidora.com.br'

const rating = GOOGLE_RATING.value.toLocaleString('pt-BR', {
  minimumFractionDigits: 1,
})

const highlights = [
  { icon: Clock3, text: 'Equipe no local em até 30 minutos' },
  { icon: Handshake, text: 'Visita técnica gratuita' },
  { icon: ClipboardCheck, text: 'Orçamento aprovado antes do serviço' },
  { icon: BadgeCheck, text: 'Garantia e nota fiscal' },
]

const serviceShort: Record<string, string> = {
  'desentupimento-de-vaso-sanitario': 'Vaso entupido, com a água subindo ou demorando para descer.',
  'desentupimento-de-pia': 'Pia da cozinha, do banheiro ou do tanque com água parada.',
  'desentupimento-de-ralo': 'Ralos de banheiro, área e quintal entupidos ou com cheiro de esgoto.',
  'desentupimento-de-rede-de-esgoto': 'Esgoto voltando ou vários pontos do imóvel entupidos ao mesmo tempo.',
  'limpeza-de-caixa-de-gordura': 'Caixa de gordura cheia, transbordando ou com mau cheiro.',
  hidrojateamento: 'Limpeza de canos com jato de alta pressão, para gordura e lodo.',
}

export function cityMetadata(city: CityContent): Metadata {
  const path = `/desentupidora/${city.slug}`
  return {
    title: city.title,
    description: city.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${city.title} | Prumo Desentupidora`,
      description: city.description,
      url: path,
      type: 'website',
      images: [{ url: city.image, alt: city.imageAlt }],
    },
  }
}

function jsonLd(city: CityContent) {
  const url = `${SITE}/desentupidora/${city.slug}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `Desentupidora em ${city.name}`,
      serviceType: 'Desentupimento',
      url,
      description: city.lead,
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: `${city.name}, MG` },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Serviços de desentupimento em ${city.name}`,
        itemListElement: SERVICES.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${s.name} em ${city.name}`,
            url: `${SITE}/servicos/${s.slug}`,
          },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Áreas atendidas',
          item: `${SITE}/#areas`,
        },
        { '@type': 'ListItem', position: 3, name: city.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: cityFaqs(city).map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ]
}

export function CityPage({ city }: { city: CityContent }) {
  const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(
    `Olá! Preciso de uma desentupidora em ${city.name}. Meu bairro é: `,
  )}`
  const nearby = city.nearby
    .map((slug) => CITIES.find((c) => c.slug === slug))
    .filter((c): c is CityContent => Boolean(c))

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd(city)).replace(/</g, '\\u003c'),
          }}
        />

        {/* Topo */}
        <section className="relative overflow-hidden bg-brand-navy py-12 text-white md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-2">
            <div>
              <nav aria-label="Você está em" className="mb-6 text-sm text-white/60">
                <Link href="/" className="hover:text-white">
                  Início
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <Link href="/#areas" className="hover:text-white">
                  Áreas atendidas
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <span className="text-brand-orange">{city.name}</span>
              </nav>

              <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
                Desentupidora em {city.name}, 24 horas
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">
                {city.lead}
              </p>

              <a
                href={PHONE_TEL}
                className="mt-6 flex items-center gap-2 text-2xl font-extrabold md:text-3xl"
              >
                <Phone className="size-6 text-brand-orange" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-4 text-base font-bold text-white transition-colors hover:bg-brand-orange-dark"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  Ligar agora
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-white/25 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Chamar no WhatsApp
                </a>
              </div>

              <ul className="mt-7 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
                {highlights.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2">
                    <Icon className="size-4 shrink-0 text-brand-orange" aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>

              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-lg bg-white/10 px-4 py-2.5 text-sm text-white/85 ring-1 ring-white/15 transition-colors hover:bg-white/15"
              >
                <span className="flex gap-0.5 text-brand-orange" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </span>
                <span>
                  <strong className="text-white">{rating}</strong> no Google ·{' '}
                  {GOOGLE_RATING.count} avaliações de clientes
                </span>
              </a>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={city.image}
                alt={city.imageAlt}
                fill
                preload
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Sobre a cidade */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Atendimento local
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Desentupimento em {city.name}
              </h2>
              {city.about.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 30)}
                  className="mt-5 text-base leading-relaxed text-brand-ink/75 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="self-start rounded-xl border border-black/8 bg-brand-gray p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-brand-ink">
                <MapPin className="size-5 text-brand-orange" aria-hidden="true" />
                {city.regionsTitle}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {city.regions.map((region) => (
                  <li
                    key={region}
                    className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-brand-ink ring-1 ring-black/8"
                  >
                    {region}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-orange-dark"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Consultar meu bairro no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Serviços na cidade */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Serviços de desentupimento em {city.name}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
                Veja como trabalhamos em cada caso.
              </p>
            </div>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/8 bg-white transition-colors hover:border-brand-orange/50"
                  >
                    <span className="relative block aspect-[16/9] w-full overflow-hidden bg-brand-navy">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 355px"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                        quality={70}
                      />
                    </span>
                    <span className="flex flex-1 flex-col p-5">
                      <span className="text-lg font-bold leading-snug text-brand-ink">
                        {service.name} em {city.name}
                      </span>
                      <span className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink/70">
                        {serviceShort[service.slug]}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-navy group-hover:text-brand-orange-dark">
                        Ver detalhes
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Situações comuns */}
        <section className="bg-brand-navy py-14 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">
              Quem atendemos em {city.name}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {city.situations.map(({ title, text }) => (
                <div key={title} className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <HowItWorks />

        <Faq items={cityFaqs(city)} title={`Perguntas frequentes sobre desentupidora em ${city.name}`} />

        {/* Outras cidades */}
        <section className="bg-white pb-14 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-brand-ink md:text-3xl">
              Também atendemos
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {nearby.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/desentupidora/${other.slug}`}
                    className="flex h-full items-center justify-between gap-2 rounded-lg border border-black/8 bg-brand-gray px-4 py-3.5 text-sm font-bold text-brand-ink transition-colors hover:border-brand-orange/50"
                  >
                    Desentupidora em {other.name}
                    <ArrowRight className="size-4 shrink-0 text-brand-orange" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
      <MobileCtaBar />
      <WhatsAppFloat />
    </>
  )
}
