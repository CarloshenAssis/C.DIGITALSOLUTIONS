export type CapabilityGroup = {
  index: string;
  title: string;
  note: string;
  items: string[];
};

/**
 * Sem barras de progresso, sem percentuais, sem "nível".
 * Ferramenta é ferramenta — não é identidade profissional.
 */
export const capabilities: CapabilityGroup[] = [
  {
    index: "01",
    title: "Negócio",
    note: "A parte que define se o resto vale a pena.",
    items: [
      "Análise de processos",
      "Resolução de problemas",
      "Raciocínio operacional",
      "Estratégia digital",
    ],
  },
  {
    index: "02",
    title: "Digital",
    note: "Como a solução se apresenta para quem vai usar.",
    items: [
      "UX/UI",
      "Websites",
      "Landing pages",
      "Estrutura de conteúdo",
      "Fundamentos de SEO",
    ],
  },
  {
    index: "03",
    title: "Tecnologia",
    note: "O meio. Não o ponto de partida.",
    items: ["HTML", "CSS", "JavaScript", "SQL", "APIs", "Git", "Vercel"],
  },
  {
    index: "04",
    title: "IA e automação",
    note: "Usadas onde reduzem esforço — e ignoradas onde não reduzem.",
    items: ["ChatGPT", "Claude", "Claude Code", "Lovable", "Apify", "n8n"],
  },
];

export const capabilitiesNote =
  "Ferramentas mudam. A capacidade de resolver problemas permanece.";
