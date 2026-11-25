import Image from 'next/image'
import { Star } from 'lucide-react'
import { CallButton, WhatsAppButton } from '@/components/cta-buttons'
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL } from '@/lib/reviews'

const promises = [
  'Visita sem custo',
  'Preço antes de começar',
  'Nota fiscal e garantia',
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
          alt="Equipe da Prumo fazendo um desentupimento"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-50"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/30"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-brand-orange md:text-base">
            Desentupidora 24 horas em BH e região
          </p>

          <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Entupiu? Chama a Prumo.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/85 md:text-xl">
            A gente vai até você, de dia ou de madrugada, olha o que está
            acontecendo e passa o preço antes de começar. Sem susto na hora de
            pagar.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton />
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
            {promises.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  className="size-1.5 rounded-full bg-brand-orange"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <span className="flex gap-0.5 text-brand-orange" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span>
              <strong className="text-white">{rating}</strong> no Google ·{' '}
              {GOOGLE_RATING.count} avaliações
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
