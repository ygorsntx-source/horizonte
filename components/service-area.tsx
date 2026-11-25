import { MapPin } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'
import { MAIN_CITIES, OTHER_CITIES } from '@/lib/areas'

const askMessage = encodeURIComponent(
  'Olá! Vocês atendem no meu bairro? Estou em: ',
)

export function ServiceArea() {
  return (
    <section id="areas" className="bg-brand-navy py-14 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Onde a gente atende
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            Belo Horizonte e região metropolitana, 24 horas. As cidades onde a
            gente mais atende:
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:max-w-3xl">
          {MAIN_CITIES.map((city) => (
            <li key={city} className="flex items-center gap-2 text-lg font-bold">
              <MapPin className="size-5 shrink-0 text-brand-orange" aria-hidden="true" />
              {city}
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/70">
          Também atendemos {OTHER_CITIES.slice(0, -1).join(', ')} e{' '}
          {OTHER_CITIES[OTHER_CITIES.length - 1]}. Nas cidades mais distantes, vale
          confirmar antes.
        </p>

        <a
          href={`${WHATSAPP_URL}?text=${askMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-orange hover:text-white"
        >
          Não achou sua cidade? Pergunta pra gente no WhatsApp
        </a>
      </div>
    </section>
  )
}
