
import {
  Toilet,
  Droplets,
  CircleDot,
  Waves,
  Gauge,
  Container,
  Phone,
  MessageCircle,
} from 'lucide-react'

import { PHONE_TEL, WHATSAPP_URL } from '@/lib/site'

const services = [
  {
    icon: Toilet,
    title: 'Desentupimento de vaso sanitário',
    description:
      'Vaso sanitário entupido, água que não desce ou risco de transbordamento? Realizamos desentupimentos em residências, empresas e condomínios.',
    image: '/images/servico-vaso.webp',
    imageAlt:
      'Técnico da Horizonte realizando desentupimento de vaso sanitário com equipamento profissional.',
  },
  {
    icon: Droplets,
    title: 'Desentupimento de pia',
    description:
      'Desentupimento de pias de cozinha, banheiro e área de serviço. Atendimento para água acumulada, escoamento lento e tubulações obstruídas.',
    image: '/images/servico-pia.webp',
    imageAlt:
      'Técnicos realizando desentupimento de pia de cozinha com máquina rotativa.',
  },
  {
    icon: CircleDot,
    title: 'Desentupimento de ralos',
    description:
      'Atendimento para ralos entupidos em banheiros, quintais e áreas externas, incluindo problemas de mau cheiro e dificuldade no escoamento da água.',
    image: '/images/servico-ralo.webp',
    imageAlt:
      'Técnico realizando desentupimento de ralo com equipamento profissional.',
  },
  {
    icon: Waves,
    title: 'Desentupimento de rede de esgoto',
    description:
      'Soluções para obstruções em redes de esgoto e tubulações, incluindo situações de retorno de água e dificuldade no escoamento.',
    image: '/images/servico-rede-esgoto.webp',
    imageAlt:
      'Equipe realizando desentupimento de rede de esgoto em poço de visita.',
  },
  {
    icon: Gauge,
    title: 'Hidrojateamento de tubulações',
    description:
      'Limpeza e desobstrução de tubulações por hidrojateamento, utilizando jatos de água em alta pressão para auxiliar na remoção de resíduos.',
    image: '/images/servico-hidrojateamento.webp',
    imageAlt:
      'Técnico realizando hidrojateamento de alta pressão em tubulação externa.',
  },
  {
    icon: Container,
    title: 'Limpeza e desentupimento de caixa de gordura',
    description:
      'Limpeza de caixas de gordura com acúmulo de resíduos, mau cheiro, dificuldade de escoamento ou risco de transbordamento.',
    image: null,
    imageAlt: '',
  },
]

function getWhatsappLink(serviceTitle: string) {
  const message = `Olá! Gostaria de solicitar um orçamento para ${serviceTitle}.`

  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

export function Services() {
  return (
    <section id="servicos" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Serviços de desentupimento em Belo Horizonte e Região
          </h2>

          <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
            A Horizonte Desentupidora oferece atendimento para diferentes
            tipos de entupimento em residências, empresas e condomínios.
            Conheça nossos serviços e solicite seu orçamento.
          </p>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(
            ({ icon: Icon, title, description, image, imageAlt }) => (
              <li
                key={title}
                className="flex flex-col overflow-hidden rounded-xl border border-black/8 bg-brand-gray transition-colors hover:border-brand-orange/40"
              >
                {image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-navy">
                    <img
                      src={image}
                      alt={imageAlt}
                      className="size-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />

                    <span className="absolute left-3 top-3 flex size-10 items-center justify-center rounded-md bg-brand-navy/90 text-brand-orange backdrop-blur-sm">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] w-full items-center justify-center bg-brand-navy">
                    <span className="flex size-16 items-center justify-center rounded-xl bg-white/10 text-brand-orange">
                      <Icon className="size-8" aria-hidden="true" />
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold leading-snug text-brand-ink">
                    {title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink/70">
                    {description}
                  </p>

                  <a
                    href={getWhatsappLink(title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Solicitar orçamento para ${title} pelo WhatsApp`}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-navy px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-navy/40"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    SOLICITAR ORÇAMENTO
                  </a>
                </div>
              </li>
            ),
          )}
        </ul>

        <div className="mt-10 flex justify-center">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-4 text-base font-bold tracking-wide text-white transition-colors hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/50"
          >
            <Phone className="size-5" aria-hidden="true" />
            PRECISA DE AJUDA? LIGAR AGORA
          </a>
        </div>
      </div>
    </section>
  )
}
