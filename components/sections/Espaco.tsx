import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Reveal } from "@/components/ui/Reveal";

export function Espaco() {
  const { endereco } = siteConfig;

  return (
    <section id="espaco" className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <Reveal className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
          <div className="lg:pb-5">
            <p className="section-eyebrow">O espaço</p>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,5.4rem)] leading-[0.96] tracking-[-0.04em] text-charcoal">
              Um ambiente pensado para <span className="italic text-rose-deep">acolher com calma.</span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-charcoal/62 sm:text-base sm:leading-8">
              Atendimento presencial em um espaço reservado, confortável e acolhedor, preparado para que cada encontro aconteça com privacidade e tranquilidade.
            </p>
            <div className="mt-8 flex items-start gap-3 border-t border-rose/15 pt-6 text-sm text-charcoal/65">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-rose" />
              <p>{endereco.clinica} • {endereco.logradouro}, {endereco.bairro} — {endereco.cidade}/{endereco.uf}</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-blush">
              <Image
                src="/images/consultorio-espaco.png"
                alt="Consultório onde Danielle realiza atendimentos presenciais"
                fill
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/85 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-charcoal shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7">
              <Sparkles className="h-3.5 w-3.5 text-rose" />
              Atendimento presencial em Jales
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
