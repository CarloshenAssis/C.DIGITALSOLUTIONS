import type { Metadata } from "next";

import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import BriefingForm from "@/components/contact/BriefingForm";
import { processStages } from "@/data/process";
import { contact, hasEmail, hasWhatsapp, whatsappLink } from "@/config/contact";
import { activeSocial } from "@/config/social";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Você não precisa chegar com a solução pronta. Explique o que está acontecendo e entendemos juntos qual pode ser o próximo passo.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const socials = activeSocial();
  const whats = whatsappLink("Olá, Carlos. Vim pelo site da C. e queria conversar sobre um problema.");

  return (
    <>
      <section style={{ paddingTop: "clamp(128px, 16vh, 184px)", paddingBottom: "var(--s-16)" }}>
        <div className="shell">
          <Reveal kind="fade">
            <Eyebrow terminal>Contato</Eyebrow>
          </Reveal>

          <div className="mt-[var(--s-8)] grid gap-[var(--s-8)] lg:grid-cols-12">
            <Reveal kind="up" delay={80} className="lg:col-span-7">
              <h1 className="t-title">
                Conte o problema. <span className="t-dim">A solução vem depois.</span>
              </h1>
            </Reveal>

            <Reveal kind="fade" delay={160} className="lg:col-span-5 lg:self-end">
              <p className="t-lead measure">
                Você não precisa saber exatamente qual solução precisa. Começamos entendendo
                o cenário.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Section bare>
        <div className="grid gap-[var(--s-16)] lg:grid-cols-12 lg:gap-[var(--s-16)]">
          <div className="lg:col-span-7">
            <BriefingForm />
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal kind="fade">
              <div className="border-t pt-[var(--s-6)]" style={{ borderColor: "var(--rule)" }}>
                <p className="t-label" style={{ color: "var(--fg-faint)" }}>
                  O que acontece depois
                </p>

                <ol className="mt-[var(--s-6)] flex flex-col gap-[var(--s-6)]">
                  {processStages.map((stage) => (
                    <li key={stage.index} className="flex gap-[var(--s-4)]">
                      <span className="t-num text-[0.6875rem] pt-[3px]" style={{ color: "var(--fg-faint)" }}>
                        {stage.index}
                      </span>
                      <span>
                        <span className="block text-[0.9375rem] font-medium">{stage.title}</span>
                        <span className="t-body mt-[4px] block text-[0.875rem]">{stage.lead}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {hasEmail() || hasWhatsapp() || socials.length > 0 ? (
              <Reveal kind="fade" delay={120}>
                <div
                  className="mt-[var(--s-12)] border-t pt-[var(--s-6)]"
                  style={{ borderColor: "var(--rule)" }}
                >
                  <p className="t-label" style={{ color: "var(--fg-faint)" }}>
                    Contato direto
                  </p>
                  <ul className="mt-[var(--s-6)] flex flex-col gap-[var(--s-3)]">
                    {hasEmail() ? (
                      <li>
                        <a href={`mailto:${contact.email}`} className="link-underline text-[0.9375rem]">
                          {contact.email}
                        </a>
                      </li>
                    ) : null}
                    {whats ? (
                      <li>
                        <a
                          href={whats}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-[0.9375rem]"
                        >
                          WhatsApp
                        </a>
                      </li>
                    ) : null}
                    {socials.map((item) => (
                      <li key={item.key}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-[0.9375rem]"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ) : null}
          </aside>
        </div>
      </Section>
    </>
  );
}
