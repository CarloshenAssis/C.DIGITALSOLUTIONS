"use server";

import { contact, hasEmail, hasWhatsapp } from "@/config/contact";

export type BriefingState =
  | { status: "idle" }
  | { status: "error"; message: string; fields?: Record<string, string> }
  | { status: "sent" }
  /** Sem endpoint configurado: o briefing segue pelo canal direto. */
  | { status: "handoff"; mailto?: string; whatsapp?: string; summary: string }
  /** Nenhum canal configurado ainda. Dizemos a verdade, não fingimos envio. */
  | { status: "unconfigured"; summary: string };

const need = ["nome", "email", "mensagem"] as const;

function compose(data: Record<string, string>) {
  const lines = [
    `Nome: ${data.nome}`,
    data.empresa ? `Empresa: ${data.empresa}` : null,
    `E-mail: ${data.email}`,
    data.telefone ? `WhatsApp: ${data.telefone}` : null,
    data.site ? `Site / Instagram: ${data.site}` : null,
    data.tipo ? `O que procura: ${data.tipo}` : null,
    "",
    "Contexto:",
    data.mensagem,
  ].filter(Boolean);

  return lines.join("\n");
}

export async function submitBriefing(
  _prev: BriefingState,
  formData: FormData,
): Promise<BriefingState> {
  const data = Object.fromEntries(
    ["nome", "empresa", "email", "telefone", "site", "tipo", "mensagem", "website"].map((key) => [
      key,
      String(formData.get(key) ?? "").trim(),
    ]),
  ) as Record<string, string>;

  // Campo-armadilha: preenchido apenas por robô.
  if (data.website) return { status: "sent" };

  for (const field of need) {
    if (!data[field]) {
      return {
        status: "error",
        message: "Preencha nome, e-mail e uma descrição do que está acontecendo.",
        fields: data,
      };
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
    return { status: "error", message: "Confira o e-mail informado.", fields: data };
  }

  const summary = compose(data);
  const endpoint = process.env.CONTACT_WEBHOOK_URL;

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: undefined, summary }),
      });
      if (!response.ok) throw new Error(String(response.status));
      return { status: "sent" };
    } catch {
      return {
        status: "error",
        message:
          "Não consegui registrar o envio agora. Tente novamente em instantes ou use o contato direto abaixo.",
        fields: data,
      };
    }
  }

  const subject = `Briefing — ${data.nome}${data.empresa ? ` (${data.empresa})` : ""}`;

  if (hasEmail() || hasWhatsapp()) {
    return {
      status: "handoff",
      summary,
      mailto: hasEmail()
        ? `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`
        : undefined,
      whatsapp: hasWhatsapp()
        ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(summary)}`
        : undefined,
    };
  }

  return { status: "unconfigured", summary };
}
