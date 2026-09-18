import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";

/**
 * A ponte narrativa: ele falou, agora mostra.
 *
 * Um índice tabular, factual, sem adjetivo. Cada linha é um projeto que
 * existe. Nenhuma métrica — apenas contexto, disciplina e ano.
 */
export default function WorkIndex() {
  return (
    <Section index="03" label="Índice">
      <Reveal kind="up">
        <h2 className="t-section measure-narrow">
          Trabalho real. <span className="t-dim">Contextos diferentes.</span>
        </h2>
      </Reveal>

      <div className="mt-[var(--s-12)]">
        <div
          className="hidden grid-cols-12 gap-[var(--s-4)] border-b pb-[var(--s-3)] lg:grid"
          style={{ borderColor: "var(--rule)" }}
        >
          <span className="t-label col-span-1" style={{ color: "var(--fg-faint)" }}>
            Nº
          </span>
          <span className="t-label col-span-4" style={{ color: "var(--fg-faint)" }}>
            Projeto
          </span>
          <span className="t-label col-span-3" style={{ color: "var(--fg-faint)" }}>
            Disciplina
          </span>
          <span className="t-label col-span-3" style={{ color: "var(--fg-faint)" }}>
            Setor
          </span>
          <span className="t-label col-span-1 text-right" style={{ color: "var(--fg-faint)" }}>
            Ano
          </span>
        </div>

        <ul>
          {projects.map((project, i) => (
            <Reveal as="li" kind="fade" delay={i * 60} key={project.slug}>
              <Link
                href={`/projetos/${project.slug}`}
                data-cursor="Ver"
                className="group grid grid-cols-1 items-baseline gap-[6px] border-b py-[var(--s-4)] transition-colors duration-300 lg:grid-cols-12 lg:gap-[var(--s-4)]"
                style={{ borderColor: "var(--rule)" }}
              >
                <span
                  className="t-num col-span-1 text-[0.75rem]"
                  style={{ color: "var(--fg-faint)" }}
                >
                  {project.index}
                </span>

                <span className="col-span-4 flex items-center gap-[8px]">
                  <span
                    className="text-[1.0625rem] font-medium transition-transform duration-300 group-hover:translate-x-[3px]"
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    {project.title}
                  </span>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.75}
                    aria-hidden
                    className="opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                  />
                </span>

                <span className="t-body col-span-3 text-[0.875rem]">{project.discipline}</span>
                <span className="t-body col-span-3 text-[0.875rem]">{project.sector}</span>
                <span
                  className="t-num col-span-1 text-[0.8125rem] lg:text-right"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {project.year}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
