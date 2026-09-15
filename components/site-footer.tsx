import { Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, CNPJ, COMPANY_NAME } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-brand-ink py-10 pb-28 text-white/80 md:pb-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <img
          src="/images/logo-horizonte.png"
          alt={`Logo ${COMPANY_NAME}`}
          className="h-14 w-auto rounded-md bg-white p-2"
        />
        <p className="mt-4 max-w-md text-sm">
          Desentupimento 24 horas em Belo Horizonte e Região Metropolitana.
        </p>

        <a
          href={PHONE_TEL}
          className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-white"
        >
          <Phone className="size-5 text-brand-orange" aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>

        
          <p>Área de atendimento sujeita à disponibilidade operacional.</p>
          <p className="text-sm font-semibold text-white/80">
            Todos os direitos reservados — {COMPANY_NAME}
          </p>
          <p className="text-sm font-semibold text-white/80">CNPJ: {CNPJ}</p>
        </div>
      </div>
    </footer>
  )
}
