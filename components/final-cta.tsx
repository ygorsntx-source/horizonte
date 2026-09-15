import { Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'
import { CallButton, WhatsAppButton } from '@/components/cta-buttons'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white md:py-24">
      <div
        className="absolute -right-24 -top-24 size-72 rounded-full bg-brand-orange/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Não deixe o entupimento piorar.
        </h2>
        <p className="mt-4 text-lg text-white/80 md:text-xl">
          Fale agora com a Horizonte Desentupidora.
        </p>

        <a
          href={PHONE_TEL}
          className="mt-6 inline-flex items-center gap-3 text-3xl font-extrabold text-white md:text-4xl"
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
