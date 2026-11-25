const steps = [
  {
    title: 'Você liga ou chama no WhatsApp',
    text: 'Conta o que está acontecendo e passa o endereço. Se der, manda uma foto ou um vídeo do problema.',
  },
  {
    title: 'A gente vai até aí',
    text: 'Normalmente chegamos em até 30 minutos. A visita não é cobrada.',
  },
  {
    title: 'Você aprova o preço',
    text: 'A gente mostra onde está o problema e passa o valor antes de mexer em qualquer coisa. Se não fechar, não paga nada.',
  },
  {
    title: 'Serviço feito',
    text: 'Com garantia e nota fiscal. Dá pra pagar no Pix, cartão de débito ou crédito, dinheiro ou transferência.',
  },
]

export function AboutUs() {
  return (
    <section id="como-funciona" className="bg-brand-gray py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">
            Como a gente trabalha
          </h2>

          <p className="mt-4 text-base leading-relaxed text-brand-ink/75 md:text-lg">
            Entupimento nunca acontece em boa hora, e ninguém gosta de abrir a
            porta pra um estranho sem saber quanto vai pagar. Por isso o nosso
            jeito é simples: explicar o problema, combinar o preço antes e só
            depois começar o serviço.
          </p>

          <p className="mt-4 text-base leading-relaxed text-brand-ink/75 md:text-lg">
            Atendemos casas, apartamentos, comércios e condomínios em BH e na
            região metropolitana, 24 horas por dia.
          </p>
        </div>

        <ol className="space-y-6">
          {steps.map(({ title, text }, index) => (
            <li key={title} className="flex gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                {index + 1}
              </span>

              <div>
                <h3 className="text-lg font-bold text-brand-ink">{title}</h3>
                <p className="mt-1 text-base leading-relaxed text-brand-ink/70">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
