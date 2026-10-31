
import {
  PhoneCall,
  MessageSquareText,
  MapPin,
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react'

const steps = [
  {
    icon: PhoneCall,
    title: 'Entre em contato',
    description:
      'Ligue ou envie uma mensagem pelo WhatsApp para solicitar atendimento da Horizonte Desentupidora.',
  },
  {
    icon: MessageSquareText,
    title: 'Explique o problema',
    description:
      'Informe o tipo de entupimento, seu endereço e os detalhes da situação para agilizar o atendimento.',
  },
  {
    icon: MapPin,
    title: 'Receba a visita técnica',
    description:
      'Nossa equipe vai até o local para avaliar o problema. Visita técnica gratuita em até 30 minutos.',
  },
  {
    icon: ClipboardCheck,
    title: 'Receba seu orçamento',
    description:
      'Após a avaliação, apresentamos o orçamento com clareza e sem compromisso, antes de iniciar o serviço.',
  },
  {
    icon: ShieldCheck,
    title: 'Aprove e acompanhe o serviço',
    description:
      'Com sua aprovação, realizamos o desentupimento com garantia do serviço e emissão de nota fiscal.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Como funciona o atendimento da Horizonte Desentupidora?
          </h2>

          <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
            Solicitar um serviço de desentupimento em Belo Horizonte e Região
            Metropolitana é simples. Conheça as etapas do nosso atendimento.
          </p>
        </div>

        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="relative rounded-lg bg-brand-gray p-5 md:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-brand-orange text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </span>

                <span className="text-4xl font-extrabold text-brand-navy/15">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold leading-snug text-brand-ink">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                {description}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-7 text-sm font-semibold leading-relaxed text-brand-ink/70">
          O serviço só começa após sua aprovação do orçamento. Você conhece
          o valor antes da execução, sem surpresas.
        </p>
      </div>
    </section>
  )
}
