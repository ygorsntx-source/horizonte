
import { AlertCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

const problems = [
  'Vaso sanitário entupido, com água que não desce ou transbordando',
  'Pia da cozinha ou banheiro com água acumulada',
  'Ralo entupido, com mau cheiro ou dificuldade de escoamento',
  'Caixa de gordura cheia, entupida ou transbordando',
  'Água retornando pelo vaso sanitário, ralos ou rede de esgoto',
  'Tubulação com escoamento lento ou entupimentos frequentes',
  'Mau cheiro vindo de tubulações, ralos ou caixas de esgoto',
  'Obstrução na rede de esgoto de residências e áreas externas',
  'Problemas de entupimento em empresas e condomínios',
]

export function Problems() {
  return (
    <section className="bg-brand-gray py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Está enfrentando algum problema de entupimento?
          </h2>

          <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
            A Horizonte Desentupidora realiza serviços de desentupimento em
            Belo Horizonte e Região Metropolitana. Atendemos diferentes
            situações em vasos sanitários, pias, ralos, caixas de gordura,
            tubulações e redes de esgoto.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <li
              key={problem}
              className="flex items-start gap-3 rounded-lg border border-black/8 bg-white p-4 transition-colors hover:border-brand-orange/40"
            >
              <AlertCircle
                className="mt-0.5 size-5 shrink-0 text-brand-orange"
                aria-hidden="true"
              />

              <span className="text-sm font-medium leading-relaxed text-brand-ink">
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
            aria-label="Solicitar atendimento de desentupimento pelo WhatsApp"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-navy px-8 py-4 text-base font-bold tracking-wide text-white transition-colors hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-navy/40"
          >
            SOLICITAR ATENDIMENTO
          </a>
        </div>
      </div>
    </section>
  )
}
