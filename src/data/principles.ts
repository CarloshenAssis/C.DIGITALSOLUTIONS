export type Principle = {
  index: string;
  negative: string;
  positive: string;
};

/** Ditos pelo avesso: primeiro o que não acontece, depois o motivo. */
export const principles: Principle[] = [
  {
    index: "01",
    negative: "Não parto de templates.",
    positive: "Cada projeto começa a partir da necessidade, não de um layout já pronto esperando conteúdo.",
  },
  {
    index: "02",
    negative: "Não complico o que pode ser simples.",
    positive: "Tecnologia deve reduzir esforço. Quando ela adiciona esforço, a escolha foi errada.",
  },
  {
    index: "03",
    negative: "Não escondo o processo.",
    positive: "Você entende o que está sendo construído, por que está sendo construído e o que falta.",
  },
  {
    index: "04",
    negative: "Não desapareço depois da entrega.",
    positive: "O projeto não vira uma caixa-preta no dia do pagamento. A relação continua conforme a necessidade.",
  },
];
