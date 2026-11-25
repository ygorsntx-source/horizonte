
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Vocês atendem de madrugada?',
    answer:
      'Sim. O atendimento é 24 horas. Pode ligar ou chamar no WhatsApp a qualquer hora.',
  },
  {
    question: 'Quanto tempo vocês demoram pra chegar?',
    answer:
      'Normalmente a gente chega em até 30 minutos. Depende do seu bairro e de onde a equipe está na hora, então já te passamos uma previsão quando você chama.',
  },
  {
    question: 'Cobram pela visita?',
    answer:
      'Não. A gente vai até o local, vê o problema e passa o orçamento sem cobrar nada por isso.',
  },
  {
    question: 'Quanto custa um desentupimento?',
    answer:
      'Depende do que está entupido, de onde está o entupimento e do equipamento que vai precisar. Por isso a gente só passa o valor depois de ver o problema, e o serviço só começa se você aprovar.',
  },
  {
    question: 'Vocês fazem limpeza de caixa de gordura?',
    answer:
      'Fazemos. Limpeza e desentupimento de caixa de gordura em casa, restaurante, comércio e condomínio.',
  },
  {
    question: 'O serviço tem garantia? Emitem nota fiscal?',
    answer:
      'Sim para as duas. O serviço tem garantia, conforme o que foi feito e o Código de Defesa do Consumidor, e emitimos nota fiscal.',
  },
  {
    question: 'Quais formas de pagamento vocês aceitam?',
    answer:
      'Pix, cartão de débito, cartão de crédito, dinheiro e transferência.',
  },
  {
    question: 'Quais cidades vocês atendem?',
    answer:
      'Belo Horizonte e região metropolitana: Contagem, Betim, Ribeirão das Neves, Santa Luzia, Vespasiano, Nova Lima, Sabará, Ibirité, Lagoa Santa e outras. Se tiver dúvida, chama no WhatsApp e informa o bairro.',
  },
  {
    question: 'Atendem empresas e condomínios?',
    answer:
      'Sim. Além de casas e apartamentos, atendemos comércios, restaurantes, empresas e condomínios.',
  },
]

export function Faq() {
  return (
    <section
      id="perguntas-frequentes"
      className="bg-white py-14 md:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Perguntas que a gente mais recebe
          </h2>

          <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
            Não achou sua dúvida aqui? Chama a gente no WhatsApp.
          </p>
        </div>

        <div className="mt-8 divide-y divide-black/8 rounded-lg border border-black/8">
          {faqs.map((faq, index) => (
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
