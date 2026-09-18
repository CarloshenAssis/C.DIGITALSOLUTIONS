import type { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
  tone?: "light" | "ink";
};

export default function PageHero({ eyebrow, title, lead, aside, tone = "light" }: Props) {
  return (
    <section
      className={tone === "ink" ? "surface-ink" : ""}
      style={{ paddingTop: "clamp(128px, 16vh, 184px)", paddingBottom: "var(--s-16)" }}
    >
      <div className="shell">
        <Reveal kind="fade">
          <Eyebrow terminal>{eyebrow}</Eyebrow>
        </Reveal>

        <div className="mt-[var(--s-8)] grid gap-[var(--s-8)] lg:grid-cols-12 lg:gap-[var(--s-8)]">
          <Reveal kind="up" delay={80} className="lg:col-span-7">
            <h1 className="t-title">{title}</h1>
          </Reveal>

          {lead ? (
            <Reveal kind="fade" delay={160} className="lg:col-span-5 lg:self-end">
              <div className="t-lead measure">{lead}</div>
            </Reveal>
          ) : null}
        </div>

        {aside ? (
          <Reveal kind="fade" delay={220}>
            <div className="mt-[var(--s-12)]">{aside}</div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
