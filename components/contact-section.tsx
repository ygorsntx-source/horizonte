import { Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'
import { CallButton, WhatsAppButton } from '@/components/cta-buttons'

export function ContactSection() {
  return (
    <section id="contato" className="bg-brand-navy py-16 text-white md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Entupiu agora?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Liga ou chama no WhatsApp. Atendemos 24 horas e você fala direto com
          a equipe.
        </p>

        <a
          href={PHONE_TEL}
          className="mt-6 inline-flex items-center gap-3 text-3xl font-extrabold md:text-4xl"
        >
          <Phone className="size-7 text-brand-orange" aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>

        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <CallButton full />
          <WhatsAppButton full />
        </div>
      </div>
    </section>
  )
}
