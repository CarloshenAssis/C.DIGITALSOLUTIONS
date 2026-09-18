"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";
import { submitBriefing, type BriefingState } from "@/app/contato/actions";
import Mark from "@/components/brand/Mark";

const kinds = [
  "Presença digital",
  "Sistema / plataforma",
  "Automação",
  "IA",
  "Landing page",
  "Diagnóstico",
  "Outro",
];

const field =
  "w-full border-b bg-transparent pb-[10px] pt-[6px] text-[1.0625rem] outline-none transition-colors duration-300 placeholder:text-[var(--fg-faint)] focus:border-[var(--fg)]";

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="t-label block" style={{ color: "var(--fg-muted)" }}>
      {children}
    </label>
  );
}

export default function BriefingForm() {
  const [state, action, pending] = useActionState<BriefingState, FormData>(submitBriefing, {
    status: "idle",
  });
  const [copied, setCopied] = useState(false);
  const anchor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No modo handoff, o briefing já validado segue pelo canal direto.
    if (state.status === "handoff") {
      const target = state.mailto ?? state.whatsapp;
      if (target) window.location.href = target;
    }

    // Depois do envio, a resposta precisa estar visível — não acima da dobra.
    if (state.status === "sent" || state.status === "handoff" || state.status === "unconfigured") {
      anchor.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [state]);

  if (state.status === "sent" || state.status === "handoff") {
    return (
      <div ref={anchor}>
        <Received channel={state.status === "handoff" ? "direto" : "formulário"} />
      </div>
    );
  }

  if (state.status === "unconfigured") {
    return (
      <div ref={anchor} className="border-t pt-[var(--s-8)]" style={{ borderColor: "var(--rule)" }}>
        <p className="t-section" style={{ fontSize: "clamp(1.375rem, 2vw, 1.75rem)" }}>
          Briefing pronto.
        </p>
        <p className="t-body mt-[var(--s-4)] measure">
          O canal de envio ainda não está configurado neste site. Copie o texto abaixo e envie
          pelo canal que preferir — ele já está no formato que eu leio.
        </p>

        <pre
          className="mt-[var(--s-8)] overflow-x-auto rounded-[var(--radius-md)] border p-[var(--s-6)] text-[0.875rem]"
          style={{
            borderColor: "var(--rule)",
            background: "var(--raised)",
            fontFamily: "var(--font-mono-label)",
            letterSpacing: 0,
            textTransform: "none",
            lineHeight: 1.7,
            whiteSpace: "pre-wrap",
          }}
        >
          {state.summary}
        </pre>

        <button
          type="button"
          className="btn btn-outline mt-[var(--s-6)]"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(state.summary);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 2400);
            } catch {
              setCopied(false);
            }
          }}
        >
          {copied ? <Check size={16} strokeWidth={1.75} aria-hidden /> : <Copy size={16} strokeWidth={1.75} aria-hidden />}
          {copied ? "Copiado" : "Copiar briefing"}
        </button>
      </div>
    );
  }

  const previous = state.status === "error" ? state.fields : undefined;

  return (
    <form action={action} className="flex flex-col gap-[var(--s-12)]">
      <p className="sr-only" aria-hidden>
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </p>

      <div className="grid gap-[var(--s-8)] sm:grid-cols-2">
        <div>
          <Label htmlFor="nome">Nome *</Label>
          <input
            id="nome"
            name="nome"
            required
            autoComplete="name"
            defaultValue={previous?.nome}
            placeholder="Como devo te chamar"
            className={field}
            style={{ borderColor: "var(--rule-strong)" }}
          />
        </div>

        <div>
          <Label htmlFor="empresa">Empresa</Label>
          <input
            id="empresa"
            name="empresa"
            autoComplete="organization"
            defaultValue={previous?.empresa}
            placeholder="Opcional"
            className={field}
            style={{ borderColor: "var(--rule-strong)" }}
          />
        </div>

        <div>
          <Label htmlFor="email">E-mail *</Label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={previous?.email}
            placeholder="voce@empresa.com.br"
            className={field}
            style={{ borderColor: "var(--rule-strong)" }}
          />
        </div>

        <div>
          <Label htmlFor="telefone">WhatsApp</Label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            autoComplete="tel"
            defaultValue={previous?.telefone}
            placeholder="Opcional"
            className={field}
            style={{ borderColor: "var(--rule-strong)" }}
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="site">Site ou Instagram</Label>
          <input
            id="site"
            name="site"
            defaultValue={previous?.site}
            placeholder="Se já existir algo no ar"
            className={field}
            style={{ borderColor: "var(--rule-strong)" }}
          />
        </div>
      </div>

      <fieldset>
        <legend className="t-label" style={{ color: "var(--fg-muted)" }}>
          O que você procura?
        </legend>
        <div className="mt-[var(--s-6)] flex flex-wrap gap-[var(--s-2)]">
          {kinds.map((kind) => (
            <label key={kind} className="cursor-pointer">
              <input
                type="radio"
                name="tipo"
                value={kind}
                defaultChecked={previous?.tipo === kind}
                className="peer sr-only"
              />
              <span
                className="t-label inline-block rounded-[var(--radius-xs)] border px-[14px] py-[10px] transition-colors duration-300 peer-checked:border-[var(--fg)] peer-checked:bg-[var(--fg)] peer-checked:text-[var(--canvas)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--brand)]"
                style={{ borderColor: "var(--rule-strong)", color: "var(--fg-muted)" }}
              >
                {kind}
              </span>
            </label>
          ))}
        </div>
        <p className="t-body mt-[var(--s-4)] text-[0.8125rem]">
          Se não souber, deixe em branco. Isso é justamente o que a conversa resolve.
        </p>
      </fieldset>

      <div>
        <Label htmlFor="mensagem">Conte um pouco sobre o problema *</Label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          defaultValue={previous?.mensagem}
          placeholder="O que está acontecendo hoje, o que já tentaram e o que precisaria melhorar."
          className={`${field} resize-y`}
          style={{ borderColor: "var(--rule-strong)", lineHeight: 1.6 }}
        />
      </div>

      {state.status === "error" ? (
        <p
          role="alert"
          className="text-[0.9375rem]"
          style={{ color: "var(--brand)" }}
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-[var(--s-6)]">
        <button type="submit" className="btn btn-solid" disabled={pending}>
          {pending ? "Enviando" : "Enviar"}
          <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
        </button>
        <p className="t-label" style={{ color: "var(--fg-faint)" }}>
          Resposta com análise, não com proposta automática.
        </p>
      </div>
    </form>
  );
}

/**
 * Confirmação como diagnóstico.
 * "Obrigado!" não diz nada. Isto diz o que acontece a seguir.
 */
function Received({ channel }: { channel: string }) {
  return (
    <div
      className="border-t pt-[var(--s-8)]"
      role="status"
      aria-live="polite"
      style={{ borderColor: "var(--rule)" }}
    >
      <Mark size={34} tone="color" draw />

      <p className="t-section mt-[var(--s-8)]" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}>
        Recebido.
      </p>

      <div className="mt-[var(--s-6)] flex flex-col gap-[var(--s-4)] measure">
        <p className="t-lead">Vou analisar o contexto antes de responder.</p>
        <p className="t-body">
          Se fizer sentido, o próximo passo é conversarmos sobre o problema e os caminhos
          possíveis — sem proposta pronta antes de entender o cenário.
        </p>
      </div>

      <p className="t-label mt-[var(--s-12)]" style={{ color: "var(--fg-faint)" }}>
        Via {channel}
      </p>
    </div>
  );
}
