import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import { processStages } from "@/data/process";
import { Plus } from "lucide-react";

/**
 * Três macroetapas. O detalhe operacional existe, mas só aparece para quem
 * quiser abrir — usando <details>, que é acessível por teclado e funciona
 * sem uma linha de JavaScript.
 */
export default function Process() {
  return (
    <Section id="processo" index="07" label="Process" wide>
      <div className="grid gap-[var(--s-8)] lg:grid-cols-12">
        <Reveal kind="up" className="lg:col-span-7">
          <h2 className="t-section">
            Pensar. Construir. <span className="t-dim">Refinar.</span>
          </h2>
        </Reveal>
        <Reveal kind="fade" delay={120} className="lg:col-span-5 lg:self-end">
          <p className="t-body measure">
            Três etapas, não dez. Um processo com mais etapas do que o necessário costuma
            existir para justificar preço, não para melhorar resultado.
          </p>
        </Reveal>
      </div>

      <div className="mt-[var(--s-20)]">
        {processStages.map((stage, i) => (
          <Reveal kind="fade" delay={i * 90} key={stage.index}>
            <details
              className="group border-b"
              style={{ borderColor: "var(--rule)", borderTop: i === 0 ? "1px solid var(--rule)" : undefined }}
            >
              <summary
                className="grid cursor-pointer list-none grid-cols-1 items-baseline gap-[var(--s-3)] py-[var(--s-8)] lg:grid-cols-12 lg:gap-[var(--s-8)] lg:py-[var(--s-12)] [&::-webkit-details-marker]:hidden"
                aria-label={`${stage.title} — ver detalhes`}
              >
                <span
                  className="t-num col-span-1 block"
                  style={{ color: "var(--fg-faint)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1 }}
                >
                  {stage.index}
                </span>

                <span className="lg:col-span-4">
                  <span
                    className="t-section block"
                    style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
                  >
                    {stage.title}
                  </span>
                  <span className="t-label mt-[var(--s-3)] block" style={{ color: "var(--fg-muted)" }}>
                    {stage.lead}
                  </span>
                </span>

                <span className="t-body lg:col-span-6">{stage.body}</span>

                <span className="hidden lg:col-span-1 lg:flex lg:justify-end">
                  <Plus
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden
                    className="transition-transform duration-500 group-open:rotate-45"
                    style={{ color: "var(--fg-muted)", transitionTimingFunction: "var(--ease)" }}
                  />
                </span>
              </summary>

              <div className="grid gap-[var(--s-6)] pb-[var(--s-12)] lg:grid-cols-12 lg:gap-[var(--s-8)]">
                <div className="lg:col-span-6 lg:col-start-6">
                  <ul className="flex flex-col gap-[var(--s-6)]">
                    {stage.steps.map((step) => (
                      <li key={step.label} className="flex gap-[var(--s-4)]">
                        <span aria-hidden className="terminal mt-[9px]" />
                        <span>
                          <span className="block text-[0.9375rem] font-medium">{step.label}</span>
                          <span className="t-body mt-[6px] block text-[0.9375rem]">{step.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
