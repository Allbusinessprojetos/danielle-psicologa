import { Quote, Star } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Depoimentos() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="titulo-depoimentos"
      className="bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle id="titulo-depoimentos">
            {siteConfig.secoes.depoimentos.titulo}
          </SectionTitle>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
        >
          {siteConfig.depoimentos.map((item) => (
            <Card
              key={item.autor}
              className="min-w-[85%] snap-center sm:min-w-0"
            >
              <Quote
                className="h-7 w-7 text-rose"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <p className="mt-4 font-display text-lg italic leading-relaxed text-charcoal">
                {item.texto}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className="flex gap-0.5"
                  role="img"
                  aria-label={`${item.nota} de 5 estrelas`}
                >
                  {Array.from({ length: item.nota }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-rose text-rose"
                      aria-hidden="true"
                    />
                  ))}
                </span>
                <span className="text-xs text-charcoal/60">
                  {item.autor} — {siteConfig.secoes.depoimentos.selo}
                </span>
              </div>
            </Card>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
