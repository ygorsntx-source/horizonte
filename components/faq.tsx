'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'A Horizonte atende 24 horas?',
    answer:
      'Trabalhamos com atendimento 24 horas. Consulte a disponibilidade da equipe para o seu endereço.',
  },
  {
    question: 'O orçamento é feito antes do serviço?',
    answer:
      'Sim. Após a avaliação no local, o orçamento é apresentado antes da execução.',
  },
  {
    question: 'Quais regiões vocês atendem?',
    answer:
      'Atendemos Belo Horizonte e diversas cidades da Região Metropolitana.',
  },
  {
    question: 'Vocês atendem empresas e condomínios?',
    answer:
      'Sim. Atendemos residências, empresas, condomínios e imóveis comerciais.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
          Perguntas frequentes
        </h2>

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
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-brand-ink transition-colors hover:bg-brand-gray"
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
                  <p className="px-5 pb-5 text-sm leading-relaxed text-brand-ink/70">
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
