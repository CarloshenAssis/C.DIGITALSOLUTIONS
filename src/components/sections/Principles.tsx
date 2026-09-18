import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import { principles } from "@/data/principles";

/**
 * As divisórias são bordas nas próprias células, e não o truque de "grid com
 * gap colorido": aquele deixa o fundo aparecer enquanto os itens fazem fade,
 * e a seção pisca cinza durante a revelação.
 */
export default function Principles() {
  return (
    <Section index="08" label="Método" tone="dark" wide>
      <Reveal kind="up">
        <h2 className="t-section measure-narrow">
          O detalhe está <span className="t-dim">no processo.</span>
        </h2>
      </Reveal>

      <div className="mt-[var(--s-16)] grid md:grid-cols-2">
        {principles.map((principle, i) => (
          <Reveal
            kind="fade"
            delay={i * 80}
            key={principle.index}
            className="py-[var(--s-8)] md:px-[var(--s-8)] lg:py-[var(--s-12)]"
            style={{
              borderTop: "1px solid var(--rule)",
              borderLeft: i % 2 === 1 ? "1px solid var(--rule)" : undefined,
              paddingLeft: i % 2 === 0 ? 0 : undefined,
            }}
          >
            <span className="t-num text-[0.75rem]" style={{ color: "var(--fg-faint)" }}>
              {principle.index}
            </span>
            <p
              className="t-section mt-[var(--s-6)]"
              style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.625rem)" }}
            >
              {principle.negative}
            </p>
            <p className="t-body mt-[var(--s-4)] measure">{principle.positive}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
