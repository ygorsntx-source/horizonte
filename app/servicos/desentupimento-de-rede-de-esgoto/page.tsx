
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
  Waves,
  Droplets,
} from 'lucide-react'

import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { WhatsAppFloat } from '@/components/whatsapp-float'

const pagePath = '/servicos/desentupimento-de-rede-de-esgoto'

const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(
  'Olá! Estou com um problema na rede de esgoto e gostaria de solicitar um orçamento com a Horizonte Desentupidora.',
)}`

export const metadata: Metadata = {
  title: 'Desentupimento de Rede de Esgoto em BH | 24 Horas',
  description:
    'Rede de esgoto entupida em Belo Horizonte? Horizonte Desentupidora com atendimento 24h, visita técnica gratuita em até 30 minutos, orçamento sem compromisso e garantia.',
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: 'Desentupimento de Rede de Esgoto em BH | Horizonte',
    description:
      'Desentupimento de redes de esgoto em Belo Horizonte e Região Metropolitana. Visita gratuita, orçamento sem compromisso e atendimento 24 horas.',
    url: pagePath,
    type: 'website',
    images: ['/images/servico-rede-esgoto.webp'],
  },
}

const problems = [
  'Esgoto retornando pelos ralos ou pontos de escoamento.',
  'Água acumulada em áreas externas e pontos de drenagem.',
  'Mau cheiro vindo de caixas de inspeção ou tubulações.',
  'Escoamento lento em diferentes pontos do imóvel.',
  'Entupimentos frequentes na rede de esgoto.',
  'Caixa de inspeção apresentando acúmulo de resíduos.',
]

const causes = [
  {
    title: 'Acúmulo de gordura',
    description:
      'Gorduras e óleos descartados nas instalações podem aderir às paredes internas dos tubos e contribuir para obstruções.',
  },
  {
    title: 'Descarte inadequado de resíduos',
    description:
      'Objetos, materiais e resíduos que não deveriam ser encaminhados à rede de esgoto podem provocar bloqueios.',
  },
  {
    title: 'Acúmulo de materiais nas tubulações',
    description:
      'Resíduos acumulados ao longo do tempo podem reduzir a passagem da água e comprometer o escoamento.',
  },
  {
    title: 'Obstrução em caixas de inspeção',
    description:
      'O acúmulo de resíduos em caixas de inspeção pode dificultar a passagem do esgoto pela instalação.',
  },
  {
    title: 'Problemas em diferentes trechos da rede',
    description:
      'Uma obstrução pode estar localizada em trechos específicos da tubulação, exigindo avaliação para identificar sua origem.',
  },
  {
    title: 'Entupimentos recorrentes',
    description:
      'Quando o problema retorna com frequência, pode ser necessário investigar as condições de funcionamento da rede.',
  },
]

const methods = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação da rede',
    description:
      'A equipe avalia os pontos afetados, as condições de escoamento e os locais de acesso à tubulação para identificar a possível obstrução.',
  },
  {
    icon: Wrench,
    title: 'Desobstrução mecânica',
    description:
      'Conforme a localização e as características do bloqueio, podem ser utilizados equipamentos mecânicos apropriados para auxiliar na remoção dos resíduos.',
  },
  {
    icon: Waves,
    title: 'Hidrojateamento de alta pressão',
    description:
      'Quando indicado, o hidrojateamento utiliza jatos de água em alta pressão para auxiliar na limpeza interna e na remoção de resíduos das tubulações.',
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
    question: 'A Horizonte realiza desentupimento de rede de esgoto 24 horas?',
    answer:
      'Sim. A Horizonte Desentupidora oferece atendimento 24 horas para serviços de desentupimento de redes de esgoto em Belo Horizonte e Região Metropolitana.',
  },
  {
    question: 'Quais são os sinais de uma rede de esgoto entupida?',
    answer:
      'Retorno de esgoto pelos ralos, mau cheiro, dificuldade de escoamento e entupimentos em diferentes pontos do imóvel podem indicar uma obstrução na rede.',
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
    question: 'Quando é indicado utilizar hidrojateamento?',
    answer:
      'O hidrojateamento pode ser indicado para determinadas situações de acúmulo de resíduos e gordura nas tubulações. A necessidade do procedimento depende da avaliação técnica.',
  },
  {
    question: 'O serviço de desentupimento possui garantia?',
    answer:
      'Sim. Os serviços possuem garantia, de acordo com as condições aplicáveis ao atendimento e os direitos previstos no Código de Defesa do Consumidor.',
  },
  {
    question: 'A Horizonte atende empresas e condomínios?',
    answer:
      'Sim. Realizamos serviços em residências, empresas, estabelecimentos comerciais e condomínios.',
  },
  {
    question: 'A empresa emite nota fiscal?',
    answer:
      'Sim. Emitimos nota fiscal pelos serviços prestados.',
  },
  {
    question: 'Quais cidades a Horizonte atende?',
    answer:
      'Atendemos Belo Horizonte e diversas cidades da Região Metropolitana, incluindo Contagem, Betim, Ribeirão das Neves, Santa Luzia, Vespasiano, Nova Lima e outras localidades. Consulte o atendimento para seu endereço.',
  },
]

export default function DesentupimentoRedeEsgotoPage() {
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
                  Rede de esgoto
                </span>
              </nav>

              <span className="inline-flex rounded-full bg-brand-orange/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange ring-1 ring-brand-orange/30">
                Desentupidora 24 horas em BH
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Rede de esgoto entupida? Chame a Horizonte!
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                Precisa de desentupimento de rede de esgoto em Belo
                Horizonte? Atendemos residências, empresas e condomínios
                com avaliação técnica, equipamentos adequados e orçamento
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
                src="/images/servico-rede-esgoto.webp"
                alt="Equipe da Horizonte realizando desentupimento de rede de esgoto em poço de visita"
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
                Quando procurar uma desentupidora de rede de esgoto?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                Problemas na rede de esgoto podem afetar diferentes
                ambientes do imóvel e provocar transtornos como retorno
                de água, mau cheiro e dificuldade de escoamento.
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
                O que pode causar o entupimento da rede de esgoto?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                A rede de esgoto recebe os resíduos das instalações
                sanitárias do imóvel. O acúmulo de materiais inadequados
                ou resíduos ao longo do tempo pode comprometer
                o funcionamento da tubulação.
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
                O que fazer quando o esgoto retorna?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                Evite utilizar os pontos de escoamento afetados até
                que o problema seja avaliado. Não tente empurrar
                a obstrução com objetos ou produtos químicos.
                Solicite uma avaliação técnica para identificar
                a origem do retorno.
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
                Como é realizado o desentupimento de rede de esgoto?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                O procedimento começa pela identificação dos pontos
                afetados e pela avaliação das condições da tubulação.
                A partir do diagnóstico, a equipe define o método
                de desobstrução mais adequado.
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
                  src="/images/servico-hidrojateamento.webp"
                  alt="Técnico realizando hidrojateamento de alta pressão em tubulação"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-ink">
                  Hidrojateamento para limpeza de tubulações
                </h3>

                <p className="mt-4 text-base leading-relaxed text-brand-ink/70">
                  O hidrojateamento utiliza jatos de água em alta pressão
                  para auxiliar na remoção de gordura e resíduos acumulados
                  nas paredes internas das tubulações.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">
                  Sua aplicação depende das condições da instalação,
                  do tipo de obstrução e da avaliação técnica realizada
                  no local.
                </p>
              </div>
            </div>

            <p className="mt-7 text-sm leading-relaxed text-brand-ink/60">
              Os equipamentos e procedimentos são definidos conforme
              as características de cada atendimento. Nem toda obstrução
              exige hidrojateamento ou o mesmo método de desobstrução.
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
                  text: 'Ligue ou envie uma mensagem pelo WhatsApp e informe o problema na rede de esgoto.',
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
                problemas em redes de esgoto.
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
                  Desentupidora de rede de esgoto em Belo Horizonte e Região Metropolitana
                </h2>

                <p className="mt-4 leading-relaxed text-white/75">
                  A Horizonte realiza serviços de desentupimento de
                  redes de esgoto em Belo Horizonte e cidades próximas,
                  atendendo residências, empresas e condomínios.
                </p>

                <p className="mt-4 leading-relaxed text-white/75">
                  Consulte o atendimento para sua localização e informe
                  os pontos afetados para receber orientação.
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
                  Está enfrentando retorno de esgoto ou dificuldade
                  de escoamento? Solicite uma visita técnica gratuita
                  e receba seu orçamento antes de contratar.
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
              Perguntas frequentes sobre desentupimento de rede de esgoto
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
              Rede de esgoto entupida? A Horizonte pode ajudar!
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
