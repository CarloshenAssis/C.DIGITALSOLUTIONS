import Reveal from "@/components/motion/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";

/**
 * A PAUSA
 * ---------------------------------------------------------------------------
 * Depois dos projetos, a página para de vender por um momento. Uma tela
 * quase vazia, uma pergunta, e nada mais. É o intervalo editorial que
 * separa "veja o que eu fiz" de "e você, o que precisa?".
 */
export default function SignatureMoment() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingBlock: "clamp(120px, 18vh, 220px)" }}
      aria-labelledby="pausa-title"
    >
      {/* A abertura do símbolo, em escala arquitetônica e quase invisível. */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "min(120vw, 1100px)", aspectRatio: "1", opacity: 0.5 }}
        viewBox="0 0 100 100"
        data-parallax="10"
      >
        <g fill="none" stroke="var(--rule)" strokeWidth="0.35" strokeLinecap="round">
          <circle cx="50" cy="50" r="46" strokeDasharray="231 58" transform="rotate(36 50 50)" />
          <circle cx="50" cy="50" r="34" strokeDasharray="155 59" transform="rotate(52 50 50)" />
          <circle cx="50" cy="50" r="22" strokeDasharray="92 46" transform="rotate(68 50 50)" />
        </g>
      </svg>

      <div className="shell relative">
        <div className="mx-auto max-w-[46ch] text-center">
          <Reveal kind="fade">
            <p className="t-label" style={{ color: "var(--fg-faint)" }}>
              Good work starts with a good question.
            </p>
          </Reveal>

          <Reveal kind="up" delay={160}>
            <h2 id="pausa-title" className="t-title mt-[var(--s-8)]">
              Qual problema você está <span className="t-dim">tentando resolver?</span>
            </h2>
          </Reveal>

          <Reveal kind="fade" delay={320}>
            <div className="mt-[var(--s-12)] flex justify-center">
              <ArrowLink href="/contato">Vamos conversar</ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
