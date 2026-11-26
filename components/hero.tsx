import Image from 'next/image'
import {
  Phone,
  Star,
  Clock3,
  Handshake,
  BadgeCheck,
  ClipboardCheck,
} from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'
import { CallButton, WhatsAppButton } from '@/components/cta-buttons'
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL } from '@/lib/reviews'

const highlights = [
  { icon: Clock3, text: 'Equipe no local em até 30 minutos' },
  { icon: Handshake, text: 'Visita técnica gratuita' },
  { icon: ClipboardCheck, text: 'Orçamento aprovado antes do serviço' },
  { icon: BadgeCheck, text: 'Garantia e nota fiscal' },
]

const rating = GOOGLE_RATING.value.toLocaleString('pt-BR', {
  minimumFractionDigits: 1,
})

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-desentupimento.webp"
          alt="Equipe da Prumo Desentupidora realizando desentupimento com máquina"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-40"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange ring-1 ring-brand-orange/30">
            Entupiu? Chame a Prumo
          </span>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Desentupidora 24 horas em BH e Região Metropolitana
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/85 md:text-xl">
            Desentupimento de vaso sanitário, pia, ralo, rede de esgoto e caixa
            de gordura, além de hidrojateamento. Nossa equipe vai até você,
            avalia o problema sem custo e apresenta o orçamento antes de
            começar.
          </p>

          <a
            href={PHONE_TEL}
            className="mt-6 flex items-center gap-2 text-2xl font-extrabold text-white md:text-3xl"
          >
            <Phone className="size-6 text-brand-orange" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton />
          </div>

          <ul className="mt-7 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon
                  className="size-4 shrink-0 text-brand-orange"
                  aria-hidden="true"
                />
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
      </div>
    </section>
  )
}
