/** Data curta em pt-BR, estável entre servidor e cliente. */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "jan", "fev", "mar", "abr", "mai", "jun",
    "jul", "ago", "set", "out", "nov", "dez",
  ];
  if (!y || !m || !d) return iso;
  return `${String(d).padStart(2, "0")} ${months[m - 1]} ${y}`;
}
