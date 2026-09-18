import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import ProjectFrame from "@/components/work/ProjectFrame";
import ClientTag from "@/components/work/ClientTag";
import { liveCtaAria, liveCtaLabel, type Project } from "@/data/projects";

type Props = {
  project: Project;
  /** Alterna o lado da imagem para criar ritmo editorial. */
  side?: "left" | "right";
  /** O primeiro case aparece maior — foi o trabalho mais completo. */
  scale?: "lead" | "normal";
  seed?: number;
  /**
   * Nível do título. h3 quando a lista está sob um h2 de seção (home);
   * h2 quando as entradas são o conteúdo principal da página (/projetos).
   */
  as?: "h2" | "h3";
};

export default function ProjectEntry({
  project,
  side = "left",
  scale = "normal",
  seed = 0,
  as: Heading = "h3",
}: Props) {
  const lead = scale === "lead";

  return (
    <article
      className={`grid gap-[var(--s-8)] lg:items-end lg:gap-[var(--s-12)] ${
        lead ? "lg:grid-cols-1" : "lg:grid-cols-12"
      }`}
    >
      <Reveal
        kind="scale"
        className={
          lead
            ? "order-1"
            : side === "right"
              ? "order-1 lg:order-2 lg:col-span-7 lg:col-start-6"
              : "order-1 lg:col-span-7"
        }
      >
        <Link
          href={`/projetos/${project.slug}`}
          data-cursor="Ver projeto"
          aria-label={`Ver o projeto ${project.title}`}
          className="block"
        >
          <ProjectFrame
            title={project.title}
            kicker={project.kicker}
            year={project.year}
            src={project.image}
            ratio={lead ? "16 / 9" : "16 / 11"}
            seed={seed}
            name="none"
            index={project.index}
            sizes={lead ? "(max-width: 1024px) 100vw, 1100px" : "(max-width: 1024px) 100vw, 55vw"}
          />
        </Link>
      </Reveal>

      <Reveal
        kind="up"
        delay={80}
        className={
          lead
            ? "order-2 grid gap-[var(--s-6)] lg:grid-cols-12 lg:items-end"
            : side === "right"
              ? "order-2 lg:order-1 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:self-end"
              : "order-2 lg:col-span-4 lg:col-start-9 lg:self-end"
        }
      >
        <div className={lead ? "lg:col-span-6" : ""}>
          <div className="flex flex-wrap items-baseline gap-x-[var(--s-3)] gap-y-[var(--s-2)]">
            <span className="t-num text-[0.75rem]" style={{ color: "var(--fg-faint)" }}>
              {project.index}
            </span>
            <span className="t-label" style={{ color: "var(--fg-muted)" }}>
              {project.kicker}
            </span>
            <ClientTag classification={project.classification} divider />
          </div>

          <Heading
            className={`${lead ? "t-title" : "t-section"} mt-[var(--s-4)]`}
            style={lead ? undefined : { fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}
          >
            {project.title}
          </Heading>
        </div>

        <div className={lead ? "lg:col-span-6" : "mt-[var(--s-4)]"}>
          <p className="t-body measure">{project.summary}</p>

          <ul className="mt-[var(--s-6)] flex flex-wrap gap-x-[var(--s-4)] gap-y-[var(--s-2)]">
            {project.delivered.slice(0, 3).map((item) => (
              <li key={item} className="t-label" style={{ color: "var(--fg-faint)" }}>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-[var(--s-6)] flex flex-wrap items-center gap-x-[var(--s-8)] gap-y-[var(--s-2)]">
            <Link
              href={`/projetos/${project.slug}`}
              className="link-underline link-tap inline-flex text-[0.9375rem] font-medium"
            >
              Ver o case
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
            </Link>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={liveCtaAria(project)}
                className="link-underline link-tap inline-flex text-[0.9375rem] font-medium"
                style={{ color: "var(--fg-muted)" }}
              >
                {liveCtaLabel(project)}
                <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
              </a>
            ) : null}
          </div>
        </div>
      </Reveal>
    </article>
  );
}
