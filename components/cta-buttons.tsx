import { Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PHONE_TEL, WHATSAPP_URL } from '@/lib/site'

type Props = {
  className?: string
  label?: string
  full?: boolean
}

export function CallButton({ className, label = 'LIGAR AGORA', full }: Props) {
  return (
    <a
      href={PHONE_TEL}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-6 py-4 text-base font-bold tracking-wide text-white shadow-sm transition-colors hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-orange/50',
        full && 'w-full',
        className,
      )}
    >
      <Phone className="size-5" aria-hidden="true" />
      {label}
    </a>
  )
}

export function WhatsAppButton({
  className,
  label = 'FALAR PELO WHATSAPP',
  full,
}: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/25 bg-white/10 px-6 py-4 text-base font-bold tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/40',
        full && 'w-full',
        className,
      )}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {label}
    </a>
  )
}
