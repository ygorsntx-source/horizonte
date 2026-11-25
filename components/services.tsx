import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/site'

const services = [
  {
    title: 'Vaso sanitário',
    description: 'Vaso entupido, água subindo ou demorando pra descer.',
    image: '/images/servico-vaso.webp',
    imageAlt: 'Desentupimento de vaso sanitário feito pela Prumo',
    href: '/servicos/desentupimento-de-vaso-sanitario',
  },
  {
    title: 'Pia',
    description:
      'Pia da cozinha, do banheiro ou do tanque com água parada ou descendo devagar.',
    image: '/images/servico-pia.webp',
    imageAlt: 'Desentupimento de pia de cozinha com máquina',
    href: '/servicos/desentupimento-de-pia',
  },
  {
    title: 'Ralo',
    description:
      'Ralo do banheiro, da área ou do quintal entupido ou com cheiro ruim.',
    image: '/images/servico-ralo.webp',
    imageAlt: 'Desentupimento de ralo',
    href: '/servicos/desentupimento-de-ralo',
  },
  {
    title: 'Rede de esgoto',
    description:
      'Esgoto voltando pelo ralo ou pelo vaso, ou caixa de inspeção transbordando.',
    image: '/images/servico-rede-esgoto.webp',
    imageAlt: 'Desentupimento de rede de esgoto',
    href: '/servicos/desentupimento-de-rede-de-esgoto',
  },
  {
    title: 'Caixa de gordura',
    description: 'Caixa de gordura cheia, transbordando ou com mau cheiro.',
    image: '/images/servico-caixa-gordura.webp',
    imageAlt: 'Limpeza de caixa de gordura',
    href: '/servicos/limpeza-de-caixa-de-gordura',
  },
  {
    title: 'Hidrojateamento',
    description:
      'Jato de água em alta pressão pra limpar cano com gordura e sujeira acumulada.',
    image: '/images/servico-hidrojateamento.webp',
    imageAlt: 'Hidrojateamento de tubulação',
    href: '/servicos/hidrojateamento',
  },
]

function whatsappLink(service: string) {
  const message = `Olá! Preciso de um orçamento: ${service.toLowerCase()}.`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

export function Services() {
  return (
    <section id="servicos" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            O que a gente desentope
          </h2>

          <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
            Em casa, no comércio ou no condomínio. Escolha o problema pra ver
            como a gente resolve.
          </p>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, image, imageAlt, href }) => (
            <li
              key={title}
              className="group flex flex-col overflow-hidden rounded-xl border border-black/8 bg-white transition-colors hover:border-brand-orange/50"
            >
              <Link href={href} className="relative block aspect-[4/3] w-full overflow-hidden bg-brand-navy">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 355px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                  quality={75}
                />
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold text-brand-ink">
                  <Link href={href} className="hover:text-brand-orange-dark">
                    {title}
                  </Link>
                </h3>

                <p className="mt-2 flex-1 text-base leading-relaxed text-brand-ink/70">
                  {description}
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm font-semibold">
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-brand-navy hover:text-brand-orange-dark"
                  >
                    Como a gente resolve
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>

                  <a
                    href={whatsappLink(title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-ink/60 underline-offset-2 hover:text-brand-ink hover:underline"
                  >
                    Pedir orçamento
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
