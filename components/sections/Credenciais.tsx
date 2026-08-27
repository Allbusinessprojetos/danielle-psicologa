import { siteConfig } from "@/lib/config";
import { Reveal } from "@/components/ui/Reveal";

export function Credenciais() {
  return (
    <section className="border-y border-ink/10 bg-cream py-7 lg:py-9" aria-label="Credenciais principais">
      <Reveal stagger className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-8 px-5 sm:px-8 lg:grid-cols-4 lg:px-12 xl:px-16">
        {siteConfig.credenciais.map((item, index) => (
          <div key={item.numero} className="relative px-2 lg:px-7 first:lg:pl-0">
            {index > 0 && <span className="absolute left-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-ink/10 lg:block" />}
            <p className="font-display text-3xl tracking-[-0.03em] text-ink lg:text-4xl">{item.numero}</p>
            <p className="mt-1 max-w-[180px] text-[11px] uppercase leading-5 tracking-[0.12em] text-ink/55">{item.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
