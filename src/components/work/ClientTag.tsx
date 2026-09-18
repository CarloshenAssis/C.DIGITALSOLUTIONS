import type { Classification } from "@/data/projects";

type Props = {
  classification?: Classification;
  /** Régua fina antes do rótulo, para separá-lo do kicker na mesma linha. */
  divider?: boolean;
};

/**
 * Marca apenas o que pode ser afirmado: trabalho comercial contratado.
 *
 * A ausência desta etiqueta não diz nada sobre o projeto — não significa que
 * seja conceitual, nem que tenha sido contratado. Nenhum outro rótulo de
 * natureza deve ser introduzido aqui antes de o dado existir.
 *
 * Sem forma nova: é o mesmo t-label do resto do site, apenas em tinta cheia
 * em vez de tinta suave. O contraste basta para distingui-lo do kicker.
 */
export default function ClientTag({ classification, divider = false }: Props) {
  if (classification !== "client") return null;

  return (
    <span className="inline-flex items-center gap-[var(--s-3)]">
      {divider ? (
        <span
          aria-hidden
          className="hidden h-[10px] w-px sm:block"
          style={{ background: "var(--rule-strong)" }}
        />
      ) : null}
      <span className="t-label" style={{ color: "var(--fg)" }}>
        Client project
      </span>
    </span>
  );
}
