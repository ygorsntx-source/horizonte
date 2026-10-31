
'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'A Horizonte Desentupidora atende 24 horas?',
    answer:
      'Sim. A Horizonte Desentupidora oferece atendimento 24 horas para serviços de desentupimento em Belo Horizonte e Região Metropolitana.',
  },
  {
    question: 'Em quanto tempo a equipe chega ao local?',
    answer:
      'Nossa visita técnica é realizada em até 30 minutos. Entre em contato e informe seu endereço para solicitar atendimento.',
  },
  {
    question: 'A visita técnica é gratuita?',
    answer:
      'Sim. A visita técnica para avaliação do problema é gratuita. Nossa equipe vai até o local para identificar a situação e orientar sobre a solução adequada.',
  },
  {
    question: 'O orçamento é feito antes do serviço?',
    answer:
      'Sim. Após avaliar o problema, apresentamos o orçamento com clareza antes de iniciar qualquer execução.',
  },
  {
    question: 'O orçamento é sem compromisso?',
    answer:
      'Sim. Você recebe o orçamento e pode avaliar as condições antes de contratar. O serviço somente começa após sua aprovação.',
  },
  {
    question: 'Quais serviços de desentupimento a Horizonte realiza?',
    answer:
      'Realizamos desentupimento de vasos sanitários, pias, ralos e redes de esgoto, além de limpeza de caixas de gordura e hidrojateamento de tubulações.',
  },
  {
    question: 'A Horizonte realiza limpeza de caixa de gordura?',
    answer:
      'Sim. Realizamos limpeza e desentupimento de caixas de gordura, atendendo situações de acúmulo de resíduos, mau cheiro, obstrução e transbordamento.',
  },
  {
    question: 'Os serviços de desentupimento possuem garantia?',
    answer:
      'Sim. Os serviços possuem garantia, respeitando as condições aplicáveis a cada atendimento e os direitos previstos no Código de Defesa do Consumidor.',
  },
  {
    question: 'A Horizonte Desentupidora emite nota fiscal?',
    answer:
      'Sim. Emitimos nota fiscal pelos serviços prestados, proporcionando mais transparência e formalização no atendimento.',
  },
  {
    question: 'Quais cidades a Horizonte atende?',
    answer:
      'Atendemos Belo Horizonte e cidades da Região Metropolitana, incluindo Contagem, Betim, Ribeirão das Neves, Santa Luzia, Vespasiano, Nova Lima e outras localidades da região. Entre em contato e consulte o atendimento para seu endereço.',
  },
  {
    question: 'A Horizonte atende empresas e condomínios?',
    answer:
      'Sim. Atendemos residências, empresas, estabelecimentos comerciais e condomínios, com serviços de desentupimento para diferentes necessidades.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="perguntas-frequentes"
      className="bg-white py-14 md:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
            Tire suas dúvidas
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Perguntas frequentes sobre serviços de desentupimento
          </h2>

          <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
            Confira as principais dúvidas sobre a Horizonte Desentupidora,
            nossos serviços, atendimento 24 horas e regiões atendidas.
          </p>
        </div>

        <div className="mt-8 divide-y divide-black/8 rounded-lg border border-black/8">
          {faqs.map((faq, index) => {
            const isOpen = open === index

            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold leading-relaxed text-brand-ink transition-colors hover:bg-brand-gray"
                  >
                    {faq.question}

                    <ChevronDown
                      className={cn(
                        'size-5 shrink-0 text-brand-orange transition-transform',
                        isOpen && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <p
                    id={`faq-answer-${index}`}
                    className="px-5 pb-5 text-sm leading-relaxed text-brand-ink/70"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
