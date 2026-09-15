import { AlertCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

const problems = [
  'Vaso sanitário sem escoar',
  'Pia com água acumulada',
  'Ralo entupido ou com mau cheiro',
  'Água retornando pelo esgoto',
  'Tubulação com escoamento lento',
  'Necessidade de atendimento em condomínio ou empresa',
]

export function Problems() {
  return (
    <section className="bg-brand-gray py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Está acontecendo algum destes problemas?
          </h2>
          <p className="mt-3 text-base text-brand-ink/70 md:text-lg">
            Explique o que está acontecendo e nossa equipe orientará sobre o
            próximo passo.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <li
              key={problem}
              className="flex items-center gap-3 rounded-lg border border-black/8 bg-white p-4"
            >
              <AlertCircle
                className="size-5 shrink-0 text-brand-orange"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-brand-ink">
                {problem}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-navy px-8 py-4 text-base font-bold tracking-wide text-white transition-colors hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-navy/40"
          >
            SOLICITAR ATENDIMENTO
          </a>
        </div>
      </div>
    </section>
  )
}
