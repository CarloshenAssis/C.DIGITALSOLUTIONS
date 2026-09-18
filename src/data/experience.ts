export type Role = {
  id: string;
  org: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  /** O que essa passagem deixou — não a lista de tarefas. */
  carried: string;
};

/**
 * Trajetória. Apenas fatos informados — sem inflar cargo, período ou escopo.
 */
export const experience: Role[] = [
  {
    id: "sisvetor",
    org: "Sisvetor Informática",
    role: "Analista de Suporte / Negócios Júnior",
    period: "Atual",
    current: true,
    description:
      "Atuação na interseção entre tecnologia, suporte, processos e necessidades de negócio, incluindo demandas ligadas ao ambiente financeiro e contábil.",
    carried:
      "Ouvir o problema do cliente antes de olhar o sistema. Quase nunca é a pergunta que ele fez primeiro.",
  },
  {
    id: "prefeitura-sjc",
    org: "Prefeitura de São José dos Campos",
    role: "Estágio — área contábil e financeira",
    period: "2025 — 2026",
    description:
      "Rotinas relacionadas a documentos fiscais, retenções, processos administrativos e área financeira.",
    carried:
      "Processo público não perdoa improviso. Ou o caminho está documentado, ou ele não existe.",
  },
  {
    id: "petrobras",
    org: "Petrobras",
    role: "Jovem Aprendiz",
    period: "2024 — 2026",
    description:
      "Experiência profissional em ambiente corporativo de grande porte.",
    carried:
      "Como a informação circula quando a estrutura é grande — e onde ela costuma travar.",
  },
  {
    id: "exercito",
    org: "Exército Brasileiro",
    role: "Soldado",
    period: "2023 — 2024",
    description:
      "Disciplina, organização, responsabilidade, trabalho em equipe e execução.",
    carried:
      "Combinado é combinado. Prazo é prazo. Isso vale igual fora do quartel.",
  },
  {
    id: "jnj",
    org: "Johnson & Johnson",
    role: "Assistente Administrativo — Aprendiz",
    period: "2022 — 2023",
    description:
      "Rotinas administrativas, organização, controles e apoio operacional.",
    carried:
      "O primeiro contato com o tipo de tarefa repetitiva que, anos depois, eu passaria a automatizar.",
  },
];

export type Education = {
  id: string;
  course: string;
  institution: string;
  level: string;
  status: string;
};

export const education: Education[] = [
  {
    id: "contabeis",
    course: "Ciências Contábeis",
    institution: "Senac EAD",
    level: "Bacharelado",
    status: "Em andamento",
  },
  {
    id: "sistemas",
    course: "Desenvolvimento de Sistemas",
    institution: "SENAI",
    level: "Curso técnico",
    status: "Concluído",
  },
];
