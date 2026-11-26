// Conteúdo das páginas por cidade (/desentupidora/<cidade>).
// Cada cidade tem texto próprio; o layout fica em components/city-page.tsx.

export type CityContent = {
  slug: string
  name: string
  title: string
  description: string
  lead: string
  about: string[]
  image: string
  imageAlt: string
  regionsTitle: string
  regions: string[]
  situations: { title: string; text: string }[]
  localFaqs: { question: string; answer: string }[]
  nearby: string[]
}

export const CITIES: CityContent[] = [
  {
    slug: 'belo-horizonte',
    name: 'Belo Horizonte',
    title: 'Desentupidora em Belo Horizonte 24 Horas',
    description:
      'Desentupidora em BH 24 horas. Vaso, pia, ralo, esgoto e caixa de gordura em todas as regionais de Belo Horizonte. Visita gratuita e orçamento antes.',
    lead: 'Vaso, pia, ralo ou esgoto entupido em BH? A Prumo atende em todas as regionais da capital, de dia, à noite e de madrugada, com visita técnica gratuita e orçamento antes de começar.',
    about: [
      'Belo Horizonte mistura prédios residenciais, condomínios, comércios e casas, e cada tipo de imóvel tem seus problemas mais comuns. Em apartamentos, o entupimento costuma aparecer na pia da cozinha ou na coluna de esgoto que atende vários andares. Em casas, na caixa de gordura, na caixa de inspeção ou na rede que leva o esgoto até a rua.',
      'A equipe da Prumo atende todas as regionais de BH com máquina rotativa e hidrojateamento. Antes de qualquer serviço, explicamos o que está acontecendo e apresentamos o orçamento. Atendemos moradores, síndicos, comércios e empresas.',
    ],
    image: '/images/hero-desentupimento.webp',
    imageAlt: 'Equipe da Prumo Desentupidora realizando desentupimento com máquina',
    regionsTitle: 'Regionais de BH atendidas',
    regions: [
      'Barreiro',
      'Centro-Sul',
      'Leste',
      'Nordeste',
      'Noroeste',
      'Norte',
      'Oeste',
      'Pampulha',
      'Venda Nova',
    ],
    situations: [
      {
        title: 'Prédios e condomínios',
        text: 'Coluna de esgoto entupida, caixa de gordura do prédio e ralos de áreas comuns. Combinamos o horário com o síndico ou o zelador, inclusive à noite.',
      },
      {
        title: 'Restaurantes e comércios',
        text: 'Caixa de gordura e pia de cozinha industrial, com atendimento de madrugada para não atrapalhar o funcionamento.',
      },
      {
        title: 'Casas',
        text: 'Ralos de quintal, caixas de inspeção e a rede que leva o esgoto da casa até a rua.',
      },
    ],
    localFaqs: [
      {
        question: 'Vocês atendem em todos os bairros de BH?',
        answer:
          'Sim. Atendemos as nove regionais de Belo Horizonte: Barreiro, Centro-Sul, Leste, Nordeste, Noroeste, Norte, Oeste, Pampulha e Venda Nova. Informe o bairro ao entrar em contato para receber a previsão de chegada.',
      },
      {
        question: 'Vocês atendem prédios e condomínios em BH?',
        answer:
          'Sim. Fazemos desentupimento de coluna de esgoto, caixa de gordura e áreas comuns, com nota fiscal para o condomínio. O horário pode ser combinado com o síndico ou o zelador.',
      },
    ],
    nearby: ['contagem', 'santa-luzia', 'ribeirao-das-neves', 'vespasiano', 'betim'],
  },
  {
    slug: 'contagem',
    name: 'Contagem',
    title: 'Desentupidora em Contagem 24 Horas',
    description:
      'Desentupidora em Contagem 24 horas, do Eldorado à Cidade Industrial. Vaso, pia, ralo, esgoto, caixa de gordura e hidrojateamento. Orçamento antes.',
    lead: 'Entupimento em Contagem? A Prumo atende em todas as regionais da cidade, do Eldorado à Cidade Industrial, 24 horas, com visita técnica gratuita e orçamento antes de começar.',
    about: [
      'Contagem reúne bairros residenciais, polos de comércio como o Eldorado e uma das maiores áreas industriais de Minas Gerais. Por isso os chamados são variados: pia e vaso em casas e apartamentos, caixa de gordura em restaurantes e lanchonetes, e redes de esgoto maiores em empresas e galpões.',
      'A Prumo atende as oito regionais de Contagem com máquina rotativa e hidrojateamento de alta pressão, indicado para redes com acúmulo de gordura ou entupimento que volta. O serviço só começa depois da sua aprovação do orçamento.',
    ],
    image: '/images/servico-rede-esgoto.webp',
    imageAlt: 'Equipe da Prumo desentupindo rede de esgoto',
    regionsTitle: 'Regionais de Contagem atendidas',
    regions: [
      'Sede',
      'Eldorado',
      'Industrial',
      'Ressaca',
      'Nacional',
      'Riacho',
      'Petrolândia',
      'Vargem das Flores',
    ],
    situations: [
      {
        title: 'Casas e apartamentos',
        text: 'Vaso, pia, ralo e caixa de gordura entupidos, com atendimento a qualquer hora.',
      },
      {
        title: 'Comércio e restaurantes',
        text: 'Caixa de gordura e cozinha de restaurantes, lanchonetes e comércios, inclusive fora do horário de funcionamento.',
      },
      {
        title: 'Empresas e galpões',
        text: 'Redes de esgoto maiores e manutenção preventiva com hidrojateamento, com nota fiscal para a empresa.',
      },
    ],
    localFaqs: [
      {
        question: 'Vocês atendem em todos os bairros de Contagem?',
        answer:
          'Sim. Atendemos as oito regionais: Sede, Eldorado, Industrial, Ressaca, Nacional, Riacho, Petrolândia e Vargem das Flores. Informe o bairro ao entrar em contato para receber a previsão de chegada.',
      },
      {
        question: 'Vocês atendem empresas na Cidade Industrial?',
        answer:
          'Sim. Atendemos empresas, galpões e indústrias, com desentupimento de rede de esgoto, limpeza de caixa de gordura e hidrojateamento, e emitimos nota fiscal.',
      },
    ],
    nearby: ['belo-horizonte', 'betim', 'ribeirao-das-neves', 'santa-luzia', 'vespasiano'],
  },
  {
    slug: 'betim',
    name: 'Betim',
    title: 'Desentupidora em Betim 24 Horas',
    description:
      'Desentupidora em Betim 24 horas. Vaso, pia, ralo, rede de esgoto, caixa de gordura e hidrojateamento para casas, comércios e empresas. Orçamento antes.',
    lead: 'Precisa de desentupidora em Betim? A Prumo atende do Centro ao Jardim Teresópolis, de Vianópolis ao Imbiruçu, 24 horas, com visita técnica gratuita e orçamento antes de começar.',
    about: [
      'Betim tem bairros residenciais que não param de crescer, um centro comercial movimentado e uma forte presença industrial. Em casa, os problemas mais comuns são vaso, pia e ralo entupidos. Em comércios e empresas, caixa de gordura saturada e redes de esgoto que precisam de limpeza periódica.',
      'A equipe da Prumo atende Betim com máquina rotativa e hidrojateamento, avalia o problema no local sem custo e só começa o serviço depois da sua aprovação. Emitimos nota fiscal para residências, comércios e empresas.',
    ],
    image: '/images/servico-hidrojateamento.webp',
    imageAlt: 'Técnico da Prumo fazendo hidrojateamento de alta pressão em tubulação',
    regionsTitle: 'Alguns dos bairros e regiões atendidos em Betim',
    regions: [
      'Centro',
      'Jardim Teresópolis',
      'Alterosas',
      'Vianópolis',
      'Imbiruçu',
      'Citrolândia',
      'PTB',
      'Petrovale',
      'Betim Industrial',
    ],
    situations: [
      {
        title: 'Casas',
        text: 'Vaso, pia, ralo e caixa de gordura entupidos, inclusive à noite e de madrugada.',
      },
      {
        title: 'Comércios',
        text: 'Caixa de gordura de restaurantes e lanchonetes e ralos de áreas de serviço.',
      },
      {
        title: 'Empresas e indústrias',
        text: 'Redes de esgoto e limpeza preventiva com hidrojateamento, com nota fiscal.',
      },
    ],
    localFaqs: [
      {
        question: 'Vocês atendem em todos os bairros de Betim?',
        answer:
          'Sim. Atendemos Betim inteira, incluindo Centro, Jardim Teresópolis, Alterosas, Vianópolis, Imbiruçu, Citrolândia, PTB e Petrovale. Informe o bairro ao entrar em contato para receber a previsão de chegada.',
      },
      {
        question: 'Vocês atendem empresas e indústrias em Betim?',
        answer:
          'Sim. Fazemos desentupimento de rede de esgoto, limpeza de caixa de gordura e hidrojateamento em empresas, galpões e indústrias, com nota fiscal.',
      },
    ],
    nearby: ['contagem', 'belo-horizonte', 'ribeirao-das-neves', 'santa-luzia', 'vespasiano'],
  },
  {
    slug: 'ribeirao-das-neves',
    name: 'Ribeirão das Neves',
    title: 'Desentupidora em Ribeirão das Neves 24h',
    description:
      'Desentupidora em Ribeirão das Neves 24 horas, em Justinópolis, Veneza e Centro. Vaso, pia, ralo, esgoto e caixa de gordura. Visita gratuita.',
    lead: 'Entupimento em Ribeirão das Neves? A Prumo atende em Justinópolis, no Veneza e no Centro, 24 horas, com visita técnica gratuita e orçamento antes de começar.',
    about: [
      'Ribeirão das Neves tem cerca de 180 bairros, divididos entre o distrito de Justinópolis, a regional Centro e a regional Veneza. É uma cidade em grande parte residencial, e a maioria dos chamados é de vaso, pia, ralo e caixa de gordura entupidos em casas.',
      'Quando vários pontos da casa entopem ao mesmo tempo, o problema costuma estar na rede de esgoto que liga o imóvel à rua. A equipe da Prumo localiza a obstrução, explica o que encontrou e passa o valor antes de começar.',
    ],
    image: '/images/servico-vaso.webp',
    imageAlt: 'Técnico da Prumo desentupindo vaso sanitário com máquina',
    regionsTitle: 'Regiões de Ribeirão das Neves atendidas',
    regions: ['Justinópolis', 'Centro', 'Veneza'],
    situations: [
      {
        title: 'Vaso e ralo do banheiro',
        text: 'Os chamados mais comuns na cidade, resolvidos com máquina de cabo rotativo, sem quebrar piso na maioria dos casos.',
      },
      {
        title: 'Caixa de gordura e pia da cozinha',
        text: 'Limpeza da caixa e desentupimento do cano da pia, para a gordura não voltar a entupir.',
      },
      {
        title: 'Esgoto da casa até a rua',
        text: 'Quando vaso, pia e ralos entopem juntos, desentupimos a rede principal do imóvel.',
      },
    ],
    localFaqs: [
      {
        question: 'Vocês atendem em Justinópolis e no Veneza?',
        answer:
          'Sim. Atendemos Ribeirão das Neves inteira: o distrito de Justinópolis, a regional Centro e a regional Veneza. Informe o bairro ao entrar em contato para receber a previsão de chegada.',
      },
      {
        question: 'Por que vários ralos da casa entopem ao mesmo tempo?',
        answer:
          'Geralmente porque a obstrução está na rede de esgoto que recebe a água de todos eles. Nesse caso o desentupimento é feito na rede principal, e não em cada ralo.',
      },
    ],
    nearby: ['belo-horizonte', 'contagem', 'vespasiano', 'santa-luzia', 'betim'],
  },
  {
    slug: 'santa-luzia',
    name: 'Santa Luzia',
    title: 'Desentupidora em Santa Luzia 24 Horas',
    description:
      'Desentupidora em Santa Luzia 24 horas, na Sede e em São Benedito. Vaso, pia, ralo, esgoto e caixa de gordura. Visita gratuita e orçamento antes.',
    lead: 'Entupiu em Santa Luzia? A Prumo atende na Sede e em São Benedito, 24 horas, com visita técnica gratuita e orçamento antes de começar.',
    about: [
      'Santa Luzia se divide em duas grandes regiões: a Sede, onde fica o Centro Histórico, e o distrito de São Benedito, que concentra boa parte da população e do comércio da cidade, com bairros como Palmital e Cristina.',
      'Em imóveis mais antigos, como os do Centro Histórico, a tubulação pede cuidado na hora de desentupir. Por isso a equipe da Prumo avalia o problema antes, escolhe o equipamento adequado e só começa com a sua aprovação.',
    ],
    image: '/images/servico-pia.webp',
    imageAlt: 'Técnicos da Prumo desentupindo pia de cozinha com máquina rotativa',
    regionsTitle: 'Regiões de Santa Luzia atendidas',
    regions: ['Sede e Centro Histórico', 'São Benedito', 'Palmital', 'Cristina'],
    situations: [
      {
        title: 'Casas e apartamentos',
        text: 'Vaso, pia, ralo e caixa de gordura entupidos, a qualquer hora.',
      },
      {
        title: 'Comércio de São Benedito',
        text: 'Caixa de gordura e cozinhas de restaurantes e lanchonetes, inclusive fora do horário de funcionamento.',
      },
      {
        title: 'Imóveis antigos',
        text: 'Avaliação cuidadosa da tubulação antes de desentupir, para resolver sem danificar.',
      },
    ],
    localFaqs: [
      {
        question: 'Vocês atendem em São Benedito?',
        answer:
          'Sim. Atendemos Santa Luzia inteira, incluindo a Sede, o Centro Histórico e o distrito de São Benedito, com bairros como Palmital e Cristina. Informe o bairro ao entrar em contato para receber a previsão de chegada.',
      },
      {
        question: 'Vocês atendem casas antigas no Centro Histórico?',
        answer:
          'Sim. Nesses imóveis avaliamos a tubulação com cuidado antes de começar e explicamos o que vai ser feito, para resolver o entupimento sem danificar.',
      },
    ],
    nearby: ['belo-horizonte', 'vespasiano', 'ribeirao-das-neves', 'contagem', 'betim'],
  },
  {
    slug: 'vespasiano',
    name: 'Vespasiano',
    title: 'Desentupidora em Vespasiano 24 Horas',
    description:
      'Desentupidora em Vespasiano 24 horas. Vaso, pia, ralo, esgoto e caixa de gordura em casas, condomínios e comércios. Visita gratuita e orçamento antes.',
    lead: 'Precisa de desentupidora em Vespasiano? A Prumo atende do Centro ao Morro Alto, da Nova Pampulha ao Célvia, 24 horas, com visita técnica gratuita e orçamento antes de começar.',
    about: [
      'Vespasiano fica no Vetor Norte da Região Metropolitana, entre Belo Horizonte, Lagoa Santa e o aeroporto de Confins, e cresceu bastante com novos bairros e condomínios. Os chamados mais comuns são de vaso, pia, ralo e caixa de gordura entupidos, em casas e em condomínios.',
      'A equipe da Prumo atende Vespasiano 24 horas, avalia o problema no local sem custo e apresenta o orçamento antes de começar. Para condomínios, emitimos nota fiscal e combinamos o horário com a administração.',
    ],
    image: '/images/servico-ralo.webp',
    imageAlt: 'Técnico da Prumo desentupindo ralo com equipamento profissional',
    regionsTitle: 'Alguns dos bairros atendidos em Vespasiano',
    regions: [
      'Centro',
      'Morro Alto',
      'Nova Pampulha',
      'Célvia',
      'Gávea',
      'Santa Clara',
      'Caieiras',
      'Serra Dourada',
    ],
    situations: [
      {
        title: 'Casas',
        text: 'Vaso, pia, ralo e caixa de gordura entupidos, inclusive à noite e de madrugada.',
      },
      {
        title: 'Condomínios',
        text: 'Redes de esgoto e caixas de gordura de áreas comuns, com nota fiscal para o condomínio.',
      },
      {
        title: 'Comércios',
        text: 'Cozinhas e caixas de gordura de restaurantes e lanchonetes, fora do horário de funcionamento.',
      },
    ],
    localFaqs: [
      {
        question: 'Vocês atendem em todos os bairros de Vespasiano?',
        answer:
          'Sim. Atendemos Vespasiano inteira, incluindo Centro, Morro Alto, Nova Pampulha, Célvia, Gávea e Santa Clara. Informe o bairro ao entrar em contato para receber a previsão de chegada.',
      },
      {
        question: 'Vocês atendem condomínios em Vespasiano?',
        answer:
          'Sim. Fazemos desentupimento de rede de esgoto e limpeza de caixa de gordura em condomínios, com nota fiscal e horário combinado com a administração.',
      },
    ],
    nearby: ['belo-horizonte', 'santa-luzia', 'ribeirao-das-neves', 'contagem', 'betim'],
  },
]

