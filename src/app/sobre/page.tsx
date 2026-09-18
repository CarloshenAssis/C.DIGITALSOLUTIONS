import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import PortraitFrame from "@/components/ui/PortraitFrame";
import Mark from "@/components/brand/Mark";
import JsonLd from "@/components/layout/JsonLd";
import Principles from "@/components/sections/Principles";
import FinalCta from "@/components/sections/FinalCta";
import ArrowLink from "@/components/ui/ArrowLink";
import { capabilities, capabilitiesNote } from "@/data/capabilities";
import { personJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Carlos Henrique — entre negócios, processos e tecnologia. A trajetória que define como a C. Digital Solutions trabalha.",
  alternates: { canonical: "/sobre" },
};

/** Fluxo do raciocínio: a tecnologia é a penúltima etapa, nunca a primeira. */
const reasoning = ["Problema", "Contexto", "Análise", "Tecnologia", "Solução"];

export default function SobrePage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />

      <PageHero
        eyebrow="About"
        title={
          <>
            Entre negócios, processos <span className="t-dim">e tecnologia.</span>
          </>
        }
        lead="Não tenho interesse em tecnologia pela tecnologia. Tenho interesse em entender um problema e encontrar uma forma melhor de resolvê-lo."
      />

      <Section bare>
        <div className="grid gap-[var(--s-12)] lg:grid-cols-12 lg:gap-[var(--s-16)]">
          <div className="lg:col-span-5">
            <Reveal kind="scale">
              <div data-parallax="-12">
                <PortraitFrame ratio="4 / 5" priority sizes="(max-width: 1024px) 100vw, 42vw" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal kind="up">
              <div className="flex flex-col gap-[var(--s-6)] measure">
                <p className="t-lead">
                  Sou Carlos Henrique. Minha trajetória passou por ambientes administrativos,
                  operações, processos, tecnologia e negócios — do setor privado ao público.
                </p>
                <p className="t-body" style={{ fontSize: "1.0625rem" }}>
                  Minha formação combina Ciências Contábeis e Desenvolvimento de Sistemas. Essa
                  combinação não é um detalhe de currículo: é exatamente o que define como eu
                  trabalho. Contabilidade ensina a olhar um processo inteiro e a desconfiar de
                  número solto. Desenvolvimento ensina a transformar uma regra em algo que
                  funciona sozinho.
                </p>
                <p className="t-body" style={{ fontSize: "1.0625rem" }}>
                  Ao longo desse caminho, percebi que meu maior interesse não está em escrever
                  código ou executar uma tarefa isolada. Está em entender um problema, organizar
                  o caminho e encontrar uma forma melhor de resolvê-lo.
                </p>
              </div>
            </Reveal>

            <Reveal kind="fade" delay={140}>
              <div
                className="mt-[var(--s-12)] flex items-center gap-[var(--s-4)] border-t pt-[var(--s-8)]"
                style={{ borderColor: "var(--rule)" }}
              >
                <Mark size={28} tone="color" />
                <p className="t-lead" style={{ color: "var(--fg)" }}>
                  É dessa perspectiva que nasce a C.
                </p>
              </div>
            </Reveal>

            <Reveal kind="fade" delay={200}>
              <div className="mt-[var(--s-8)] flex flex-wrap gap-x-[var(--s-8)] gap-y-[var(--s-3)]">
                <ArrowLink href="/experiencia">Ver a trajetória completa</ArrowLink>
                <ArrowLink href="/projetos">Ver os projetos</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* — onde a tecnologia entra — */}
      <Section index="01" label="Ordem" tone="dark" wide>
        <div className="grid gap-[var(--s-12)] lg:grid-cols-12 lg:gap-[var(--s-8)]">
          <Reveal kind="up" className="lg:col-span-5">
            <h2 className="t-section">
              Tecnologia muda rápido. <span className="t-dim">Problemas de negócio continuam existindo.</span>
            </h2>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal kind="fade" delay={100}>
              <p className="t-body measure" style={{ fontSize: "1.0625rem" }}>
                Inteligência artificial faz parte da forma como desenvolvo e analiso soluções,
                mas não é o ponto de partida. Ela acelera execução, análise e conteúdo — e o
                trabalho está em saber onde isso realmente faz diferença.
              </p>
            </Reveal>

            <Reveal kind="fade" delay={180}>
              <ol className="mt-[var(--s-12)] flex flex-col">
                {reasoning.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-[var(--s-4)] border-b py-[var(--s-4)]"
                    style={{ borderColor: "var(--rule)", borderTop: i === 0 ? "1px solid var(--rule)" : undefined }}
                  >
                    <span className="t-num text-[0.6875rem]" style={{ color: "var(--fg-faint)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[1.0625rem]"
                      style={{ color: step === "Tecnologia" ? "var(--brand)" : "var(--fg)" }}
                    >
                      {step}
                    </span>
                    {step === "Tecnologia" ? (
                      <span className="t-label ml-auto" style={{ color: "var(--fg-faint)" }}>
                        entra aqui — não antes
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* — capacidades — */}
      <Section index="02" label="Capabilities">
        <Reveal kind="up">
          <h2 className="t-section measure-narrow">
            O que consigo <span className="t-dim">colocar em prática.</span>
          </h2>
        </Reveal>

        <div className="mt-[var(--s-16)] grid gap-[var(--s-12)] md:grid-cols-2 lg:grid-cols-4 lg:gap-[var(--s-8)]">
          {capabilities.map((group, i) => (
            <Reveal kind="up" delay={i * 70} key={group.index}>
              <div className="border-t pt-[var(--s-6)]" style={{ borderColor: "var(--rule)" }}>
                <div className="flex items-baseline gap-[var(--s-3)]">
                  <span className="t-num text-[0.6875rem]" style={{ color: "var(--fg-faint)" }}>
                    {group.index}
                  </span>
                  <h3 className="text-[1.0625rem] font-medium" style={{ letterSpacing: "-0.015em" }}>
                    {group.title}
                  </h3>
                </div>
                <p className="t-body mt-[var(--s-3)] text-[0.875rem]">{group.note}</p>

                <ul className="mt-[var(--s-6)] flex flex-col gap-[10px]">
                  {group.items.map((item) => (
                    <li key={item} className="text-[0.9375rem]" style={{ color: "var(--fg-soft)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal kind="fade">
          <p
            className="t-label mt-[var(--s-16)] flex items-center gap-[10px]"
            style={{ color: "var(--fg-muted)" }}
          >
            <span aria-hidden className="terminal" />
            {capabilitiesNote}
          </p>
        </Reveal>
      </Section>

      <Principles />
      <FinalCta />
    </>
  );
}
