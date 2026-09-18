/**
 * PROJETOS
 * ---------------------------------------------------------------------------
 * Fonte única. Adicionar um projeto = adicionar um objeto aqui.
 *
 * REGRA DE INTEGRIDADE (não remover):
 * não registrar métrica, resultado, faturamento, conversão ou depoimento
 * que não seja real e verificável. Campos sem dado ficam ausentes — a
 * interface foi construída para se comportar bem sem eles.
 *
 * IMAGENS: coloque os arquivos em /public/work/<slug>/ e referencie abaixo.
 * Enquanto não houver arquivo, a moldura renderiza um placeholder tipográfico
 * desenhado — nunca uma captura fictícia.
 */

export type ProjectImage = {
  src: string;
  alt: string;
  /** Peso na narrativa da galeria. */
  kind?: "desktop" | "mobile" | "detail" | "section";
  caption?: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  /** Rótulo curto exibido acima do título. */
  kicker: string;
  discipline: string;
  sector: string;
  year: string;
  summary: string;
  description: string;
  challenge: string;
  approach: string;
  solution: string;
  delivered: string[];
  technologies: string[];
  /** Imagem principal. Ausente → placeholder desenhado. */
  image?: string;
  gallery: ProjectImage[];
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "nobrega-correa",
    index: "01",
    title: "Nóbrega & Corrêa",
    kicker: "Website · Contabilidade",
    discipline: "Website",
    sector: "Contabilidade",
    year: "2025",
    summary:
      "Uma presença digital estruturada para apresentar o escritório, seus serviços e áreas de atuação com clareza.",
    description:
      "Escritório de contabilidade que precisava de uma presença digital compatível com o porte e a seriedade do trabalho já realizado fora da internet.",
    challenge:
      "O escritório atendia bem, tinha carteira consolidada e reputação construída no boca a boca — mas nada disso aparecia quando alguém procurava por ele. A distância entre a qualidade do serviço e a percepção digital era o problema real. Não faltava conteúdo: faltava organização e uma forma de apresentá-lo.",
    approach:
      "O ponto de partida foi mapear o que um visitante precisa saber antes de decidir entrar em contato com um contador: quais serviços existem, para que tipo de empresa, e como falar com alguém. A arquitetura foi montada a partir dessas perguntas, não a partir de um layout pronto. Cada seção existe para encurtar o caminho entre a dúvida e a resposta.",
    solution:
      "Um site institucional com hierarquia clara entre áreas de atuação, serviços e contato. A navegação foi reduzida ao necessário, o conteúdo reescrito para ser lido rápido e os pontos de contato posicionados onde a decisão acontece — e não apenas no rodapé.",
    delivered: [
      "Arquitetura de informação",
      "UX/UI",
      "Website institucional",
      "Estrutura de conteúdo",
      "Design responsivo",
      "Fundamentos de SEO",
      "Deploy",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    gallery: [],
    featured: true,
  },
  {
    slug: "contmav",
    index: "02",
    title: "ContMav",
    kicker: "Website · Contabilidade",
    discipline: "Website",
    sector: "Contabilidade",
    year: "2025",
    summary:
      "Uma experiência digital para fortalecer a apresentação institucional e tornar a comunicação dos serviços mais clara.",
    description:
      "Escritório contábil com serviços amplos e uma comunicação que não deixava evidente onde cada um começava.",
    challenge:
      "A oferta era ampla e a apresentação, genérica. Quem chegava não conseguia identificar rapidamente se aquele escritório atendia o seu caso específico — e sair de uma página sem essa resposta significa não voltar.",
    approach:
      "Separar o que estava misturado. Os serviços foram reagrupados por tipo de necessidade, não por nomenclatura técnica interna, e a página passou a conduzir a leitura em uma ordem que responde às dúvidas na sequência em que elas aparecem.",
    solution:
      "Um site institucional com blocos de serviço autoexplicativos, linguagem ajustada ao público e um caminho direto até o contato em cada etapa da página.",
    delivered: [
      "UX/UI",
      "Website institucional",
      "Estrutura de conteúdo",
      "Design responsivo",
      "Fundamentos de SEO",
      "Deploy",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    gallery: [],
    featured: true,
  },
  {
    slug: "gabriella-ferreira",
    index: "03",
    title: "Gabriella Ferreira",
    kicker: "Website · Nutrição",
    discipline: "Website",
    sector: "Nutrição",
    year: "2025",
    summary:
      "Uma experiência editorial que transforma conhecimento profissional em presença digital própria.",
    description:
      "Profissional de nutrição com autoridade construída no atendimento e uma presença online que não acompanhava esse nível.",
    challenge:
      "O trabalho era consistente, mas a apresentação digital não comunicava isso. Em áreas de saúde, a percepção de cuidado começa antes da consulta — e a primeira impressão estava sendo dada por um canal que não representava a profissional.",
    approach:
      "Tratar o site como um espaço editorial, não como um cartão de visitas. A direção priorizou respiro, tipografia e ritmo de leitura, para que a experiência transmitisse o mesmo cuidado do atendimento.",
    solution:
      "Uma presença digital com identidade própria, foco na apresentação do trabalho e um caminho de contato simples, sem ruído.",
    delivered: [
      "Direção visual",
      "UX/UI",
      "Website",
      "Estrutura de conteúdo",
      "Design responsivo",
      "Deploy",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    gallery: [],
    featured: true,
  },
  {
    slug: "ana-carolina-ribeiro",
    index: "04",
    title: "Ana Carolina Ribeiro",
    kicker: "Website · Marca pessoal",
    discipline: "Website",
    sector: "Marca pessoal",
    year: "2025",
    summary:
      "Estruturação de uma presença digital conectada ao conteúdo e à autoridade já construídos nas redes sociais.",
    description:
      "Marca pessoal com audiência ativa nas redes e nenhum território próprio fora delas.",
    challenge:
      "Toda a autoridade estava hospedada em plataformas de terceiros, com alcance e regras fora do próprio controle. Faltava um ponto fixo que reunisse o que já existia e servisse como destino, e não apenas como passagem.",
    approach:
      "Definir o site como o centro e as redes como entradas. A estrutura foi pensada para receber quem vem de fora já conhecendo o trabalho, e para dar a essa pessoa o próximo passo — não apenas mais conteúdo.",
    solution:
      "Um site que consolida apresentação, conteúdo e contato em um único lugar, com continuidade visual em relação ao que a audiência já reconhece.",
    delivered: [
      "UX/UI",
      "Website",
      "Estrutura de conteúdo",
      "Design responsivo",
      "Deploy",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    gallery: [],
    featured: false,
  },
  {
    slug: "monteiro-graciano",
    index: "05",
    title: "Monteiro-Graciano",
    kicker: "Website · Institucional",
    discipline: "Website",
    sector: "Institucional",
    year: "2025",
    summary:
      "Uma presença institucional desenvolvida para apresentar o negócio com clareza e fortalecer sua percepção digital.",
    description:
      "Negócio consolidado cuja apresentação digital não correspondia à sua atuação.",
    challenge:
      "A empresa era percebida de uma forma por quem já a conhecia e de outra, bem menos favorável, por quem a encontrava pela primeira vez na internet. Corrigir essa diferença era o objetivo.",
    approach:
      "Antes do layout, a definição do que precisava ficar evidente nos primeiros segundos: o que a empresa faz, para quem e por que ela é uma escolha segura. O restante da página foi construído para sustentar essa leitura inicial.",
    solution:
      "Um site institucional objetivo, com hierarquia firme, apresentação direta do negócio e contato acessível em qualquer ponto da navegação.",
    delivered: [
      "UX/UI",
      "Website institucional",
      "Estrutura de conteúdo",
      "Design responsivo",
      "Deploy",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    gallery: [],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectSlugs = projects.map((p) => p.slug);
