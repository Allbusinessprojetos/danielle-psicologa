import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Reveal } from "@/components/ui/Reveal";

export function ParaQuem() {
  return (
    <section id="atendimento" className="bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-20">
          <Reveal className="lg:sticky lg:top-28">
            <p className="section-eyebrow">Atendimento</p>
            <h2 className="mt-5 font-display text-[clamp(2.7rem,5vw,5.4rem)] leading-[0.96] tracking-[-0.04em] text-ink">Um espaço para cada <span className="italic text-terracotta">fase e vínculo.</span></h2>
            <div className="relative mt-9 aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image src="/images/danielle-atendimento.jpg" alt="Danielle durante um atendimento psicológico" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            </div>
          </Reveal>

          <Reveal stagger className="border-t border-ink/15">
            {siteConfig.publicos.map((item, index) => (
              <article key={item.titulo} className="group grid grid-cols-[52px_1fr_auto] gap-4 border-b border-ink/15 py-8 sm:grid-cols-[72px_1fr_auto] sm:py-10">
                <span className="font-display text-lg italic text-terracotta">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-3xl tracking-[-0.03em] text-ink sm:text-4xl">{item.titulo}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-ink/58">{item.descricao}</p>
                </div>
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-all group-hover:bg-ink group-hover:text-cream"><ArrowUpRight className="h-4 w-4" /></span>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
