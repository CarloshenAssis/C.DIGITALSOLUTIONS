"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Parallax contido: no máximo ±24px, somente em transform, somente em
 * telas grandes. Marque um elemento com data-parallax="16" (amplitude em px).
 */
export default function ParallaxEngine() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    if (reduced || !wide) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    ).map((el) => ({
      el,
      amount: Math.max(-24, Math.min(Number(el.dataset.parallax) || 12, 24)),
    }));

    if (nodes.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const { el, amount } of nodes) {
        const box = el.getBoundingClientRect();
        if (box.bottom < -200 || box.top > vh + 200) continue;
        // -1 (abaixo da dobra) → 1 (acima da dobra)
        const progress = (vh / 2 - (box.top + box.height / 2)) / (vh / 2 + box.height / 2);
        el.style.transform = `translate3d(0, ${(progress * amount).toFixed(2)}px, 0)`;
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      nodes.forEach(({ el }) => (el.style.transform = ""));
    };
  }, [pathname]);

  return null;
}
