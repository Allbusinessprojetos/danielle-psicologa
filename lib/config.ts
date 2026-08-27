const siteConfigBase = {
  profissional: {
    nome: "Danielle Saquetto Baruffi",
    titulo: "Psicóloga",
    crp: "CRP 06/83220",
    marca: "Dani Psicologia Clínica",
    abordagem: "Terapia Cognitivo-Comportamental (TCC)",
    anosExperiencia: 20,
  },

  hero: {
    eyebrow: "Psicologia clínica • Jales/SP & online",
    tituloDestaque: "Cuidar da mente",
    tituloResto: "é também reconstruir caminhos.",
    subtitulo:
      "Psicoterapia com acolhimento, experiência e base científica para adolescentes, adultos, casais e famílias.",
    imagem: "/images/danielle-hero-final.png",
    imagemAlt: "Danielle Saquetto Baruffi, psicóloga, em retrato profissional no consultório",
  },

  sobre: {
    eyebrow: "Sobre Danielle",
    titulo: "Experiência clínica com um olhar humano e integrado.",
    texto:
      "Há mais de 20 anos, acompanho pessoas em diferentes momentos da vida. Minha prática une escuta sensível, ética e conhecimento científico para compreender não apenas sintomas, mas também histórias, vínculos e contextos.",
    destaque:
      "A psicoterapia pode ser um espaço para compreender o que pesa, reconhecer recursos e construir mudanças possíveis — no seu tempo.",
    imagem: "/images/danielle-sobre.jpg",
    imagemAlt: "Danielle Saquetto Baruffi sorrindo em retrato profissional",
  },

  contato: {
    whatsapp: "5517997731505",
    mensagemWhatsapp: "Olá, Danielle! Vim pelo site e gostaria de agendar uma consulta.",
    email: "daniellerevitalle@gmail.com",
    instagram: "https://instagram.com/danipsicologiaclinica",
    instagramHandle: "@danipsicologiaclinica",
    agendaOnline: "https://maapp.com.br/PsicoDani",
    agendaOnlineLabel: "Ver agenda online",
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
    { dia: "Segunda-feira", situacao: "Com hora marcada", aberto: true },
    { dia: "Terça-feira", situacao: "Com hora marcada", aberto: true },
    { dia: "Quarta-feira", situacao: "Com hora marcada", aberto: true },
    { dia: "Sábado", situacao: "Com hora marcada", aberto: true },
  ],

  credenciais: [
    { numero: "+20", label: "anos de experiência" },
    { numero: "TCC", label: "abordagem baseada em evidências" },
    { numero: "PUC-SP", label: "Mestre em Psicologia da Educação" },
    { numero: "FAMERP", label: "Especialista em Terapia Familiar" },
  ],

  especialidades: [
    { numero: "01", titulo: "Ansiedade", descricao: "Compreensão dos gatilhos, manejo dos sintomas e construção de estratégias para uma rotina mais leve." },
    { numero: "02", titulo: "Relacionamentos", descricao: "Comunicação, conflitos, vínculos e padrões relacionais que impactam a vida emocional." },
    { numero: "03", titulo: "Autoestima", descricao: "Fortalecimento da autopercepção, da confiança e de uma relação mais saudável consigo." },
    { numero: "04", titulo: "Desenvolvimento emocional", descricao: "Autoconhecimento e recursos para reconhecer, nomear e regular emoções." },
    { numero: "05", titulo: "Qualidade de vida", descricao: "Equilíbrio entre demandas, limites, escolhas e aquilo que faz sentido para você." },
    { numero: "06", titulo: "Casais e famílias", descricao: "Um espaço de diálogo para compreender conflitos e fortalecer relações importantes." },
  ],

  publicos: [
    { titulo: "Adolescentes", descricao: "Acolhimento para questões emocionais, familiares, escolares e próprias dessa fase de desenvolvimento." },
    { titulo: "Adultos", descricao: "Um processo para ampliar consciência, repertório emocional e qualidade de vida." },
    { titulo: "Casais", descricao: "Escuta e mediação para compreender padrões, melhorar a comunicação e fortalecer o vínculo." },
    { titulo: "Famílias", descricao: "Apoio para reorganizar relações, compreender necessidades e construir novas formas de convivência." },
  ],

  trajetoria: [
    { periodo: "Início da carreira", titulo: "APAE de Jales", descricao: "Atuação como psicóloga na área da Educação Especial." },
    { periodo: "Assistência social", titulo: "CRAS de Santa Albertina", descricao: "Desenvolvimento de ações voltadas ao fortalecimento de vínculos familiares e comunitários." },
    { periodo: "Educação", titulo: "ETEC de Jales", descricao: "Orientadora Educacional, acompanhando adolescentes e jovens em seu desenvolvimento acadêmico, pessoal e profissional." },
    { periodo: "Ensino superior", titulo: "Fundação Educacional de Fernandópolis (FEF)", descricao: "Docência em disciplinas de Psicologia do Desenvolvimento, Psicologia da Aprendizagem e Psicologia da Educação." },
    { periodo: "Atuação atual", titulo: "Psicologia Clínica & Atenção Primária à Saúde", descricao: "Atendimento clínico a adolescentes, adultos, casais e famílias e atuação na equipe multiprofissional de saúde do município de Dirce Reis." },
  ],

  formacaoAcademica: [
    { instituicao: "UNESP — Assis", titulo: "Bacharelado e Licenciatura em Psicologia" },
    { instituicao: "PUC-SP", titulo: "Mestrado em Psicologia da Educação" },
    { instituicao: "FAMERP", titulo: "Especialização em Terapia Familiar" },
  ],

  depoimentos: [
    { autor: "Josiane Fernandes", texto: "Foi ótimo! É uma excelente profissional!", nota: 5 },
    { autor: "Josy Marques", texto: "Profissional maravilhosa!", nota: 5 },
    { autor: "Luany Farias", texto: "Excelente!!!", nota: 5 },
  ],

  ctas: {
    agendar: "Agendar consulta",
    agenda: "Ver agenda online",
    conhecer: "Conhecer meu trabalho",
  },

  secoes: {
    depoimentos: { ativo: true, titulo: "Palavras de quem já passou por aqui", selo: "avaliação do Google" },
  },

  footer: {
    tagline: "Psicoterapia com acolhimento, experiência e base científica.",
  },

  seo: {
    url: "https://danielle-psicologa.netlify.app",
    titulo: "Danielle Saquetto Baruffi — Psicóloga em Jales/SP | CRP 06/83220",
    descricao: "Psicoterapia com acolhimento, experiência e base científica. Atendimento em TCC para adolescentes, adultos, casais e famílias em Jales/SP, presencial e online.",
    ogImage: "/images/danielle-og.jpg",
  },
} as const;

const navegacaoBase = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Espaço", href: "#espaco" },
  { label: "Contato", href: "#contato" },
] as const;

export const siteConfig = { ...siteConfigBase, navegacao: navegacaoBase } as const;
export type SiteConfig = typeof siteConfig;
