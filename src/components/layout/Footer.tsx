import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Mark from "@/components/brand/Mark";
import { brand, year } from "@/config/brand";
import { activeSocial } from "@/config/social";
import { contact, hasEmail } from "@/config/contact";

const columns = [
  {
    title: "Trabalho",
    links: [
      { href: "/projetos", label: "Projetos" },
      { href: "/solucoes", label: "Soluções" },
      { href: "/journal", label: "Notas" },
    ],
  },
  {
    title: "C.",
    links: [
      { href: "/sobre", label: "Sobre" },
      { href: "/experiencia", label: "Experiência" },
      { href: "/contato", label: "Contato" },
    ],
  },
];

export default function Footer() {
  const socials = activeSocial();

  return (
    <footer className="surface-black" style={{ paddingTop: "var(--s-16)", paddingBottom: "var(--s-8)" }}>
      <div className="shell">
        {/* CTA final dentro do rodapé: o último convite, não um banner novo. */}
        <div className="grid gap-[var(--s-12)] lg:grid-cols-12 lg:gap-[var(--s-8)]">
          <div className="lg:col-span-7">
            <Mark size={38} tone="light" />
            <p
              className="t-section mt-[var(--s-8)]"
              style={{ maxWidth: "14ch", fontSize: "clamp(1.5rem, 2.2vw, 2rem)" }}
            >
              Let&rsquo;s build something useful.
            </p>
            <Link href="/contato" className="link-underline mt-[var(--s-8)] inline-flex text-[0.9375rem] font-medium">
              Conte o problema
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
            </Link>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-[var(--s-8)] sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="t-label" style={{ color: "var(--fg-faint)" }}>
                  {col.title}
                </p>
                <ul className="mt-[var(--s-4)] space-y-[10px]">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.9375rem] transition-colors duration-300 hover:text-[var(--fg)]"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {socials.length > 0 ? (
              <div>
                <p className="t-label" style={{ color: "var(--fg-faint)" }}>
                  Redes
                </p>
                <ul className="mt-[var(--s-4)] space-y-[10px]">
                  {socials.map((item) => (
                    <li key={item.key}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[5px] text-[0.9375rem] transition-colors duration-300 hover:text-[var(--fg)]"
                        style={{ color: "var(--fg-muted)" }}
                      >
                        {item.label}
                        <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <hr className="rule" style={{ marginTop: "var(--s-20)" }} />

        <div className="flex flex-col gap-[var(--s-4)] pt-[var(--s-6)] sm:flex-row sm:items-center sm:justify-between">
          <p className="t-label" style={{ color: "var(--fg-faint)" }}>
            © {year} {brand.fullName}
          </p>

          <div className="flex flex-wrap items-center gap-x-[var(--s-6)] gap-y-[var(--s-2)]">
            {hasEmail() ? (
              <a
                href={`mailto:${contact.email}`}
                className="text-[0.8125rem] transition-colors duration-300 hover:text-[var(--fg)]"
                style={{ color: "var(--fg-muted)" }}
              >
                {contact.email}
              </a>
            ) : null}
            <p className="t-label" style={{ color: "var(--fg-faint)" }}>
              {brand.descriptor}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
