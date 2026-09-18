import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import ProjectFrame from "@/components/work/ProjectFrame";
import ClientTag from "@/components/work/ClientTag";
import JsonLd from "@/components/layout/JsonLd";
import FinalCta from "@/components/sections/FinalCta";
import { projects, getProject, liveCtaLabel, liveCtaAria } from "@/data/projects";
import { creativeWorkJsonLd } from "@/lib/jsonLd";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Projeto não encontrado" };

  return {
    title: `${project.title} — ${project.discipline}`,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${project.discipline}`,
      description: project.summary,
      type: "article",
    },
  };
}

const chapters = [
  { key: "challenge", label: "O desafio", index: "01" },
  { key: "approach", label: "A abordagem", index: "02" },
  { key: "solution", label: "A solução", index: "03" },
] as const;

export default async function ProjetoPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const position = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(position + 1) % projects.length];

  return (
    <>
      <JsonLd data={creativeWorkJsonLd(project)} />

      {/* — abertura — */}
      <section style={{ paddingTop: "clamp(124px, 15vh, 172px)" }}>
        <div className="shell">
          <Reveal kind="fade">
            <Link
              href="/projetos"
              className="link-underline t-label"
              style={{ color: "var(--fg-muted)" }}
            >
              <ArrowLeft size={13} strokeWidth={1.75} aria-hidden />
              Todos os projetos
            </Link>
          </Reveal>

          <div className="mt-[var(--s-12)] grid gap-[var(--s-8)] lg:grid-cols-12">
            <Reveal kind="up" className="lg:col-span-7">
              <Eyebrow terminal>{project.kicker}</Eyebrow>
              <h1 className="t-title mt-[var(--s-6)]">{project.title}</h1>
              {project.classification ? (
                <div className="mt-[var(--s-6)]">
                  <ClientTag classification={project.classification} />
                </div>
              ) : null}
            </Reveal>

            <Reveal kind="fade" delay={140} className="lg:col-span-5 lg:self-end">
              <p className="t-lead measure">{project.summary}</p>
            </Reveal>
          </div>

          <Reveal kind="scale" delay={160}>
            <div className="mt-[var(--s-16)]">
              <ProjectFrame
                title={project.title}
                kicker={project.kicker}
                year={project.year}
                src={project.image}
                ratio="16 / 9"
                seed={position}
                priority
                hover={false}
                name="none"
                index={project.index}
                sizes="(max-width: 1024px) 100vw, 1216px"
              />
            </div>
          </Reveal>

          {/* — ficha técnica — */}
          <Reveal kind="fade">
            <dl
              className="mt-[var(--s-12)] grid grid-cols-2 gap-[var(--s-8)] border-t pt-[var(--s-8)] md:grid-cols-4"
              style={{ borderColor: "var(--rule)" }}
            >
              {[
                { term: "Disciplina", value: project.discipline },
                { term: "Setor", value: project.sector },
                { term: "Ano", value: project.year },
                { term: "Escopo", value: `${project.delivered.length} frentes` },
              ].map((item) => (
                <div key={item.term}>
                  <dt className="t-label" style={{ color: "var(--fg-faint)" }}>
                    {item.term}
                  </dt>
                  <dd className="mt-[var(--s-3)] text-[0.9375rem]">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* — narrativa — */}
      <Section index="01" label="Contexto" wide>
        <Reveal kind="up">
          <p className="t-lead measure-wide">{project.description}</p>
        </Reveal>

        <div className="mt-[var(--s-20)] flex flex-col gap-[var(--s-20)]">
          {chapters.map((chapter, i) => (
            <Reveal kind="up" delay={i * 60} key={chapter.key}>
              <div className="grid gap-[var(--s-4)] lg:grid-cols-12 lg:gap-[var(--s-8)]">
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-[var(--s-3)]">
                    <span className="t-num text-[0.75rem]" style={{ color: "var(--fg-faint)" }}>
                      {chapter.index}
                    </span>
                    <h2 className="t-section" style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)" }}>
                      {chapter.label}
                    </h2>
                  </div>
                </div>
                <p className="t-body lg:col-span-8 measure-wide" style={{ fontSize: "1.0625rem" }}>
                  {project[chapter.key]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* — galeria, quando houver arquivos — */}
      {project.gallery.length > 0 ? (
        <Section index="02" label="Galeria" bare>
          <div className="flex flex-col gap-[var(--s-8)]">
            {project.gallery.map((shot, i) => (
              <Reveal kind="scale" key={shot.src} delay={i * 50}>
                <figure className="frame" style={{ aspectRatio: shot.kind === "mobile" ? "9 / 16" : "16 / 10" }}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1216px"
                    className="frame-img"
                  />
                </figure>
                {shot.caption ? (
                  <figcaption className="t-label mt-[var(--s-3)]" style={{ color: "var(--fg-faint)" }}>
                    {shot.caption}
                  </figcaption>
                ) : null}
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      {/* — entrega — */}
      <Section index="03" label="Entrega" tone="dark" wide>
        <div className="grid gap-[var(--s-12)] lg:grid-cols-12 lg:gap-[var(--s-8)]">
          <Reveal kind="up" className="lg:col-span-4">
            <h2 className="t-section" style={{ fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}>
              O que foi entregue
            </h2>
          </Reveal>

          <div className="lg:col-span-8">
            <ul style={{ borderTop: "1px solid var(--rule)" }}>
              {project.delivered.map((item, i) => (
                <Reveal as="li" kind="fade" delay={i * 50} key={item}>
                  <div
                    className="flex items-center justify-between border-b py-[var(--s-4)]"
                    style={{ borderColor: "var(--rule)" }}
                  >
                    <span className="text-[0.9375rem]">{item}</span>
                    <span className="t-num text-[0.6875rem]" style={{ color: "var(--fg-faint)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal kind="fade">
              <div className="mt-[var(--s-8)] flex flex-wrap items-center gap-x-[var(--s-6)] gap-y-[var(--s-3)]">
                <span className="t-label" style={{ color: "var(--fg-faint)" }}>
                  Stack
                </span>
                {project.technologies.map((tech) => (
                  <span key={tech} className="t-label" style={{ color: "var(--fg-muted)" }}>
                    {tech}
                  </span>
                ))}
              </div>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={liveCtaAria(project)}
                  className="btn btn-solid mt-[var(--s-12)]"
                >
                  {liveCtaLabel(project)}
                  <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
                </a>
              ) : null}
            </Reveal>
          </div>
        </div>
      </Section>

      {/* — próximo — */}
      <Section bare>
        <Reveal kind="fade">
          <Link
            href={`/projetos/${next.slug}`}
            data-cursor="Ver"
            className="group flex flex-col gap-[var(--s-4)] border-t pt-[var(--s-8)] sm:flex-row sm:items-end sm:justify-between"
            style={{ borderColor: "var(--rule)" }}
          >
            <span>
              <span className="t-label block" style={{ color: "var(--fg-faint)" }}>
                Próximo projeto
              </span>
              <span className="t-section mt-[var(--s-3)] block transition-transform duration-500 group-hover:translate-x-[4px]">
                {next.title}
              </span>
            </span>
            <ArrowRight
              size={22}
              strokeWidth={1.5}
              aria-hidden
              className="transition-transform duration-500 group-hover:translate-x-[6px]"
            />
          </Link>
        </Reveal>
      </Section>

      <FinalCta />
    </>
  );
}
