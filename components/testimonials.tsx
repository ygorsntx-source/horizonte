import { Star, ExternalLink } from 'lucide-react'
import {
  GOOGLE_RATING,
  GOOGLE_REVIEWS_URL,
  GOOGLE_WRITE_REVIEW_URL,
  REVIEWS,
} from '@/lib/reviews'

const dateFormat = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'America/Sao_Paulo',
})

function formatDate(date: string) {
  return dateFormat.format(new Date(`${date}T12:00:00-03:00`))
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

function Stars({ className = 'size-4' }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-brand-orange" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </span>
  )
}

const rating = GOOGLE_RATING.value.toLocaleString('pt-BR', {
  minimumFractionDigits: 1,
})

export function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              O que dizem nossos clientes
            </h2>

            <p className="mt-3 text-base text-brand-ink/70 md:text-lg">
              Avaliações do nosso perfil no Google, do jeito que os clientes
              escreveram.
            </p>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-4 rounded-xl border border-black/8 bg-white p-4 shadow-sm transition hover:border-brand-orange/40"
          >
            <img
              src="/images/prumo-logo-quadrado.png"
              alt="Logo da Prumo Desentupidora"
              width={56}
              height={56}
              className="size-14 rounded-full"
              loading="lazy"
            />

            <div>
              <p className="font-bold text-brand-ink">Prumo Desentupidora</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-lg font-extrabold text-brand-ink">
                  {rating}
                </span>
                <Stars />
              </div>
              <p className="text-sm text-brand-ink/60">
                {GOOGLE_RATING.count} avaliações no Google
              </p>
            </div>
          </a>
        </div>

        <ul className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {REVIEWS.map(({ name, date, text, url }) => (
            <li
              key={url}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-xl border border-black/8 bg-brand-gray p-5 md:w-auto"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {initials(name)}
                </span>

                <div>
                  <p className="text-sm font-bold text-brand-ink">{name}</p>
                  <p className="text-xs text-brand-ink/60">
                    {formatDate(date)}
                  </p>
                </div>
              </div>

              <div className="mt-4" role="img" aria-label="Nota 5 de 5">
                <Stars />
              </div>

              <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-brand-ink/80">
                {text}
              </p>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 self-start text-xs font-semibold text-brand-ink/60 hover:text-brand-ink"
              >
                Ver no Google
                <ExternalLink className="size-3" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-brand-ink/15 px-5 py-3 text-sm font-bold text-brand-ink hover:bg-brand-gray"
          >
            Ver todas as avaliações no Google
          </a>

          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-bold text-brand-ink/70 hover:text-brand-ink"
          >
            Já foi atendido? Deixe sua avaliação
          </a>
        </div>
      </div>
    </section>
  )
}
