import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Reveal } from "@/components/ui/Reveal";

export function Sobre() {
  const { sobre, profissional } = siteConfig;
  return (
    <section id="sobre" className="relative overflow-hidden bg-cream py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-12 xl:px-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
            <Image src={sobre.imagem} alt={sobre.imagemAlt} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-[56%_center] transition-transform duration-700 hover:scale-[1.02]" />
          </div>
          <div className="absolute -bottom-7 -right-2 w-[58%] rounded-[1.5rem] border border-white/40 bg-ink px-6 py-6 text-cream shadow-2xl sm:-right-8 lg:w-[55%]">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold">Abordagem</p>
            <p className="mt-3 font-display text-xl leading-snug">{profissional.abordagem}</p>
          </div>
        </Reveal>

        <Reveal className="lg:pl-3">
          <p className="section-eyebrow">{sobre.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.6rem,5vw,5.4rem)] leading-[0.98] tracking-[-0.04em] text-ink">{sobre.titulo}</h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-ink/65">{sobre.texto}</p>
          <div className="mt-9 max-w-xl border-t border-ink/15 pt-7">
            <p className="font-display text-xl italic leading-relaxed text-terracotta sm:text-2xl">“{sobre.destaque}”</p>
          </div>
          <a href="#trajetoria" className="group mt-9 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-ink">
            Conheça minha trajetória
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 transition-all group-hover:bg-ink group-hover:text-cream"><ArrowUpRight className="h-4 w-4" /></span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
