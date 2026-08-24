import { describe, expect, it } from "vitest";
import { buildWhatsAppLink, whatsappHref } from "./whatsapp";

const FALLBACK = "https://maapp.com.br/PsicoDani";

describe("buildWhatsAppLink", () => {
  it("monta o link wa.me com a mensagem codificada", () => {
    const link = buildWhatsAppLink("5517999999999", "Olá", FALLBACK);
    expect(link).toBe("https://wa.me/5517999999999?text=Ol%C3%A1");
  });

  it("remove formatação do número antes de montar o link", () => {
    const link = buildWhatsAppLink("+55 (17) 99999-9999", "Olá", FALLBACK);
    expect(link).toBe("https://wa.me/5517999999999?text=Ol%C3%A1");
  });

  it("codifica acentos, espaços e pontuação da mensagem", () => {
    const link = buildWhatsAppLink(
      "5517999999999",
      "Olá, Danielle! Quero agendar?",
      FALLBACK,
    );
    expect(link).toBe(
      "https://wa.me/5517999999999?text=Ol%C3%A1%2C%20Danielle!%20Quero%20agendar%3F",
    );
  });

  it("retorna o fallback quando o número está vazio", () => {
    expect(buildWhatsAppLink("", "Olá", FALLBACK)).toBe(FALLBACK);
  });

  it("retorna o fallback quando o número não tem nenhum dígito", () => {
    expect(buildWhatsAppLink("(  ) -", "Olá", FALLBACK)).toBe(FALLBACK);
  });

  it("usa o número configurado, não o fallback", () => {
    expect(whatsappHref()).toMatch(/^https:\/\/wa\.me\/\d{12,13}\?text=/);
  });
});
