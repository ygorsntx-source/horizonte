
import Image from 'next/image'
import {
  Phone,
  ShieldCheck,
  MapPin,
  Clock3,
  FileText,
  BadgeCheck,
  Handshake,
} from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site'
import { CallButton } from '@/components/cta-buttons'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-desentupimento.webp"
          alt="Equipe da Horizonte Desentupidora realizando serviço de desentupimento"
          fill
          preload
          sizes="100vw"
          className="object-cover opacity-30"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
        <div className="max-w-2xl">

          <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange ring-1 ring-brand-orange/30">
            Desentupidora 24 horas em BH e Região
          </span>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Entupiu? Chame a Horizonte Desentupidora!
          </h1>

          <p className="mt-4 text-lg font-medium text-white/90 md:text-2xl">
            Desentupidora 24 horas em Belo Horizonte e Região Metropolitana,
            especializada em soluções rápidas para residências, empresas e
            condomínios.
          </p>

          <p className="mt-3 text-base text-white/70 md:text-lg">
            Desentupimento de vaso sanitário, pia, ralo, caixa de gordura,
            rede de esgoto e serviços de hidrojateamento.
          </p>

          <a
            href={PHONE_TEL}
            className="mt-6 flex items-center gap-2 text-2xl font-extrabold text-white md:text-3xl"
          >
            <Phone className="size-6 text-brand-orange" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CallButton />
          </div>

          <div className="mt-6 flex flex-col gap-3 text-sm text-white/80">

            <span className="flex items-center gap-2">
              <Clock3
                className="size-4 shrink-0 text-brand-orange"
                aria-hidden="true"
              />
              Visita técnica rápida em até 30 minutos.
            </span>

            <span className="flex items-center gap-2">
              <Handshake
                className="size-4 shrink-0 text-brand-orange"
                aria-hidden="true"
              />
              Visita técnica gratuita e orçamento sem compromisso.
            </span>

            <span className="flex items-center gap-2">
              <BadgeCheck
                className="size-4 shrink-0 text-brand-orange"
                aria-hidden="true"
              />
              Serviços com garantia.
            </span>

            <span className="flex items-center gap-2">
              <FileText
                className="size-4 shrink-0 text-brand-orange"
                aria-hidden="true"
              />
              Emissão de nota fiscal.
            </span>

            <span className="flex items-center gap-2">
              <ShieldCheck
                className="size-4 shrink-0 text-brand-orange"
                aria-hidden="true"
              />
              Orçamento apresentado antes da execução do serviço.
            </span>

            <span className="flex items-center gap-2">
              <MapPin
                className="size-4 shrink-0 text-brand-orange"
                aria-hidden="true"
              />
              Atendimento em Belo Horizonte e Região Metropolitana.
            </span>

          </div>
        </div>
      </div>
    </section>
  )
}
