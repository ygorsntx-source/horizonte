
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Phone,
  MessageCircle,
  Clock3,
  ShieldCheck,
  FileText,
  AlertCircle,
} from 'lucide-react'

import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { WhatsAppFloat } from '@/components/whatsapp-float'

const pagePath = '/servicos/desentupimento-de-vaso-sanitario'

const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(
  'Olá! Estou com um problema no vaso sanitário e gostaria de solicitar um orçamento.',
)}`

export const metadata: Metadata = {
  title: 'Vaso Sanitário Entupido em BH? Desentupidora 24h',
  description:
    'Vaso sanitário entupido em Belo Horizonte? Atendimento 24 horas, visita técnica gratuita em até 30 minutos e orçamento sem compromisso. Fale com a Horizonte.',
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: 'Desentupimento de Vaso Sanitário em BH | Horizonte',
    description:
      'Precisa desentupir um vaso sanitário? Conte com a Horizonte Desentupidora em Belo Horizonte e Região Metropolitana.',
    url: pagePath,
    type: 'website',
  },
}

const problems = [
  'A água do vaso sanitário não desce após a descarga.',
  'A água sobe e existe risco de transbordamento.',
  'O vaso sanitário apresenta entupimentos frequentes.',
  'Existe dificuldade de escoamento ou retorno de água.',
  'O banheiro apresenta sinais de obstrução na tubulação.',
  'O vaso sanitário está completamente obstruído.',
]

const faqs = [
  {
    question: 'A Horizonte desentope vaso sanitário 24 horas?',
    answer:
      'Sim. Realizamos atendimento 24 horas para desentupimento de vasos sanitários em Belo Horizonte e Região Metropolitana.',
  },
  {
    question: 'Em quanto tempo a equipe chega?',
    answer:
      'Nossa visita técnica é realizada em até 30 minutos. Entre em contato para solicitar atendimento.',
  },
  {
    question: 'A visita técnica é gratuita?',
    answer:
      'Sim. A visita técnica para avaliação do problema é gratuita.',
  },
  {
    question: 'O orçamento é apresentado antes do serviço?',
    answer:
      'Sim. Após avaliar o problema, apresentamos o orçamento antes de iniciar qualquer execução. Você decide se deseja contratar.',
  },
  {
    question: 'O desentupimento possui garantia?',
    answer:
      'Sim. Os serviços possuem garantia, respeitando as condições aplicáveis e os direitos previstos no Código de Defesa do Consumidor.',
  },
]

const benefits = [
  {
    icon: Clock3,
    title: 'Atendimento 24 horas',
    description:
      'Atendimento para situações de entupimento a qualquer hora do dia ou da noite.',
  },
  {
    icon: ShieldCheck,
    title: 'Serviço com garantia',
    description:
      'Garantia dos serviços prestados, conforme as condições aplicáveis.',
  },
  {
    icon: FileText,
    title: 'Nota fiscal',
    description:
      'Emissão de nota fiscal pelos serviços realizados.',
  },
]

export default function DesentupimentoVasoSanitarioPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="bg-brand-navy py-12 text-white md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-2">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
                <a href="/" className="hover:text-white">Início</a>
                <span className="mx-2">/</span>
                <a href="/#servicos" className="hover:text-white">Serviços</a>
                <span className="mx-2">/</span>
                <span className="text-brand-orange">Vaso sanitário</span>
              </nav>

              <span className="inline-flex rounded-full bg-brand-orange/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange ring-1 ring-brand-orange/30">
                Desentupidora 24 horas em BH
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Vaso sanitário entupido? Chame a Horizonte!
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                Precisa de desentupimento de vaso sanitário em Belo Horizonte?
                A Horizonte atende residências, empresas e condomínios com
                visita técnica gratuita e orçamento antes da execução.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="size-5" />
                  SOLICITAR PELO WHATSAPP
                </a>

                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-orange-dark"
                >
                  <Phone className="size-5" />
                  LIGAR AGORA
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
                <Clock3 className="size-5 text-brand-orange" />
                Visita técnica em até 30 minutos.
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/servico-vaso.webp"
                alt="Técnico da Horizonte realizando desentupimento de vaso sanitário"
                fill
                preload
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Quando procurar uma desentupidora de vaso sanitário?
            </h2>

            <p className="mt-4 max-w-3xl leading-relaxed text-brand-ink/70 md:text-lg">
              Um vaso sanitário entupido pode causar transtornos no banheiro
              e comprometer o funcionamento da instalação. Conheça alguns
              sinais de que é hora de solicitar atendimento profissional.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 rounded-xl border border-black/8 bg-brand-gray p-5"
                >
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-brand-orange" />
                  <p className="text-sm font-medium leading-relaxed text-brand-ink">
                    {problem}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-7 rounded-lg bg-brand-gray p-5 text-sm leading-relaxed text-brand-ink/70">
              Quando a água estiver subindo, evite acionar a descarga
              repetidamente para não provocar transbordamento. Solicite
              uma avaliação do problema.
            </p>
          </div>
        </section>

        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Como funciona o desentupimento de vaso sanitário?
            </h2>

            <p className="mt-4 max-w-3xl leading-relaxed text-brand-ink/70 md:text-lg">
              O atendimento começa com a avaliação da situação no local.
              A partir da identificação do problema, nossa equipe apresenta
              o orçamento e orienta sobre o serviço necessário.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  number: '01',
                  title: 'Avaliação do problema',
                  text: 'Identificamos as condições do vaso sanitário e a possível obstrução.',
                },
                {
                  number: '02',
                  title: 'Apresentação do orçamento',
                  text: 'Explicamos o serviço recomendado e apresentamos o orçamento antes da execução.',
                },
                {
                  number: '03',
                  title: 'Execução após aprovação',
                  text: 'Com sua autorização, realizamos o serviço e orientamos sobre o atendimento.',
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-black/5 bg-white p-6"
                >
                  <span className="text-3xl font-extrabold text-brand-orange">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Por que chamar a Horizonte Desentupidora?
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-black/8 bg-brand-gray p-6"
                >
                  <Icon className="size-8 text-brand-orange" />
                  <h3 className="mt-4 text-lg font-bold text-brand-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-navy py-14 text-white md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Desentupidora de vaso sanitário em BH e Região Metropolitana
            </h2>

            <p className="mt-4 max-w-3xl leading-relaxed text-white/75">
              A Horizonte realiza atendimento em Belo Horizonte e cidades
              da Região Metropolitana. Entre em contato, informe seu bairro
              ou cidade e consulte o atendimento para seu endereço.
            </p>

            <a
              href="/#areas"
              className="mt-6 inline-flex items-center gap-2 font-bold text-brand-orange hover:text-white"
            >
              Consultar cidades atendidas
            </a>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Dúvidas sobre desentupimento de vaso sanitário
            </h2>

            <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-brand-ink">
                    {faq.question}
                    <span className="text-xl text-brand-orange transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Está com o vaso sanitário entupido?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-brand-ink/70 md:text-lg">
              Entre em contato com a Horizonte Desentupidora e solicite
              atendimento em Belo Horizonte e região.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-7 py-4 text-sm font-bold text-white"
              >
                <MessageCircle className="size-5" />
                FALAR PELO WHATSAPP
              </a>

              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-4 text-sm font-bold text-white"
              >
                <Phone className="size-5" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-brand-ink/60">
              <CheckCircle2 className="size-4 text-brand-orange" />
              Orçamento apresentado antes da execução.
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileCtaBar />
      <WhatsAppFloat />
    </>
  )
}
