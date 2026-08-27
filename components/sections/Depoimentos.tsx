import { Quote, Star } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Reveal } from "@/components/ui/Reveal";

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-peach py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Avaliações</p>
          <h2 className="mt-5 font-display text-[clamp(2.7rem,5vw,5rem)] leading-[0.98] tracking-[-0.04em] text-ink">{siteConfig.secoes.depoimentos.titulo}</h2>
        </Reveal>
        <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-3">
          {siteConfig.depoimentos.map((item) => (
            <article key={item.autor} className="rounded-[1.75rem] bg-cream p-7 sm:p-9">
              <Quote className="h-6 w-6 text-terracotta" strokeWidth={1.4} />
              <p className="mt-8 font-display text-2xl italic leading-relaxed text-ink">“{item.texto}”</p>
              <div className="mt-8 flex gap-0.5">{Array.from({ length: item.nota }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-terracotta text-terracotta" />)}</div>
              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-ink/45">{item.autor} • {siteConfig.secoes.depoimentos.selo}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
