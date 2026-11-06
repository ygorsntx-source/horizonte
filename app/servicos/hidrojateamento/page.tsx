
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
  Gauge,
  Waves,
} from 'lucide-react'

import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { WhatsAppFloat } from '@/components/whatsapp-float'

const pagePath = '/servicos/hidrojateamento'

const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(
  'Olá! Gostaria de solicitar um orçamento para serviço de hidrojateamento com a Horizonte Desentupidora.',
)}`

export const metadata: Metadata = {
  title: 'Hidrojateamento em BH | Horizonte Desentupidora 24h',
  description:
    'Hidrojateamento de tubulações em Belo Horizonte e região. Atendimento 24 horas, visita técnica gratuita em até 30 minutos, orçamento sem compromisso e garantia.',
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: 'Hidrojateamento em Belo Horizonte | Horizonte',
    description:
      'Limpeza e desobstrução de tubulações por hidrojateamento de alta pressão em BH e Região Metropolitana. Solicite seu orçamento.',
    url: pagePath,
    type: 'website',
    images: ['/images/servico-hidrojateamento.webp'],
  },
}

const problems = [
  'Gordura acumulada nas paredes internas das tubulações.',
  'Resíduos que dificultam a passagem da água.',
  'Rede de esgoto com escoamento comprometido.',
  'Entupimentos recorrentes em determinados trechos da tubulação.',
  'Acúmulo de materiais que exige limpeza interna da rede.',
  'Dificuldade de escoamento em tubulações de imóveis comerciais.',
]

const applications = [
  {
    title: 'Limpeza de tubulações',
    description:
      'O hidrojateamento pode auxiliar na remoção de gordura e resíduos aderidos às paredes internas dos tubos, conforme as condições da instalação.',
  },
  {
    title: 'Redes de esgoto',
    description:
      'Pode ser utilizado em determinadas situações de acúmulo de resíduos e obstruções em redes de esgoto, após avaliação técnica.',
  },
  {
    title: 'Tubulações comerciais',
    description:
      'Cozinhas comerciais e estabelecimentos com utilização intensa podem precisar de limpeza especializada de suas tubulações.',
  },
  {
    title: 'Limpeza preventiva',
    description:
      'Quando indicado, o procedimento pode integrar a manutenção de tubulações para reduzir o acúmulo de materiais ao longo do tempo.',
  },
]

const methods = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação da tubulação',
    description:
      'Verificamos o tipo de instalação, os pontos de acesso, as características da obstrução e as condições gerais da tubulação.',
  },
  {
    icon: Gauge,
    title: 'Aplicação de alta pressão',
    description:
      'O equipamento direciona jatos de água sob pressão para auxiliar na remoção de gordura e resíduos acumulados no interior da tubulação.',
  },
  {
    icon: Droplets,
    title: 'Limpeza e verificação',
    description:
      'Após o procedimento, são avaliadas as condições de escoamento e a necessidade de alguma intervenção complementar.',
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
      'Agilidade na avaliação presencial para identificar a necessidade do serviço.',
  },
  {
    icon: Handshake,
    title: 'Visita gratuita e orçamento sem compromisso',
    description:
      'Você recebe a avaliação e conhece o orçamento antes de decidir pela contratação.',
  },
  {
    icon: ShieldCheck,
    title: 'Serviços com garantia',
    description:
      'Garantia dos serviços prestados, respeitando as condições aplicáveis e os direitos do consumidor.',
  },
  {
    icon: FileText,
    title: 'Emissão de nota fiscal',
    description:
      'Nota fiscal pelos serviços realizados, com transparência na contratação.',
  },
  {
    icon: Building2,
    title: 'Atendimento residencial e comercial',
    description:
      'Atendemos residências, empresas, estabelecimentos comerciais e condomínios.',
  },
]

const faqs = [
  {
    question: 'O que é hidrojateamento?',
    answer:
      'Hidrojateamento é um procedimento de limpeza e desobstrução que utiliza água sob alta pressão para auxiliar na remoção de gordura e resíduos acumulados nas tubulações.',
  },
  {
    question: 'Quando o hidrojateamento é indicado?',
    answer:
      'Pode ser indicado em situações de acúmulo de gordura, resíduos aderidos às paredes internas dos tubos e determinadas obstruções em redes de esgoto. A indicação depende de avaliação técnica.',
  },
  {
    question: 'O hidrojateamento resolve qualquer entupimento?',
    answer:
      'Não necessariamente. A escolha do procedimento depende do tipo de obstrução, das condições da tubulação e da localização do problema. Em alguns casos, outro método pode ser mais adequado.',
  },
  {
    question: 'O hidrojateamento utiliza produtos químicos?',
    answer:
      'O princípio do procedimento é a utilização de água sob pressão. A necessidade de qualquer outro produto ou intervenção depende das condições específicas do atendimento.',
  },
  {
    question: 'O hidrojateamento pode ser utilizado em redes de esgoto?',
    answer:
      'Sim. O procedimento pode ser utilizado em determinadas aplicações de limpeza e desobstrução de redes de esgoto, conforme as condições de acesso e da tubulação.',
  },
  {
    question: 'A Horizonte realiza hidrojateamento 24 horas?',
    answer:
      'Sim. A Horizonte Desentupidora oferece atendimento 24 horas em Belo Horizonte e Região Metropolitana.',
  },
  {
    question: 'Em quanto tempo a equipe chega?',
    answer:
      'Nossa visita técnica é realizada em até 30 minutos. Entre em contato pelo telefone ou WhatsApp para solicitar atendimento.',
  },
  {
    question: 'A visita técnica é gratuita?',
    answer:
      'Sim. A visita técnica presencial para avaliação do problema é gratuita.',
  },
  {
    question: 'O orçamento é apresentado antes do serviço?',
    answer:
      'Sim. Após avaliar a tubulação e identificar a necessidade do procedimento, apresentamos o orçamento antes da execução. O serviço só começa depois da sua aprovação.',
  },
  {
    question: 'O orçamento é sem compromisso?',
    answer:
      'Sim. Você pode analisar as condições apresentadas e decidir se deseja contratar o serviço.',
  },
  {
    question: 'O serviço possui garantia?',
    answer:
      'Sim. Os serviços possuem garantia, respeitando as condições aplicáveis ao atendimento e os direitos previstos no Código de Defesa do Consumidor.',
  },
  {
    question: 'A Horizonte emite nota fiscal?',
    answer:
      'Sim. Emitimos nota fiscal pelos serviços prestados.',
  },
  {
    question: 'Quais cidades a Horizonte atende?',
    answer:
      'Atendemos Belo Horizonte e diversas cidades da Região Metropolitana, incluindo Contagem, Betim, Ribeirão das Neves, Santa Luzia, Vespasiano, Nova Lima e outras localidades. Consulte o atendimento para seu endereço.',
  },
]

export default function HidrojateamentoPage() {
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
                  Hidrojateamento
                </span>
              </nav>

              <span className="inline-flex rounded-full bg-brand-orange/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange ring-1 ring-brand-orange/30">
                Hidrojateamento 24 horas em BH
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Hidrojateamento de alta pressão em Belo Horizonte
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                Precisa de limpeza ou desobstrução de tubulações?
                A Horizonte utiliza hidrojateamento para auxiliar
                na remoção de gordura e resíduos acumulados em
                tubulações e redes, conforme avaliação técnica.
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
                src="/images/servico-hidrojateamento.webp"
                alt="Técnico da Horizonte realizando hidrojateamento de alta pressão em tubulação"
                fill
                preload
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
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

        {/* O QUE É HIDROJATEAMENTO */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:px-6 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Conheça o procedimento
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                O que é hidrojateamento de alta pressão?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                O hidrojateamento é um método de limpeza de tubulações
                que utiliza jatos de água sob alta pressão. O fluxo
                de água auxilia na remoção de gordura, sedimentos
                e outros resíduos acumulados nas paredes internas
                dos tubos.
              </p>

              <p className="mt-4 leading-relaxed text-brand-ink/70">
                O procedimento pode ser utilizado em diferentes
                aplicações de limpeza e desobstrução, desde que
                seja compatível com as condições da instalação.
              </p>
            </div>

            <div className="rounded-xl bg-brand-gray p-6 md:p-8">
              <span className="flex size-14 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Waves className="size-8" aria-hidden="true" />
              </span>

              <h3 className="mt-5 text-xl font-bold text-brand-ink">
                Limpeza interna das tubulações
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                Diferentemente de métodos que atuam apenas sobre
                um ponto de obstrução, o hidrojateamento pode
                auxiliar na limpeza de trechos internos da tubulação,
                conforme o acesso e a indicação técnica.
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEMAS E INDICAÇÕES */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Quando considerar o procedimento?
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Quando o hidrojateamento pode ser indicado?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                O procedimento pode ser considerado quando existe
                acúmulo significativo de resíduos ou necessidade
                de limpeza interna da tubulação. Alguns sinais
                merecem avaliação:
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-5"
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

        {/* APLICAÇÕES */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Diferentes aplicações
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Onde o hidrojateamento pode ser utilizado?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                A aplicação depende da estrutura, do material,
                do diâmetro e das condições de conservação
                da tubulação.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {applications.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-black/8 bg-brand-gray p-6"
                >
                  <h3 className="text-xl font-bold text-brand-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Atendimento técnico
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Como funciona o serviço de hidrojateamento?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                Antes de iniciar, é necessário avaliar a tubulação
                e identificar se a aplicação de água sob pressão
                é adequada para o problema encontrado.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {methods.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-xl border border-black/5 bg-white p-6"
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

            <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/servico-hidrojateamento.webp"
                  alt="Equipamento de hidrojateamento utilizado na limpeza de tubulações"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-ink">
                  Equipamento de alta pressão
                </h3>

                <p className="mt-4 text-base leading-relaxed text-brand-ink/70">
                  O equipamento direciona água pressurizada para
                  o interior da tubulação, auxiliando na remoção
                  de materiais acumulados e na recuperação
                  das condições de escoamento.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">
                  A pressão e o procedimento precisam ser
                  compatíveis com a tubulação. Por isso,
                  a avaliação técnica é fundamental antes
                  da execução.
                </p>
              </div>
            </div>

            <div className="mt-7 rounded-xl border border-brand-orange/20 bg-white p-6">
              <h3 className="text-lg font-bold text-brand-ink">
                Hidrojateamento não é necessário em todos os entupimentos
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                Alguns problemas podem ser resolvidos com métodos
                mecânicos convencionais. A escolha depende da
                obstrução, do acesso e das condições da instalação.
                O orçamento é apresentado antes de qualquer execução.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESSO DE ATENDIMENTO */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Atendimento transparente
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Como funciona o atendimento da Horizonte?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                Você conhece as condições do serviço e recebe
                o orçamento antes de autorizar a execução.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: '01',
                  title: 'Entre em contato',
                  text: 'Ligue ou envie uma mensagem pelo WhatsApp e informe o problema na tubulação.',
                },
                {
                  number: '02',
                  title: 'Visita técnica gratuita',
                  text: 'Nossa equipe realiza a avaliação presencial em até 30 minutos.',
                },
                {
                  number: '03',
                  title: 'Orçamento sem compromisso',
                  text: 'Você recebe a avaliação e as condições do procedimento antes de contratar.',
                },
                {
                  number: '04',
                  title: 'Execução após aprovação',
                  text: 'Com sua autorização, realizamos o serviço com garantia e nota fiscal.',
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="rounded-xl border border-black/5 bg-brand-gray p-6"
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
              Nenhum serviço é iniciado sem sua aprovação do orçamento.
            </p>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Por que escolher a Horizonte?
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Atendimento profissional e transparente em BH
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                Fundada em 2023, a Horizonte Desentupidora trabalha
                para oferecer atendimento ágil, avaliação técnica
                e soluções adequadas para diferentes necessidades
                de limpeza e desobstrução de tubulações.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-xl border border-black/8 bg-white p-6"
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

        {/* ATENDIMENTO REGIONAL */}
        <section className="bg-brand-navy py-14 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                  Atendimento regional
                </span>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                  Hidrojateamento em Belo Horizonte e Região Metropolitana
                </h2>

                <p className="mt-4 leading-relaxed text-white/75">
                  A Horizonte realiza serviços de hidrojateamento
                  em Belo Horizonte e cidades próximas, atendendo
                  residências, empresas e condomínios.
                </p>

                <p className="mt-4 leading-relaxed text-white/75">
                  Informe seu bairro ou cidade e consulte
                  a disponibilidade de atendimento para seu endereço.
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
                  Solicite uma avaliação técnica
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Precisa de limpeza de tubulações por hidrojateamento?
                  Converse com a Horizonte e receba seu orçamento
                  sem compromisso.
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
              Perguntas frequentes sobre hidrojateamento
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
              Precisa de hidrojateamento em sua tubulação?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-brand-ink/70 md:text-lg">
              Entre em contato com a Horizonte Desentupidora.
              Solicite uma visita técnica gratuita, receba
              o orçamento sem compromisso e conheça a solução
              indicada para sua instalação.
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
