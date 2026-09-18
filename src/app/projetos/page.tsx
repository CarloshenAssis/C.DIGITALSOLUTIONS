import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import ProjectEntry from "@/components/work/ProjectEntry";
import FinalCta from "@/components/sections/FinalCta";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos desenvolvidos a partir de necessidades diferentes — com uma preocupação em comum: tornar a presença ou o processo de uma empresa mais claro e funcional.",
  alternates: { canonical: "/projetos" },
};

export default function ProjetosPage() {
  const [lead, ...rest] = projects;

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Uma seleção de projetos{" "}
            <span className="t-dim">desenvolvidos para necessidades específicas.</span>
          </>
        }
        lead="Cada um começou por uma conversa sobre o que estava atrapalhando — nunca por uma escolha de layout."
      />

      <Section bare>
        <div className="flex flex-col gap-[var(--s-32)]">
          <ProjectEntry project={lead} scale="lead" seed={0} as="h2" />
          {rest.map((project, i) => (
            <ProjectEntry
              key={project.slug}
              project={project}
              side={i % 2 === 0 ? "right" : "left"}
              seed={i + 1}
              as="h2"
            />
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
