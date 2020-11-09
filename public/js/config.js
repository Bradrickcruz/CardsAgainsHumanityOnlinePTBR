let root = window.location.href
const blackCards = [
  {
    cardContent: 'o que é mais emo?',
    ageRestriction: false,
  },
  {
    cardContent: '"papai, por que a mamãe está chorando?"',
    ageRestriction: false,
  },
  {
    cardContent:
      'durante sua infância, Salvador Dalí fez centenas de pinturas de ...',
    ageRestriction: false,
  },
  {
    cardContent: 'como eu perdi minha virgindade?',
    ageRestriction: true,
  },
  {
    cardContent:
      'em 1000 anos, quando o dinheiro de papel for uma memória distante, como iremos pagar por bens e serviços?',
    ageRestriction: false,
  },
  {
    cardContent:
      'o museu de história natural acabou de lançar uma exibição interativa sobre ...',
    ageRestriction: false,
  },
  {
    cardContent:
      'é lamentavel que os jovens hoje em dia estão todos se envolvendo com ...',
    ageRestriction: false,
  },
  {
    cardContent: 'qual é o prazer secreto do batman?',
    ageRestriction: false,
  },
  {
    cardContent:
      'o proximo livro de J.K. Rowling: "Harry Potter e a câmara de _________"',
    ageRestriction: false,
  },
  {
    cardContent:
      'me desculpe, professor, mas eu não consegui fazer meu dever de casa por causa de ...',
    ageRestriction: false,
  },
  {
    cardContent: 'o que eu trouxe do paraguai?',
    ageRestriction: false,
  },
  {
    cardContent: '... . é impossível comer um só',
    ageRestriction: false,
  },
  {
    cardContent: 'qual é minha anti-droga?',
    ageRestriction: true,
  },
  {
    cardContent:
      'no novo filme Original do Disney Channel, Hanna Montana luta com ... pela primeira vez.',
    ageRestriction: false,
  },
  {
    cardContent: 'qual é o meu poder secreto?',
    ageRestriction: false,
  },
  {
    cardContent: 'qual a dieta do momento?',
    ageRestriction: false,
  },
  {
    cardContent: 'o que o vin diesel comeu no jantar?',
    ageRestriction: false,
  },
  {
    cardContent:
      'dizem que na prisão do carandiru se podia trocar 200 cigarros por ...',
    ageRestriction: true,
  },
  {
    cardContent:
      'ao invés de carvão, hoje em dia o papai noel da ... para as crianças malcriadas',
    ageRestriction: false,
  },
  {
    cardContent:
      'a vida dos indios Tapajós mudou totalmente depois que o homem branco apresentou a eles ...',
    ageRestriction: false,
  },
];
const whiteCards = [
  {
    cardContent: 'uma maldição cigana',
    ageRestriction: false,
  },
  {
    cardContent: 'Um momento de silêncio',
    ageRestriction: false,
  },
  {
    cardContent: 'uma festa onde só tem macho',
    ageRestriction: false,
  },
  {
    cardContent: 'um policial honesto sem nada a perder',
    ageRestriction: false,
  },
  {
    cardContent: 'a fome',
    ageRestriction: false,
  },
  {
    cardContent: 'uma bactéria somedora de carne',
    ageRestriction: false,
  },
  {
    cardContent: 'cobras voadoras taradas',
    ageRestriction: false,
  },
  {
    cardContent: 'cagar para o terceiro mundo',
    ageRestriction: true,
  },
  {
    cardContent: 'mandar mensagens sexuais por SMS',
    ageRestriction: true,
  },
  {
    cardContent: 'metamorfos',
    ageRestriction: false,
  },
  {
    cardContent: 'estrelas pornôs',
    ageRestriction: true,
  },
  {
    cardContent: 'estuprar e pilhar',
    ageRestriction: true,
  },
  {
    cardContent: '72 virgens',
    ageRestriction: true,
  },
  {
    cardContent: 'um tiroteio',
    ageRestriction: false,
  },
  {
    cardContent: 'um paradoxo de viagem no tempo',
    ageRestriction: false,
  },
  {
    cardContent: 'uma autêntica comida mexicana',
    ageRestriction: false,
  },
  {
    cardContent: 'bijuterias',
    ageRestriction: false,
  },
  {
    cardContent: 'consultores',
    ageRestriction: false,
  },
  {
    cardContent: 'dídivas astronômicas',
    ageRestriction: false,
  },
  {
    cardContent: 'problemas com o papai',
    ageRestriction: false,
  },
];