/**
 * Canais de contato.
 *
 * Deixe em branco o que ainda não existir — a interface simplesmente não
 * renderiza o canal. Nunca preencha com dado provisório ou inventado.
 */
export const contact = {
  email: "",
  whatsapp: "", // apenas dígitos, com DDI. ex.: "5512999999999"
  city: "",
  /**
   * Endpoint opcional que recebe o briefing (Formspree, n8n, Resend, etc.).
   * Definido por variável de ambiente — ver .env.example.
   */
  endpointConfigured: Boolean(process.env.CONTACT_WEBHOOK_URL),
} as const;

export const hasEmail = () => contact.email.trim().length > 0;
export const hasWhatsapp = () => contact.whatsapp.trim().length > 0;

export const whatsappLink = (message?: string) =>
  hasWhatsapp()
    ? `https://wa.me/${contact.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`
    : null;
