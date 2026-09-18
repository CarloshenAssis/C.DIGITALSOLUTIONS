"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Wordmark from "@/components/brand/Wordmark";

const nav = [
  { href: "/projetos", label: "Projetos" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/journal", label: "Notas" },
];

export default function Header() {
  const pathname = usePathname();
  const [lifted, setLifted] = useState(false);
  /**
   * Guardamos a rota em que o menu foi aberto, em vez de um booleano. Assim
   * ele se fecha sozinho ao navegar, sem precisar de um efeito para isso.
   */
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: lifted ? "color-mix(in srgb, var(--canvas) 88%, transparent)" : "transparent",
          backdropFilter: lifted ? "saturate(180%) blur(14px)" : "none",
          WebkitBackdropFilter: lifted ? "saturate(180%) blur(14px)" : "none",
          borderBottom: `1px solid ${lifted ? "var(--rule)" : "transparent"}`,
        }}
      >
        <div className="shell flex items-center justify-between" style={{ height: 76 }}>
          <Wordmark />

          <nav className="hidden lg:flex items-center gap-[30px]" aria-label="Navegação principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-[0.9375rem] transition-colors duration-300"
                style={{ color: isActive(item.href) ? "var(--fg)" : "var(--fg-muted)" }}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span className="inline-flex items-center gap-[7px]">
                  {item.label}
                  {isActive(item.href) ? <span aria-hidden className="terminal-sm terminal" /> : null}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-[14px]">
            <Link
              href="/contato"
              className="btn btn-solid hidden sm:inline-flex"
              style={{ height: 42, paddingInline: 18, fontSize: "0.875rem" }}
            >
              Vamos conversar
              <ArrowRight size={15} strokeWidth={1.75} aria-hidden />
            </Link>

            <button
              type="button"
              className="lg:hidden inline-flex flex-col justify-center gap-[5px] p-[10px] -mr-[10px]"
              onClick={() => setOpenedAt(open ? null : pathname)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
            >
              <span
                className="block h-px w-[22px] transition-transform duration-300"
                style={{
                  background: "var(--fg)",
                  transform: open ? "translateY(3px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-px w-[22px] transition-transform duration-300"
                style={{
                  background: "var(--fg)",
                  transform: open ? "translateY(-3px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile: painel inteiro, não uma gaveta comprimida. */}
      <div
        id="menu-mobile"
        className="fixed inset-0 z-40 lg:hidden transition-[opacity,visibility] duration-300"
        style={{
          backgroundColor: "var(--canvas)",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
        }}
        aria-hidden={!open}
      >
        <div className="shell flex h-full flex-col justify-between" style={{ paddingTop: 108, paddingBottom: 40 }}>
          <nav className="flex flex-col" aria-label="Navegação principal (mobile)">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={open ? 0 : -1}
                className="t-title flex items-baseline justify-between border-b py-[18px] transition-[transform,opacity] duration-500"
                style={{
                  borderColor: "var(--rule)",
                  fontSize: "2rem",
                  transform: open ? "none" : "translateY(14px)",
                  opacity: open ? 1 : 0,
                  transitionDelay: `${open ? 60 + i * 45 : 0}ms`,
                }}
              >
                {item.label}
                <span className="t-num text-[0.6875rem]" style={{ color: "var(--fg-faint)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href="/contato"
            tabIndex={open ? 0 : -1}
            className="btn btn-solid w-full justify-center"
            style={{ height: 56 }}
          >
            Vamos conversar
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
          </Link>
        </div>
      </div>
    </>
  );
}
