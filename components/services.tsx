import Image from 'next/image'
import Link from 'next/link'
import {
  Toilet,
  Droplets,
  CircleDot,
  Waves,
  Gauge,
  Container,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

const services = [
  {
    icon: Toilet,
    title: 'Desentupimento de vaso sanitário',
    description:
      'Vaso entupido, com a água subindo ou descendo devagar? Desobstruímos o vaso e a tubulação ligada a ele com máquina e equipamentos profissionais, em casas, apartamentos, empresas e condomínios.',
    image: '/images/servico-vaso.webp',
    imageAlt: 'Técnico da Prumo desentupindo vaso sanitário com máquina',
    href: '/servicos/desentupimento-de-vaso-sanitario',
  },
  {
    icon: Droplets,
    title: 'Desentupimento de pia',
    description:
      'Pia da cozinha, do banheiro ou do tanque com água parada, escoamento lento ou mau cheiro. Removemos a gordura e os resíduos acumulados no sifão e na tubulação para a água voltar a descer.',
    image: '/images/servico-pia.webp',
    imageAlt: 'Técnicos da Prumo desentupindo pia de cozinha com máquina rotativa',
    href: '/servicos/desentupimento-de-pia',
  },
  {
    icon: CircleDot,
    title: 'Desentupimento de ralo',
    description:
      'Ralos de banheiro, área de serviço, quintal e garagem entupidos ou com cheiro de esgoto. Desobstruímos o ralo e a ligação com a rede para a água escoar normalmente.',
    image: '/images/servico-ralo.webp',
    imageAlt: 'Técnico da Prumo desentupindo ralo com equipamento profissional',
    href: '/servicos/desentupimento-de-ralo',
  },
  {
    icon: Waves,
    title: 'Desentupimento de rede de esgoto',
    description:
      'Esgoto voltando pelo ralo ou pelo vaso, caixa de inspeção transbordando ou entupimentos que se repetem. Localizamos o ponto da obstrução e desentupimos a rede da casa, do prédio ou do comércio.',
    image: '/images/servico-rede-esgoto.webp',
    imageAlt: 'Equipe da Prumo desentupindo rede de esgoto',
    href: '/servicos/desentupimento-de-rede-de-esgoto',
  },
  {
    icon: Container,
    title: 'Limpeza de caixa de gordura',
    description:
      'Caixa de gordura cheia, transbordando ou com mau cheiro. Fazemos a limpeza e o desentupimento em residências, restaurantes, lanchonetes e condomínios.',
    image: '/images/servico-caixa-gordura.webp',
    imageAlt: 'Técnico da Prumo fazendo limpeza de caixa de gordura',
    href: '/servicos/limpeza-de-caixa-de-gordura',
  },
  {
    icon: Gauge,
    title: 'Hidrojateamento de tubulações',
    description:
      'Limpeza de canos com jato de água em alta pressão, indicada para gordura, lodo e resíduos grudados na tubulação. Muito usado em condomínios, comércios e redes com entupimento frequente.',
    image: '/images/servico-hidrojateamento.webp',
    imageAlt: 'Técnico da Prumo fazendo hidrojateamento de alta pressão em tubulação',
    href: '/servicos/hidrojateamento',
  },
]

function whatsappLink(service: string) {
  const message = `Olá! Gostaria de um orçamento para ${service.toLowerCase()}.`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

export function Services() {
  return (
    <section id="servicos" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
            Nossos serviços
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Serviços de desentupimento em Belo Horizonte e Região
          </h2>

          <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
            Atendemos entupimentos em residências, comércios, empresas e
            condomínios, do ralo do banheiro à rede de esgoto do prédio. Veja
            como trabalhamos em cada caso.
          </p>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(
            ({ icon: Icon, title, description, image, imageAlt, href }) => (
              <li
                key={title}
                className="group flex flex-col overflow-hidden rounded-xl border border-black/8 bg-brand-gray transition-colors hover:border-brand-orange/40"
              >
                <Link
                  href={href}
                  className="relative block aspect-[4/3] w-full overflow-hidden bg-brand-navy"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 355px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                    quality={75}
                  />
                  <span className="absolute left-3 top-3 z-10 flex size-10 items-center justify-center rounded-md bg-brand-navy/90 text-brand-orange backdrop-blur-sm">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold leading-snug text-brand-ink">
                    <Link href={href} className="hover:text-brand-orange-dark">
                      {title}
                    </Link>
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink/75">
                    {description}
                  </p>

                  <div className="mt-5 grid gap-2">
                    <Link
                      href={href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-navy px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue"
                    >
                      Ver detalhes do serviço
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>

                    <a
                      href={whatsappLink(title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-brand-orange bg-white px-4 py-3 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-orange/10"
                    >
                      <MessageCircle className="size-4" aria-hidden="true" />
                      Pedir orçamento no WhatsApp
                    </a>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
