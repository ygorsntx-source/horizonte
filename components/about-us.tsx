
import {
  Clock3,
  ShieldCheck,
  FileText,
  MapPin,
  Wrench,
  Handshake,
} from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

const highlights = [
  {
    icon: Clock3,
    title: 'Atendimento 24 horas',
    description:
      'Atendimento para serviços de desentupimento a qualquer hora do dia ou da noite.',
  },
  {
    icon: MapPin,
    title: 'Visita técnica em até 30 minutos',
    description:
      'Agilidade no atendimento para avaliar o problema e identificar a solução adequada.',
  },
  {
    icon: Handshake,
    title: 'Orçamento sem compromisso',
    description:
      'Apresentamos o orçamento antes da execução. Você decide se deseja contratar o serviço.',
  },
  {
    icon: ShieldCheck,
    title: 'Serviços com garantia',
    description:
      'Garantia dos serviços prestados, respeitando as condições aplicáveis e o Código de Defesa do Consumidor.',
  },
  {
    icon: FileText,
    title: 'Emissão de nota fiscal',
    description:
      'Transparência e formalização na prestação dos serviços contratados.',
  },
  {
    icon: Wrench,
    title: 'Soluções em desentupimento',
    description:
      'Atendimento para vasos sanitários, pias, ralos, caixas de gordura, redes de esgoto e hidrojateamento.',
  },
]

export function AboutUs() {
  return (
    <section
      id="quem-somos"
      className="bg-brand-gray py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">

          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Desde 2023, cuidando do seu atendimento
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Conheça a Horizonte Desentupidora
            </h2>

            <p className="mt-5 text-base leading-relaxed text-brand-ink/75 md:text-lg">
              Fundada em 2023, a Horizonte Desentupidora atua
              com serviços de desentupimento em Belo Horizonte
              e Região Metropolitana, atendendo residências,
              empresas e condomínios.
            </p>

            <p className="mt-4 text-base leading-relaxed text-brand-ink/75 md:text-lg">
              Trabalhamos com desentupimento de vasos sanitários,
              pias, ralos, redes de esgoto, limpeza de caixas de
              gordura e hidrojateamento. Oferecemos soluções para
              diferentes tipos de obstrução, buscando aliar
              agilidade, eficiência e cuidado em cada atendimento.
            </p>

            <p className="mt-4 text-base leading-relaxed text-brand-ink/75 md:text-lg">
              Nosso compromisso é oferecer um atendimento
              transparente, desde a avaliação inicial até a
              conclusão do serviço. O orçamento é apresentado
              previamente e a execução começa somente após
              a aprovação do cliente.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-lg bg-brand-orange px-7 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/50"
            >
              FALE COM A HORIZONTE
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
