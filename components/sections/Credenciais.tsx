import { siteConfig } from "@/lib/config";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";

export function Credenciais() {
  return (
    <section id="credenciais" className="bg-blush-light py-16 lg:py-20">
      <Reveal
        stagger
        className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8"
      >
        {siteConfig.credenciais.map((item) => (
          <div key={item.titulo} className="flex flex-col items-start gap-4">
            <IconCircle name={item.icone} />
            <h3 className="font-display text-xl leading-snug text-charcoal">
              {item.titulo}
            </h3>
            <p className="text-sm leading-relaxed text-charcoal/75">
              {item.descricao}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
