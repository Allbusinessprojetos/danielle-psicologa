"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "bg-white/95 shadow-sm backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="font-display text-lg text-charcoal sm:text-xl">
            {siteConfig.profissional.marca}
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-rose-deep">
            {siteConfig.profissional.nome}
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {siteConfig.navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-charcoal transition-colors hover:text-rose-deep"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* O wrapper controla a visibilidade: aplicar `hidden` direto no
              Button colidiria com o `inline-flex` das classes base. */}
          <div className="hidden sm:block">
            <Button href={whatsappHref()} external>
              {siteConfig.ctas.agendar}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="border-t border-rose/15 bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-5 py-3">
            {siteConfig.navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[44px] items-center text-charcoal"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3 sm:hidden">
              <Button href={whatsappHref()} external className="w-full">
                {siteConfig.ctas.agendar}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
