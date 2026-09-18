import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "solid" | "outline" | "text";
  className?: string;
  ariaLabel?: string;
};

export default function ArrowLink({
  href,
  children,
  external = false,
  variant = "text",
  className = "",
  ariaLabel,
}: Props) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const base =
    variant === "text" ? "link-underline text-[0.9375rem] font-medium" : `btn btn-${variant}`;

  const props = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${base} ${className}`} aria-label={ariaLabel} {...props}>
      {children}
      <Icon size={16} strokeWidth={1.75} aria-hidden />
    </Link>
  );
}
