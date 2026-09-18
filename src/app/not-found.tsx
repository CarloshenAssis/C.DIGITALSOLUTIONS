import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Mark from "@/components/brand/Mark";

export default function NotFound() {
  return (
    <section
      className="flex items-center"
      style={{ minHeight: "82vh", paddingTop: "clamp(120px, 14vh, 160px)", paddingBottom: "var(--s-20)" }}
    >
      <div className="shell">
        <div className="grid gap-[var(--s-12)] lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="t-label" style={{ color: "var(--fg-faint)" }}>
              Erro 404
            </p>

            <h1 className="t-title mt-[var(--s-6)]">
              Essa página tomou <span className="t-dim">um caminho diferente.</span>
            </h1>

            <p className="t-body mt-[var(--s-8)] measure">
              O endereço não existe mais, mudou de lugar ou nunca existiu. Acontece — e é
              exatamente o tipo de coisa que dá para resolver com uma estrutura melhor.
            </p>

            <div className="mt-[var(--s-12)] flex flex-wrap gap-[var(--s-3)]">
              <Link href="/" className="btn btn-solid">
                Voltar para o início
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
              </Link>
              <Link href="/projetos" className="btn btn-outline">
                Ver projetos
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex justify-start lg:justify-end">
            <Mark size={200} tone="color" draw />
          </div>
        </div>
      </div>
    </section>
  );
}
