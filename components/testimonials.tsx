
'use client'

import { useEffect, useRef } from 'react'

const ELFSIGHT_APP_ID = '422b7763-a128-4fed-93f5-974740e6f33c'
const ELFSIGHT_SCRIPT_ID = 'elfsight-platform-script'

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const loadElfsight = () => {
      const existingScript = document.getElementById(ELFSIGHT_SCRIPT_ID)

      if (existingScript) return

      const script = document.createElement('script')
      script.id = ELFSIGHT_SCRIPT_ID
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true

      document.body.appendChild(script)
    }

    if (!('IntersectionObserver' in window)) {
      loadElfsight()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isNearViewport = entries.some(
          (entry) => entry.isIntersecting,
        )

        if (isNearViewport) {
          loadElfsight()
          observer.disconnect()
        }
      },
      {
        rootMargin: '600px 0px',
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="avaliacoes"
      className="bg-white py-14 md:py-20"
    >
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
          <div
            className={`elfsight-app-${ELFSIGHT_APP_ID}`}
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  )
}
