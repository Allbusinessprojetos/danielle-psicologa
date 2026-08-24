import { siteConfig } from "@/lib/config";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ParaQuem() {
  return (
    <section
      id="para-quem"
      aria-labelledby="titulo-para-quem"
      className="relative overflow-hidden bg-blush py-20 lg:py-24"
    >
      <FloralAccent className="-right-24 bottom-0 w-96 text-rose/20" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle id="titulo-para-quem">
            {siteConfig.secoes.paraQuem.titulo}
          </SectionTitle>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.publicos.map((item) => (
            <div key={item.titulo} className="flex flex-col items-start gap-4">
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
    </section>
  );
}
