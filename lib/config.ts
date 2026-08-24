export const siteConfig = {
  profissional: {
    nome: "Danielle Saquetto Baruffi",
    titulo: "Psicóloga",
    crp: "CRP 06/83220",
    marca: "Dani Psicologia Clínica",
    abordagem: "Terapia Cognitivo-Comportamental (TCC)",
    anosExperiencia: 20,
    formacao: [
      "Graduada pela Unesp-Assis",
      "Mestre em Psicologia Educacional (PUC-SP)",
      "Especialista em Terapia Familiar",
    ],
  },

  hero: {
    tituloDestaque: "Psicoterapia com",
    tituloResto: "acolhimento, experiência e base científica.",
    subtitulo:
      "Um espaço seguro, ético e humanizado para quem deseja compreender suas emoções, fortalecer vínculos e construir mudanças reais.",
    imagem: "/images/danielle-hero.png",
    imagemAlt:
      "Danielle Saquetto Baruffi, psicóloga, sentada em uma poltrona no consultório segurando uma prancheta",
  },

  contato: {
    // PENDENTE: preencher com o número em formato internacional, só dígitos.
    // Exemplo: "5517999999999". Enquanto vazio, os CTAs caem no maapp.
    whatsapp: "",
    mensagemWhatsapp:
      "Olá, Danielle! Vim pelo site e gostaria de agendar uma consulta.",
    email: "daniellerevitalle@gmail.com",
    instagram: "https://instagram.com/danipsicologiaclinica",
    instagramHandle: "@danipsicologiaclinica",
    agendaOnline: "https://maapp.com.br/PsicoDani",
  },

  endereco: {
    clinica: "Clínica Revitalle",
    logradouro: "Rua Um, 2466",
    bairro: "Centro",
    cidade: "Jales",
    uf: "SP",
    cep: "15700-002",
    modalidades: "Atendimento presencial e online",
  },

  horarios: [
    { dia: "Segunda-feira", situacao: "Somente com hora marcada", aberto: true },
    { dia: "Terça-feira", situacao: "Somente com hora marcada", aberto: true },
    { dia: "Quarta-feira", situacao: "Somente com hora marcada", aberto: true },
    { dia: "Quinta-feira", situacao: "Fechada", aberto: false },
    { dia: "Sexta-feira", situacao: "Fechada", aberto: false },
    { dia: "Sábado", situacao: "Somente com hora marcada", aberto: true },
    { dia: "Domingo", situacao: "Fechada", aberto: false },
  ],

  credenciais: [
    {
      icone: "Heart",
      titulo: "+20 anos de experiência",
      descricao: "Acolhendo histórias e promovendo mudanças reais.",
    },
    {
      icone: "Brain",
      titulo: "TCC",
      descricao:
        "Abordagem baseada em evidências para transformar pensamentos, emoções e comportamentos.",
    },
    {
      icone: "Users",
      titulo: "Terapia Familiar",
      descricao:
        "Atuação especializada para fortalecer vínculos e promover diálogo e compreensão.",
    },
    {
      icone: "GraduationCap",
      titulo: "Mestre em Psicologia Educacional",
      descricao:
        "Formação sólida e contínua para oferecer o melhor atendimento.",
    },
  ],

  especialidades: [
    {
      icone: "Wind",
      titulo: "Ansiedade",
      descricao:
        "Manejo dos sintomas e desenvolvimento de estratégias para mais tranquilidade.",
    },
    {
      icone: "HeartHandshake",
      titulo: "Relacionamentos",
      descricao: "Conflitos, comunicação e construção de vínculos saudáveis.",
    },
    {
      icone: "Sparkles",
      titulo: "Autoestima",
      descricao: "Fortalecimento da autoconfiança e do amor próprio.",
    },
    {
      icone: "Leaf",
      titulo: "Desenvolvimento emocional",
      descricao:
        "Autoconhecimento e gestão das emoções para uma vida mais leve.",
    },
    {
      icone: "Sun",
      titulo: "Qualidade de vida",
      descricao: "Equilíbrio, propósito e bem-estar no dia a dia.",
    },
    {
      icone: "Users",
      titulo: "Casais e famílias",
      descricao:
        "Apoio para superar desafios e construir relações mais saudáveis.",
    },
  ],

  publicos: [
    {
      icone: "Sprout",
      titulo: "Adolescentes",
      descricao: "Apoio para lidar com emoções, conflitos e desafios dessa fase.",
    },
    {
      icone: "User",
      titulo: "Adultos",
      descricao: "Mais clareza, equilíbrio emocional e qualidade de vida.",
    },
    {
      icone: "Heart",
      titulo: "Casais",
      descricao:
        "Fortalecimento da relação e resolução de conflitos com respeito e diálogo.",
    },
    {
      icone: "Users",
      titulo: "Famílias",
      descricao: "Melhores conexões, compreensão e convivência.",
    },
  ],

  depoimentos: [
    {
      autor: "Josiane Fernandes",
      texto: "Foi ótimo! É uma excelente profissional!",
      nota: 5,
    },
    {
      autor: "Josy Marques",
      texto: "Profissional maravilhosa!",
      nota: 5,
    },
    {
      autor: "Luany Farias",
      texto: "Excelente!!!",
      nota: 5,
    },
  ],

  ctas: {
    agendar: "Agendar consulta",
    atendimento: "Atendimento presencial e online",
  },

  secoes: {
    especialidades: { titulo: "Especialidades" },
    paraQuem: { titulo: "Para quem é a psicoterapia?" },
    depoimentos: {
      titulo: "O que dizem sobre o meu trabalho",
      selo: "avaliação do Google",
    },
    contato: {
      titulo: "Vamos conversar?",
      subtitulo:
        "Agende seu atendimento e dê o primeiro passo em direção ao seu bem-estar emocional.",
      tituloLocal: "Onde atendo",
      tituloHorarios: "Horários",
      tituloCanais: "Outros canais",
    },
  },

  footer: {
    tagline: "Psicoterapia com acolhimento, experiência e base científica.",
    navegacaoLabel: "Navegação",
    contatoLabel: "Contato",
  },

  navegacao: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#credenciais" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Atendimento", href: "#para-quem" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],

  seo: {
    url: "https://danipsicologiaclinica.com.br",
    titulo:
      "Danielle Saquetto Baruffi — Psicóloga em Jales/SP | CRP 06/83220",
    descricao:
      "Psicoterapia com acolhimento, experiência e base científica. Atendimento em TCC para adolescentes, adultos, casais e famílias em Jales/SP, presencial e online.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
