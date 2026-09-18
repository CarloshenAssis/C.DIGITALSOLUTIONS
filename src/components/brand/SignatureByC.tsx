import Link from "next/link";
import { brand } from "@/config/brand";

type Props = {
  /** Fundo em que a assinatura está apoiada. */
  tone?: "light" | "dark";
  label?: string;
  href?: string;
};

/**
 * ASSINATURA PARA SITES DE CLIENTES
 * ---------------------------------------------------------------------------
 * Componente oficial da marca. Deve permanecer discreto: um crédito, nunca
 * um anúncio. Uso previsto no rodapé dos sites entregues:
 *
 *   <div className="footer-bottom">
 *     <span>© 2026 Empresa</span>
 *     <SignatureByC />
 *   </div>
 *
 * Uma versão em HTML/CSS puro, para sites que não usam React, está em
 * `docs/assinatura.md`.
 */
export default function SignatureByC({
  tone = "light",
  label = "Digital solution by",
  href = brand.url,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-[6px] transition-opacity duration-300 hover:opacity-100"
      style={{
        opacity: 0.55,
        color: tone === "dark" ? "#F4F2ED" : "#161616",
        fontSize: "0.75rem",
        letterSpacing: "-0.005em",
      }}
    >
      <span>{label}</span>
      <span className="font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em]">
        C.
      </span>
      <span
        aria-hidden
        className="h-[5px] w-[5px] rounded-[1px] transition-transform duration-300 group-hover:scale-125"
        style={{ background: "#2457D6" }}
      />
    </Link>
  );
}
