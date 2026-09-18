/**
 * Resolução da URL pública do site.
 *
 * Isto existe porque `process.env.X ?? fallback` é uma armadilha: o operador
 * `??` só cai no fallback com `undefined` ou `null`. Uma variável declarada
 * e vazia — o caso mais comum ao configurar um projeto na Vercel — passa
 * direto, e `new URL("")` derruba o build inteiro na coleta de metadata.
 *
 * Aqui, qualquer valor ausente, em branco ou inválido é descartado, e a
 * resolução nunca lança.
 */

const FALLBACK = "https://cdigitalsolutions.com.br";

/** Valida e normaliza: exige protocolo, remove barra final. */
function normalize(value: string | undefined): string | null {
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const url = new URL(withProtocol);
    if (!url.hostname.includes(".") && url.hostname !== "localhost") return null;
    return url.toString().replace(/\/+$/, "");
  } catch {
    return null;
  }
}

/**
 * Ordem de preferência:
 *   1. domínio definido explicitamente;
 *   2. domínio de produção do projeto na Vercel (estável entre deploys);
 *   3. URL do deploy atual (previews);
 *   4. fallback.
 *
 * As variáveis VERCEL_* não têm prefixo NEXT_PUBLIC_, mas todas as rotas
 * deste site são estáticas: a metadata é avaliada no build, onde elas
 * existem.
 */
export const siteUrl: string =
  normalize(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalize(process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) ??
  normalize(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalize(process.env.VERCEL_URL) ??
  FALLBACK;

/** Monta uma URL absoluta a partir de um caminho da aplicação. */
export const absoluteUrl = (path = "/") =>
  `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
