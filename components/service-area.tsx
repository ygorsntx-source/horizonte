
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

const additionalCities = [
  'Brumadinho',
  'Caeté',
  'Confins',
  'Igarapé',
  'Juatuba',
  'Mário Campos',
  'Mateus Leme',
  'Matozinhos',
  'Raposos',
  'Rio Acima',
]

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
            A Horizonte Desentupidora oferece serviços de desentupimento
            24 horas em Belo Horizonte e cidades da Região Metropolitana.
            Atendemos residências, empresas e condomínios com serviços de
            desentupimento de vasos sanitários, pias, ralos, caixas de gordura,
            redes de esgoto e hidrojateamento.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-orange">
            Principais cidades atendidas
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {highlighted.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange px-4 py-2.5 text-sm font-bold text-white"
              >
                <MapPin className="size-4" aria-hidden="true" />
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
            Outras cidades da região
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {others.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-white/15"
              >
                <MapPin className="size-3.5 text-brand-orange" aria-hidden="true" />
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
            Cidades próximas para consulta de atendimento
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {additionalCities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-white/15"
              >
                <MapPin className="size-3.5 text-brand-orange" aria-hidden="true" />
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 max-w-2xl">
          <p className="text-sm leading-relaxed text-white/65">
            Precisa de uma desentupidora perto de você? Entre em contato
            com a Horizonte, informe seu bairro ou cidade e consulte o
            atendimento para seu endereço.
          </p>
        </div>

        <div className="mt-10">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-4 text-center text-sm font-bold tracking-wide text-white transition-colors hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/50"
          >
            <Phone className="size-5" aria-hidden="true" />
            CONSULTAR ATENDIMENTO PARA MEU ENDEREÇO
          </a>
        </div>
      </div>
    </section>
  )
}
