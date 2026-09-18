import { brand } from "./brand";

export const seo = {
  title: `${brand.fullName} — Soluções digitais para problemas reais`,
  titleTemplate: `%s — ${brand.fullName}`,
  description:
    "Sites, sistemas, automações e soluções digitais desenvolvidos a partir das necessidades reais de cada negócio.",
  keywords: [
    "soluções digitais",
    "desenvolvimento de sites",
    "sistemas web",
    "automação de processos",
    "UX/UI",
    "São José dos Campos",
  ],
  ogImage: "/opengraph-image",
} as const;
