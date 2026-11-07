
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
} from 'lucide-react'

import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { WhatsAppFloat } from '@/components/whatsapp-float'

const pagePath = '/servicos/desentupimento-de-ralo'

const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(
  'Olá! Estou com um problema de entupimento em um ralo e gostaria de solicitar um orçamento com a Horizonte Desentupidora.',
)}`

export const metadata: Metadata = {
  title: 'Desentupimento de Ralo em BH | Horizonte 24 Horas',
  description:
    'Ralo entupido em Belo Horizonte? Horizonte Desentupidora com atendimento 24 horas, visita técnica gratuita em até 30 minutos, orçamento sem compromisso e garantia.',
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: 'Desentupimento de Ralos em BH | Horizonte',
    description:
      'Desentupimento de ralos de banheiro, quintal e áreas externas em Belo Horizonte e Região Metropolitana. Solicite seu orçamento.',
    url: pagePath,
    type: 'website',
    images: ['/images/servico-ralo.webp'],
  },
}

// Schema.org - Dados estruturados do serviço de desentupimento de ralos
const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://horizonte24h.com.br/servicos/desentupimento-de-ralo#service',
  name: 'Desentupimento de ralos',
  serviceType: 'Desentupimento de ralos',
  url: 'https://horizonte24h.com.br/servicos/desentupimento-de-ralo',
  description:
    'Serviço de desentupimento de ralos de banheiro, boxes de chuveiro, quintais e áreas externas em Belo Horizonte e Região Metropolitana, com avaliação técnica e orçamento antes da execução.',
  provider: {
    '@id': 'https://horizonte24h.com.br/#organization',
  },
  areaServed: [
    'Belo Horizonte, Minas Gerais, Brasil',
    'Região Metropolitana de Belo Horizonte, Minas Gerais, Brasil',
  ],
}

const problems = [
  'A água do ralo demora para escoar.',
  'A água fica acumulada no piso do banheiro.',
  'O ralo do chuveiro está completamente obstruído.',
  'Existe mau cheiro vindo do ralo.',
  'A água retorna pelo ralo durante o uso.',
  'Ralos externos apresentam acúmulo de água após a chuva.',
]

const causes = [
  {
    title: 'Acúmulo de cabelos e pelos',
    description:
      'Cabelos e pelos podem ficar presos na passagem do ralo e se acumular na tubulação, dificultando o escoamento.',
  },
  {
    title: 'Resíduos de sabonete e produtos',
    description:
      'Restos de sabonete, cremes e outros produtos de higiene podem se acumular junto a outros resíduos e contribuir para obstruções.',
  },
  {
    title: 'Acúmulo de sujeira e sedimentos',
    description:
      'Terra, areia, folhas e pequenas partículas podem entrar em ralos de quintais e áreas externas, comprometendo a passagem da água.',
  },
  {
    title: 'Obstrução no sifão ou no encanamento',
    description:
      'A obstrução pode estar localizada no próprio ralo, no sifão ou em outros trechos da tubulação conectada.',
  },
  {
    title: 'Gordura e resíduos',
    description:
      'Em determinados pontos de escoamento, gordura e outros resíduos podem aderir às paredes internas da tubulação.',
  },
  {
    title: 'Problemas na rede de drenagem',
    description:
      'Quando vários pontos apresentam dificuldade de escoamento, pode existir uma obstrução em trechos compartilhados da rede.',
  },
]

const methods = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação do ralo e da tubulação',
    description:
      'A equipe verifica as condições do ralo, os pontos afetados e o comportamento do escoamento para identificar a possível origem da obstrução.',
  },
  {
    icon: Wrench,
    title: 'Desobstrução mecânica',
    description:
      'Conforme o diagnóstico, podem ser utilizadas ferramentas específicas e máquinas desentupidoras com cabos ou molas rotativas para auxiliar na remoção dos resíduos.',
  },
  {
    icon: Gauge,
    title: 'Limpeza da tubulação',
    description:
      'Quando indicado, podem ser avaliados procedimentos de limpeza e hidrojateamento para remover resíduos acumulados nos trechos da tubulação.',
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
      'Agilidade na avaliação presencial do problema para identificar a solução adequada.',
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
    title: 'Atendimento residencial e comercial',
    description:
      'Atendemos residências, empresas, estabelecimentos comerciais e condomínios.',
  },
]

const faqs = [
  {
    question: 'A Horizonte realiza desentupimento de ralos 24 horas?',
    answer:
      'Sim. A Horizonte Desentupidora oferece atendimento 24 horas para desentupimento de ralos em Belo Horizonte e Região Metropolitana.',
  },
  {
    question: 'Vocês desentopem ralos de banheiro e chuveiro?',
    answer:
      'Sim. Realizamos desentupimento de ralos de banheiro, box de chuveiro e outros pontos de escoamento, conforme a necessidade do atendimento.',
  },
  {
    question: 'A Horizonte desentope ralos de quintal e áreas externas?',
    answer:
      'Sim. Atendemos ralos de quintais, áreas de serviço e outros pontos de drenagem de imóveis residenciais e comerciais.',
  },
  {
    question: 'O que pode causar mau cheiro vindo do ralo?',
    answer:
      'O mau cheiro pode estar relacionado ao acúmulo de resíduos, problemas no sifão, obstruções ou condições inadequadas da instalação. A avaliação ajuda a identificar a origem.',
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
      'Sim. Após avaliar o problema, apresentamos o orçamento antes de iniciar qualquer serviço. A execução somente começa após sua aprovação.',
  },
  {
    question: 'O orçamento é sem compromisso?',
    answer:
      'Sim. Você pode analisar as condições apresentadas e decidir se deseja contratar o serviço.',
  },
  {
    question: 'Quais equipamentos podem ser utilizados?',
    answer:
      'O equipamento depende da localização e das características da obstrução. Podem ser utilizadas ferramentas mecânicas, máquinas desentupidoras rotativas e outros procedimentos adequados à tubulação.',
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
    question: 'Quais cidades a Horizonte atende?',
    answer:
      'Atendemos Belo Horizonte e diversas cidades da Região Metropolitana, incluindo Contagem, Betim, Ribeirão das Neves, Santa Luzia, Vespasiano, Nova Lima e outras localidades. Consulte o atendimento para seu endereço.',
  },
]

export default function DesentupimentoDeRaloPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Schema.org - Serviço de desentupimento de ralos */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd).replace(/</g, '\\u003c'),
          }}
        />

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
                  Desentupimento de ralos
                </span>
              </nav>

              <span className="inline-flex rounded-full bg-brand-orange/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange ring-1 ring-brand-orange/30">
                Desentupidora 24 horas em BH
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Ralo entupido? Chame a Horizonte Desentupidora!
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                Precisa de desentupimento de ralo em Belo Horizonte?
                Atendemos banheiros, boxes de chuveiro, quintais e áreas
                externas, com avaliação técnica e orçamento antes da execução.
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
                src="/images/servico-ralo.webp"
                alt="Técnico da Horizonte realizando desentupimento de ralo com equipamento profissional"
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
                Quando procurar uma desentupidora de ralos?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                Um ralo entupido pode causar acúmulo de água, mau cheiro
                e dificuldades na utilização de banheiros e áreas externas.
                Identificar os sinais de obstrução ajuda a buscar
                o atendimento adequado.
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
                O que pode causar o entupimento de um ralo?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                O entupimento pode acontecer pelo acúmulo de cabelos,
                resíduos de produtos de higiene, sujeira e outros materiais
                na passagem do ralo ou na tubulação conectada.
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
                Como evitar o entupimento dos ralos?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                Retire cabelos e resíduos acumulados na superfície
                do ralo, mantenha grelhas de proteção quando adequado
                e evite despejar produtos ou materiais inadequados
                no sistema de escoamento. A limpeza preventiva ajuda
                a reduzir o acúmulo de resíduos.
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
                Como é realizado o desentupimento de ralos?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                O atendimento começa com a avaliação do ralo e da
                tubulação conectada. A localização da obstrução
                e as condições da instalação ajudam a definir
                o procedimento mais adequado.
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

            <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/servico-ralo.webp"
                  alt="Técnico da Horizonte utilizando equipamento profissional para desentupimento de ralo"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-ink">
                  Equipamentos adequados para cada tipo de obstrução
                </h3>

                <p className="mt-4 text-base leading-relaxed text-brand-ink/70">
                  Máquinas desentupidoras com cabos ou molas rotativas
                  podem auxiliar na remoção de resíduos presentes
                  na tubulação. Em situações específicas, procedimentos
                  de limpeza de tubulações também podem ser avaliados.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">
                  A escolha do equipamento depende do tipo de ralo,
                  da localização do bloqueio e das condições
                  da instalação.
                </p>
              </div>
            </div>

            <p className="mt-7 text-sm leading-relaxed text-brand-ink/60">
              Nem todo entupimento exige o mesmo procedimento.
              A avaliação técnica orienta a escolha da ferramenta
              e do método de desobstrução.
            </p>
          </div>
        </section>

        {/* PROCESSO DE ATENDIMENTO */}
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
                  text: 'Ligue ou envie uma mensagem pelo WhatsApp e informe o problema no ralo.',
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
              Você conhece o orçamento antes de contratar. O serviço
              só começa depois da sua aprovação.
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
                Fundada em 2023, a Horizonte Desentupidora trabalha
                para oferecer atendimento ágil, transparência na
                contratação e soluções adequadas para diferentes
                problemas de entupimento.
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

        {/* REGIÕES ATENDIDAS */}
        <section className="bg-brand-navy py-14 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                  Atendimento regional
                </span>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                  Desentupidora de ralos em Belo Horizonte e Região Metropolitana
                </h2>

                <p className="mt-4 leading-relaxed text-white/75">
                  A Horizonte realiza desentupimento de ralos em Belo
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
                  Está com um ralo entupido? Solicite uma visita
                  técnica gratuita e receba seu orçamento antes
                  de contratar.
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
              Perguntas frequentes sobre desentupimento de ralos
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
              Ralo entupido? A Horizonte pode ajudar!
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
