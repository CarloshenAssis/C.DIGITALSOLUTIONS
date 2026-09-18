import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import JsonLd from "@/components/layout/JsonLd";
import FinalCta from "@/components/sections/FinalCta";
import Mark from "@/components/brand/Mark";
import { articles, getArticle } from "@/data/articles";
import { articleJsonLd } from "@/lib/jsonLd";
import { formatDate } from "@/lib/date";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Nota não encontrada" };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const position = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(position + 1) % articles.length];

  return (
    <>
      <JsonLd data={articleJsonLd(article)} />

      <article>
        <header style={{ paddingTop: "clamp(124px, 15vh, 172px)" }}>
          <div className="shell">
            <Reveal kind="fade">
              <Link href="/journal" className="link-underline t-label" style={{ color: "var(--fg-muted)" }}>
                <ArrowLeft size={13} strokeWidth={1.75} aria-hidden />
                Todas as notas
              </Link>
            </Reveal>

            <div className="mt-[var(--s-12)] lg:grid lg:grid-cols-12 lg:gap-[var(--s-8)]">
              <div className="lg:col-span-8">
                <Reveal kind="fade">
                  <div className="flex flex-wrap items-center gap-[var(--s-4)]">
                    <span className="t-label" style={{ color: "var(--brand)" }}>
                      {article.category}
                    </span>
                    <span className="t-label" style={{ color: "var(--fg-faint)" }}>
                      {formatDate(article.date)} · {article.readingTime}
                    </span>
                  </div>
                </Reveal>

                <Reveal kind="up" delay={80}>
                  <h1 className="t-title mt-[var(--s-6)]">{article.title}</h1>
                </Reveal>

                <Reveal kind="fade" delay={160}>
                  <p className="t-lead mt-[var(--s-8)] measure">{article.excerpt}</p>
                </Reveal>
              </div>
            </div>

            <Reveal kind="fade" delay={220}>
              <hr className="rule mt-[var(--s-16)]" />
            </Reveal>
          </div>
        </header>

        <Section bare>
          <div className="lg:grid lg:grid-cols-12 lg:gap-[var(--s-8)]">
            <div className="hidden lg:col-span-2 lg:block">
              <span className="t-num text-[0.75rem]" style={{ color: "var(--fg-faint)" }}>
                {article.index}
              </span>
            </div>

            <div className="lg:col-span-8">
              <div className="flex flex-col gap-[var(--s-6)]">
                {article.body.map((paragraph, i) => (
                  <Reveal kind="fade" delay={i * 40} key={i}>
                    <p
                      className="measure-wide"
                      style={{ fontSize: "1.125rem", lineHeight: 1.7, color: "var(--fg-soft)" }}
                    >
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal kind="fade">
                <div
                  className="mt-[var(--s-16)] flex items-center gap-[var(--s-4)] border-t pt-[var(--s-8)]"
                  style={{ borderColor: "var(--rule)" }}
                >
                  <Mark size={24} tone="color" />
                  <p className="t-label" style={{ color: "var(--fg-muted)" }}>
                    Carlos Henrique — C. Digital Solutions
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>
      </article>

      <Section bare>
        <Reveal kind="fade">
          <Link
            href={`/journal/${next.slug}`}
            className="group flex flex-col gap-[var(--s-4)] border-t pt-[var(--s-8)] sm:flex-row sm:items-end sm:justify-between"
            style={{ borderColor: "var(--rule)" }}
          >
            <span>
              <span className="t-label block" style={{ color: "var(--fg-faint)" }}>
                Próxima nota
              </span>
              <span
                className="t-section mt-[var(--s-3)] block transition-transform duration-500 group-hover:translate-x-[4px]"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)" }}
              >
                {next.title}
              </span>
            </span>
            <ArrowRight
              size={22}
              strokeWidth={1.5}
              aria-hidden
              className="shrink-0 transition-transform duration-500 group-hover:translate-x-[6px]"
            />
          </Link>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
