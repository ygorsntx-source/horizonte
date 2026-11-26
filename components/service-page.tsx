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
  AlertCircle,
  CheckCircle2,
  Star,
  ArrowRight,
  Building2,
} from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/site'
import { SERVICES, type ServiceContent } from '@/lib/services'
import { MAIN_CITIES, OTHER_CITIES } from '@/lib/areas'
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL } from '@/lib/reviews'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { TrustStrip } from '@/components/trust-strip'
import { Testimonials } from '@/components/testimonials'
import { HowItWorks } from '@/components/how-it-works'
import { ServiceArea } from '@/components/service-area'
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

export function serviceMetadata(service: ServiceContent): Metadata {
  const path = `/servicos/${service.slug}`
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${service.title} | Prumo Desentupidora`,
      description: service.description,
      url: path,
      type: 'website',
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  }
}

function jsonLd(service: ServiceContent) {
  const url = `${SITE}/servicos/${service.slug}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `${service.name} em Belo Horizonte`,
      serviceType: service.name,
      url,
      description: service.lead,
      image: `${SITE}${service.image}`,
      provider: { '@id': `${SITE}/#organization` },
      areaServed: [...MAIN_CITIES, ...OTHER_CITIES].map((city) => ({
        '@type': 'City',
        name: `${city}, MG`,
      })),
      availableChannel: {
        '@type': 'ServiceChannel',
        servicePhone: '+5531990174346',
        serviceUrl: url,
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
          name: 'Serviços',
          item: `${SITE}/#servicos`,
        },
        { '@type': 'ListItem', position: 3, name: service.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ]
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string
  title: string
  text?: string
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
        {title}
      </h2>
      {text && (
        <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
          {text}
        </p>
      )}
    </div>
  )
}

export function ServicePage({ service }: { service: ServiceContent }) {
  const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(service.whatsappMessage)}`
  const others = SERVICES.filter((s) => s.slug !== service.slug)
  const nameLower = service.name.charAt(0).toLowerCase() + service.name.slice(1)

  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd(service)).replace(/</g, '\\u003c'),
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
                <Link href="/#servicos" className="hover:text-white">
                  Serviços
                </Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <span className="text-brand-orange">{service.name}</span>
              </nav>

              <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
                {service.h1}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">
                {service.lead}
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
                src={service.image}
                alt={service.imageAlt}
                fill
                preload
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Sobre o serviço */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            <div>
              <SectionTitle eyebrow="O serviço" title={`${service.name} com a Prumo`} />
              {service.about.map((paragraph) => (
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
                <Building2 className="size-5 text-brand-orange" aria-hidden="true" />
                Onde atendemos
              </h3>
              <ul className="mt-4 space-y-3">
                {service.where.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-base text-brand-ink/80">
                    <CheckCircle2 className="size-5 shrink-0 text-brand-orange" aria-hidden="true" />
                    {item}
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
                Pedir orçamento no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Sinais */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle title={service.signsTitle} />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.signs.map((sign) => (
                <li
                  key={sign}
                  className="flex items-start gap-3 rounded-lg border border-black/8 bg-white p-4"
                >
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-brand-orange" aria-hidden="true" />
                  <span className="text-sm font-medium leading-relaxed text-brand-ink">
                    {sign}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Causas */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle title={service.causesTitle} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.causes.map(({ title, text }) => (
                <div key={title} className="rounded-xl border border-black/8 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-bold text-brand-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como fazemos */}
        <section className="bg-brand-navy py-14 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Passo a passo
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                {service.methodTitle}
              </h2>
            </div>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.method.map(({ title, text }, index) => (
                <li key={title} className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand-orange text-sm font-bold">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Testimonials />

        {/* Dicas */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionTitle eyebrow="Prevenção" title={service.tipsTitle} />
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {service.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 rounded-lg bg-white p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-orange" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-brand-ink/80">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <HowItWorks />

        <ServiceArea
          title={`${service.name} em Belo Horizonte e Região Metropolitana`}
          text={`A Prumo faz ${nameLower} 24 horas em Belo Horizonte e nas cidades vizinhas, para residências, comércios, empresas e condomínios.`}
        />

        <Faq items={service.faqs} title={`Perguntas frequentes sobre ${nameLower}`} />

        {/* Outros serviços */}
        <section className="bg-white pb-14 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-brand-ink md:text-3xl">
              Outros serviços da Prumo
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/servicos/${other.slug}`}
                    className="flex h-full items-center justify-between gap-2 rounded-lg border border-black/8 bg-brand-gray px-4 py-3.5 text-sm font-bold text-brand-ink transition-colors hover:border-brand-orange/50"
                  >
                    {other.name}
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
