import { Phone, MessageCircle } from 'lucide-react'
import { PHONE_TEL, WHATSAPP_URL } from '@/lib/site'

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-navy/95 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="flex gap-2.5">
        <a
          href={PHONE_TEL}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-orange px-4 py-3.5 text-sm font-bold tracking-wide text-white"
        >
          <Phone className="size-5" aria-hidden="true" />
          LIGAR AGORA
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-white/25 bg-white/10 px-4 py-3.5 text-sm font-bold tracking-wide text-white"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          WHATSAPP
        </a>
      </div>
    </div>
  )
}
