export type ProcessStage = {
  index: string;
  title: string;
  lead: string;
  body: string;
  steps: { label: string; detail: string }[];
};

/**
 * Três macroetapas visíveis. As seis etapas operacionais ficam dentro delas,
 * reveladas quando o visitante quiser esse nível de detalhe.
 */
export const processStages: ProcessStage[] = [
  {
    index: "01",
    title: "Entender",
    lead: "Entender o problema.",
    body: "Nenhuma decisão técnica é tomada nesta etapa. O objetivo é saber o que está acontecendo, onde existe atrito e qual resultado realmente importa para o negócio.",
    steps: [
      {
        label: "Conversa inicial",
        detail:
          "Cenário atual, objetivos e o que motivou a procura. Sem proposta, sem escopo, sem preço.",
      },
      {
        label: "Diagnóstico",
        detail:
          "Organização do problema e identificação das oportunidades reais — inclusive as que não envolvem construir nada.",
      },
    ],
  },
  {
    index: "02",
    title: "Construir",
    lead: "Construir a solução.",
    body: "Com o problema claro, a construção deixa de ser um exercício de gosto e passa a ser uma sequência de decisões justificáveis.",
    steps: [
      {
        label: "Estruturação",
        detail:
          "Definição do que precisa existir, como deve funcionar e em que ordem. É aqui que o escopo ganha forma.",
      },
      {
        label: "Desenvolvimento",
        detail:
          "Construção da solução com validação das decisões principais ao longo do caminho, não apenas no final.",
      },
    ],
  },
  {
    index: "03",
    title: "Refinar",
    lead: "Refinar até fazer sentido.",
    body: "A diferença entre funcionar e estar pronto costuma estar nesta etapa. É a parte que quase sempre é cortada — e é justamente a que se percebe.",
    steps: [
      {
        label: "Ajuste",
        detail:
          "Revisão de experiência, conteúdo e detalhes. O que ficou confuso é reescrito, não defendido.",
      },
      {
        label: "Entrega",
        detail:
          "Publicação, configuração e transferência. Você entende o que recebeu e como mexer no que for seu.",
      },
    ],
  },
];
