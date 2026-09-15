import { Phone, Clock } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, COMPANY_NAME } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-brand-navy text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2.5" aria-label={COMPANY_NAME}>
         <span className="flex items-center justify-center">
            <img
              src="/images/logo-horizonte.png"
              alt={`Logo ${COMPANY_NAME}`}
              className="h-11 w-auto md:h-14"
            />
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 text-sm font-medium text-white/80 lg:flex"
        >
          <a href="#servicos" className="transition-colors hover:text-white">
            Serviços
          </a>
          <a href="#como-funciona" className="transition-colors hover:text-white">
            Como funciona
          </a>
          <a href="#areas" className="transition-colors hover:text-white">
            Áreas atendidas
          </a>
          <a href="#contato" className="transition-colors hover:text-white">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <span className="flex items-center justify-end gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-orange">
              <Clock className="size-3.5" aria-hidden="true" />
              Atendimento 24 horas
            </span>
            <a
              href={PHONE_TEL}
              className="text-base font-bold leading-tight text-white"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <a
            href={PHONE_TEL}
            aria-label={`Ligar agora para ${COMPANY_NAME} ${PHONE_DISPLAY}`}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-4 py-2.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/50"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">LIGAR AGORA</span>
            <span className="sm:hidden">LIGAR</span>
          </a>
        </div>
      </div>
    </header>
  )
}
