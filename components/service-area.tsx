import { MapPin, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'
import { MAIN_CITIES, OTHER_CITIES } from '@/lib/areas'

const askMessage = encodeURIComponent(
  'Olá! Vocês atendem no meu endereço? Estou no bairro/cidade: ',
)

export function ServiceArea() {
  return (
    <section id="areas" className="bg-brand-navy py-14 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
            Área de atendimento
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Desentupidora em Belo Horizonte e Região Metropolitana
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            A Prumo atende 24 horas em Belo Horizonte e nas cidades vizinhas,
            com desentupimento de vaso sanitário, pia, ralo e rede de esgoto,
            limpeza de caixa de gordura e hidrojateamento para residências,
            comércios, empresas e condomínios.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-orange">
            Principais cidades atendidas
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {MAIN_CITIES.map((city) => (
              <li
                key={city}
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange px-4 py-2.5 text-sm font-bold text-white"
              >
                <MapPin className="size-4" aria-hidden="true" />
                {city}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
            Outras cidades da região
          </h3>
          <ul className="flex flex-wrap gap-2.5">
            {OTHER_CITIES.map((city) => (
              <li
                key={city}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-white/15"
              >
                <MapPin className="size-3.5 text-brand-orange" aria-hidden="true" />
                {city}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-white/60">
            Nas cidades mais distantes, confirme a disponibilidade antes pelo
            WhatsApp.
          </p>
        </div>

        <a
          href={`${WHATSAPP_URL}?text=${askMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-orange-dark"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Consultar atendimento no meu endereço
        </a>
      </div>
    </section>
  )
}
