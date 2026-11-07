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
  Container,
  Droplets,
  Utensils,
  Home,
  Store,
} from 'lucide-react'

import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { WhatsAppFloat } from '@/components/whatsapp-float'

const pagePath = '/servicos/limpeza-de-caixa-de-gordura'

const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(
  'Olá! Preciso de limpeza de caixa de gordura e gostaria de solicitar uma visita técnica gratuita com a Horizonte Desentupidora.',
)}`

export const metadata: Metadata = {
  title: 'Limpeza de Caixa de Gordura em BH | Horizonte Desentupidora',
  description:
    'Precisa limpar uma caixa de gordura em Belo Horizonte? Atendimento residencial e comercial 24h, visita gratuita em até 30 minutos, orçamento sem compromisso e garantia.',
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: 'Limpeza de Caixa de Gordura em BH | Horizonte Desentupidora',
    description:
      'Limpeza de caixas de gordura em casas, apartamentos, restaurantes e empresas em BH e Região Metropolitana. Solicite atendimento pelo WhatsApp.',
    url: pagePath,
    type: 'website',
    images: ['/images/servico-caixa-gordura.webp'],
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://horizonte24h.com.br/servicos/limpeza-de-caixa-de-gordura#service',
  name: 'Limpeza de Caixa de Gordura em Belo Horizonte',
  serviceType: 'Limpeza e desentupimento de caixa de gordura',
  url: 'https://horizonte24h.com.br/servicos/limpeza-de-caixa-de-gordura',
  description:
    'Serviço de limpeza e desentupimento de caixas de gordura residenciais e comerciais em Belo Horizonte e Região Metropolitana.',
  provider: {
    '@id': 'https://horizonte24h.com.br/#organization',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Belo Horizonte',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Região Metropolitana de Belo Horizonte',
    },
  ],
}

const problems = [
  'A caixa de gordura está cheia e precisa de limpeza.',
  'Existe mau cheiro próximo à pia ou à caixa de gordura.',
  'A água da pia da cozinha está demorando para escoar.',
  'Há gordura acumulada na superfície ou no interior da caixa.',
  'A água apresenta dificuldade para passar pela tubulação.',
  'O problema de entupimento na cozinha acontece repetidamente.',
]

const causes = [
  {
    title: 'Acúmulo de óleo e gordura',
    description:
      'O óleo e a gordura descartados na pia se acumulam no sistema de retenção e podem formar camadas que dificultam a passagem da água.',
  },
  {
    title: 'Restos de alimentos',
    description:
      'Pequenos resíduos de alimentos que chegam à caixa podem se juntar à gordura acumulada e aumentar o volume de material retido.',
  },
  {
    title: 'Falta de limpeza periódica',
    description:
      'Quando os resíduos não são removidos regularmente, a caixa pode perder capacidade de retenção e apresentar problemas de funcionamento.',
  },
  {
    title: 'Uso intenso da cozinha',
    description:
      'Restaurantes, lanchonetes e cozinhas comerciais podem gerar grandes volumes de gordura, exigindo atenção especial à manutenção.',
  },
  {
    title: 'Obstrução na tubulação',
    description:
      'A gordura também pode se acumular nos trechos de encanamento conectados à caixa, provocando dificuldade de escoamento.',
  },
  {
    title: 'Problemas na estrutura da caixa',
    description:
      'Tampas danificadas, acesso inadequado ou problemas na instalação podem dificultar a manutenção e prejudicar o funcionamento do sistema.',
  },
]

const methods = [
  {
    icon: ClipboardCheck,
    title: 'Avaliação da caixa',
    description:
      'Verificamos as condições de acesso, o nível de resíduos acumulados e a situação geral da caixa de gordura.',
  },
  {
    icon: Container,
    title: 'Retirada dos resíduos',
    description:
      'Realizamos a remoção da gordura e dos materiais retidos no interior da caixa, conforme as condições encontradas no local.',
  },
  {
    icon: Droplets,
    title: 'Limpeza e verificação',
    description:
      'Após a remoção dos resíduos, verificamos as condições da caixa e do escoamento para identificar possíveis problemas adicionais.',
  },
]

const benefits = [
  {
    icon: Clock3,
    title: 'Atendimento 24 horas',
    description:
      'Atendimento para limpeza e desentupimento durante o dia, à noite, fins de semana e feriados.',
  },
  {
    icon: MapPin,
    title: 'Visita técnica em até 30 minutos',
    description:
      'Agilidade para avaliar presencialmente o problema e orientar sobre o serviço necessário.',
  },
  {
    icon: Handshake,
    title: 'Visita gratuita e orçamento sem compromisso',
    description:
      'Você recebe a avaliação e o orçamento antes de decidir pela contratação.',
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
      'Serviços para casas, apartamentos, restaurantes, cozinhas comerciais, empresas e condomínios.',
  },
]

const faqs = [
  {
    question: 'A Horizonte realiza limpeza de caixa de gordura 24 horas?',
    answer:
      'Sim. A Horizonte Desentupidora oferece atendimento 24 horas para limpeza e desentupimento de caixas de gordura em Belo Horizonte e Região Metropolitana.',
  },
  {
    question: 'Vocês fazem limpeza de caixa de gordura residencial?',
    answer:
      'Sim. Atendemos casas e apartamentos que precisam de limpeza ou desentupimento de caixa de gordura.',
  },
  {
    question: 'A Horizonte atende restaurantes e cozinhas comerciais?',
    answer:
      'Sim. Realizamos atendimento para restaurantes, lanchonetes, cozinhas comerciais, empresas e condomínios.',
  },
  {
    question: 'Como saber se a caixa de gordura está cheia?',
    answer:
      'Acúmulo visível de resíduos, mau cheiro, dificuldade de escoamento e entupimentos recorrentes podem indicar que a caixa precisa de avaliação e limpeza.',
  },
  {
    question: 'Com que frequência a caixa de gordura deve ser limpa?',
    answer:
      'A frequência depende do tamanho da caixa e do volume de utilização. Cozinhas comerciais com uso intenso podem precisar de manutenção mais frequente. O acompanhamento do acúmulo ajuda a identificar o momento adequado.',
  },
  {
    question: 'O que acontece se eu não limpar a caixa de gordura?',
    answer:
      'O acúmulo excessivo de gordura e resíduos pode reduzir a capacidade de retenção, provocar mau cheiro e contribuir para obstruções e dificuldades de escoamento.',
  },
  {
    question: 'A visita técnica para limpeza é gratuita?',
    answer:
      'Sim. A visita técnica presencial para avaliação do problema é gratuita.',
  },
  {
    question: 'Em quanto tempo a equipe chega?',
    answer:
      'Nossa visita técnica é realizada em até 30 minutos. Entre em contato pelo telefone ou WhatsApp para solicitar atendimento.',
  },
  {
    question: 'O orçamento é apresentado antes da limpeza?',
    answer:
      'Sim. Após avaliar o local e a necessidade do serviço, apresentamos o orçamento antes da execução. O trabalho só começa após sua aprovação.',
  },
  {
    question: 'O orçamento é sem compromisso?',
    answer:
      'Sim. Você pode analisar o orçamento e decidir se deseja contratar o serviço.',
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

export default function LimpezaCaixaGorduraPage() {
  return (
    <>
      <SiteHeader />

      <main>
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
                  Caixa de gordura
                </span>
              </nav>

              <span className="inline-flex rounded-full bg-brand-orange/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange ring-1 ring-brand-orange/30">
                Desentupidora 24 horas em BH
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Limpeza de caixa de gordura em BH: atendimento residencial e comercial
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                Caixa de gordura cheia, mau cheiro ou dificuldade de
                escoamento? A Horizonte realiza limpeza e desentupimento
                de caixas de gordura em casas, apartamentos, restaurantes,
                cozinhas comerciais e condomínios.
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
                src="/images/servico-caixa-gordura.webp"
                alt="Técnico da Horizonte realizando limpeza de caixa de gordura"
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

        {/* QUEM PRECISA DO SERVIÇO */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Limpeza residencial e comercial
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Limpeza de caixa de gordura para diferentes tipos de imóvel
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                A caixa de gordura precisa de manutenção para continuar
                funcionando corretamente. O volume de resíduos varia
                conforme a utilização da cozinha e as características
                de cada instalação.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <article className="rounded-xl border border-black/8 bg-brand-gray p-6">
                <Home className="size-9 text-brand-orange" aria-hidden="true" />

                <h3 className="mt-4 text-xl font-bold text-brand-ink">
                  Casas e apartamentos
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                  Limpeza de caixas de gordura residenciais, com atenção
                  ao acúmulo de resíduos, mau cheiro e dificuldades
                  de escoamento na cozinha.
                </p>
              </article>

              <article className="rounded-xl border border-black/8 bg-brand-gray p-6">
                <Utensils className="size-9 text-brand-orange" aria-hidden="true" />

                <h3 className="mt-4 text-xl font-bold text-brand-ink">
                  Restaurantes e cozinhas
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                  Atendimento para cozinhas profissionais, lanchonetes
                  e estabelecimentos que lidam diariamente com maior
                  volume de gordura e resíduos.
                </p>
              </article>

              <article className="rounded-xl border border-black/8 bg-brand-gray p-6">
                <Store className="size-9 text-brand-orange" aria-hidden="true" />

                <h3 className="mt-4 text-xl font-bold text-brand-ink">
                  Empresas e condomínios
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                  Atendimento para imóveis comerciais e condomínios
                  que precisam manter suas instalações em boas
                  condições de funcionamento.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SINTOMAS */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Identifique o problema
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Como saber se a caixa de gordura precisa de limpeza?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                Nem sempre o problema aparece de uma vez. Alguns sinais
                indicam que os resíduos estão se acumulando e que chegou
                o momento de avaliar a necessidade de limpeza.
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

            <div className="mt-8 rounded-xl border border-brand-orange/20 bg-white p-6">
              <h3 className="text-lg font-bold text-brand-ink">
                Não espere a caixa transbordar para procurar atendimento
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
                Quando há acúmulo excessivo, podem surgir mau cheiro,
                retorno de água e dificuldades de escoamento. A avaliação
                e a limpeza no momento adequado ajudam a evitar que
                o problema se agrave.
              </p>
            </div>
          </div>
        </section>

        {/* CAUSAS */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Entenda o funcionamento
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Por que a caixa de gordura acumula resíduos?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                A caixa de gordura retém parte da gordura presente
                na água que vem da pia e da cozinha, evitando que
                todo esse material siga diretamente para a tubulação.
                Com o uso, os resíduos retidos se acumulam e precisam
                ser removidos.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {causes.map((cause) => (
                <article
                  key={cause.title}
                  className="rounded-xl border border-black/8 bg-brand-gray p-6"
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

            <div className="mt-8 rounded-xl bg-brand-navy p-6 text-white md:p-8">
              <h3 className="text-xl font-bold">
                Um cuidado simples que faz diferença
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Evite despejar óleo de cozinha diretamente na pia.
                Armazene o óleo usado em recipiente adequado para
                descarte e retire restos de alimentos dos utensílios
                antes de lavá-los. Esses cuidados ajudam a reduzir
                a quantidade de resíduos encaminhados à caixa.
              </p>
            </div>
          </div>
        </section>

        {/* COMO É FEITA A LIMPEZA */}
        <section className="bg-brand-gray py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
                Atendimento técnico
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
                Como funciona a limpeza de caixa de gordura?
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                O serviço começa pela avaliação do local e das condições
                de acesso à caixa. A equipe verifica o acúmulo de resíduos
                e define o procedimento adequado para realizar a limpeza.
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
                  src="/images/servico-caixa-gordura.webp"
                  alt="Serviço de limpeza de caixa de gordura realizado pela equipe da Horizonte"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-ink">
                  Limpeza adequada para cada instalação
                </h3>

                <p className="mt-4 text-base leading-relaxed text-brand-ink/70">
                  O procedimento depende do tamanho da caixa,
                  da quantidade de gordura acumulada e das condições
                  de acesso. Por isso, a avaliação presencial é
                  importante para definir o serviço necessário.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-brand-ink/70">
                  Caso também exista uma obstrução na tubulação
                  conectada à caixa, a equipe poderá avaliar
                  a necessidade de um procedimento adicional
                  e apresentar as condições antes da execução.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PREVENÇÃO */}
        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Cuidados preventivos
            </span>

            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Como evitar problemas na caixa de gordura?
            </h2>

            <p className="mt-4 max-w-3xl leading-relaxed text-brand-ink/70 md:text-lg">
              Alguns cuidados na rotina da cozinha ajudam a reduzir
              o acúmulo de resíduos e a prevenir dificuldades
              de escoamento.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                'Não despeje óleo de cozinha diretamente na pia.',
                'Retire restos de alimentos dos pratos antes de lavá-los.',
                'Observe o nível de resíduos acumulados na caixa.',
                'Faça a limpeza de acordo com o volume de utilização.',
                'Fique atento a sinais de mau cheiro e escoamento lento.',
                'Procure avaliação profissional quando o problema se repetir.',
              ].map((tip) => (
                <div
                  key={tip}
                  className="flex items-start gap-3 rounded-xl border border-black/5 bg-brand-gray p-5"
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
                Você sabe o que será feito e quanto vai custar
                antes de autorizar o serviço. Nosso atendimento
                é organizado para oferecer clareza desde
                o primeiro contato.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: '01',
                  title: 'Entre em contato',
                  text: 'Ligue ou envie uma mensagem pelo WhatsApp e informe o tipo de imóvel e o problema.',
                },
                {
                  number: '02',
                  title: 'Visita técnica gratuita',
                  text: 'Nossa equipe realiza a avaliação presencial em até 30 minutos.',
                },
                {
                  number: '03',
                  title: 'Orçamento sem compromisso',
                  text: 'Você recebe o orçamento e conhece as condições do serviço antes de contratar.',
                },
                {
                  number: '04',
                  title: 'Execução após aprovação',
                  text: 'Com sua autorização, realizamos a limpeza com garantia e emissão de nota fiscal.',
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
              Nenhum serviço é iniciado sem a sua aprovação do orçamento.
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
                Sua caixa de gordura merece um atendimento profissional
              </h2>

              <p className="mt-4 leading-relaxed text-brand-ink/70 md:text-lg">
                Fundada em 2023, a Horizonte Desentupidora atende
                Belo Horizonte e Região Metropolitana com foco
                em agilidade, transparência e soluções para
                problemas de entupimento e limpeza.
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
                  A Horizonte realiza limpeza de caixas de gordura
                  em Belo Horizonte e cidades próximas, atendendo
                  casas, apartamentos, restaurantes, empresas
                  e condomínios.
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
                  Solicite uma visita técnica gratuita
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  Precisa de limpeza de caixa de gordura?
                  Converse com a Horizonte, explique sua necessidade
                  e receba um orçamento sem compromisso.
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
              Caixa de gordura cheia? Solicite a limpeza com a Horizonte!
            </h2>

            <p className="mt-4 text-base leading-relaxed text-brand-ink/70 md:text-lg">
              Atendemos residências, restaurantes, cozinhas comerciais
              e condomínios em Belo Horizonte e região. Solicite
              sua visita técnica gratuita, receba o orçamento
              sem compromisso e decida com tranquilidade.
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
