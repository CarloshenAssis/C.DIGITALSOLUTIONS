import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import Mark from "@/components/brand/Mark";

export default function Manifesto() {
  return (
    <Section tone="paper" wide index="02" label="Manifesto">
      <div className="lg:max-w-[64ch]">
        <Reveal kind="up">
          <h2 className="t-title">
            Não começo pela tecnologia.
            <br />
            <span className="t-dim">Começo pelo problema.</span>
          </h2>
        </Reveal>

        <Reveal kind="up" delay={120}>
          <p className="t-lead mt-[var(--s-12)] measure">
            Antes de escolher uma ferramenta, procuro entender o que está acontecendo,
            onde existe atrito e qual resultado realmente importa. A tecnologia entra
            depois — e entra sabendo o que precisa fazer.
          </p>
        </Reveal>

        <Reveal kind="fade" delay={220}>
          <div className="mt-[var(--s-16)] flex items-center gap-[var(--s-4)]">
            <Mark size={26} tone="color" />
            <span aria-hidden className="h-px w-[44px]" style={{ background: "var(--rule-strong)" }} />
            <p className="t-label" style={{ color: "var(--fg-muted)" }}>
              Tecnologia é o meio. A solução é o objetivo.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
