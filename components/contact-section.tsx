import { Phone, ShieldCheck, ClipboardCheck } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'
import { CallButton, WhatsAppButton } from '@/components/cta-buttons'

export function ContactSection() {
  return (
    <section id="contato" className="bg-brand-gray py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
              Precisa de atendimento?
            </h2>
            <p className="mt-3 text-base text-brand-ink/70 md:text-lg">
              Entre em contato com a Horizonte Desentupidora e explique o que
              está acontecendo. O atendimento é rápido e você fala direto com a
              equipe.
            </p>

            <a
              href={PHONE_TEL}
              className="mt-6 flex items-center gap-3 text-3xl font-extrabold text-brand-navy md:text-4xl"
            >
              <Phone className="size-7 text-brand-orange" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton className="bg-brand-orange" />
              <WhatsAppButton className="border-brand-navy/20 bg-brand-navy text-white hover:bg-brand-blue" />
            </div>

            <div className="mt-8 rounded-lg border border-black/8 bg-white p-5">
              <h3 className="text-base font-bold text-brand-ink">
                Formas de pagamento
              </h3>
              <p className="mt-1 text-sm text-brand-ink/70">
                Consulte as opções disponíveis no atendimento.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Pix', 'Dinheiro', 'Cartão de débito', 'Cartão de crédito', 'Transferência'].map(
                  (method) => (
                    <span
                      key={method}
                      className="rounded-md bg-brand-gray px-3 py-1.5 text-xs font-semibold text-brand-ink/80"
                    >
                      {method}
                    </span>
                  ),
                )}
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
                Visita técnica sem custo para o cliente
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-ink/75">
                Nossa equipe vai até o local avaliar o problema sem cobrar pela
                visita. Você não paga nada para receber a avaliação.
              </p>
            </div>

            <div className="rounded-xl border border-black/8 bg-white p-6 shadow-sm md:p-8">
              <h3 className="flex items-start gap-3 text-lg font-bold text-brand-ink">
                <ClipboardCheck
                  className="mt-0.5 size-6 shrink-0 text-brand-orange"
                  aria-hidden="true"
                />
                Orçamento antes de executar
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-ink/75">
                Após avaliar o problema, apresentamos o orçamento com clareza. O
                serviço só é executado depois da sua aprovação, sem surpresas no
                valor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
