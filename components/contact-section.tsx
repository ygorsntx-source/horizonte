import { Phone, ShieldCheck, ClipboardCheck } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'
import { CallButton, WhatsAppButton } from '@/components/cta-buttons'

const paymentMethods = [
  'Pix',
  'Cartão de crédito',
  'Cartão de débito',
  'Dinheiro',
  'Transferência',
]

export function ContactSection() {
  return (
    <section id="contato" className="bg-brand-gray py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Precisa de uma desentupidora agora?
            </h2>

            <p className="mt-3 text-base leading-relaxed text-brand-ink/70 md:text-lg">
              Ligue ou chame no WhatsApp a qualquer hora. Você fala direto com
              a equipe da Prumo e já recebe uma previsão de chegada.
            </p>

            <a
              href={PHONE_TEL}
              className="mt-6 flex items-center gap-3 text-3xl font-extrabold text-brand-navy md:text-4xl"
            >
              <Phone className="size-7 text-brand-orange" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <WhatsAppButton className="border-brand-navy/20 bg-brand-navy text-white hover:bg-brand-blue" />
            </div>

            <div className="mt-8 rounded-lg border border-black/8 bg-white p-5">
              <h3 className="text-base font-bold text-brand-ink">
                Formas de pagamento
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="rounded-md bg-brand-gray px-3 py-1.5 text-xs font-semibold text-brand-ink/80"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border-2 border-brand-orange/30 bg-white p-6 shadow-sm md:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-orange-dark">
                Sem custo
              </span>
              <h3 className="mt-4 flex items-start gap-3 text-2xl font-extrabold text-brand-ink md:text-3xl">
                <ShieldCheck
                  className="mt-0.5 size-8 shrink-0 text-brand-orange"
                  aria-hidden="true"
                />
                Visita técnica gratuita
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-ink/75">
                Nossa equipe vai até o local e avalia o problema sem cobrar pela
                visita. Se você não fechar o serviço, não paga nada.
              </p>
            </div>

            <div className="rounded-xl border border-black/8 bg-white p-6 shadow-sm md:p-8">
              <h3 className="flex items-start gap-3 text-lg font-bold text-brand-ink">
                <ClipboardCheck
                  className="mt-0.5 size-6 shrink-0 text-brand-orange"
                  aria-hidden="true"
                />
                Orçamento antes de começar
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-ink/75">
                Depois de avaliar, apresentamos o valor com clareza. O serviço
                só é feito com a sua aprovação, sem surpresa na hora de pagar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
