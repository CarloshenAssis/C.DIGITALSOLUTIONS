/**
 * Remontado a cada navegação: dá a toda página a mesma entrada
 * (fade + leve deslocamento vertical), sem biblioteca de transição.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
