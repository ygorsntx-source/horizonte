import { Toilet, Droplets, CircleDot, Waves, Container, Gauge, Phone } from 'lucide-react'
import { PHONE_TEL } from '@/lib/site'

const services = [
  {
    icon: Toilet,
    title: 'Desentupimento de vaso sanitário',
    description:
      'Desentupimento de vasos sanitários em residências, empresas e condomínios.',
    image: '/images/servico-vaso.webp',
    imageAlt:
      'Técnico da Horizonte desentupindo um vaso sanitário com equipamento profissional.',
  },
  {
    icon: Droplets,
    title: 'Desentupimento de pia',
    description:
      'Desobstrução de pias de cozinha, banheiro e áreas de serviço.',
    image: '/images/servico-pia.webp',
    imageAlt:
      'Dois técnicos da Horizonte desentupindo a pia de uma cozinha com máquina rotativa.',
  },
  {
    icon: CircleDot,
    title: 'Desentupimento de ralo',
    description:
      'Desentupimento de ralos com dificuldade de escoamento ou acúmulo de resíduos.',
    image: '/images/servico-ralo.webp',
    imageAlt:
      'Técnico da Horizonte desobstruindo um ralo com equipamento RIDGID.',
  },
  {
    icon: Waves,
    title: 'Desentupimento de rede de esgoto',
    description:
      'Atendimento para obstruções em redes de esgoto e tubulações.',
    image: '/images/servico-rede-esgoto.webp',
    imageAlt:
      'Equipe da Horizonte desentupindo uma rede de esgoto em poço de visita com caminhão a vácuo.',
  },
  
  {
    icon: Gauge,
    title: 'Hidrojateamento',
    description:
      'Limpeza e desobstrução de tubulações por hidrojateamento, conforme avaliação e disponibilidade.',
    image: '/images/servico-hidrojateamento.webp',
    imageAlt:
      'Técnico da Horizonte realizando hidrojateamento de alta pressão em tubulação externa.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Resolva o entupimento sem complicação
          </h2>
          <p className="mt-3 text-base text-brand-ink/70 md:text-lg">
            Conte com a Horizonte para diferentes tipos de desentupimento.
          </p>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, image, imageAlt }) => (
            <li
              key={title}
              className="flex flex-col overflow-hidden rounded-xl border border-black/8 bg-brand-gray transition-colors hover:border-brand-orange/40"
            >
              {image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-navy">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={imageAlt}
                    className="size-full object-cover"
                    loading="lazy"
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
                <h3 className="text-base font-bold text-brand-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-ink/70">
                  {description}
                </p>
              </div>
            </li>
          ))}
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
