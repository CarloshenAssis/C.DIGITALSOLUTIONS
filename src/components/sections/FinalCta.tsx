import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

/**
 * O fecho. Fundo preto, continuando direto no rodapé — a última parte da
 * página é um único movimento escuro, não dois banners empilhados.
 */
export default function FinalCta() {
  // O rodapé também é preto: o fecho da página é um único movimento escuro.
  return (
    <section
      className="surface-black"
      style={{ paddingTop: "var(--section-y-wide)", paddingBottom: "var(--section-y)" }}
      aria-labelledby="cta-final"
    >
      <div className="shell">
        <div className="grid gap-[var(--s-12)] lg:grid-cols-12 lg:gap-[var(--s-8)]">
          <div className="lg:col-span-8">
            <Reveal kind="up">
              <h2 id="cta-final" className="t-title">
                Seu próximo problema digital
                <br />
                <span className="t-dim">pode começar aqui.</span>
                <span aria-hidden className="terminal ml-[10px] align-baseline" />
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:self-end">
            <Reveal kind="fade" delay={140}>
              <p className="t-body measure-narrow">
                Você não precisa saber exatamente qual tecnologia precisa. Comece
                explicando o problema.
              </p>
              <Link href="/contato" className="btn btn-solid mt-[var(--s-8)]">
                Vamos conversar
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
