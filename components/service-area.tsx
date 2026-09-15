import { MapPin, Phone } from 'lucide-react'
import { PHONE_TEL } from '@/lib/site'

const highlighted = [
  'Belo Horizonte',
  'Contagem',
  'Betim',
  'Ribeirão das Neves',
  'Santa Luzia',
  'Vespasiano',
]

const others = [
  'Ibirité',
  'Sabará',
  'Nova Lima',
  'São José da Lapa',
  'Lagoa Santa',
  'Pedro Leopoldo',
  'Esmeraldas',
  'Sarzedo',
  'São Joaquim de Bicas',
]

export function ServiceArea() {
  return (
    <section id="areas" className="bg-brand-navy py-14 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Atendimento em BH e Região Metropolitana
          </h2>
          <p className="mt-3 text-base text-white/75 md:text-lg">
            Atendemos diversos bairros de Belo Horizonte e cidades próximas,
            conforme disponibilidade operacional da equipe.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {highlighted.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange px-4 py-2 text-sm font-bold text-white"
            >
              <MapPin className="size-4" aria-hidden="true" />
              {city}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {others.map((city) => (
            <span
              key={city}
              className="inline-flex items-center rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-white/85 ring-1 ring-white/15"
            >
              {city}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-4 text-base font-bold tracking-wide text-white transition-colors hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/50"
          >
            <Phone className="size-5" aria-hidden="true" />
            CONSULTAR ATENDIMENTO PARA MEU ENDEREÇO
          </a>
        </div>
      </div>
    </section>
  )
}
