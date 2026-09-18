import type { ReactNode } from "react";

type Tone = "light" | "paper" | "ink" | "brand";

type Props = {
  children: ReactNode;
  id?: string;
  /** Índice exibido na canaleta esquerda. */
  index?: string;
  /** Rótulo curto exibido na canaleta esquerda. */
  label?: string;
  tone?: Tone;
  /** Ritmo vertical ampliado, para seções de respiro. */
  wide?: boolean;
  /** Remove a canaleta e usa largura cheia do shell. */
  bare?: boolean;
  className?: string;
};

const toneClass: Record<Tone, string> = {
  light: "",
  paper: "surface-paper",
  ink: "surface-ink",
  brand: "surface-brand",
};

/**
 * A SPINE
 * ---------------------------------------------------------------------------
 * Toda seção compartilha uma canaleta à esquerda com índice, rótulo e uma
 * régua que se desenha de cima para baixo conforme a seção entra em cena.
 * É isso que faz a página inteira ser lida como um documento contínuo, e
 * não como blocos empilhados.
 */
export default function Section({
  children,
  id,
  index,
  label,
  tone = "light",
  wide = false,
  bare = false,
  className = "",
}: Props) {
  const pad = wide ? "var(--section-y-wide)" : "var(--section-y)";

  return (
    <section
      id={id}
      className={`relative ${toneClass[tone]} ${className}`}
      style={{ paddingBlock: pad }}
    >
      <div className="shell">
        {bare ? (
          children
        ) : (
          <div className="spine">
            <div className="spine-rail">
              {index ? (
                <span
                  className="t-num text-[0.75rem] font-medium"
                  style={{ color: "var(--fg-faint)" }}
                >
                  {index}
                </span>
              ) : null}
              {label ? (
                <span className="t-label" style={{ color: "var(--fg-muted)" }}>
                  {label}
                </span>
              ) : null}
              <span aria-hidden className="draw-y spine-mark hidden lg:block" />
            </div>
            <div className="min-w-0">{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}
