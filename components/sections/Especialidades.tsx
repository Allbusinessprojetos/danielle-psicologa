import { siteConfig } from "@/lib/config";
import { Reveal } from "@/components/ui/Reveal";

export function Especialidades() {
  return (
    <section id="especialidades" className="bg-ink py-24 text-cream lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-eyebrow text-gold">Especialidades</p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5.4vw,5.8rem)] leading-[0.95] tracking-[-0.04em]">Questões que podem ser <span className="italic text-peach">trabalhadas</span> em terapia.</h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-cream/55 lg:ml-auto lg:text-base">Cada processo é único. Os temas abaixo não são rótulos, mas pontos de partida possíveis para compreender o que você vive e construir novas respostas.</p>
        </Reveal>

        <Reveal stagger className="mt-16 grid border-t border-white/15 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {siteConfig.especialidades.map((item) => (
            <article key={item.numero} className="group border-b border-white/15 p-7 transition-colors duration-300 hover:bg-white/[0.035] lg:min-h-[245px] lg:p-9 lg:[&:not(:nth-child(3n))]:border-r lg:border-white/15">
              <p className="font-display text-sm italic text-gold">{item.numero}</p>
              <h3 className="mt-12 font-display text-2xl tracking-[-0.02em] sm:text-3xl">{item.titulo}</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-cream/55">{item.descricao}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
