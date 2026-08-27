import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { hero, profissional, ctas } = siteConfig;

  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-blush-light text-ink">
      <Image
        src={hero.imagem}
        alt={hero.imagemAlt}
        fill
        priority
        quality={96}
        sizes="100vw"
        className="object-cover object-[82%_center] sm:object-[66%_center] lg:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-blush-light via-blush-light/55 to-transparent sm:from-blush-light/95 sm:via-blush-light/45 lg:bg-gradient-to-r lg:from-blush-light lg:from-0% lg:via-blush-light/92 lg:via-34% lg:to-transparent lg:to-70%" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/10" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] items-end px-5 pb-12 pt-28 sm:px-8 lg:items-center lg:px-12 lg:pb-0 xl:px-16">
        <div className="max-w-[690px] lg:w-[52%] lg:pt-14">
          

          <h1 className="hero-title mt-7 max-w-3xl font-display text-[clamp(3.15rem,6.8vw,7rem)] leading-[0.89] tracking-[-0.045em]">
            <span className="block text-charcoal">{hero.tituloDestaque}</span>
            <span className="mt-2 block font-normal italic text-rose-deep">{hero.tituloResto}</span>
          </h1>

          <p className="mt-8 max-w-xl border-l border-rose/45 pl-5 text-sm leading-7 text-charcoal/70 sm:mt-10 sm:pl-7 sm:text-base sm:leading-8">
            {hero.subtitulo}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={whatsappHref()} external>{ctas.agendar}</Button>
            <Button href="#sobre" variant="outline">{ctas.conhecer}<ArrowDownRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 hidden rounded-full border border-rose/15 bg-white/75 px-5 py-3 shadow-[0_12px_40px_rgba(176,61,99,.08)] backdrop-blur-md sm:block lg:bottom-8 lg:right-8">
        <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal/50">{profissional.nome}</p>
        <p className="mt-1 text-xs text-charcoal/75">{profissional.titulo} • {profissional.crp}</p>
      </div>
    </section>
  );
}
