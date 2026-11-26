
import { ChevronDown } from 'lucide-react'

export const HOME_FAQS = [
  {
    question: 'A Prumo Desentupidora atende 24 horas?',
    answer:
      'Sim. Atendemos 24 horas em Belo Horizonte e na Região Metropolitana, inclusive à noite e de madrugada. Ligue ou chame no WhatsApp a qualquer hora.',
  },
  {
    question: 'Em quanto tempo a equipe chega?',
    answer:
      'A visita técnica é feita em até 30 minutos. Ao entrar em contato, informe o endereço para receber a previsão de chegada.',
  },
  {
    question: 'A visita técnica é cobrada?',
    answer:
      'Não. A equipe vai até o local, avalia o problema e apresenta o orçamento sem cobrar pela visita.',
  },
  {
    question: 'Quanto custa um desentupimento em BH?',
    answer:
      'O valor depende do tipo de entupimento, de onde ele está e do equipamento necessário. Por isso o orçamento é feito depois da avaliação no local, e o serviço só começa com a sua aprovação.',
  },
  {
    question: 'Quais serviços a Prumo faz?',
    answer:
      'Desentupimento de vaso sanitário, pia, ralo e rede de esgoto, limpeza e desentupimento de caixa de gordura e hidrojateamento de tubulações.',
  },
  {
    question: 'Posso usar soda cáustica ou produto desentupidor antes de chamar?',
    answer:
      'Não é recomendado. Esses produtos podem danificar canos de PVC, causar queimaduras e, muitas vezes, não resolvem o entupimento. Se já usou, avise a equipe no atendimento.',
  },
  {
    question: 'Quando o hidrojateamento é indicado?',
    answer:
      'Quando a tubulação tem gordura, lodo ou resíduos grudados nas paredes, comum em cozinhas, restaurantes e condomínios, ou quando o entupimento volta com frequência. A indicação é feita depois da avaliação.',
  },
  {
    question: 'Os serviços têm garantia? Vocês emitem nota fiscal?',
    answer:
      'Sim. Os serviços têm garantia, conforme o serviço executado e o Código de Defesa do Consumidor, e emitimos nota fiscal.',
  },
  {
    question: 'Quais as formas de pagamento?',
    answer: 'Pix, cartão de crédito, cartão de débito, dinheiro e transferência.',
  },
  {
    question: 'Quais cidades a Prumo atende?',
    answer:
      'Belo Horizonte e Região Metropolitana, incluindo Contagem, Betim, Ribeirão das Neves, Santa Luzia, Vespasiano, Nova Lima, Sabará, Ibirité e Lagoa Santa. Para outras cidades, consulte pelo WhatsApp.',
  },
  {
    question: 'Vocês atendem empresas, restaurantes e condomínios?',
    answer:
      'Sim. Além de casas e apartamentos, atendemos comércios, restaurantes, empresas e condomínios.',
  },
]

type FaqItem = { question: string; answer: string }

export function Faq({
  items = HOME_FAQS,
  title = 'Perguntas frequentes sobre desentupimento',
}: {
  items?: FaqItem[]
  title?: string
}) {
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
            {title}
          </h2>

          <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
            Não encontrou o que procurava? Fale com a nossa equipe pelo WhatsApp.
          </p>
        </div>

        <div className="mt-8 divide-y divide-black/8 rounded-lg border border-black/8">
          {items.map((faq, index) => (
            <details key={faq.question} className="group" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold leading-relaxed text-brand-ink transition-colors hover:bg-brand-gray [&::-webkit-details-marker]:hidden">
                <h3>{faq.question}</h3>
                <ChevronDown
                  className="size-5 shrink-0 text-brand-orange transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>

              <p className="px-5 pb-5 text-base leading-relaxed text-brand-ink/70">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
