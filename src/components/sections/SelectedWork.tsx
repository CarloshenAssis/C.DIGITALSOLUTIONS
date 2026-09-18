import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import ArrowLink from "@/components/ui/ArrowLink";
import ProjectEntry from "@/components/work/ProjectEntry";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  const [lead, ...rest] = projects;

  return (
    <Section id="trabalho" index="04" label="Selected work" wide>
      <div className="flex flex-col gap-[var(--s-6)] lg:flex-row lg:items-end lg:justify-between">
        <Reveal kind="up">
          <h2 className="t-section measure-narrow">
            Algumas coisas que <span className="t-dim">já saíram do papel.</span>
          </h2>
        </Reveal>
        <Reveal kind="fade" delay={120}>
          <p className="t-body measure-narrow lg:text-right">
            Necessidades diferentes, uma preocupação em comum: tornar a presença ou o
            processo de uma empresa mais claro, funcional e profissional.
          </p>
        </Reveal>
      </div>

      <div className="mt-[var(--s-20)] flex flex-col gap-[var(--s-32)]">
        <ProjectEntry project={lead} scale="lead" seed={0} />

        {rest.map((project, i) => (
          <ProjectEntry
            key={project.slug}
            project={project}
            side={i % 2 === 0 ? "right" : "left"}
            seed={i + 1}
          />
        ))}
      </div>

      <Reveal kind="fade">
        <div
          className="mt-[var(--s-20)] flex items-center justify-between border-t pt-[var(--s-6)]"
          style={{ borderColor: "var(--rule)" }}
        >
          <span className="t-label" style={{ color: "var(--fg-faint)" }}>
            Todos os projetos
          </span>
          <ArrowLink href="/projetos">Ver a lista completa</ArrowLink>
        </div>
      </Reveal>
    </Section>
  );
}
