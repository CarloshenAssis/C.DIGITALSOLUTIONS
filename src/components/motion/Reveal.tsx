import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealKind = "up" | "fade" | "left" | "right" | "scale" | "clip" | "rise";

type Props = {
  children: ReactNode;
  kind?: RevealKind;
  /** Atraso em ms. Usado para escalonar itens de uma mesma lista. */
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

/**
 * Componente de servidor: apenas marca o nó. Quem anima é a RevealEngine.
 */
export default function Reveal({
  children,
  kind = "up",
  delay = 0,
  as: Tag = "div",
  className,
  style,
}: Props) {
  return (
    <Tag
      data-reveal={kind}
      className={className}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
