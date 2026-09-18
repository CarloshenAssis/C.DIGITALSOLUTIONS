import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import ProjectFrame from "@/components/work/ProjectFrame";
import { brand } from "@/config/brand";
import { projects } from "@/data/projects";

const [a, b, c] = projects;

export default function Hero() {
  return (
    <section
      className="relative"
      style={{ paddingTop: "clamp(128px, 15vh, 176px)", paddingBottom: "var(--s-20)" }}
      aria-labelledby="hero-title"
    >
      <div className="shell">
        <div className="grid items-start gap-[var(--s-16)] lg:grid-cols-12 lg:gap-[var(--s-8)]">
          {/* — palavra — */}
          <div className="lg:col-span-6 lg:pt-[var(--s-8)]">
            <Reveal kind="fade">
              <Eyebrow terminal>C. Digital Solutions</Eyebrow>
            </Reveal>

            <Reveal kind="up" delay={90}>
              <h1 id="hero-title" className="t-display mt-[var(--s-6)]">
                Tecnologia que
                <br />
                resolve <span className="t-dim">problemas</span>
                <br />
                <span className="t-dim">de negócio.</span>
              </h1>
            </Reveal>

            <Reveal kind="up" delay={180}>
              <p className="t-lead mt-[var(--s-8)] measure">
                Websites, sistemas e soluções digitais pensados a partir das necessidades
                reais de cada negócio.
              </p>
            </Reveal>

            <Reveal kind="up" delay={260}>
              <div className="mt-[var(--s-12)] flex flex-wrap items-center gap-[var(--s-3)]">
                <Link href="/projetos" className="btn btn-solid">
                  Ver projetos
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
                </Link>
                <Link href="/contato" className="btn btn-outline">
                  Vamos conversar
                </Link>
              </div>
            </Reveal>

            <Reveal kind="fade" delay={360}>
              <p
                className="t-label mt-[var(--s-8)] flex items-center gap-[10px]"
                style={{ color: "var(--fg-faint)" }}
              >
                <span aria-hidden className="h-px w-[18px]" style={{ background: "var(--rule-strong)" }} />
                {brand.signature}
              </p>
            </Reveal>
          </div>

          {/* — prova — */}
          <div className="lg:col-span-6">
            <Reveal kind="scale" delay={200}>
              <div className="hero-comp">
                <div className="hero-plate hero-a" data-parallax="-14">
                  <ProjectFrame
                    title={a.title}
                    kicker={a.kicker}
                    year={a.year}
                    src={a.image}
                    ratio="16 / 10"
                    seed={0}
                    name="top"
                    priority
                    hover={false}
                    sizes="(max-width: 1024px) 86vw, 42vw"
                  />
                </div>

                <div className="hero-plate hero-b" data-parallax="16">
                  <ProjectFrame
                    title={b.title}
                    kicker={b.kicker}
                    year={b.year}
                    src={b.image}
                    ratio="16 / 11"
                    seed={1}
                    name="top"
                    hover={false}
                    sizes="(max-width: 1024px) 58vw, 30vw"
                  />
                </div>

                <div className="hero-plate hero-c" data-parallax="8">
                  <ProjectFrame
                    title={c.title}
                    kicker={c.kicker}
                    year={c.year}
                    src={c.image}
                    ratio="4 / 5"
                    seed={2}
                    name="top"
                    hover={false}
                    sizes="18vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-[var(--s-16)] hidden items-center gap-[var(--s-4)] lg:flex">
          <span aria-hidden className="scroll-tick" />
          <span className="t-label" style={{ color: "var(--fg-faint)" }}>
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
