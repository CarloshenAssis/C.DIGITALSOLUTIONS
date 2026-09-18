import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import FinalCta from "@/components/sections/FinalCta";
import { experience, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experiência",
  description:
    "Uma trajetória construída em contextos diferentes: administração, forças armadas, ambiente corporativo, setor público e tecnologia.",
  alternates: { canonical: "/experiencia" },
};

export default function ExperienciaPage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title={
          <>
            Uma trajetória construída <span className="t-dim">em contextos diferentes.</span>
          </>
        }
        lead="Nenhuma dessas passagens foi sobre tecnologia. Todas elas ensinaram algo que hoje aparece na forma como eu trabalho."
      />

      <Section index="01" label="Trajetória" bare>
        <ol className="relative">
          {/* A linha vertical que acompanha a leitura. */}
          <span
            aria-hidden
            className="draw-y absolute left-[5px] top-[10px] hidden w-px lg:block"
            style={{ height: "calc(100% - 40px)", background: "var(--rule)" }}
          />

          {experience.map((role, i) => (
            <Reveal as="li" kind="up" delay={i * 70} key={role.id}>
              <div
                className="relative grid gap-[var(--s-4)] border-b py-[var(--s-12)] lg:grid-cols-12 lg:gap-[var(--s-8)] lg:pl-[var(--s-12)]"
                style={{ borderColor: "var(--rule)", borderTop: i === 0 ? "1px solid var(--rule)" : undefined }}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-[calc(var(--s-12)+8px)] hidden lg:block"
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: 2,
                    background: role.current ? "var(--brand)" : "var(--canvas)",
                    border: role.current ? "none" : "1px solid var(--rule-strong)",
                  }}
                />

                <div className="lg:col-span-3">
                  <p
                    className="t-num text-[0.8125rem]"
                    style={{ color: role.current ? "var(--brand)" : "var(--fg-muted)" }}
                  >
                    {role.period}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <h2 className="t-section" style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.625rem)" }}>
                    {role.org}
                  </h2>
                  <p className="t-body mt-[var(--s-3)] text-[0.9375rem]">{role.role}</p>
                </div>

                <div className="lg:col-span-5">
                  <p className="t-body measure">{role.description}</p>
                  <p
                    className="mt-[var(--s-6)] border-l pl-[var(--s-4)] text-[0.9375rem] measure"
                    style={{ borderColor: "var(--rule-strong)", color: "var(--fg-soft)" }}
                  >
                    {role.carried}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section index="02" label="Formação" tone="dark" wide>
        <Reveal kind="up">
          <h2 className="t-section measure-narrow">
            Formação <span className="t-dim">em duas frentes.</span>
          </h2>
        </Reveal>

        <div className="mt-[var(--s-12)] grid gap-[var(--s-8)] md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal kind="up" delay={i * 80} key={item.id}>
              <div className="border-t pt-[var(--s-6)]" style={{ borderColor: "var(--rule)" }}>
                <p className="t-label" style={{ color: "var(--fg-faint)" }}>
                  {item.level}
                </p>
                <h3
                  className="t-section mt-[var(--s-4)]"
                  style={{ fontSize: "clamp(1.25rem, 1.9vw, 1.5rem)" }}
                >
                  {item.course}
                </h3>
                <p className="t-body mt-[var(--s-3)] text-[0.9375rem]">{item.institution}</p>
                <p className="t-label mt-[var(--s-6)]" style={{ color: "var(--fg-muted)" }}>
                  {item.status}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
