export type Service = {
  index: string;
  slug: string;
  title: string;
  claim: string;
  description: string;
  /** O que isso resolve, em linguagem de negócio. */
  resolves: string;
  tags: string[];
};

export const services: Service[] = [
  {
    index: "01",
    slug: "presenca-digital",
    title: "Presença digital",
    claim: "Ser encontrado e ser levado a sério são coisas diferentes.",
    description:
      "Websites, landing pages e experiências digitais desenvolvidos para apresentar um negócio de forma profissional e transformar atenção em oportunidade.",
    resolves:
      "Quando a empresa é melhor do que parece na internet, o problema não é o serviço. É a apresentação.",
    tags: ["Websites", "Landing pages", "UX/UI", "SEO"],
  },
  {
    index: "02",
    slug: "sistemas",
    title: "Sistemas e plataformas",
    claim: "Planilha é um começo. Raramente é um destino.",
    description:
      "Interfaces e aplicações para organizar informação, simplificar a operação e transformar processos em ferramentas digitais.",
    resolves:
      "Quando o controle depende de memória, de uma pessoa específica ou de um arquivo que alguém precisa lembrar de atualizar.",
    tags: ["Web apps", "Dashboards", "MVPs", "Interfaces internas"],
  },
  {
    index: "03",
    slug: "automacao-ia",
    title: "Automação e IA",
    claim: "Nem toda tarefa repetitiva precisa de uma pessoa.",
    description:
      "Identificação de tarefas repetitivas, estruturação de fluxos digitais mais eficientes e aplicação de inteligência artificial onde ela realmente reduz esforço.",
    resolves:
      "Quando a equipe gasta horas por semana fazendo algo que sempre termina do mesmo jeito.",
    tags: ["Workflows", "Integrações", "Automação de processos", "IA aplicada"],
  },
  {
    index: "04",
    slug: "estrategia",
    title: "Estratégia e diagnóstico",
    claim: "Antes de construir, entender.",
    description:
      "Leitura do cenário atual, identificação de onde está o atrito e definição de quais caminhos fazem sentido — inclusive quando o caminho é não construir nada.",
    resolves:
      "Quando existe a sensação de que algo precisa mudar, mas ainda não está claro o quê.",
    tags: ["Diagnóstico", "Análise de processos", "Priorização", "Escopo"],
  },
];
