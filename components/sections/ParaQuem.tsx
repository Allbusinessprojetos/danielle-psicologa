import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ParaQuem() {
  const { titulo, imagem, imagemAlt } = siteConfig.secoes.paraQuem;

  return (
    <section
      id="para-quem"
      aria-labelledby="titulo-para-quem"
      className="relative overflow-hidden bg-blush py-20 lg:py-24"
    >
      <FloralAccent className="-right-24 bottom-0 w-96 text-rose/20" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_8px_30px_rgba(46,42,43,0.12)]">
              <Image
                src={imagem}
                alt={imagemAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionTitle id="titulo-para-quem" align="left">
                {titulo}
              </SectionTitle>
            </Reveal>

            <Reveal
              stagger
              className="mt-10 grid gap-8 sm:grid-cols-2"
            >
              {siteConfig.publicos.map((item) => (
                <div
                  key={item.titulo}
                  className="flex flex-col items-start gap-4"
                >
                  <IconCircle name={item.icone} />
                  <h3 className="font-display text-xl text-charcoal">
                    {item.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal/75">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
