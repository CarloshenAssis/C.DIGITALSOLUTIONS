import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import { problems } from "@/data/problems";

/**
 * O visitante se reconhece antes de ouvir uma proposta.
 *
 * Cada frase é uma queixa real, dita como as pessoas realmente dizem.
 * A resposta só aparece depois — em silêncio, à direita.
 */
export default function Problems() {
  return (
    <Section id="problemas" index="06" label="Diagnóstico" tone="light" wide>
      <div className="grid gap-[var(--s-12)] lg:grid-cols-12 lg:gap-[var(--s-8)]">
        <div className="lg:col-span-4">
          <Reveal kind="up">
            <h2 className="t-section">
              Talvez você não <span className="t-dim">precise de um site.</span>
            </h2>
          </Reveal>
          <Reveal kind="fade" delay={120}>
            <p className="t-body mt-[var(--s-6)] measure-narrow">
              Talvez o problema esteja em outro lugar. Comece reconhecendo o seu.
            </p>
          </Reveal>
        </div>

        <ul className="lg:col-span-8">
          {problems.map((problem, i) => (
            <Reveal as="li" kind="fade" delay={i * 70} key={problem.id}>
              <Link
                href={problem.href}
                className="group grid gap-[var(--s-4)] border-b py-[var(--s-6)] lg:grid-cols-12 lg:items-baseline lg:gap-[var(--s-6)]"
                style={{ borderColor: "var(--rule)", borderTop: i === 0 ? "1px solid var(--rule)" : undefined }}
              >
                <p
                  className="t-section transition-colors duration-500 lg:col-span-7"
                  style={{
                    fontSize: "clamp(1.0625rem, 1.55vw, 1.3125rem)",
                    lineHeight: 1.35,
                    letterSpacing: "-0.02em",
                    color: "var(--fg-soft)",
                  }}
                >
                  &ldquo;{problem.quote}&rdquo;
                </p>

                <div className="lg:col-span-5">
                  <span className="inline-flex items-center gap-[10px]">
                    <span
                      aria-hidden
                      className="h-px w-[18px] origin-left transition-transform duration-500 group-hover:scale-x-[1.8]"
                      style={{ background: "var(--brand)", transitionTimingFunction: "var(--ease)" }}
                    />
                    <span
                      className="t-label transition-transform duration-500 group-hover:translate-x-[6px]"
                      style={{ color: "var(--brand)", transitionTimingFunction: "var(--ease)" }}
                    >
                      {problem.answer}
                    </span>
                    <ArrowRight
                      size={14}
                      strokeWidth={1.75}
                      aria-hidden
                      className="opacity-0 transition-all duration-500 group-hover:translate-x-[4px] group-hover:opacity-60"
                    />
                  </span>

                  <p className="t-body mt-[var(--s-3)] text-[0.875rem]">{problem.answerDetail}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
