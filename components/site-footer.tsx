import Link from 'next/link'
import { Phone, MessageCircle, Camera, Play } from 'lucide-react'
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  CNPJ,
  COMPANY_NAME,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
} from '@/lib/site'

const serviceLinks = [
  { label: 'Vaso sanitário', href: '/servicos/desentupimento-de-vaso-sanitario' },
  { label: 'Pia', href: '/servicos/desentupimento-de-pia' },
  { label: 'Ralo', href: '/servicos/desentupimento-de-ralo' },
  { label: 'Rede de esgoto', href: '/servicos/desentupimento-de-rede-de-esgoto' },
  { label: 'Caixa de gordura', href: '/servicos/limpeza-de-caixa-de-gordura' },
  { label: 'Hidrojateamento', href: '/servicos/hidrojateamento' },
]

const channels = [
  { label: 'WhatsApp', detail: PHONE_DISPLAY, href: WHATSAPP_URL, icon: MessageCircle },
  { label: 'Instagram', detail: '@prumodesentupidorabh', href: INSTAGRAM_URL, icon: Camera },
  { label: 'YouTube', detail: '@PrumoDesentupidora', href: YOUTUBE_URL, icon: Play },
]

export function SiteFooter() {
  return (
    <footer className="bg-brand-ink py-10 pb-28 text-white/80 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.2fr_1fr_1fr] md:px-6">
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

        <div>
          <p className="text-sm font-bold text-white">Fale com a Prumo</p>
          <ul className="mt-3 space-y-2.5">
            {channels.map(({ label, detail, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm hover:text-white"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{label}</span>
                    <span className="block text-xs text-white/60">{detail}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-1 border-t border-white/10 pt-6 text-xs text-white/55 md:col-span-3">
          <p>
            {COMPANY_NAME} · CNPJ {CNPJ}
          </p>
          <p>Área de atendimento sujeita à disponibilidade da equipe.</p>
        </div>
      </div>
    </footer>
  )
}
