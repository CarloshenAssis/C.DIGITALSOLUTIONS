import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import ArrowLink from "@/components/ui/ArrowLink";
import PortraitFrame from "@/components/ui/PortraitFrame";
import Eyebrow from "@/components/ui/Eyebrow";

export default function AboutPreview() {
  return (
    <Section id="sobre" index="09" label="About" wide>
      <div className="grid gap-[var(--s-12)] lg:grid-cols-12 lg:gap-[var(--s-16)]">
        <div className="lg:col-span-5">
          <Reveal kind="scale">
            <div data-parallax="-10">
              <PortraitFrame ratio="4 / 5" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-[var(--s-8)]">
          <Reveal kind="fade">
            <Eyebrow>Sobre</Eyebrow>
          </Reveal>

          <Reveal kind="up" delay={80}>
            <h2 className="t-section mt-[var(--s-6)]">
              Eu gosto de entender <span className="t-dim">como as coisas funcionam.</span>
            </h2>
          </Reveal>

          <Reveal kind="up" delay={160}>
            <div className="mt-[var(--s-8)] flex flex-col gap-[var(--s-6)] measure">
              <p className="t-lead">
                Minha trajetória passou por administração, operações, tecnologia, processos
                e negócios. Hoje, essa combinação influencia diretamente a forma como trabalho.
              </p>
              <p className="t-body">
                Não tenho interesse em tecnologia pela tecnologia. Meu interesse está em
                entender um problema, organizar o caminho e encontrar uma maneira melhor
                de resolvê-lo.
              </p>
            </div>
          </Reveal>

          <Reveal kind="fade" delay={240}>
            <p
              className="t-label mt-[var(--s-12)] flex items-center gap-[10px]"
              style={{ color: "var(--fg-muted)" }}
            >
              <span aria-hidden className="terminal" />
              Essa é a ideia por trás da C.
            </p>
          </Reveal>

          <Reveal kind="fade" delay={300}>
            <div className="mt-[var(--s-8)] flex flex-wrap gap-x-[var(--s-8)] gap-y-[var(--s-3)]">
              <ArrowLink href="/sobre">Sobre o meu trabalho</ArrowLink>
              <ArrowLink href="/experiencia">Ver a trajetória</ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
