import { brand } from "@/config/brand";
import { seo } from "@/config/seo";
import { contact, hasEmail } from "@/config/contact";
import { activeSocial } from "@/config/social";

/**
 * Dados estruturados. Apenas informação verificável:
 * sem endereço físico, sem avaliação, sem faixa de preço inventada.
 */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.fullName,
    url: brand.url,
    inLanguage: "pt-BR",
    description: seo.description,
  };
}

export function professionalServiceJsonLd() {
  const sameAs = activeSocial().map((s) => s.href);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.fullName,
    url: brand.url,
    description: seo.description,
    slogan: brand.tagline,
    ...(hasEmail() ? { email: contact.email } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    founder: {
      "@type": "Person",
      name: brand.person,
    },
    areaServed: "BR",
    knowsAbout: [
      "Desenvolvimento de websites",
      "Sistemas web",
      "Automação de processos",
      "UX/UI",
      "Inteligência artificial aplicada a negócios",
    ],
  };
}

export function personJsonLd() {
  const sameAs = activeSocial().map((s) => s.href);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: brand.person,
    jobTitle: "Analista de Suporte / Negócios Júnior",
    worksFor: { "@type": "Organization", name: brand.fullName },
    url: `${brand.url}/sobre`,
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function creativeWorkJsonLd(project: {
  title: string;
  slug: string;
  summary: string;
  year: string;
  discipline: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `${brand.url}/projetos/${project.slug}`,
    description: project.summary,
    dateCreated: project.year,
    genre: project.discipline,
    creator: { "@type": "Person", name: brand.person },
  };
}

export function articleJsonLd(article: {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    url: `${brand.url}/journal/${article.slug}`,
    author: { "@type": "Person", name: brand.person },
    publisher: { "@type": "Organization", name: brand.fullName },
    inLanguage: "pt-BR",
  };
}
