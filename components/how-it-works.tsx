import { PhoneCall, MessageSquareText, ClipboardCheck } from 'lucide-react'

const steps = [
  {
    icon: PhoneCall,
    title: 'Entre em contato',
    description: 'Ligue ou envie uma mensagem.',
  },
  {
    icon: MessageSquareText,
    title: 'Explique o problema',
    description:
      'Informe o tipo de entupimento, o bairro ou a cidade e outras informações importantes.',
  },
  {
    icon: ClipboardCheck,
    title: 'Receba o orçamento',
    description:
      'A equipe avalia o local e apresenta o orçamento antes da execução.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
          Como funciona o atendimento?
        </h2>

        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="relative rounded-lg bg-brand-gray p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-md bg-brand-orange text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="text-4xl font-extrabold text-brand-navy/15">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-brand-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-ink/70">
                {description}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-sm font-medium text-brand-ink/60">
          O serviço começa após a aprovação do orçamento.
        </p>
      </div>
    </section>
  )
}
