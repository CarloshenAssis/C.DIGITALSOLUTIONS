import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";

/**
 * DEPOIMENTOS
 * ---------------------------------------------------------------------------
 * Pronto para receber conteúdo, e deliberadamente invisível enquanto não
 * houver depoimento real e autorizado. Não existe estado "vazio elegante"
 * aqui: uma seção de depoimentos sem depoimentos é um espaço reservado que
 * o visitante lê como ausência. Melhor não existir.
 *
 * Para ativar: preencher src/data/testimonials.ts e incluir <Testimonials />
 * na home, depois de <SelectedWork />.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section index="—" label="Clientes" wide>
      <Reveal kind="up">
        <h2 className="t-section measure-narrow">
          O que dizem <span className="t-dim">de perto.</span>
        </h2>
      </Reveal>

      <div className="mt-[var(--s-16)] grid gap-[var(--s-12)] md:grid-cols-2 lg:gap-[var(--s-16)]">
        {testimonials.map((item, i) => (
          <Reveal kind="up" delay={i * 80} key={item.name}>
            <figure className="border-t pt-[var(--s-6)]" style={{ borderColor: "var(--rule)" }}>
              <blockquote
                className="t-section"
                style={{ fontSize: "clamp(1.125rem, 1.7vw, 1.375rem)", lineHeight: 1.4 }}
              >
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-[var(--s-6)] flex items-center gap-[10px]">
                <span aria-hidden className="terminal" />
                <span className="text-[0.9375rem] font-medium">{item.name}</span>
                <span className="t-label" style={{ color: "var(--fg-muted)" }}>
                  {item.role}
                  {item.company ? ` · ${item.company}` : ""}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
