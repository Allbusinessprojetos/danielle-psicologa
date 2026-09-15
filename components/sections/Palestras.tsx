import Image from "next/image";
import { Mic2 } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { whatsappHrefComMensagem } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Palestras() {
  const { palestras } = siteConfig;

  return (
    <section id="palestras" className="overflow-hidden bg-blush-light py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <Reveal className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
          <div>
            <p className="section-eyebrow">{palestras.eyebrow}</p>
            <h2 className="mt-5 font-display text-[clamp(2.7rem,5vw,5.4rem)] leading-[0.96] tracking-[-0.04em] text-charcoal">{palestras.titulo}</h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-charcoal/62 sm:text-base sm:leading-8">{palestras.texto}</p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {palestras.publicos.map((publico) => (
                <span key={publico} className="rounded-full border border-rose/25 bg-white/70 px-4 py-1.5 text-xs font-medium text-rose-deep">{publico}</span>
              ))}
            </div>

            <ul className="mt-7 grid gap-3 border-t border-rose/15 pt-7 sm:grid-cols-2">
              {palestras.temas.map((tema) => (
                <li key={tema} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                  {tema}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href={whatsappHrefComMensagem(palestras.ctaMensagem)} external>
                {palestras.ctaLabel}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] sm:mt-10">
              <Image src={palestras.imagem1} alt={palestras.imagem1Alt} fill sizes="(min-width: 1024px) 27vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem]">
              <Image src={palestras.imagem2} alt={palestras.imagem2Alt} fill sizes="(min-width: 1024px) 27vw, 50vw" className="object-cover" />
            </div>
            <div className="col-span-2 -mt-6 flex justify-center sm:-mt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-charcoal shadow-lg backdrop-blur-md">
                <Mic2 className="h-3.5 w-3.5 text-rose" />
                Palestras e workshops
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
