import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Reveal } from "@/components/ui/Reveal";

export function Trajetoria() {
  return (
    <section id="trajetoria" className="overflow-hidden bg-sand py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <Reveal className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Trajetória profissional</p>
            <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.8rem,5.5vw,6rem)] leading-[0.94] tracking-[-0.045em] text-ink">Uma carreira construída em diferentes <span className="italic text-terracotta">contextos da Psicologia.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-ink/60 lg:ml-auto lg:text-base">Clínica, educação, assistência social, ensino superior e saúde pública ampliaram meu olhar sobre o desenvolvimento humano e as relações interpessoais.</p>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal stagger className="border-t border-ink/20">
            {siteConfig.trajetoria.map((item, index) => (
              <article key={item.titulo} className="grid gap-4 border-b border-ink/15 py-7 sm:grid-cols-[90px_1fr] sm:gap-7 lg:py-8">
                <div className="font-display text-xl italic text-terracotta">0{index + 1}</div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/45">{item.periodo}</p>
                  <h3 className="mt-2 font-display text-2xl tracking-[-0.02em] text-ink">{item.titulo}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-ink/60">{item.descricao}</p>
                </div>
              </article>
            ))}
          </Reveal>

          <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image src="/images/danielle-editorial.jpg" alt="Danielle Saquetto Baruffi em retrato profissional" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover object-top" />
              </div>
            </Reveal>
            <Reveal className="rounded-[1.75rem] bg-cream p-7 sm:p-9">
              <div className="flex items-center gap-3 text-terracotta"><GraduationCap className="h-5 w-5" /><p className="text-xs uppercase tracking-[0.18em]">Formação acadêmica</p></div>
              <div className="mt-7 space-y-6">
                {siteConfig.formacaoAcademica.map((item) => (
                  <div key={item.instituicao} className="border-t border-ink/10 pt-5 first:border-0 first:pt-0">
                    <p className="font-display text-xl text-ink">{item.titulo}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink/45">{item.instituicao}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
