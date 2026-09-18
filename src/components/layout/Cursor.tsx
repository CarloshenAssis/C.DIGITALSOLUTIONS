"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cursor de apoio, apenas em ponteiro fino.
 *
 * Não substitui o cursor do sistema — ele continua lá. Este só aparece
 * sobre elementos marcados com data-cursor="Ver", e some em qualquer
 * outro lugar. É um rótulo contextual, não um enfeite permanente.
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(0);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      const host = (e.target as HTMLElement | null)?.closest?.("[data-cursor]");
      const next = host?.getAttribute("data-cursor") ?? null;
      setLabel((prev) => (prev === next ? prev : next));
    };

    const onLeave = () => setLabel(null);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden lg:flex items-center justify-center rounded-full transition-[opacity,width,height] duration-300"
      style={{
        width: label ? 74 : 0,
        height: label ? 74 : 0,
        opacity: label ? 1 : 0,
        background: "var(--fg)",
        color: "var(--canvas)",
        mixBlendMode: "normal",
      }}
    >
      <span className="t-label" style={{ fontSize: "0.5625rem" }}>
        {label}
      </span>
    </div>
  );
}
