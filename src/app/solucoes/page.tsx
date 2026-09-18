import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import Process from "@/components/sections/Process";
import Problems from "@/components/sections/Problems";
import FinalCta from "@/components/sections/FinalCta";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Presença digital, sistemas, automação e diagnóstico. Diferentes problemas exigem diferentes soluções — o ponto de partida é sempre entender o contexto.",
  alternates: { canonical: "/solucoes" },
};

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Nem todo problema precisa <span className="t-dim">da mesma solução.</span>
          </>
        }
        lead="Quatro frentes de trabalho. Qual delas serve para você é uma conclusão da conversa, não uma escolha de catálogo."
      />

      <Section bare>
        <div className="flex flex-col gap-[var(--s-24)]">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-[var(--s-6)] border-t pt-[var(--s-8)] lg:grid-cols-12 lg:gap-[var(--s-8)] lg:pt-[var(--s-12)]"
              style={{ borderColor: "var(--rule)", scrollMarginTop: "112px" }}
            >
              <Reveal kind="fade" className="lg:col-span-1">
                <span className="t-num text-[0.75rem]" style={{ color: "var(--fg-faint)" }}>
                  {service.index}
                </span>
              </Reveal>

              <Reveal kind="up" delay={60} className="lg:col-span-5">
                <h2 className="t-section" style={{ fontSize: "clamp(1.625rem, 2.6vw, 2.25rem)" }}>
                  {service.title}
                </h2>
                <p className="t-lead mt-[var(--s-4)] measure-narrow">{service.claim}</p>
              </Reveal>

              <Reveal kind="up" delay={120} className="lg:col-span-6">
                <p className="t-body measure" style={{ fontSize: "1.0625rem" }}>
                  {service.description}
                </p>

                <div
                  className="mt-[var(--s-8)] border-l pl-[var(--s-6)]"
                  style={{ borderColor: "var(--rule-strong)" }}
                >
                  <p className="t-label" style={{ color: "var(--fg-faint)" }}>
                    Quando faz sentido
                  </p>
                  <p className="t-body mt-[var(--s-3)] measure" style={{ color: "var(--fg-soft)" }}>
                    {service.resolves}
                  </p>
                </div>

                <ul className="mt-[var(--s-8)] flex flex-wrap gap-[var(--s-2)]">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="t-label rounded-[var(--radius-xs)] border px-[10px] py-[7px]"
                      style={{ borderColor: "var(--rule)", color: "var(--fg-muted)" }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contato"
                  className="link-underline mt-[var(--s-8)] inline-flex text-[0.9375rem] font-medium"
                >
                  Falar sobre isso
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </Section>

      <Problems />
      <Process />
      <FinalCta />
    </>
  );
}
