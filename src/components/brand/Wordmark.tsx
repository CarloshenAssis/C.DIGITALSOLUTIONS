import Link from "next/link";
import Mark from "./Mark";
import { brand } from "@/config/brand";

type Props = {
  tone?: "color" | "light";
  /** Esconde o nome por extenso em telas pequenas. */
  compact?: boolean;
  size?: number;
};

export default function Wordmark({ tone = "color", compact = true, size = 30 }: Props) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-[10px]"
      aria-label={`${brand.fullName} — página inicial`}
    >
      <Mark size={size} tone={tone} />
      <span className={compact ? "hidden sm:flex flex-col leading-none" : "flex flex-col leading-none"}>
        <span
          className="font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em]"
          style={{ fontSize: "0.9375rem" }}
        >
          {brand.name}
        </span>
        <span
          className="t-label mt-[3px] transition-colors duration-300"
          style={{ color: "var(--fg-muted)", fontSize: "0.5625rem", letterSpacing: "0.18em" }}
        >
          Digital Solutions
        </span>
      </span>
    </Link>
  );
}
