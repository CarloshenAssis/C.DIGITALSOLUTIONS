import { siteUrl } from "./site-url";

/**
 * Identidade da marca. Ponto único de verdade.
 * Nada aqui deve ser duplicado dentro de componentes.
 */
export const brand = {
  name: "C.",
  fullName: "C. Digital Solutions",
  legalName: "C. Digital Solutions",
  person: "Carlos Henrique",
  tagline: "Tecnologia que resolve problemas de negócio.",
  manifesto: "Não começo pela tecnologia. Começo pelo problema.",
  signature: "Problem first. Solution second.",
  descriptor: "Digital solutions for real problems.",
  locale: "pt-BR",
  /** Resolvido em src/config/site-url.ts. Sempre uma URL absoluta válida. */
  url: siteUrl,
} as const;

export const year = new Date().getFullYear();
