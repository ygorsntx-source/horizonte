import { AlertCircle, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

const problems = [
  'Vaso sanitário entupido, transbordando ou com a água demorando para descer',
  'Pia da cozinha ou do banheiro com água parada',
  'Ralo entupido ou com cheiro de esgoto',
  'Caixa de gordura cheia, entupida ou transbordando',
  'Esgoto voltando pelo ralo, pelo vaso ou pela caixa de inspeção',
  'Barulho de borbulha no ralo ou no vaso quando a água desce',
  'Entupimentos que voltam poucos dias depois de desentupir',
  'Mau cheiro vindo dos canos, ralos ou caixas de esgoto',
  'Entupimento em restaurante, comércio ou área comum de condomínio',
]

const whatsappMessage = encodeURIComponent(
  'Olá! Estou com um entupimento e gostaria de atendimento. O problema é: ',
)

export function Problems() {
  return (
    <section className="bg-brand-gray py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Sinais de que é hora de chamar uma desentupidora
          </h2>

          <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
            Produto desentupidor e arame costumam empurrar o entupimento para
            mais longe e podem danificar a tubulação. Se você reconhece algum
            destes sinais, o ideal é chamar um profissional.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <li
              key={problem}
              className="flex items-start gap-3 rounded-lg border border-black/8 bg-white p-4"
            >
              <AlertCircle
                className="mt-0.5 size-5 shrink-0 text-brand-orange"
                aria-hidden="true"
              />
              <span className="text-sm font-medium leading-relaxed text-brand-ink">
                {problem}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-start gap-2">
          <a
            href={`${WHATSAPP_URL}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-4 text-base font-bold text-white transition-colors hover:bg-brand-orange-dark"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Descrever o problema no WhatsApp
          </a>
          <p className="text-sm text-brand-ink/60">
            Se puder, envie uma foto ou um vídeo. Isso ajuda a equipe a chegar
            preparada.
          </p>
        </div>
      </div>
    </section>
  )
}
