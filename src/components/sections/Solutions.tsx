import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import { services } from "@/data/services";

export default function Solutions() {
  return (
    <Section id="solucoes" index="05" label="Solutions" wide>
      <Reveal kind="up">
        <h2 className="t-section measure-narrow">
          Nem todo problema precisa <span className="t-dim">da mesma solução.</span>
        </h2>
      </Reveal>

      <Reveal kind="fade" delay={100}>
        <p className="t-body mt-[var(--s-6)] measure">
          O ponto de partida é sempre o contexto. O formato da solução é consequência
          dele — e não o contrário.
        </p>
      </Reveal>

      <ul className="mt-[var(--s-16)]" style={{ borderTop: "1px solid var(--rule)" }}>
        {services.map((service, i) => (
          <Reveal as="li" kind="fade" delay={i * 80} key={service.slug}>
            <Link
              href={`/solucoes#${service.slug}`}
              className="group relative grid grid-cols-1 gap-[var(--s-4)] border-b py-[var(--s-8)] lg:grid-cols-12 lg:gap-[var(--s-8)] lg:py-[var(--s-12)]"
              style={{ borderColor: "var(--rule)" }}
            >
              {/* A linha azul que surge sob o item ativo. */}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: "var(--brand)", transitionTimingFunction: "var(--ease)" }}
              />

              <div className="lg:col-span-1">
                <span
                  className="t-num block text-[0.75rem] transition-all duration-500 group-hover:text-[0.9375rem]"
                  style={{ color: "var(--fg-faint)", transitionTimingFunction: "var(--ease)" }}
                >
                  {service.index}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3
                  className="t-section transition-transform duration-500 group-hover:translate-x-[4px]"
                  style={{ fontSize: "clamp(1.375rem, 2vw, 1.75rem)", transitionTimingFunction: "var(--ease)" }}
                >
                  {service.title}
                </h3>
                <p className="mt-[var(--s-3)] text-[0.9375rem]" style={{ color: "var(--fg-soft)" }}>
                  {service.claim}
                </p>
              </div>

              <div className="lg:col-span-5">
                <p
                  className="t-body transition-colors duration-500"
                  style={{ transitionTimingFunction: "var(--ease)" }}
                >
                  {service.description}
                </p>
                <ul className="mt-[var(--s-6)] flex flex-wrap gap-x-[var(--s-4)] gap-y-[var(--s-2)]">
                  {service.tags.map((tag) => (
                    <li key={tag} className="t-label" style={{ color: "var(--fg-faint)" }}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2 lg:flex lg:items-start lg:justify-end">
                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden
                  className="opacity-0 transition-all duration-500 group-hover:translate-x-[6px] group-hover:opacity-70"
                  style={{ transitionTimingFunction: "var(--ease)" }}
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
