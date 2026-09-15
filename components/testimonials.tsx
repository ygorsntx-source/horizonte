import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Paula R.',
    photo: '/images/depoimento-1.png',
    location: 'Belo Horizonte, MG',
    comment:
      'Vaso sanitário entupido de noite e resolveram no mesmo dia. Equipe educada e o serviço ficou limpo, sem sujeira pela casa.',
  },
  {
    name: 'Marcelo T.',
    photo: '/images/depoimento-2.png',
    location: 'Contagem, MG',
    comment:
      'Fizeram a visita, explicaram o problema e passaram o valor antes de começar. Sem surpresa na hora de pagar. Recomendo.',
  },
  {
    name: 'Juliana S.',
    photo: '/images/depoimento-3.png',
    location: 'Betim, MG',
    comment:
      'A pia da cozinha vivia entupindo. Vieram rápido, usaram máquina e resolveram de vez. Atendimento muito atencioso.',
  },
]

export function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            O que dizem nossos clientes
          </h2>
          <p className="mt-3 text-base text-brand-ink/70 md:text-lg">
            Avaliações de quem já contou com a Horizonte para resolver o
            entupimento.
          </p>
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map(({ name, photo, location, comment }) => (
            <li
              key={name}
              className="flex flex-col rounded-xl border border-black/8 bg-brand-gray p-6"
            >
              <Quote
                className="size-8 text-brand-orange/30"
                aria-hidden="true"
              />
              <div
                className="mt-3 flex gap-0.5 text-brand-orange"
                aria-label="Avaliação 5 de 5 estrelas"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-ink/80">
                {comment}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-black/8 pt-4">
                <img
                  src={photo || "/placeholder.svg"}
                  alt={`Foto de ${name}, cliente da Horizonte`}
                  className="size-11 shrink-0 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-bold text-brand-ink">{name}</p>
                  <p className="text-xs text-brand-ink/60">{location}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-brand-ink/50">
          
        </p>
      </div>
    </section>
  )
}
