
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
    title: 'Ligue ou chame no WhatsApp',
    description:
      'Atendemos 24 horas. Informe o endereço e o tipo de entupimento.',
  },
  {
    icon: MessageSquareText,
    title: 'Conte o que está acontecendo',
    description:
      'Se puder, envie uma foto ou um vídeo. Assim a equipe já sai com o equipamento certo.',
  },
  {
    icon: MapPin,
    title: 'Visita técnica gratuita',
    description:
      'Nossa equipe chega em até 30 minutos e avalia o problema no local, sem cobrar pela visita.',
  },
  {
    icon: ClipboardCheck,
    title: 'Orçamento antes de começar',
    description:
      'Explicamos a causa do entupimento e passamos o valor. Você decide se quer fazer o serviço.',
  },
  {
    icon: ShieldCheck,
    title: 'Serviço feito e garantido',
    description:
      'Com a sua aprovação, fazemos o desentupimento com garantia e emissão de nota fiscal.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Como funciona o atendimento
          </h2>

          <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
            Do primeiro contato ao serviço pronto, você sabe o que vai ser
            feito e quanto vai custar.
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

      </div>
    </section>
  )
}
