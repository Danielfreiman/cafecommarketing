export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  format: "landscape" | "portrait" | "square";
  description: string;
  result: string;
  services: string[];
  platforms: string[];
  accent: "blue" | "pink" | "cream" | "dark";
};

export const projects: Project[] = [
  {
    slug: "cafe-aberto",
    client: "Café Aberto",
    title: "Uma rotina que virou série",
    category: "Conteúdo vertical",
    year: "2026",
    format: "portrait",
    description:
      "Uma temporada de vídeos curtos construída a partir das conversas, rituais e personagens do balcão.",
    result: "+312% de retenção",
    services: ["Estratégia", "Roteiro", "Captação", "Edição"],
    platforms: ["Instagram", "TikTok"],
    accent: "pink",
  },
  {
    slug: "cidade-em-movimento",
    client: "MOVE",
    title: "A cidade virou nosso estúdio",
    category: "Campanha",
    year: "2026",
    format: "landscape",
    description:
      "Filmes ágeis, mídia social e uma linguagem visual criada para acompanhar quem nunca fica parado.",
    result: "2,4 mi de plays",
    services: ["Conceito", "Direção", "Produção audiovisual", "Motion"],
    platforms: ["Instagram", "YouTube", "OOH"],
    accent: "blue",
  },
  {
    slug: "feito-a-mao",
    client: "Ateliê 27",
    title: "Produto com história, feed com textura",
    category: "Social Media",
    year: "2025",
    format: "square",
    description:
      "Um sistema editorial que transforma processo artesanal em conteúdo fácil de reconhecer.",
    result: "+184% de salvamentos",
    services: ["Posicionamento", "Direção visual", "Social media"],
    platforms: ["Instagram", "Pinterest"],
    accent: "cream",
  },
  {
    slug: "noite-acesa",
    client: "Lume Festival",
    title: "Conteúdo no ritmo do evento",
    category: "Eventos",
    year: "2025",
    format: "portrait",
    description:
      "Cobertura em tempo real, entrevistas e recortes verticais publicados enquanto a pista ainda estava cheia.",
    result: "68 entregas em 48h",
    services: ["Cobertura", "Captação", "Edição expressa"],
    platforms: ["Instagram", "TikTok", "YouTube"],
    accent: "dark",
  },
  {
    slug: "marca-em-cena",
    client: "Nativa",
    title: "Um novo jeito de ocupar a tela",
    category: "Branding",
    year: "2025",
    format: "landscape",
    description:
      "Reposicionamento verbal e visual traduzido em uma campanha de lançamento modular.",
    result: "+41% de buscas pela marca",
    services: ["Branding", "Campanha", "Produção audiovisual"],
    platforms: ["Instagram", "Site", "Mídia"],
    accent: "pink",
  },
  {
    slug: "receita-de-conteudo",
    client: "Mesa Boa",
    title: "Da receita ao replay",
    category: "Vídeo",
    year: "2024",
    format: "square",
    description:
      "Uma biblioteca de receitas com planos fechados, ritmo de corte e som que abre o apetite.",
    result: "7,8 mi de visualizações",
    services: ["Roteiro", "Food styling", "Captação", "Pós-produção"],
    platforms: ["Instagram", "TikTok", "YouTube Shorts"],
    accent: "blue",
  },
];

export const services = [
  {
    number: "01",
    title: "Estratégia de conteúdo",
    copy: "Pauta, posicionamento e calendário para cada post ter um porquê — e não existir só para preencher terça-feira.",
    tag: "ANTES DO REC",
  },
  {
    number: "02",
    title: "Produção audiovisual",
    copy: "Do roteiro ao último corte: direção, captação, edição, motion e formatos verticais que já nascem para a tela.",
    tag: "LUZ, CÂMERA, IDEIA",
  },
  {
    number: "03",
    title: "Gestão de redes",
    copy: "Planejamento, publicação, conversa e otimização. A rotina do feed com intenção e leitura de contexto.",
    tag: "TODO DIA, COM MOTIVO",
  },
  {
    number: "04",
    title: "Campanhas criativas",
    copy: "Um conceito forte, muitos desdobramentos e nenhuma peça com cara de prima distante da outra.",
    tag: "UMA IDEIA, VÁRIAS TELAS",
  },
  {
    number: "05",
    title: "Identidade e posicionamento",
    copy: "Ajustamos voz, repertório e expressão visual para sua marca ser reconhecida antes mesmo do @ aparecer.",
    tag: "JEITO DE MARCA",
  },
  {
    number: "06",
    title: "Cobertura de eventos",
    copy: "Foto, vídeo, stories e cortes rápidos enquanto ainda está acontecendo. Conteúdo quente, sem perder o acabamento.",
    tag: "POSTADO DO LOCAL",
  },
];

export const metrics = [
  ["120+", "projetos entregues"],
  ["8 mi", "visualizações geradas"],
  ["40", "marcas atendidas"],
  ["3.500", "conteúdos publicados"],
] as const;

export const testimonials = [
  {
    quote:
      "A equipe entendeu nosso jeito de falar antes mesmo de a gente conseguir explicar. O conteúdo ficou mais nosso — e os números acompanharam.",
    name: "Marina Rocha",
    role: "Diretora de marca, Nativa",
  },
  {
    quote:
      "No evento, eles estavam em todos os lugares sem atrapalhar nada. No fim da noite, os melhores momentos já estavam no ar.",
    name: "Caio Mendes",
    role: "Produtor, Lume Festival",
  },
];

export const processSteps = [
  ["Imersão", "A gente ouve, pergunta, pesquisa e descobre onde está a história que vale contar."],
  ["Estratégia", "Transformamos contexto em pauta, formato, cadência e uma direção criativa clara."],
  ["Produção", "Roteiro, equipe, captação, edição e aquele take extra que quase sempre salva o filme."],
  ["Publicação", "O conteúdo vai ao ar, os sinais chegam e o próximo ciclo já começa mais inteligente."],
] as const;

export const siteUrl = "https://cafe-com-marketing.sites.openai.com";
