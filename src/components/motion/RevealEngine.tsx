"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Um único observador para a página inteira.
 *
 * Em vez de montar um componente cliente por elemento animado, qualquer nó
 * marcado com [data-reveal] ou .draw-y é observado por esta engine. O custo
 * de JavaScript é constante, independente de quantos elementos revelam —
 * e os elementos em si continuam sendo renderizados no servidor.
 *
 * O IntersectionObserver sozinho não basta: em um salto grande de scroll
 * (âncora, tecla End, restauração de posição) um elemento pode ir de
 * "abaixo da tela" para "acima da tela" sem nunca cruzar um threshold —
 * e ficaria invisível para sempre. Por isso existe a varredura de segurança
 * abaixo, disparada apenas quando o salto é maior que uma tela.
 */
export default function RevealEngine() {
  const pathname = usePathname();

  useEffect(() => {
    const reveal = (el: Element) => el.setAttribute("data-shown", "true");
    const pending = new Set(
      Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], .draw-y")),
    );

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      pending.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          pending.delete(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    );

    /** Revela tudo que já passou da linha de corte. */
    const sweep = () => {
      const line = window.innerHeight * 0.92;
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < line) {
          reveal(el);
          pending.delete(el);
          observer.unobserve(el);
        }
      });
    };

    sweep();
    pending.forEach((el) => observer.observe(el));

    // A abertura trava a rolagem por ~1s. Quem tenta rolar nesse intervalo
    // dá um salto grande assim que ela sai; esta varredura cobre o salto.
    const afterIntro = window.setTimeout(sweep, 1600);

    let anchor = window.scrollY;
    let frame = 0;

    const onScroll = () => {
      if (frame || pending.size === 0) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (Math.abs(window.scrollY - anchor) < window.innerHeight * 0.75) return;
        anchor = window.scrollY;
        sweep();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.clearTimeout(afterIntro);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
