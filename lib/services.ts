// Conteúdo das páginas de serviço (/servicos/...).
// Cada serviço tem texto próprio; o layout fica em components/service-page.tsx.

export type ServiceContent = {
  slug: string
  name: string
  menuLabel: string
  title: string
  description: string
  h1: string
  lead: string
  about: string[]
  image: string
  imageAlt: string
  whatsappMessage: string
  where: string[]
  signsTitle: string
  signs: string[]
  causesTitle: string
  causes: { title: string; text: string }[]
  methodTitle: string
  method: { title: string; text: string }[]
  tipsTitle: string
  tips: string[]
  faqs: { question: string; answer: string }[]
}

export const SERVICES: ServiceContent[] = [
  {
    slug: 'desentupimento-de-vaso-sanitario',
    name: 'Desentupimento de vaso sanitário',
    menuLabel: 'Vaso sanitário',
    title: 'Desentupimento de Vaso Sanitário em BH 24h',
    description:
      'Vaso sanitário entupido em BH? Desentupimento 24 horas com máquina profissional, visita técnica gratuita e orçamento antes do serviço. Atendemos BH e região.',
    h1: 'Desentupimento de vaso sanitário em BH, 24 horas',
    lead: 'Vaso entupido, com a água subindo ou demorando para descer? A Prumo atende em Belo Horizonte e Região Metropolitana a qualquer hora, avalia o problema sem custo e apresenta o orçamento antes de começar.',
    about: [
      'Vaso sanitário entupido é uma das emergências mais comuns dentro de casa, e quase sempre aparece na pior hora. O entupimento pode estar no próprio vaso, na saída para o esgoto ou mais adiante, na tubulação que recebe a água de outros pontos do banheiro.',
      'Por isso a nossa equipe começa identificando onde está a obstrução. Com isso definimos o equipamento certo e evitamos quebrar piso ou parede sem necessidade. Atendemos casas, apartamentos, comércios, empresas e condomínios.',
    ],
    image: '/images/servico-vaso.webp',
    imageAlt: 'Técnico da Prumo desentupindo vaso sanitário com máquina',
    whatsappMessage:
      'Olá! Estou com o vaso sanitário entupido e gostaria de atendimento da Prumo Desentupidora.',
    where: ['Casas', 'Apartamentos', 'Comércios', 'Empresas', 'Condomínios'],
    signsTitle: 'Sinais de que o vaso sanitário precisa de desentupimento',
    signs: [
      'A água sobe ao dar descarga e demora para baixar',
      'A descarga não leva os resíduos de primeira',
      'O vaso transborda ou a água chega perto da borda',
      'Barulho de borbulha no vaso ou no ralo do banheiro',
      'Mau cheiro de esgoto vindo do vaso',
      'O ralo do chuveiro volta água quando a descarga é acionada',
    ],
    causesTitle: 'O que costuma entupir o vaso sanitário',
    causes: [
      {
        title: 'Papel higiênico em excesso',
        text: 'Grande quantidade de papel de uma vez pode formar um bloco na curva do vaso ou na tubulação.',
      },
      {
        title: 'Lenços umedecidos e absorventes',
        text: 'Não se desfazem na água como o papel higiênico e estão entre as causas mais frequentes de entupimento.',
      },
      {
        title: 'Objetos que caem no vaso',
        text: 'Brinquedos, tampas, escovas e outros objetos podem ficar presos na curva interna do vaso.',
      },
      {
        title: 'Fio dental, cabelo e cotonete',
        text: 'Se acumulam com o tempo e prendem outros resíduos, até fechar a passagem.',
      },
      {
        title: 'Problema na rede de esgoto',
        text: 'Quando o vaso e outros ralos entopem juntos, a obstrução costuma estar na rede, e não no vaso.',
      },
    ],
    methodTitle: 'Como fazemos o desentupimento do vaso sanitário',
    method: [
      {
        title: 'Avaliação no local',
        text: 'Verificamos o vaso, a descarga e os ralos do banheiro para entender se o problema está no vaso ou na tubulação.',
      },
      {
        title: 'Orçamento antes de começar',
        text: 'Explicamos o que encontramos e passamos o valor. O serviço só começa com a sua aprovação.',
      },
      {
        title: 'Desobstrução com máquina',
        text: 'Usamos máquina desentupidora com cabo rotativo, que alcança a obstrução sem precisar retirar o vaso na maioria dos casos.',
      },
      {
        title: 'Teste de escoamento',
        text: 'Damos descarga várias vezes e conferimos os ralos próximos para garantir que a água está descendo normalmente.',
      },
    ],
    tipsTitle: 'Como evitar que o vaso entupa de novo',
    tips: [
      'Jogue no vaso apenas papel higiênico, e em quantidade moderada',
      'Mantenha um lixo no banheiro para lenço umedecido, absorvente, fio dental e cotonete',
      'Não use soda cáustica: além do risco de queimadura, pode danificar a tubulação',
      'Se o vaso e o ralo entopem juntos com frequência, peça uma avaliação da rede de esgoto',
      'Ensine as crianças a não jogarem brinquedos ou objetos no vaso',
    ],
    faqs: [
      {
        question: 'Vocês atendem vaso entupido de madrugada?',
        answer:
          'Sim. A Prumo atende 24 horas em Belo Horizonte e Região Metropolitana, inclusive à noite e de madrugada.',
      },
      {
        question: 'Precisa quebrar o piso ou tirar o vaso para desentupir?',
        answer:
          'Na maioria dos casos, não. A máquina com cabo rotativo alcança a obstrução pelo próprio vaso. Quando o problema está em outro ponto da tubulação, explicamos a situação antes de qualquer intervenção.',
      },
      {
        question: 'Quanto custa desentupir um vaso sanitário em BH?',
        answer:
          'Depende de onde está a obstrução e do equipamento necessário. A visita é gratuita e o orçamento é apresentado antes do serviço, sem compromisso.',
      },
      {
        question: 'Posso usar produto desentupidor ou soda cáustica no vaso?',
        answer:
          'Não é recomendado. Esses produtos podem causar queimaduras, danificar a tubulação e muitas vezes não resolvem o entupimento. Se já usou, avise a equipe ao entrar em contato.',
      },
      {
        question: 'Por que o vaso e o ralo do chuveiro entopem juntos?',
        answer:
          'Geralmente porque a obstrução está na tubulação que recebe a água dos dois. Nesse caso o desentupimento é feito na rede, não só no vaso.',
      },
      {
        question: 'Em quanto tempo a equipe chega?',
        answer:
          'A visita técnica é feita em até 30 minutos. Ao entrar em contato, informe o endereço para receber a previsão de chegada.',
      },
      {
        question: 'O serviço tem garantia e nota fiscal?',
        answer:
          'Sim. O serviço tem garantia, conforme o serviço executado e o Código de Defesa do Consumidor, e emitimos nota fiscal.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-pia',
    name: 'Desentupimento de pia',
    menuLabel: 'Pia',
    title: 'Desentupimento de Pia em BH 24 Horas',
    description:
      'Pia entupida em BH? Desentupimento de pia de cozinha, banheiro e tanque 24 horas. Visita técnica gratuita e orçamento antes do serviço. BH e região.',
    h1: 'Desentupimento de pia em BH, 24 horas',
    lead: 'Pia da cozinha, do banheiro ou do tanque com água parada ou descendo devagar? A Prumo atende em Belo Horizonte e Região Metropolitana a qualquer hora, com visita gratuita e orçamento antes de começar.',
    about: [
      'Na pia da cozinha, o entupimento quase sempre é causado por gordura e restos de comida que grudam na parede do cano e vão fechando a passagem aos poucos. Na pia do banheiro, o mais comum é cabelo, sabonete e creme dental acumulados no sifão.',
      'A nossa equipe localiza o ponto da obstrução, que pode estar no sifão, no cano da parede ou na caixa de gordura, e escolhe o método certo para cada caso. Atendemos casas, apartamentos, restaurantes, comércios e condomínios.',
    ],
    image: '/images/servico-pia.webp',
    imageAlt: 'Técnicos da Prumo desentupindo pia de cozinha com máquina rotativa',
    whatsappMessage:
      'Olá! Estou com a pia entupida e gostaria de atendimento da Prumo Desentupidora.',
    where: [
      'Pia de cozinha',
      'Pia de banheiro',
      'Tanque e área de serviço',
      'Cozinhas de restaurantes e lanchonetes',
    ],
    signsTitle: 'Sinais de que a pia precisa de desentupimento',
    signs: [
      'A água fica parada na cuba e demora para descer',
      'Mau cheiro saindo do ralo da pia',
      'Barulho de borbulha quando a água escoa',
      'A água volta pelo ralo da pia ou pelo tanque',
      'O entupimento volta poucos dias depois de desentupir',
      'A caixa de gordura transborda quando a pia é usada',
    ],
    causesTitle: 'O que costuma entupir a pia',
    causes: [
      {
        title: 'Gordura e óleo de cozinha',
        text: 'Esfriam dentro do cano, grudam nas paredes e vão estreitando a passagem da água.',
      },
      {
        title: 'Restos de comida',
        text: 'Arroz, borra de café e cascas se juntam à gordura e formam uma massa difícil de remover.',
      },
      {
        title: 'Cabelo e sabonete',
        text: 'Na pia do banheiro, se acumulam no sifão e prendem outros resíduos.',
      },
      {
        title: 'Caixa de gordura cheia',
        text: 'Quando a caixa está saturada, a água da pia da cozinha não tem para onde escoar.',
      },
      {
        title: 'Sifão sujo ou mal instalado',
        text: 'Acumula resíduos e causa entupimento e mau cheiro com frequência.',
      },
    ],
    methodTitle: 'Como fazemos o desentupimento da pia',
    method: [
      {
        title: 'Localização do entupimento',
        text: 'Verificamos o sifão, o cano da parede e, na cozinha, a caixa de gordura, para saber exatamente onde está a obstrução.',
      },
      {
        title: 'Orçamento antes de começar',
        text: 'Explicamos a causa e passamos o valor. O serviço só começa com a sua aprovação.',
      },
      {
        title: 'Desobstrução',
        text: 'Usamos máquina com cabo rotativo para remover a gordura e os resíduos do cano. Quando o acúmulo é grande, avaliamos o hidrojateamento.',
      },
      {
        title: 'Teste e orientação',
        text: 'Conferimos o escoamento com água corrente e mostramos como evitar que o problema volte.',
      },
    ],
    tipsTitle: 'Como evitar que a pia entupa de novo',
    tips: [
      'Não jogue óleo de cozinha na pia: guarde em uma garrafa e leve a um ponto de coleta',
      'Raspe os restos de comida no lixo antes de lavar a louça',
      'Use uma peneira de ralo para segurar resíduos',
      'Na cozinha, mantenha a caixa de gordura limpa com regularidade',
      'Não use soda cáustica: pode danificar o cano e causar queimaduras',
    ],
    faqs: [
      {
        question: 'Vocês desentopem pia de cozinha e de banheiro?',
        answer:
          'Sim. Atendemos pias de cozinha, banheiro, tanques e áreas de serviço, em residências e comércios.',
      },
      {
        question: 'A pia da cozinha entope sempre. O que pode ser?',
        answer:
          'Na maioria dos casos é gordura acumulada no cano ou caixa de gordura cheia. Desentupir só o sifão resolve por pouco tempo. Na visita identificamos a causa e indicamos a solução, que pode incluir limpeza da caixa de gordura ou hidrojateamento.',
      },
      {
        question: 'Quanto custa desentupir uma pia em BH?',
        answer:
          'O valor depende de onde está a obstrução e do equipamento necessário. A visita é gratuita e o orçamento é apresentado antes do serviço.',
      },
      {
        question: 'Posso usar soda cáustica para desentupir a pia?',
        answer:
          'Não é recomendado. A soda cáustica pode danificar canos de PVC, causar queimaduras e endurecer a gordura dentro da tubulação. Se já usou, avise a equipe.',
      },
      {
        question: 'Vocês atendem restaurantes e lanchonetes?',
        answer:
          'Sim. Atendemos cozinhas comerciais, restaurantes, lanchonetes e condomínios, inclusive fora do horário de funcionamento.',
      },
      {
        question: 'Em quanto tempo a equipe chega?',
        answer:
          'A visita técnica é feita em até 30 minutos. Informe o endereço ao entrar em contato para receber a previsão.',
      },
      {
        question: 'O serviço tem garantia e nota fiscal?',
        answer:
          'Sim. O serviço tem garantia, conforme o serviço executado e o Código de Defesa do Consumidor, e emitimos nota fiscal.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    name: 'Desentupimento de ralo',
    menuLabel: 'Ralo',
    title: 'Desentupimento de Ralo em BH 24 Horas',
    description:
      'Ralo entupido ou com cheiro de esgoto em BH? Desentupimento de ralo de banheiro, área de serviço e quintal 24 horas. Visita gratuita e orçamento antes.',
    h1: 'Desentupimento de ralo em BH, 24 horas',
    lead: 'Ralo do banheiro, da área de serviço ou do quintal entupido ou com cheiro de esgoto? A Prumo atende em Belo Horizonte e Região Metropolitana a qualquer hora, com visita gratuita e orçamento antes de começar.',
    about: [
      'Ralo entupido faz a água empoçar no box, na área de serviço ou no quintal e, muitas vezes, traz junto o mau cheiro de esgoto. As causas mais comuns são cabelo, resíduos de sabão e sujeira levada pela água, mas o problema também pode estar na caixa sifonada ou na tubulação que liga o ralo à rede.',
      'A nossa equipe identifica onde está a obstrução e faz a desobstrução com o equipamento adequado, sem quebrar o piso na maioria dos casos. Atendemos casas, apartamentos, comércios e condomínios.',
    ],
    image: '/images/servico-ralo.webp',
    imageAlt: 'Técnico da Prumo desentupindo ralo com equipamento profissional',
    whatsappMessage:
      'Olá! Estou com um ralo entupido e gostaria de atendimento da Prumo Desentupidora.',
    where: [
      'Ralo de box e banheiro',
      'Área de serviço',
      'Quintal e garagem',
      'Ralos de áreas comuns de condomínio',
    ],
    signsTitle: 'Sinais de que o ralo precisa de desentupimento',
    signs: [
      'Água empoçada no box ou no piso depois do banho',
      'Cheiro de esgoto saindo do ralo',
      'A água volta pelo ralo quando a máquina de lavar esvazia',
      'Barulho de borbulha no ralo',
      'Ralo do quintal transbordando em dia de chuva',
      'Insetos saindo do ralo com frequência',
    ],
    causesTitle: 'O que costuma entupir o ralo',
    causes: [
      {
        title: 'Cabelo e resíduos de sabão',
        text: 'Formam uma massa no ralo do box e na caixa sifonada, que vai fechando a passagem.',
      },
      {
        title: 'Fiapos e sabão da máquina de lavar',
        text: 'Na área de serviço, se acumulam na tubulação a cada lavagem.',
      },
      {
        title: 'Terra, folhas e areia',
        text: 'Ralos de quintal e garagem recebem sujeira da chuva e da lavagem do piso.',
      },
      {
        title: 'Caixa sifonada suja',
        text: 'Quando está cheia de resíduos, causa entupimento e deixa o cheiro de esgoto voltar.',
      },
      {
        title: 'Obstrução na tubulação',
        text: 'Se vários ralos entopem juntos, o problema costuma estar mais adiante, na rede de esgoto.',
      },
    ],
    methodTitle: 'Como fazemos o desentupimento do ralo',
    method: [
      {
        title: 'Avaliação do ralo e da caixa sifonada',
        text: 'Verificamos o ralo, a caixa sifonada e os pontos ligados a eles para localizar a obstrução.',
      },
      {
        title: 'Orçamento antes de começar',
        text: 'Explicamos o que causou o entupimento e passamos o valor. O serviço só começa com a sua aprovação.',
      },
      {
        title: 'Desobstrução e limpeza',
        text: 'Removemos os resíduos com máquina de cabo rotativo e limpamos a caixa sifonada quando necessário.',
      },
      {
        title: 'Teste de escoamento',
        text: 'Conferimos se a água está descendo normalmente e se o mau cheiro foi resolvido.',
      },
    ],
    tipsTitle: 'Como evitar que o ralo entupa de novo',
    tips: [
      'Use uma grelha ou peneira no ralo do box para segurar o cabelo',
      'Limpe a grelha do ralo toda semana',
      'Mantenha a caixa sifonada limpa e com água, o que evita o cheiro de esgoto',
      'Varra o quintal antes de lavar, para a terra não ir para o ralo',
      'Se o cheiro de esgoto voltar sempre, peça uma avaliação da tubulação',
    ],
    faqs: [
      {
        question: 'Por que o ralo está com cheiro de esgoto?',
        answer:
          'Normalmente por caixa sifonada suja ou seca, ou por obstrução na tubulação. Na visita identificamos a causa e indicamos a solução.',
      },
      {
        question: 'Precisa quebrar o piso para desentupir o ralo?',
        answer:
          'Na maioria dos casos, não. A desobstrução é feita pelo próprio ralo ou pela caixa sifonada. Se for necessário algo além disso, explicamos antes.',
      },
      {
        question: 'Quanto custa desentupir um ralo em BH?',
        answer:
          'O valor depende do tipo de ralo, de onde está a obstrução e do equipamento necessário. A visita é gratuita e o orçamento é apresentado antes do serviço.',
      },
      {
        question: 'Vocês desentopem ralo de quintal e garagem?',
        answer:
          'Sim. Atendemos ralos de banheiro, área de serviço, quintal, garagem e áreas comuns de condomínio.',
      },
      {
        question: 'O ralo da área de serviço volta água quando a máquina esvazia. O que é?',
        answer:
          'Geralmente é acúmulo de fiapos e sabão na tubulação. A desobstrução com máquina resolve, e orientamos como evitar o problema.',
      },
      {
        question: 'Em quanto tempo a equipe chega?',
        answer:
          'A visita técnica é feita em até 30 minutos. Informe o endereço ao entrar em contato para receber a previsão.',
      },
      {
        question: 'O serviço tem garantia e nota fiscal?',
        answer:
          'Sim. O serviço tem garantia, conforme o serviço executado e o Código de Defesa do Consumidor, e emitimos nota fiscal.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-rede-de-esgoto',
    name: 'Desentupimento de rede de esgoto',
    menuLabel: 'Rede de esgoto',
    title: 'Desentupimento de Rede de Esgoto em BH 24h',
    description:
      'Esgoto voltando ou caixa de inspeção transbordando em BH? Desentupimento de rede de esgoto 24 horas para casas, prédios e comércios. Orçamento antes.',
    h1: 'Desentupimento de rede de esgoto em BH, 24 horas',
    lead: 'Esgoto voltando pelo ralo ou pelo vaso, caixa de inspeção transbordando ou vários pontos entupidos ao mesmo tempo? A Prumo atende em Belo Horizonte e Região Metropolitana a qualquer hora.',
    about: [
      'Quando o vaso, os ralos e a pia apresentam problema ao mesmo tempo, o entupimento costuma estar na rede de esgoto: a tubulação principal que leva tudo do imóvel até a rede pública. Nessa situação, desentupir um ponto só não resolve.',
      'A nossa equipe localiza o trecho obstruído pelas caixas de inspeção e faz a desobstrução com máquina rotativa ou hidrojateamento, conforme o tipo de resíduo. Atendemos casas, prédios, condomínios, comércios e empresas.',
    ],
    image: '/images/servico-rede-esgoto.webp',
    imageAlt: 'Equipe da Prumo desentupindo rede de esgoto',
    whatsappMessage:
      'Olá! Estou com problema na rede de esgoto e gostaria de atendimento da Prumo Desentupidora.',
    where: [
      'Casas e sobrados',
      'Prédios e condomínios',
      'Comércios e restaurantes',
      'Empresas e galpões',
    ],
    signsTitle: 'Sinais de entupimento na rede de esgoto',
    signs: [
      'Esgoto voltando pelo ralo, pelo vaso ou pelo tanque',
      'Vários pontos da casa entupidos ao mesmo tempo',
      'Caixa de inspeção cheia ou transbordando',
      'Cheiro forte de esgoto dentro ou fora do imóvel',
      'Barulho de borbulha nos ralos quando outro ponto é usado',
      'Entupimentos que voltam mesmo depois de desentupir',
    ],
    causesTitle: 'O que costuma entupir a rede de esgoto',
    causes: [
      {
        title: 'Gordura acumulada',
        text: 'Vem das pias e se solidifica ao longo da tubulação, principalmente quando a caixa de gordura está cheia.',
      },
      {
        title: 'Lenços, absorventes e plásticos',
        text: 'Descartados no vaso, não se desfazem e se prendem em curvas e junções da rede.',
      },
      {
        title: 'Raízes de árvores',
        text: 'Podem entrar por trincas ou juntas da tubulação e formar uma barreira.',
      },
      {
        title: 'Terra e entulho',
        text: 'Entram por caixas sem tampa ou depois de obras e se acumulam no fundo da rede.',
      },
      {
        title: 'Desnível ou cano danificado',
        text: 'Trechos com caimento errado ou quebrados acumulam resíduos e entopem com frequência.',
      },
    ],
    methodTitle: 'Como fazemos o desentupimento da rede de esgoto',
    method: [
      {
        title: 'Inspeção das caixas',
        text: 'Abrimos as caixas de inspeção para descobrir em que trecho está a obstrução.',
      },
      {
        title: 'Orçamento antes de começar',
        text: 'Explicamos o que encontramos e passamos o valor. O serviço só começa com a sua aprovação.',
      },
      {
        title: 'Desobstrução da rede',
        text: 'Usamos máquina com cabo rotativo e, quando há muita gordura ou lodo, hidrojateamento de alta pressão.',
      },
      {
        title: 'Teste e orientação',
        text: 'Conferimos o escoamento em todos os pontos e indicamos se há algum trecho que precisa de atenção.',
      },
    ],
    tipsTitle: 'Como evitar novos entupimentos na rede',
    tips: [
      'Mantenha a caixa de gordura limpa, para a gordura não chegar à rede',
      'Não descarte lenço umedecido, absorvente ou plástico no vaso',
      'Mantenha as caixas de inspeção tampadas',
      'Em condomínios e comércios, faça limpeza preventiva da rede periodicamente',
      'Se o entupimento volta sempre, investigue o caimento e o estado da tubulação',
    ],
    faqs: [
      {
        question: 'Como saber se o entupimento é na rede de esgoto?',
        answer:
          'Quando vários pontos entopem ao mesmo tempo ou o esgoto volta pelos ralos, o problema geralmente está na rede principal, e não em um ponto só.',
      },
      {
        question: 'Vocês atendem prédios e condomínios?',
        answer:
          'Sim. Atendemos redes de esgoto de prédios, condomínios, comércios e empresas, inclusive em áreas comuns.',
      },
      {
        question: 'Quando é usado o hidrojateamento na rede de esgoto?',
        answer:
          'Quando há muita gordura, lodo ou resíduos grudados na tubulação, ou quando o entupimento é recorrente. A indicação é feita depois da avaliação.',
      },
      {
        question: 'Quanto custa desentupir a rede de esgoto em BH?',
        answer:
          'Depende da extensão da rede, de onde está a obstrução e do equipamento necessário. A visita é gratuita e o orçamento é apresentado antes do serviço.',
      },
      {
        question: 'O esgoto está voltando dentro de casa. O que faço até a equipe chegar?',
        answer:
          'Evite usar descarga, pias e chuveiro para não aumentar o retorno, e ligue ou chame no WhatsApp. Atendemos 24 horas.',
      },
      {
        question: 'Em quanto tempo a equipe chega?',
        answer:
          'A visita técnica é feita em até 30 minutos. Informe o endereço ao entrar em contato para receber a previsão.',
      },
      {
        question: 'O serviço tem garantia e nota fiscal?',
        answer:
          'Sim. O serviço tem garantia, conforme o serviço executado e o Código de Defesa do Consumidor, e emitimos nota fiscal.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura',
    name: 'Limpeza de caixa de gordura',
    menuLabel: 'Caixa de gordura',
    title: 'Limpeza de Caixa de Gordura em BH 24 Horas',
    description:
      'Caixa de gordura cheia, entupida ou com mau cheiro em BH? Limpeza e desentupimento 24 horas para casas, restaurantes e condomínios. Orçamento antes.',
    h1: 'Limpeza de caixa de gordura em BH, 24 horas',
    lead: 'Caixa de gordura cheia, transbordando ou com mau cheiro? A Prumo faz limpeza e desentupimento em Belo Horizonte e Região Metropolitana, com visita gratuita e orçamento antes de começar.',
    about: [
      'A caixa de gordura retém o óleo e os resíduos que vêm da pia da cozinha, para eles não chegarem à rede de esgoto. Com o uso, ela enche, e quando está saturada a pia começa a entupir, o cheiro aparece e a gordura passa a seguir pela tubulação.',
      'Fazemos a retirada dos resíduos, a limpeza da caixa e a verificação da tubulação ligada a ela. Atendemos casas e apartamentos, e também restaurantes, lanchonetes, cozinhas industriais e condomínios, que precisam de limpeza com mais frequência.',
    ],
    image: '/images/servico-caixa-gordura.webp',
    imageAlt: 'Técnico da Prumo fazendo limpeza de caixa de gordura',
    whatsappMessage:
      'Olá! Preciso de limpeza de caixa de gordura e gostaria de atendimento da Prumo Desentupidora.',
    where: [
      'Casas e apartamentos',
      'Restaurantes e lanchonetes',
      'Cozinhas industriais',
      'Condomínios',
    ],
    signsTitle: 'Sinais de que a caixa de gordura precisa de limpeza',
    signs: [
      'Mau cheiro perto da pia ou da caixa de gordura',
      'A pia da cozinha demora para escoar',
      'Gordura acumulada na superfície da caixa',
      'A caixa transborda quando a pia é usada',
      'Entupimentos frequentes na cozinha',
      'Faz muito tempo que a caixa não é limpa',
    ],
    causesTitle: 'Por que a caixa de gordura enche e entope',
    causes: [
      {
        title: 'Óleo e gordura descartados na pia',
        text: 'Se acumulam na caixa e formam uma camada que vai endurecendo.',
      },
      {
        title: 'Restos de comida',
        text: 'Se juntam à gordura e aumentam rapidamente o volume de resíduos.',
      },
      {
        title: 'Falta de limpeza periódica',
        text: 'Sem manutenção, a caixa perde a capacidade de reter a gordura.',
      },
      {
        title: 'Uso intenso da cozinha',
        text: 'Restaurantes e lanchonetes produzem muito mais gordura e enchem a caixa mais rápido.',
      },
      {
        title: 'Tubulação obstruída',
        text: 'A gordura também se acumula nos canos que chegam e saem da caixa.',
      },
    ],
    methodTitle: 'Como fazemos a limpeza da caixa de gordura',
    method: [
      {
        title: 'Avaliação da caixa',
        text: 'Verificamos o acesso, o volume de resíduos e o estado da caixa e da tampa.',
      },
      {
        title: 'Orçamento antes de começar',
        text: 'Passamos o valor depois da avaliação. O serviço só começa com a sua aprovação.',
      },
      {
        title: 'Retirada dos resíduos e limpeza',
        text: 'Removemos a gordura e os resíduos acumulados e limpamos o interior da caixa.',
      },
      {
        title: 'Verificação da tubulação',
        text: 'Conferimos o escoamento da pia até a caixa e da caixa até a rede. Se houver gordura no cano, indicamos a desobstrução ou o hidrojateamento.',
      },
    ],
    tipsTitle: 'Como manter a caixa de gordura funcionando bem',
    tips: [
      'Não jogue óleo de cozinha na pia: guarde em garrafa e leve a um ponto de coleta',
      'Raspe os pratos e panelas no lixo antes de lavar',
      'Faça a limpeza periódica da caixa; em cozinhas comerciais, com mais frequência',
      'Mantenha a caixa sempre tampada',
      'Se a caixa enche rápido demais, peça uma avaliação da tubulação',
    ],
    faqs: [
      {
        question: 'De quanto em quanto tempo devo limpar a caixa de gordura?',
        answer:
          'Depende do uso da cozinha. Em residências, a limpeza costuma ser bem mais espaçada do que em restaurantes e lanchonetes, que precisam de manutenção frequente. Na visita orientamos a periodicidade para o seu caso.',
      },
      {
        question: 'Como saber se a caixa de gordura está cheia?',
        answer:
          'Mau cheiro, pia da cozinha escoando devagar, gordura visível na superfície e transbordamento são os sinais mais comuns.',
      },
      {
        question: 'Vocês atendem restaurantes fora do horário de funcionamento?',
        answer:
          'Sim. O atendimento é 24 horas, então a limpeza pode ser feita à noite ou de madrugada, sem atrapalhar o funcionamento do estabelecimento.',
      },
      {
        question: 'Quanto custa a limpeza de caixa de gordura em BH?',
        answer:
          'Depende do tamanho da caixa, do volume de resíduos e do acesso. A visita é gratuita e o orçamento é apresentado antes do serviço.',
      },
      {
        question: 'A caixa de gordura entupida pode causar entupimento na pia?',
        answer:
          'Sim. Quando a caixa está saturada, a água da pia da cozinha não consegue escoar e o entupimento aparece na pia.',
      },
      {
        question: 'Em quanto tempo a equipe chega?',
        answer:
          'A visita técnica é feita em até 30 minutos. Informe o endereço ao entrar em contato para receber a previsão.',
      },
      {
        question: 'O serviço tem garantia e nota fiscal?',
        answer:
          'Sim. O serviço tem garantia, conforme o serviço executado e o Código de Defesa do Consumidor, e emitimos nota fiscal.',
      },
    ],
  },
  {
    slug: 'hidrojateamento',
    name: 'Hidrojateamento de tubulações',
    menuLabel: 'Hidrojateamento',
    title: 'Hidrojateamento em BH 24 Horas',
    description:
      'Hidrojateamento de alta pressão em BH para limpar tubulações com gordura, lodo e resíduos. Indicado para condomínios, comércios e entupimento recorrente.',
    h1: 'Hidrojateamento de tubulações em BH',
    lead: 'Limpeza de canos e redes de esgoto com jato de água em alta pressão, indicada para gordura, lodo e entupimentos que voltam. A Prumo atende em Belo Horizonte e Região Metropolitana, 24 horas.',
    about: [
      'No hidrojateamento, um equipamento bombeia água em alta pressão por uma mangueira com bico especial, que percorre a tubulação por dentro. O jato remove a gordura, o lodo e os resíduos grudados nas paredes do cano, limpando a tubulação em toda a volta, e não só abrindo passagem.',
      'Por isso ele é indicado quando o problema é acúmulo, como em cozinhas, restaurantes, condomínios e redes que entopem com frequência. A indicação é feita depois da avaliação no local.',
    ],
    image: '/images/servico-hidrojateamento.webp',
    imageAlt: 'Técnico da Prumo fazendo hidrojateamento de alta pressão em tubulação',
    whatsappMessage:
      'Olá! Gostaria de um orçamento de hidrojateamento com a Prumo Desentupidora.',
    where: [
      'Redes de esgoto de condomínios',
      'Restaurantes e cozinhas industriais',
      'Comércios e empresas',
      'Casas com entupimento recorrente',
    ],
    signsTitle: 'Quando o hidrojateamento é indicado',
    signs: [
      'Entupimentos que voltam pouco tempo depois de desentupir',
      'Tubulação com muita gordura, como em cozinhas e restaurantes',
      'Rede de esgoto com lodo ou resíduos acumulados',
      'Escoamento lento em vários pontos do imóvel',
      'Manutenção preventiva em condomínios e comércios',
      'Limpeza de redes longas ou de diâmetro maior',
    ],
    causesTitle: 'O que o hidrojateamento remove',
    causes: [
      {
        title: 'Gordura solidificada',
        text: 'Camadas de gordura que grudam nas paredes do cano e reduzem a passagem da água.',
      },
      {
        title: 'Lodo e sedimentos',
        text: 'Resíduos que se depositam no fundo da tubulação ao longo do tempo.',
      },
      {
        title: 'Resíduos de sabão',
        text: 'Comuns em redes que recebem água de lavanderias e áreas de serviço.',
      },
      {
        title: 'Terra e areia',
        text: 'Acumuladas em redes pluviais e de quintal.',
      },
    ],
    methodTitle: 'Como funciona o serviço de hidrojateamento',
    method: [
      {
        title: 'Avaliação da tubulação',
        text: 'Verificamos as caixas de inspeção e os pontos de acesso para definir por onde entrar na rede.',
      },
      {
        title: 'Orçamento antes de começar',
        text: 'Explicamos se o hidrojateamento é o mais indicado e passamos o valor. O serviço só começa com a sua aprovação.',
      },
      {
        title: 'Limpeza com alta pressão',
        text: 'O bico percorre a tubulação removendo a gordura e os resíduos das paredes, e os resíduos são retirados pelas caixas.',
      },
      {
        title: 'Teste de escoamento',
        text: 'Conferimos o fluxo em todos os pontos atendidos e orientamos sobre a manutenção.',
      },
    ],
    tipsTitle: 'Como fazer a limpeza durar mais',
    tips: [
      'Mantenha a caixa de gordura limpa, que é a primeira barreira contra a gordura',
      'Não jogue óleo de cozinha na pia',
      'Em restaurantes e condomínios, programe limpezas preventivas',
      'Mantenha as caixas de inspeção tampadas para evitar entrada de terra',
      'Ao notar escoamento lento, chame antes de entupir de vez',
    ],
    faqs: [
      {
        question: 'O que é hidrojateamento?',
        answer:
          'É a limpeza da tubulação com jato de água em alta pressão, que remove gordura, lodo e resíduos grudados nas paredes do cano.',
      },
      {
        question: 'Qual a diferença entre hidrojateamento e desentupimento com máquina?',
        answer:
          'A máquina com cabo rotativo abre a passagem no ponto da obstrução. O hidrojateamento limpa a tubulação por inteiro, por isso é indicado quando há acúmulo de gordura ou entupimento recorrente.',
      },
      {
        question: 'O hidrojateamento danifica a tubulação?',
        answer:
          'Quando feito com a pressão e o bico adequados para cada tipo de cano, não. Por isso avaliamos a tubulação antes de começar.',
      },
      {
        question: 'Vocês fazem hidrojateamento em condomínios e restaurantes?',
        answer:
          'Sim. São os casos em que ele é mais indicado, tanto para desentupir quanto para manutenção preventiva.',
      },
      {
        question: 'Quanto custa o hidrojateamento em BH?',
        answer:
          'Depende da extensão da rede, do acesso e do volume de resíduos. A visita é gratuita e o orçamento é apresentado antes do serviço.',
      },
      {
        question: 'O serviço tem garantia e nota fiscal?',
        answer:
          'Sim. O serviço tem garantia, conforme o serviço executado e o Código de Defesa do Consumidor, e emitimos nota fiscal.',
      },
    ],
  },
]

export function getService(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) throw new Error(`Serviço não encontrado: ${slug}`)
  return service
}
