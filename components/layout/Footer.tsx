import { siteConfig } from "@/lib/config";
export function Footer() {
  const ano = new Date().getFullYear();
  return <footer className="border-t border-white/10 bg-ink text-cream"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12 xl:px-16"><div><p className="font-display text-3xl">Dani<span className="italic text-terracotta">.</span></p><p className="mt-3 max-w-sm text-xs leading-6 text-cream/45">{siteConfig.footer.tagline}</p></div><div className="text-xs leading-6 text-cream/45 md:text-right"><p>{siteConfig.profissional.nome} • {siteConfig.profissional.crp}</p><p>© {ano} Todos os direitos reservados.</p></div></div></footer>;
}
