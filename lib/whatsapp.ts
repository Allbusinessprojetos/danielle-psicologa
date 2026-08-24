/**
 * Monta o link de conversa do WhatsApp com mensagem pré-preenchida.
 * Se o número ainda não foi cadastrado, devolve a URL de fallback para
 * o site nunca ficar com um botão quebrado.
 */
export function buildWhatsAppLink(
  phone: string,
  message: string,
  fallbackUrl: string,
): string {
  const digits = (phone ?? "").replace(/\D/g, "");
  if (!digits) return fallbackUrl;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

import { siteConfig } from "./config";

/** Link pronto para uso nos CTAs, já ligado ao config central. */
export function whatsappHref(): string {
  return buildWhatsAppLink(
    siteConfig.contato.whatsapp,
    siteConfig.contato.mensagemWhatsapp,
    siteConfig.contato.agendaOnline,
  );
}
