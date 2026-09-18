import type { CSSProperties } from "react";

type Tone = "color" | "light" | "ink" | "current";

const palettes: Record<Tone, { outer: string; mid: string; inner: string; terminal: string }> = {
  color: { outer: "#111318", mid: "#1E3A8A", inner: "#2F6FED", terminal: "#2F6FED" },
  light: { outer: "#F4F4F1", mid: "#8FAEF5", inner: "#5B8DFF", terminal: "#5B8DFF" },
  ink: { outer: "#111318", mid: "#111318", inner: "#111318", terminal: "#2F6FED" },
  current: {
    outer: "currentColor",
    mid: "currentColor",
    inner: "currentColor",
    terminal: "currentColor",
  },
};

type Props = {
  size?: number;
  tone?: Tone;
  /** Anima o traçado dos arcos ao montar (loader, 404). */
  draw?: boolean;
  className?: string;
  title?: string;
};

/**
 * O símbolo da C.
 *
 * Três arcos concêntricos incompletos, abertura voltada para a direita, e um
 * terminal quadrado azul no extremo superior do arco externo. A abertura e o
 * terminal são a identidade — não devem ser fechados nem removidos.
 */
export default function Mark({
  size = 32,
  tone = "color",
  draw = false,
  className,
  title,
}: Props) {
  const c = palettes[tone];
  const arcs = [
    { r: 40, w: 11, dash: 201, gap: 51.3, rot: 36, color: c.outer, dur: 700, delay: 0 },
    { r: 27.5, w: 9, dash: 124.4, gap: 48.4, rot: 50, color: c.mid, dur: 620, delay: 110 },
    { r: 16, w: 7.5, dash: 64.3, gap: 36.2, rot: 64, color: c.inner, dur: 540, delay: 220 },
  ];

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <g fill="none" strokeLinecap="round">
        {arcs.map((a, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={a.r}
            stroke={a.color}
            strokeWidth={a.w}
            strokeDasharray={`${a.dash} ${a.gap}`}
            transform={`rotate(${a.rot} 50 50)`}
            style={
              draw
                ? ({
                    strokeDashoffset: 0,
                    "--dash": a.dash,
                    animation: `aperture-draw ${a.dur}ms var(--ease) ${a.delay}ms both`,
                  } as CSSProperties)
                : undefined
            }
          />
        ))}
      </g>
      <rect
        x="74.5"
        y="19"
        width="16"
        height="16"
        rx="3.5"
        fill={c.terminal}
        transform="rotate(-12 82.5 27)"
        style={
          draw
            ? { animation: "terminal-in 380ms var(--ease) 620ms both", transformOrigin: "82.5px 27px" }
            : undefined
        }
      />
    </svg>
  );
}
