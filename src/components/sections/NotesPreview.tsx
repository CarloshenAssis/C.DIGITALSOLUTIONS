import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import ArrowLink from "@/components/ui/ArrowLink";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/date";

export default function NotesPreview() {
  return (
    <Section id="notas" index="10" label="Notes">
      <div className="flex flex-col gap-[var(--s-6)] lg:flex-row lg:items-end lg:justify-between">
        <Reveal kind="up">
          <h2 className="t-section measure-narrow">
            Notas sobre trabalho, <span className="t-dim">tecnologia e negócios.</span>
          </h2>
        </Reveal>
        <Reveal kind="fade" delay={120}>
          <ArrowLink href="/journal">Ver todas as notas</ArrowLink>
        </Reveal>
      </div>

      <ul className="mt-[var(--s-12)]" style={{ borderTop: "1px solid var(--rule)" }}>
        {articles.map((article, i) => (
          <Reveal as="li" kind="fade" delay={i * 70} key={article.slug}>
            <Link
              href={`/journal/${article.slug}`}
              className="group grid grid-cols-1 gap-[var(--s-2)] border-b py-[var(--s-6)] lg:grid-cols-12 lg:items-baseline lg:gap-[var(--s-8)]"
              style={{ borderColor: "var(--rule)" }}
            >
              <span className="t-num text-[0.75rem] lg:col-span-1" style={{ color: "var(--fg-faint)" }}>
                {article.index}
              </span>

              <span className="lg:col-span-6">
                <span
                  className="block text-[1.0625rem] font-medium transition-transform duration-500 group-hover:translate-x-[3px]"
                  style={{ letterSpacing: "-0.015em", transitionTimingFunction: "var(--ease)" }}
                >
                  {article.title}
                </span>
              </span>

              <span className="t-label lg:col-span-2" style={{ color: "var(--fg-muted)" }}>
                {article.category}
              </span>

              <span className="t-label lg:col-span-2" style={{ color: "var(--fg-faint)" }}>
                {formatDate(article.date)} · {article.readingTime}
              </span>

              <span className="hidden lg:col-span-1 lg:flex lg:justify-end">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.75}
                  aria-hidden
                  className="opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
