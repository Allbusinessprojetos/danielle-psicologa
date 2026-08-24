import { siteConfig } from "@/lib/config";
import { Card } from "@/components/ui/Card";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Especialidades() {
  return (
    <section
      id="especialidades"
      aria-labelledby="titulo-especialidades"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      <FloralAccent className="-left-20 top-10 w-72 text-rose/15" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle id="titulo-especialidades">
            {siteConfig.secoes.especialidades.titulo}
          </SectionTitle>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.especialidades.map((item) => (
            <Card key={item.titulo} className="text-center">
              <div className="flex justify-center">
                <IconCircle name={item.icone} />
              </div>
              <h3 className="mt-5 font-display text-xl text-rose-deep">
                {item.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                {item.descricao}
              </p>
            </Card>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
