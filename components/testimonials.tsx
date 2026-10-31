
import Script from 'next/script'

export function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            O que dizem nossos clientes
          </h2>

          <p className="mt-3 text-base text-brand-ink/70 md:text-lg">
            Avaliações reais de quem já contou com a Horizonte para resolver o
            entupimento.
          </p>
        </div>

        <div className="mt-8 w-full">
          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="afterInteractive"
          />

          <div
            className="elfsight-app-422b7763-a128-4fed-93f5-974740e6f33c"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  )
}
