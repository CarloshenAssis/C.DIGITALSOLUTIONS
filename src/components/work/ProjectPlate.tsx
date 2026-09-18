type Props = {
  title: string;
  kicker: string;
  year: string;
  /** Desloca o arco de fundo para que duas molduras nunca fiquem idênticas. */
  seed?: number;
  /**
   * Onde o nome do projeto aparece. Use "none" quando o título já está
   * escrito ao lado da moldura — repetir seria ruído.
   */
  name?: "top" | "bottom" | "none";
  /** Numeral exibido quando name === "none". */
  index?: string;
};

/**
 * Exibida quando um projeto ainda não tem arquivo de imagem.
 *
 * Deliberadamente NÃO simula uma captura de tela. Um mockup fictício seria
 * um dado inventado — e a regra do projeto é não inventar nada. Isto é uma
 * capa tipográfica, e se lê como uma decisão de design, não como uma falha.
 */
export default function ProjectPlate({
  title,
  kicker,
  year,
  seed = 0,
  name = "bottom",
  index,
}: Props) {
  const rotation = -18 + (seed % 4) * 26;
  const body =
    name === "none" ? (
      // Ornamento: o mesmo número aparece como texto ao lado da moldura.
      index ? (
        <p className="plate-index" aria-hidden>
          {index}
        </p>
      ) : null
    ) : (
      <p className="plate-title">{title}</p>
    );

  return (
    <div className="plate">
      <div className="plate-grain" aria-hidden />

      <svg className="plate-arc" viewBox="0 0 100 100" aria-hidden>
        <g fill="none" strokeLinecap="round" stroke="var(--rule-strong)">
          <circle
            cx="50"
            cy="50"
            r="44"
            strokeWidth="1.3"
            strokeDasharray="221 55"
            transform={`rotate(${rotation} 50 50)`}
          />
          <circle
            cx="50"
            cy="50"
            r="31"
            strokeWidth="1.3"
            strokeDasharray="140 55"
            transform={`rotate(${rotation + 22} 50 50)`}
          />
          <circle
            cx="50"
            cy="50"
            r="18"
            strokeWidth="1.3"
            strokeDasharray="72 41"
            transform={`rotate(${rotation + 44} 50 50)`}
          />
        </g>
      </svg>

      <div className="plate-head">
        <span className="plate-meta">{kicker}</span>
        <span className="plate-meta">{year}</span>
      </div>

      {name === "top" ? (
        <div className="plate-body" style={{ paddingBottom: 0 }}>
          <p className="plate-title">{title}</p>
        </div>
      ) : null}

      <div className="plate-body" style={name === "top" ? { flex: 1 } : undefined}>
        {name === "top" ? null : body}
      </div>
    </div>
  );
}
