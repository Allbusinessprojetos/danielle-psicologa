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
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 32); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);

  return (
    <header className={clsx("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || menuOpen ? "border-b border-rose/10 bg-white/90 text-charcoal backdrop-blur-xl" : "text-charcoal") }>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12 xl:px-16">
        <a href="#inicio" className="relative z-10 flex flex-col leading-none"><span className="font-display text-xl tracking-[-0.02em]">Dani<span className="italic text-terracotta">.</span></span><span className="mt-1 text-[8px] uppercase tracking-[0.22em] opacity-60">Psicologia Clínica</span></a>
        <nav className="hidden lg:block" aria-label="Navegação principal"><ul className="flex items-center gap-7">{siteConfig.navegacao.map(item => <li key={item.href}><a href={item.href} className="text-[11px] uppercase tracking-[0.12em] opacity-70 transition-opacity hover:opacity-100">{item.label}</a></li>)}</ul></nav>
        <div className="flex items-center gap-3"><div className="hidden sm:block"><Button href={whatsappHref()} external className={clsx(!scrolled && "shadow-[0_10px_30px_rgba(176,61,99,.12)]")}>{siteConfig.ctas.agendar}</Button></div><button type="button" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/20 lg:hidden">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div>
      </div>
      {menuOpen && <nav className="border-t border-rose/10 bg-white px-5 py-6 text-charcoal lg:hidden"><ul className="space-y-1">{siteConfig.navegacao.map(item => <li key={item.href}><a href={item.href} onClick={() => setMenuOpen(false)} className="block py-3 font-display text-2xl">{item.label}</a></li>)}<li className="pt-4 sm:hidden"><Button href={whatsappHref()} external className="w-full">{siteConfig.ctas.agendar}</Button></li></ul></nav>}
    </header>
  );
}
