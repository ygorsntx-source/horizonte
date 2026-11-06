
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
  Container,
  Droplets,
  Utensils,
} from 'lucide-react'

import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { WhatsAppFloat } from '@/components/whatsapp-float'

const pagePath = '/servicos/limpeza-de-caixa-de-gordura'

const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(
  'Olá! Gostaria de solicitar um orçamento para limpeza e desentupimento de caixa de gordura com a Horizonte Desentupidora.',
)}`

export const metadata: Metadata = {
  title: 'Limpeza de Caixa de Gordura em BH | Horizonte 24h',
  description:
    'Caixa de gordura cheia ou entupida em Belo Horizonte? Limpeza residencial e comercial, visita técnica gratuita em até 30 minutos, orçamento sem compromisso e garantia.',
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: 'Limpeza de Caixa de Gordura em BH | Horizonte Desentupidora',
    description:
      'Limpeza e desentupimento de caixas de gordura em Belo Horizonte e Região Metropolitana. Atendimento 24 horas, visita gratuita e orçamento sem compromisso.',
    url: pagePath,
    type: 'website',
  },
}

const problems = [
  'A caixa de gordura está cheia ou com acúmulo excessivo de resíduos.',
  'A pia da cozinha apresenta dificuldade de escoamento.',
  'Existe mau cheiro próximo à caixa de gordura.',
  'A água retorna pelo ralo ou pela pia da cozinha.',
  'A gordura acumulada está dificultando a passagem da água.',
  'O imóvel apresenta entupimentos frequentes na tubulação da cozinha.',
]

const causes = [
  {
    title: 'Descarte de óleo e gordura',
    description:
      'O óleo de cozinha e a gordura despejados na pia podem se acumular no sistema e contribuir para a obstrução das tubulações.',
  },
  {
    title: 'Restos de alimentos',
    description:
      'Pequenos resíduos de alimentos podem chegar à caixa de gordura e se acumular junto aos materiais retidos.',
  },
  {
    title: 'Falta de limpeza periódica',
    description:
      'Quando a caixa não recebe limpeza adequada, o acúmulo de gordura pode comprometer sua capacidade de retenção.',
  },
  {
    title: 'Volume elevado de utilização',
    description:
      'Cozinhas comerciais, restaurantes e estabelecimentos com grande movimentação podem acumular resíduos em maior quantidade.',
  },
  {
    title: 'Obstrução na tubulação',
    description:
      'O acúmulo de gordura pode avançar para trechos do encanamento e dificultar o escoamento da água.',
  },
  {
    title: 'Problemas de funcionamento',
    description:
      'Caixas mal conservadas ou com problemas estruturais podem prejudicar a separação e a retenção dos resíduos.',
  },
]

const methods = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação da caixa de gordura',
    description:
      'A equipe verifica as condições de acesso, o nível de resíduos acumulados e possíveis sinais de obstrução no sistema.',
  },
  {
    icon: Container,
    title: 'Remoção da gordura acumulada',
    description:
      'O serviço envolve a retirada dos resíduos acumulados na caixa, conforme suas características, condições de acesso e necessidade identificada.',
  },
  {
    icon: Droplets,
    title: 'Limpeza e verificação do escoamento',
    description:
      'Após a remoção dos resíduos, são avaliadas as condições de limpeza e passagem da água para identificar possíveis dificuldades de escoamento.',
  },
]

const benefits = [
  {
    icon: Clock3,
    title: 'Atendimento 24 horas',
    description:
      'Atendimento para serviços de desentupimento e limpeza durante o dia, à noite, fins de semana e feriados.',
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
      'Atendemos residências, restaurantes, cozinhas comerciais, empresas e condomínios.',
  },
]

const faqs = [
  {
    question: 'A Horizonte realiza limpeza de caixa de gordura 24 horas?',
    answer:
      'Sim. A Horizonte Desentupidora oferece atendimento 24 horas para limpeza e desentupimento de caixas de gordura em Belo Horizonte e Região Metropolitana.',
  },
  {
    question: 'Vocês realizam limpeza de caixa de gordura residencial?',
    answer:
      'Sim. Atendemos caixas de gordura de residências, casas e apartamentos, conforme as condições de acesso e a necessidade do serviço.',
  },
  {
    question: 'A Horizonte atende restaurantes e estabelecimentos comerciais?',
    answer:
      'Sim. Realizamos atendimento para restaurantes, cozinhas comerciais, empresas e condomínios.',
  },
  {
    question: 'Quais são os sinais de que a caixa de gordura precisa de limpeza?',
    answer:
      'Mau cheiro, acúmulo excessivo de resíduos, dificuldade de escoamento e retorno de água podem indicar a necessidade de avaliação e limpeza.',
  },
  {
    question: 'Com que frequência devo limpar a caixa de gordura?',
    answer:
      'A frequência depende do tamanho da caixa, do volume de utilização e da quantidade de gordura gerada. Cozinhas com uso intenso podem exigir limpezas mais frequentes. Uma avaliação ajuda a identificar a necessidade.',
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
    question: 'O orçamento é apresentado antes da limpeza?',
    answer:
      'Sim. Após avaliar o problema, apresentamos o orçamento antes de iniciar qualquer serviço. A execução somente começa após sua aprovação.',
  },
  {
    question: 'O orçamento é sem compromisso?',
    answer:
      'Sim. Você pode analisar as condições apresentadas e decidir se deseja contratar o serviço.',
  },
  {
    question: 'O serviço possui garantia?',
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

export default function LimpezaCaixaGorduraPage() {
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
                  Caixa de gordura
                </span>
              </nav>

              <span className="inline-flex rounded-full bg-brand-orange/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange ring-1 ring-brand-orange/30">
                Desentupidora 24 horas em BH
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Caixa de gordura cheia ou entupida? Chame a Horizonte!
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                Precisa de limpeza de caixa de gordura em Belo Horizonte?
                Atendemos residências, restaurantes, cozinhas comerciais
                e condomínios, com avaliação presencial e orçamento
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

            {/* ESPAÇO VISUAL RESERVADO PARA FOTOGRAFIA REAL */}
            <div className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-blue to-brand-navy p-8 text-center">
              <span className="flex size-24 items-center justify-center rounded-2xl bg-white/10 text-brand-orange">
                <Container className="size-14" aria-hidden="true" />
              </span>

              <h2 className="mt-6 text-2xl font-extrabold">
                Limpeza de caixa de gordura
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
                Atendimento residencial, comercial e para cozinhas
                profissionais em Belo Horizonte e região.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange/15 px-4 py-2 text-xs font-bold text-brand-orange">
                <CheckCircle2 className="size-4" />
                Avaliação técnica e orçamento
              </span>
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
                Quando procurar limpeza de caixa de gordura?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                O acúmulo de gordura pode comprometer o funcionamento
                da caixa e dificultar a passagem da água pela tubulação.
                Fique atento aos sinais de que o sistema precisa
                de avaliação e limpeza.
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
                O que provoca o acúmulo de gordura na caixa?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                A caixa de gordura tem a função de reter parte da gordura
                e dos resíduos presentes na água proveniente das pias
                e cozinhas. Com o uso contínuo, os materiais retidos
                se acumulam e precisam ser removidos.
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
                Por que evitar o descarte de óleo na pia?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                O óleo e a gordura descartados na pia podem se solidificar
                ou aderir às paredes internas da tubulação, favorecendo
                obstruções. O ideal é armazenar o óleo usado em recipiente
                adequado e encaminhá-lo para descarte apropriado.
              </p>
            </div>
          </div>
        </section>

        {/* LIMPEZA E PROCEDIMENTOS */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Atendimento técnico
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Como funciona a limpeza de uma caixa de gordura?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                O serviço começa pela avaliação da caixa e das condições
                de acesso. A partir da quantidade de resíduos e da situação
                encontrada, a equipe define como realizar a limpeza.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: ClipboardCheck,
                  title: 'Avaliação do local',
                  description:
                    'Verificamos as condições da caixa, o acesso e o nível de resíduos acumulados.',
                },
                {
                  icon: Wrench,
                  title: 'Remoção dos resíduos',
                  description:
                    'Realizamos a retirada da gordura e dos materiais acumulados, conforme a necessidade identificada.',
                },
                {
                  icon: Droplets,
                  title: 'Limpeza e verificação',
                  description:
                    'Avaliamos a limpeza da caixa e as condições de escoamento do sistema após o procedimento.',
                },
              ].map(({ icon: Icon, title, description }) => (
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
              <div className="rounded-xl bg-brand-navy p-8 text-white">
                <span className="flex size-14 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <Utensils className="size-8" aria-hidden="true" />
                </span>

                <h3 className="mt-5 text-2xl font-extrabold">
                  Atendimento para cozinhas comerciais
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  Restaurantes e cozinhas profissionais podem gerar
                  grandes volumes de gordura e resíduos. A limpeza
                  adequada da caixa ajuda a manter o funcionamento
                  das instalações e reduzir problemas de escoamento.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-ink">
                  Limpeza residencial e comercial
                </h3>

                <p className="mt-4 text-base leading-relaxed text-brand-ink/70">
                  Cada imóvel possui uma estrutura e uma demanda
                  diferentes. Por isso, a avaliação considera o tamanho
                  da caixa, as condições de acesso, a quantidade
                  de resíduos e a necessidade do atendimento.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">
                  A Horizonte atende residências, apartamentos,
                  restaurantes, empresas e condomínios em Belo
                  Horizonte e região.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PREVENÇÃO */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Cuidados preventivos
            </span>

            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Como prevenir problemas na caixa de gordura?
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                'Evite despejar óleo e gordura diretamente na pia.',
                'Retire restos de alimentos antes de lavar utensílios.',
                'Acompanhe o nível de acúmulo de resíduos na caixa.',
                'Realize limpezas conforme o volume de utilização do imóvel.',
                'Observe sinais de mau cheiro e dificuldade de escoamento.',
                'Procure avaliação profissional quando houver obstruções recorrentes.',
              ].map((tip) => (
                <div
                  key={tip}
                  className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-5"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-brand-orange"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium leading-relaxed text-brand-ink">
                    {tip}
                  </p>
                </div>
              ))}
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
                  text: 'Ligue ou envie uma mensagem pelo WhatsApp e informe o problema na caixa de gordura.',
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
                Fundada em 2023, a Horizonte Desentupidora trabalha
                para oferecer atendimento ágil, transparência na
                contratação e soluções adequadas para limpeza
                de caixas de gordura.
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
                  Limpeza de caixa de gordura em Belo Horizonte e Região Metropolitana
                </h2>

                <p className="mt-4 leading-relaxed text-white/75">
                  A Horizonte realiza limpeza e desentupimento de
                  caixas de gordura em Belo Horizonte e cidades próximas,
                  atendendo residências, restaurantes, empresas
                  e condomínios.
                </p>

                <p className="mt-4 leading-relaxed text-white/75">
                  Consulte o atendimento para sua localização e informe
                  o tipo de imóvel e o problema identificado.
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
                  Precisa limpar uma caixa de gordura? Solicite uma
                  visita técnica gratuita e receba seu orçamento
                  antes de contratar.
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
              Perguntas frequentes sobre limpeza de caixa de gordura
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
              Caixa de gordura cheia ou entupida? A Horizonte pode ajudar!
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
