// Avaliações reais do perfil da Prumo Desentupidora no Google.
// O texto está do jeito que cada cliente escreveu, sem correções.
//
// Para atualizar:
// 1. Abra o perfil no Google (link GOOGLE_REVIEWS_URL abaixo).
// 2. Atualize a nota e o total em GOOGLE_RATING.
// 3. Troque ou acrescente avaliações na lista REVIEWS (o link de cada uma
//    vem do botão "Compartilhar" da avaliação no Google Maps).

export const GOOGLE_PLACE_ID = 'ChIJkQnr7ceG2AARJKjQ4NEWh3Y'

export const GOOGLE_REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`

export const GOOGLE_WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`

// Conferido no Google em 25/11/2026
export const GOOGLE_RATING = {
  value: 4.9,
  count: 15,
}

export type Review = {
  name: string
  date: string // AAAA-MM-DD
  text: string
  url: string
}

export const REVIEWS: Review[] = [
  {
    name: 'João Braz',
    date: '2026-10-30',
    text: 'Confesso que fiquei surpreso com o cuidado dos profissionais, viera fazer o desentupimento aqui e até me mostraram de onde vinha o problema. na tubulação Achei muito bacana essa atenção. não foi só chegar e fazer o serviço, explicaram tudo direitinho Parabens pela postura da equipe 👏🏼🤝',
    url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21GS05YbFVVV3RQV1V3elFXTlNZWGRIY0hSVVVFRRAB!2m1!1s0x0:0x768716d1e0d0a824!3m1!1s2@1:CAIQACodChtycF9oOmFKNXlUUWtPWUwzQWNSYXdHcHRUUEE%7C%7C',
  },
  {
    name: 'Eduardo Silva',
    date: '2026-10-29',
    text: 'Eu ja tava desesperado, a agua tava subindo e o comodo quase alagando, não sabia mais oq fazer. Entrei em contato com a desentupidora e os rapazes chegaram muito rapido, resolveram tudo com muita agilidade. Parabens pelo exelente serviço e pela rapidez no atendimento, me salvaram de um prejuizo enorme, recomendo muito!!',
    url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21kWWFrRjZVVlp3Um10VldXbHJYMnMwTXpSM0xXYxAB!2m1!1s0x0:0x768716d1e0d0a824!3m1!1s2@1:CAIQACodChtycF9oOmdYakF6UVZwRmtVWWlrX2s0MzR3LWc%7C%7C',
  },
  {
    name: 'Kings Imports',
    date: '2026-10-29',
    text: 'Tava precisando resolver um problema na caixa de gordura com urgencia, a situação tava ficando feia e não dava pra esperar muito. Fui atendido rapido e me explicaram tudo certinho, serviço resolveu o problema e fiquei bem satisfeito com o atendimento do Marcos, notal 10',
    url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xsM1FqTlRhREZJT1dkd1JFWkJkVW93Y25OelNIYxAB!2m1!1s0x0:0x768716d1e0d0a824!3m1!1s2@1:CAIQACodChtycF9oOll3QjNTaDFIOWdwREZBdUowcnNzSHc%7C%7C',
  },
  {
    name: 'Thalita De Souza Silva',
    date: '2026-11-03',
    text: 'fuiiii muito bem atendida, os rapazes foram uns queridos e resolveram o entupimento da pia rapidinho\nFiquei muito satisfeita, obrigada pelo carinho e atenção de vcs!! ❤️',
    url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2kwMmNuRnVaRW81Y0VoUVRucFBUbWR6VTFweWNIYxAB!2m1!1s0x0:0x768716d1e0d0a824!3m1!1s2@1:CAIQACodChtycF9oOi02cnFuZEo5cEhQTnpPTmdzU1pycHc%7C%7C',
  },
  {
    name: 'Aroma Vibes',
    date: '2026-11-04',
    text: 'Trabalho Limpo e organizado. Os meninos super educados, resolveram o entupimento da pia com rapidez e praticidade. Indico eles sem preocupações.',
    url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xRM1MyaDZObVZIYVZSeVZWTk1UbWN6WkZwQlQwRRAB!2m1!1s0x0:0x768716d1e0d0a824!3m1!1s2@1:CAIQACodChtycF9oOlQ3S2h6NmVHaVRyVVNMTmczZFpBT0E%7C%7C',
  },
  {
    name: 'Jefferson Gutemberg',
    date: '2026-11-04',
    text: 'Gostei muito do atendimento, pessoal super educado e atenciosos, resolveram tudo certinho. Recomendo de mais, ótimo serviço!!',
    url: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xwNlIxVlhjVEU1WTBsR1IyZEdkV3hFUlhWc2FuYxAB!2m1!1s0x0:0x768716d1e0d0a824!3m1!1s2@1:CAIQACodChtycF9oOlp6R1VXcTE5Y0lGR2dGdWxERXVsanc%7C%7C',
  },
]
