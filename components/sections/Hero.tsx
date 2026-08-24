import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { FloralAccent } from "@/components/ui/FloralAccent";

export function Hero() {
  const { hero, profissional, ctas } = siteConfig;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-blush lg:min-h-[92vh]"
    >
      {/* Foto: bloco próprio no mobile, fundo full-bleed a partir de lg */}
      <div className="relative h-[46vh] min-h-[300px] w-full lg:absolute lg:inset-0 lg:h-full">
        <Image
          src={hero.imagem}
          alt={hero.imagemAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-right"
        />
        {/* Wash: tinge a parede cinza de rosa e some antes de alcançar a Danielle */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-r from-blush via-blush/85 via-40% to-transparent lg:block"
        />
      </div>

      <FloralAccent className="-left-16 bottom-0 w-72 text-rose/20 lg:left-auto lg:right-10 lg:top-24 lg:w-96" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 lg:flex lg:min-h-[92vh] lg:items-center lg:px-8 lg:pb-0 lg:pt-0">
        <div className="max-w-xl lg:pt-24">
          <h1 className="font-display text-4xl leading-[1.12] text-charcoal sm:text-5xl lg:text-6xl">
            <span className="text-rose">{hero.tituloDestaque}</span>
            <br />
            {hero.tituloResto}
          </h1>

          <span
            aria-hidden="true"
            className="mt-7 flex h-px w-40 bg-rose/40"
          />

          <p className="mt-7 max-w-md text-base leading-relaxed text-charcoal/85">
            {hero.subtitulo}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappHref()} external>
              {ctas.agendar}
            </Button>
            <Button href="#para-quem" variant="outline">
              {ctas.atendimento}
            </Button>
          </div>
        </div>
      </div>

      {/* Selo com nome e CRP */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 lg:absolute lg:inset-x-0 lg:bottom-12 lg:px-8">
        <div className="ml-auto w-fit rounded-2xl bg-white/92 px-7 py-4 text-center shadow-[0_4px_24px_rgba(46,42,43,0.10)] backdrop-blur">
          <p className="font-display text-lg text-rose-deep">
            {profissional.nome}
          </p>
          <p className="mt-1 text-xs text-charcoal/75">
            {profissional.titulo} &nbsp;|&nbsp; {profissional.crp}
          </p>
        </div>
      </div>
    </section>
  );
}
