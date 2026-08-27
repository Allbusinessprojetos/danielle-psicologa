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
        className="object-cover object-[50%_center] sm:object-[50%_center] lg:object-center"
      />

      {/* Mobile: preserve Danielle's portrait visibility. Desktop keeps the premium left-to-right fade. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(253,246,247,.16)_0%,rgba(253,246,247,.08)_30%,rgba(253,246,247,.42)_64%,rgba(253,246,247,.94)_100%)] sm:bg-gradient-to-t sm:from-blush-light/95 sm:via-blush-light/40 sm:to-transparent lg:bg-gradient-to-r lg:from-blush-light lg:from-0% lg:via-blush-light/92 lg:via-34% lg:to-transparent lg:to-70%" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent sm:from-white/20" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] items-end px-5 pb-8 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:items-center lg:px-12 lg:pb-0 xl:px-16">
        <div className="max-w-[690px] lg:w-[52%] lg:pt-14">
          <h1 className="hero-title mt-5 max-w-3xl font-display text-[clamp(2.65rem,12vw,4.25rem)] leading-[0.92] tracking-[-0.045em] sm:mt-7 sm:text-[clamp(3.15rem,6.8vw,7rem)] sm:leading-[0.89]">
            <span className="block text-charcoal">{hero.tituloDestaque}</span>
            <span className="mt-1 block font-normal italic text-rose-deep sm:mt-2">{hero.tituloResto}</span>
          </h1>

          <p className="mt-6 max-w-xl border-l border-rose/45 pl-4 text-[0.95rem] leading-6 text-charcoal/75 sm:mt-10 sm:pl-7 sm:text-base sm:leading-8">
            {hero.subtitulo}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
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