export function getCity(slug: string) {
  const city = CITIES.find((c) => c.slug === slug)
  if (!city) throw new Error(`Cidade não encontrada: ${slug}`)
  return city
}

export function cityFaqs(city: CityContent) {
  return [
    ...city.localFaqs,
    {
      question: `A Prumo atende 24 horas em ${city.name}?`,
      answer: `Sim. Atendemos em ${city.name} 24 horas por dia, inclusive à noite e de madrugada. Ligue ou chame no WhatsApp a qualquer hora.`,
    },
    {
      question: `Quanto custa um desentupimento em ${city.name}?`,
      answer:
        'O valor depende do tipo de entupimento, de onde ele está e do equipamento necessário. A visita técnica é gratuita e o orçamento é apresentado antes do serviço, sem compromisso.',
    },
    {
      question: `Quais serviços a Prumo faz em ${city.name}?`,
      answer:
        'Desentupimento de vaso sanitário, pia, ralo e rede de esgoto, limpeza e desentupimento de caixa de gordura e hidrojateamento de tubulações.',
    },
    {
      question: 'O serviço tem garantia e nota fiscal?',
      answer:
        'Sim. O serviço tem garantia, conforme o serviço executado e o Código de Defesa do Consumidor, e emitimos nota fiscal.',
    },
  ]
}
