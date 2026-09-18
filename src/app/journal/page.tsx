import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import FinalCta from "@/components/sections/FinalCta";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Notas",
  description:
    "Notas sobre trabalho, tecnologia e negócios. Textos curtos sobre como decidir o que construir — e o que não construir.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Notes"
        title={
          <>
            Notas sobre trabalho, <span className="t-dim">tecnologia e negócios.</span>
          </>
        }
        lead="Textos curtos sobre decisões que aparecem em quase todo projeto — e que raramente são discutidas antes de virarem problema."
      />

      <Section bare>
        <ul style={{ borderTop: "1px solid var(--rule)" }}>
          {articles.map((article, i) => (
            <Reveal as="li" kind="fade" delay={i * 60} key={article.slug}>
              <Link
                href={`/journal/${article.slug}`}
                data-cursor="Ler"
                className="group grid gap-[var(--s-3)] border-b py-[var(--s-8)] lg:grid-cols-12 lg:gap-[var(--s-8)] lg:py-[var(--s-12)]"
                style={{ borderColor: "var(--rule)" }}
              >
                <span className="t-num text-[0.75rem] lg:col-span-1" style={{ color: "var(--fg-faint)" }}>
                  {article.index}
                </span>

                <div className="lg:col-span-7">
                  <h2
                    className="t-section transition-transform duration-500 group-hover:translate-x-[4px]"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", transitionTimingFunction: "var(--ease)" }}
                  >
                    {article.title}
                  </h2>
                  <p className="t-body mt-[var(--s-4)] measure">{article.excerpt}</p>
                </div>

                <div className="lg:col-span-4 lg:flex lg:items-start lg:justify-end lg:gap-[var(--s-6)]">
                  <div className="flex flex-wrap items-center gap-[var(--s-4)]">
                    <span className="t-label" style={{ color: "var(--fg-muted)" }}>
                      {article.category}
                    </span>
                    <span className="t-label" style={{ color: "var(--fg-faint)" }}>
                      {formatDate(article.date)} · {article.readingTime}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.75}
                    aria-hidden
                    className="mt-[2px] hidden opacity-0 transition-opacity duration-500 group-hover:opacity-60 lg:block"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <FinalCta />
    </>
  );
}
