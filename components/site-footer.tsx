import Link from 'next/link'
import { Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, CNPJ, COMPANY_NAME } from '@/lib/site'

const serviceLinks = [
  { label: 'Vaso sanitário', href: '/servicos/desentupimento-de-vaso-sanitario' },
  { label: 'Pia', href: '/servicos/desentupimento-de-pia' },
  { label: 'Ralo', href: '/servicos/desentupimento-de-ralo' },
  { label: 'Rede de esgoto', href: '/servicos/desentupimento-de-rede-de-esgoto' },
  { label: 'Caixa de gordura', href: '/servicos/limpeza-de-caixa-de-gordura' },
  { label: 'Hidrojateamento', href: '/servicos/hidrojateamento' },
]

export function SiteFooter() {
  return (
    <footer className="bg-brand-ink py-10 pb-28 text-white/80 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.4fr_1fr] md:px-6">
        <div>
          <img
            src="/images/logo-prumo.svg"
            alt={`Logo ${COMPANY_NAME}`}
            width={388}
            height={100}
            className="h-12 w-auto"
          />

          <p className="mt-4 max-w-md text-sm">
            Desentupidora 24 horas em Belo Horizonte e região metropolitana.
          </p>

          <a
            href={PHONE_TEL}
            className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-white"
          >
            <Phone className="size-5 text-brand-orange" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <nav aria-label="Serviços">
          <p className="text-sm font-bold text-white">Serviços</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {serviceLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-1 border-t border-white/10 pt-6 text-xs text-white/55 md:col-span-2">
          <p>
            {COMPANY_NAME} · CNPJ {CNPJ}
          </p>
          <p>Área de atendimento sujeita à disponibilidade da equipe.</p>
        </div>
      </div>
    </footer>
  )
}
