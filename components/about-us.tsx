import {
  Clock3,
  ShieldCheck,
  FileText,
  MapPin,
  Handshake,
  Search,
} from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

const highlights = [
  {
    icon: Clock3,
    title: 'Atendimento 24 horas',
    description:
      'Entupimento não espera horário comercial. Atendemos de dia, à noite e de madrugada.',
  },
  {
    icon: MapPin,
    title: 'No local em até 30 minutos',
    description:
      'Visita técnica rápida em Belo Horizonte e nas cidades da região metropolitana.',
  },
  {
    icon: Search,
    title: 'Explicamos o problema',
    description:
      'Mostramos onde está o entupimento e o que causou, para você entender o que vai ser feito.',
  },
  {
    icon: Handshake,
    title: 'Orçamento sem compromisso',
    description:
      'A visita é gratuita e você conhece o valor antes. O serviço só começa com a sua aprovação.',
  },
  {
    icon: ShieldCheck,
    title: 'Serviço com garantia',
    description:
      'Garantia sobre o serviço executado, conforme o Código de Defesa do Consumidor.',
  },
  {
    icon: FileText,
    title: 'Nota fiscal',
    description:
      'Emitimos nota fiscal para residências, empresas e condomínios.',
  },
]

export function AboutUs() {
  return (
    <section id="quem-somos" className="bg-brand-gray py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Quem somos
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Por que escolher a Prumo Desentupidora
            </h2>

            <p className="mt-5 text-base leading-relaxed text-brand-ink/75 md:text-lg">
              A Prumo é uma desentupidora de Belo Horizonte que atende a
              capital e a Região Metropolitana 24 horas por dia. Trabalhamos com
              máquinas rotativas e hidrojateamento, o que nos permite resolver
              desde um ralo entupido até a rede de esgoto de um condomínio ou
              de um restaurante.
            </p>

            <p className="mt-4 text-base leading-relaxed text-brand-ink/75 md:text-lg">
              Quem chama uma desentupidora quer duas coisas: o problema
              resolvido e nenhuma surpresa no preço. Por isso, antes de
              qualquer serviço, explicamos o que está acontecendo e
              apresentamos o orçamento. O trabalho só começa depois da sua
              aprovação.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-lg bg-brand-orange px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-orange-dark"
            >
              Falar com a Prumo
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-brand-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
