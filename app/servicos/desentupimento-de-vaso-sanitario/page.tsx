
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Phone,
  MessageCircle,
  Clock3,
  ShieldCheck,
  FileText,
  AlertCircle,
  CheckCircle2,
  Wrench,
  MapPin,
  Handshake,
  Building2,
  CreditCard,
  ClipboardCheck,
  Droplets,
} from 'lucide-react'

import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { WhatsAppFloat } from '@/components/whatsapp-float'

const pagePath = '/servicos/desentupimento-de-vaso-sanitario'

const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(
  'Olá! Estou com um problema no vaso sanitário e gostaria de solicitar um orçamento com a Horizonte Desentupidora.',
)}`

export const metadata: Metadata = {
  title: 'Vaso Sanitário Entupido em BH? Desentupidora 24h',
  description:
    'Vaso sanitário entupido em Belo Horizonte? Horizonte Desentupidora: atendimento 24h, visita técnica gratuita em até 30 minutos, orçamento sem compromisso e garantia.',
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: 'Desentupimento de Vaso Sanitário em BH | Horizonte',
    description:
      'Atendimento para vaso sanitário entupido em Belo Horizonte e Região Metropolitana. Visita gratuita, orçamento sem compromisso e atendimento 24 horas.',
    url: pagePath,
    type: 'website',
    images: ['/images/servico-vaso.webp'],
  },
}

const problems = [
  'A água do vaso sanitário não desce após acionar a descarga.',
  'A água sobe e existe risco de transbordamento.',
  'O vaso sanitário apresenta entupimentos frequentes.',
  'A descarga demora para escoar a água.',
  'Existe retorno de água ou resíduos pelo vaso.',
  'O banheiro está com dificuldade de escoamento.',
]

const causes = [
  {
    title: 'Excesso de papel higiênico',
    description:
      'O descarte de grandes quantidades de papel pode dificultar o escoamento e provocar obstruções.',
  },
  {
    title: 'Descarte de objetos inadequados',
    description:
      'Lenços umedecidos, absorventes, embalagens e outros objetos podem ficar presos na passagem do vaso.',
  },
  {
    title: 'Acúmulo de resíduos',
    description:
      'Resíduos acumulados ao longo do tempo podem comprometer o funcionamento da instalação sanitária.',
  },
  {
    title: 'Problemas na tubulação',
    description:
      'Obstruções em trechos da tubulação conectada ao vaso também podem provocar retorno de água e entupimentos recorrentes.',
  },
  {
    title: 'Problemas na rede de esgoto',
    description:
      'Quando a dificuldade de escoamento afeta outros pontos do imóvel, pode existir uma obstrução na rede de esgoto.',
  },
  {
    title: 'Uso inadequado da instalação',
    description:
      'O descarte de materiais que não devem ser encaminhados pelo vaso sanitário pode provocar bloqueios.',
  },
]

const methods = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação da obstrução',
    description:
      'O técnico verifica o funcionamento do vaso e procura identificar se o bloqueio está na passagem sanitária ou na tubulação conectada.',
  },
  {
    icon: Wrench,
    title: 'Ferramentas mecânicas específicas',
    description:
      'Conforme o diagnóstico, podem ser utilizados equipamentos apropriados para desobstruir a passagem do vaso, como ferramentas mecânicas e cabos específicos.',
  },
  {
    icon: Droplets,
    title: 'Limpeza da tubulação',
    description:
      'Quando o problema está na rede conectada ao vaso, métodos de desobstrução e hidrojateamento podem ser avaliados conforme as condições da tubulação.',
  },
]

const benefits = [
  {
    icon: Clock3,
    title: 'Atendimento 24 horas',
    description:
      'Atendimento para serviços de desentupimento durante o dia, à noite, fins de semana e feriados.',
  },
  {
    icon: MapPin,
    title: 'Visita técnica em até 30 minutos',
    description:
      'Agilidade na avaliação presencial do problema para que você possa receber orientação sobre a solução.',
  },
  {
    icon: Handshake,
    title: 'Visita gratuita e orçamento sem compromisso',
    description:
      'Você recebe a avaliação e conhece o orçamento antes de decidir pela contratação.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia dos serviços',
    description:
      'Serviços com garantia, respeitando as condições aplicáveis e os direitos previstos no Código de Defesa do Consumidor.',
  },
  {
    icon: FileText,
    title: 'Emissão de nota fiscal',
    description:
      'Nota fiscal pelos serviços prestados, com transparência e formalização da contratação.',
  },
  {
    icon: Building2,
    title: 'Atendimento diversificado',
    description:
      'Atendemos residências, estabelecimentos comerciais, empresas e condomínios.',
  },
]

const faqs = [
  {
    question: 'A Horizonte realiza desentupimento de vaso sanitário 24 horas?',
    answer:
      'Sim. A Horizonte Desentupidora oferece atendimento 24 horas para desentupimento de vasos sanitários em Belo Horizonte e Região Metropolitana.',
  },
  {
    question: 'Em quanto tempo a equipe chega ao endereço?',
    answer:
      'Nossa visita técnica é realizada em até 30 minutos. Entre em contato pelo telefone ou WhatsApp para solicitar o atendimento.',
  },
  {
    question: 'A visita técnica para desentupir o vaso é gratuita?',
    answer:
      'Sim. A visita técnica presencial para avaliação do problema é gratuita. Você recebe a avaliação sem custo.',
  },
  {
    question: 'O orçamento é apresentado antes do desentupimento?',
    answer:
      'Sim. Após avaliar o problema, apresentamos o orçamento antes de iniciar qualquer serviço. A execução somente começa após sua aprovação.',
  },
  {
    question: 'O orçamento é sem compromisso?',
    answer:
      'Sim. Você pode analisar as condições apresentadas e decidir se deseja contratar o serviço.',
  },
  {
    question: 'Quais equipamentos podem ser utilizados no desentupimento?',
    answer:
      'O equipamento depende do tipo e da localização da obstrução. Podem ser utilizadas ferramentas mecânicas específicas para vasos sanitários e equipamentos próprios para a tubulação conectada, quando necessário.',
  },
  {
    question: 'O serviço de desentupimento possui garantia?',
    answer:
      'Sim. Os serviços possuem garantia, de acordo com as condições aplicáveis ao atendimento e os direitos previstos no Código de Defesa do Consumidor.',
  },
  {
    question: 'A Horizonte emite nota fiscal?',
    answer:
      'Sim. Emitimos nota fiscal pelos serviços prestados.',
  },
  {
    question: 'A Horizonte atende condomínios e empresas?',
    answer:
      'Sim. Realizamos atendimento em residências, empresas, estabelecimentos comerciais e condomínios.',
  },
  {
    question: 'Quais cidades são atendidas?',
    answer:
      'Atendemos Belo Horizonte e diversas cidades da Região Metropolitana, incluindo Contagem, Betim, Ribeirão das Neves, Santa Luzia, Vespasiano, Nova Lima e outras localidades. Consulte o atendimento para seu endereço.',
  },
]

export default function DesentupimentoVasoSanitarioPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-brand-navy py-12 text-white md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-2">
            <div>
              <nav
                aria-label="Breadcrumb"
                className="mb-6 text-sm text-white/60"
              >
                <a href="/" className="hover:text-white">
                  Início
                </a>
                <span className="mx-2">/</span>
                <a href="/#servicos" className="hover:text-white">
                  Serviços
                </a>
                <span className="mx-2">/</span>
                <span className="text-brand-orange">
                  Vaso sanitário
                </span>
              </nav>

              <span className="inline-flex rounded-full bg-brand-orange/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange ring-1 ring-brand-orange/30">
                Desentupidora 24 horas em Belo Horizonte
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Vaso sanitário entupido? Conte com a Horizonte Desentupidora!
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                Precisa de desentupimento de vaso sanitário em Belo
                Horizonte? Atendemos residências, empresas e condomínios
                com avaliação presencial, orientação técnica e orçamento
                antes da execução.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  SOLICITAR PELO WHATSAPP
                </a>

                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-orange-dark"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  LIGAR AGORA
                </a>
              </div>

              <div className="mt-6 grid gap-3 text-sm text-white/85">
                <div className="flex items-center gap-2">
                  <Clock3 className="size-5 shrink-0 text-brand-orange" />
                  Visita técnica em até 30 minutos.
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 shrink-0 text-brand-orange" />
                  Visita presencial gratuita.
                </div>

                <div className="flex items-center gap-2">
                  <Handshake className="size-5 shrink-0 text-brand-orange" />
                  Orçamento sem compromisso.
                </div>
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

        {/* DIFERENCIAIS EM DESTAQUE */}
        <section className="bg-brand-orange py-5 text-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 text-center md:grid-cols-4 md:px-6">
            <div>
              <p className="text-lg font-extrabold">24 horas</p>
              <p className="text-xs font-medium text-white/90">
                Atendimento
              </p>
            </div>

            <div>
              <p className="text-lg font-extrabold">Até 30 min</p>
              <p className="text-xs font-medium text-white/90">
                Visita técnica
              </p>
            </div>

            <div>
              <p className="text-lg font-extrabold">Gratuita</p>
              <p className="text-xs font-medium text-white/90">
                Avaliação presencial
              </p>
            </div>

            <div>
              <p className="text-lg font-extrabold">Sem compromisso</p>
              <p className="text-xs font-medium text-white/90">
                Orçamento
              </p>
            </div>
          </div>
        </section>

        {/* SINTOMAS */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Identifique o problema
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Quando procurar uma desentupidora de vaso sanitário?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                Um vaso sanitário entupido pode comprometer a utilização
                do banheiro e causar transtornos no imóvel. Fique atento
                aos sinais de obstrução e procure uma avaliação profissional
                quando o problema persistir.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 rounded-xl border border-black/8 bg-brand-gray p-5"
                >
                  <AlertCircle
                    className="mt-0.5 size-5 shrink-0 text-brand-orange"
                    aria-hidden="true"
                  />

                  <p className="text-sm font-medium leading-relaxed text-brand-ink">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAUSAS */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Entenda as causas
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                O que pode causar o entupimento do vaso sanitário?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                Existem diferentes motivos para um vaso sanitário
                apresentar dificuldade de escoamento. Identificar
                a origem da obstrução ajuda a definir o procedimento
                mais adequado.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {causes.map((cause) => (
                <article
                  key={cause.title}
                  className="rounded-xl border border-black/5 bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-brand-ink">
                    {cause.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                    {cause.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-brand-orange/20 bg-white p-6">
              <h3 className="text-lg font-bold text-brand-ink">
                O que evitar quando o vaso sanitário estiver entupido?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                Evite acionar a descarga repetidamente quando a água
                estiver subindo e não misture produtos químicos para
                tentar desobstruir a tubulação. Essas tentativas podem
                provocar transbordamentos ou situações de risco.
                Uma avaliação profissional ajuda a identificar o
                procedimento adequado.
              </p>
            </div>
          </div>
        </section>

        {/* MÉTODOS E EQUIPAMENTOS */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Atendimento técnico
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Como é realizado o desentupimento de vaso sanitário?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                O procedimento depende da localização e das características
                da obstrução. A avaliação inicial permite identificar
                se o problema está no próprio vaso sanitário ou em algum
                trecho da tubulação conectada.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {methods.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-xl border border-black/8 bg-brand-gray p-6"
                >
                  <span className="flex size-12 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-lg font-bold text-brand-ink">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                    {description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-7 text-sm leading-relaxed text-brand-ink/60">
              O método e os equipamentos são definidos conforme a
              necessidade do atendimento e as condições da instalação.
              Nem todo entupimento exige o mesmo procedimento.
            </p>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Atendimento transparente
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Como funciona o atendimento da Horizonte?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                Do primeiro contato até a conclusão do serviço,
                você recebe orientação e conhece as condições
                da contratação antes da execução.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: '01',
                  title: 'Entre em contato',
                  text: 'Ligue ou envie uma mensagem pelo WhatsApp e informe o problema.',
                },
                {
                  number: '02',
                  title: 'Visita técnica gratuita',
                  text: 'Nossa equipe realiza a avaliação presencial em até 30 minutos.',
                },
                {
                  number: '03',
                  title: 'Orçamento sem compromisso',
                  text: 'Você recebe as informações e o orçamento antes da execução.',
                },
                {
                  number: '04',
                  title: 'Serviço após aprovação',
                  text: 'Com sua autorização, realizamos o serviço com garantia e nota fiscal.',
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="rounded-xl border border-black/5 bg-white p-6"
                >
                  <span className="text-3xl font-extrabold text-brand-orange">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-brand-ink">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-7 font-semibold text-brand-ink">
              Você conhece o orçamento antes de contratar. O serviço só
              começa depois da sua aprovação.
            </p>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Por que escolher a Horizonte?
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Uma desentupidora comprometida com seu atendimento
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                Fundada em 2023, a Horizonte Desentupidora trabalha para
                oferecer atendimento ágil, transparência na contratação
                e soluções adequadas para diferentes problemas de
                entupimento.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-xl border border-black/8 bg-brand-gray p-6"
                >
                  <span className="flex size-12 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>

                  <h3 className="mt-4 text-lg font-bold text-brand-ink">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                    {description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-brand-navy p-6 text-white md:p-8">
              <div className="flex items-start gap-3">
                <CreditCard className="mt-1 size-6 shrink-0 text-brand-orange" />

                <div>
                  <h3 className="text-lg font-bold">
                    Formas de pagamento
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Aceitamos Pix, dinheiro, cartões de débito e crédito
                    e transferência bancária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMPRESA E COBERTURA */}
        <section className="bg-brand-navy py-14 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                  Atendimento regional
                </span>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                  Desentupidora de vaso sanitário em Belo Horizonte e Região Metropolitana
                </h2>

                <p className="mt-4 leading-relaxed text-white/75">
                  A Horizonte realiza serviços de desentupimento em Belo
                  Horizonte e cidades próximas, atendendo residências,
                  empresas e condomínios.
                </p>

                <p className="mt-4 leading-relaxed text-white/75">
                  Consulte o atendimento para sua localização e informe
                  o tipo de problema para receber orientação.
                </p>

                <a
                  href="/#areas"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-brand-orange transition-colors hover:text-white"
                >
                  <MapPin className="size-5" aria-hidden="true" />
                  Consultar cidades atendidas
                </a>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h3 className="text-xl font-bold">
                  Fale com a Horizonte Desentupidora
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Está com o vaso sanitário entupido? Solicite uma visita
                  técnica gratuita e receba seu orçamento antes de contratar.
                </p>

                <a
                  href={PHONE_TEL}
                  className="mt-6 flex items-center gap-2 text-2xl font-extrabold"
                >
                  <Phone className="size-6 text-brand-orange" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  SOLICITAR ATENDIMENTO PELO WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Tire suas dúvidas
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Perguntas frequentes sobre desentupimento de vaso sanitário
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

        {/* CTA FINAL */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Solicite atendimento
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Vaso sanitário entupido? A Horizonte pode ajudar!
            </h2>

            <p className="mt-4 text-base leading-relaxed text-brand-ink/70 md:text-lg">
              Entre em contato com nossa equipe e solicite uma visita
              técnica gratuita em Belo Horizonte e Região Metropolitana.
              Receba seu orçamento sem compromisso antes da execução.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                FALAR PELO WHATSAPP
              </a>

              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-orange-dark"
              >
                <Phone className="size-5" aria-hidden="true" />
                LIGAR AGORA
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-brand-ink/65">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-brand-orange" />
                Visita gratuita
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-brand-orange" />
                Orçamento sem compromisso
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-brand-orange" />
                Serviço com garantia
              </span>
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
