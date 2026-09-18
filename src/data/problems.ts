/**
 * A seção mais autoral do site: o visitante se reconhece em uma frase
 * antes de ouvir uma proposta.
 */
export type ProblemPair = {
  id: string;
  quote: string;
  answer: string;
  answerDetail: string;
  href: string;
};

export const problems: ProblemPair[] = [
  {
    id: "presenca",
    quote: "Minha empresa não parece tão profissional online quanto ela é.",
    answer: "Presença digital",
    answerDetail:
      "A percepção começa antes do primeiro contato. Corrigir isso costuma ser o passo mais barato e mais rápido.",
    href: "/solucoes#presenca-digital",
  },
  {
    id: "automacao",
    quote: "Minha equipe perde tempo fazendo sempre a mesma coisa.",
    answer: "Automação",
    answerDetail:
      "Tarefa repetitiva com regra clara é candidata natural a deixar de ser feita à mão.",
    href: "/solucoes#automacao-ia",
  },
  {
    id: "sistema",
    quote: "Meu processo ainda depende de planilhas e de quem lembra dele.",
    answer: "Sistema",
    answerDetail:
      "Quando o controle mora na cabeça de alguém, o risco não é erro. É indisponibilidade.",
    href: "/solucoes#sistemas",
  },
  {
    id: "mvp",
    quote: "Tenho uma ideia, mas não sei como tirar do papel.",
    answer: "MVP",
    answerDetail:
      "A primeira versão não precisa fazer tudo. Precisa provar que vale a pena fazer o resto.",
    href: "/solucoes#sistemas",
  },
  {
    id: "diagnostico",
    quote: "Sei que IA pode ajudar, mas não sei onde.",
    answer: "Diagnóstico",
    answerDetail:
      "A pergunta útil não é onde aplicar IA. É onde existe esforço repetido que vale a pena reduzir.",
    href: "/solucoes#estrategia",
  },
];
