import Image from "next/image";
import { ArrowUpRight, CalendarDays, MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Contato() {
  const { contato, endereco, horarios, ctas } = siteConfig;
  return (
    <section id="contato" className="bg-charcoal py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#252122] shadow-[0_30px_80px_rgba(46,42,43,.15)] lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal className="p-7 sm:p-10 lg:p-14 xl:p-16">
            <p className="section-eyebrow text-[#e3aec0]">Próximo passo</p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(3rem,5.8vw,6.2rem)] leading-[0.9] tracking-[-0.045em]">Seu cuidado pode começar <span className="italic text-[#e3aec0]">por aqui.</span></h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/60 sm:text-base">Entre em contato para tirar dúvidas, conhecer a disponibilidade e encontrar o melhor formato de atendimento para você.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappHref()} external>{ctas.agendar}</Button>
              <Button href={contato.agendaOnline} external variant="ghost">{ctas.agenda}<ArrowUpRight className="h-4 w-4" /></Button>
            </div>

            <div className="mt-12 grid gap-7 border-t border-white/12 pt-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e3aec0]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/40">Consultório</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">{endereco.clinica}<br />{endereco.logradouro}, {endereco.bairro}<br />{endereco.cidade}/{endereco.uf}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#e3aec0]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/40">Contato</p>
                  <a href={`mailto:${contato.email}`} className="mt-2 block text-sm text-white/75 transition-colors hover:text-[#f2c6d5]">{contato.email}</a>
                  <a href={contato.instagram} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-white" aria-label={`Instagram ${contato.instagramHandle}`}>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,#833ab4_0%,#fd1d1d_52%,#fcb045_100%)] shadow-[0_6px_18px_rgba(253,29,29,.18)]">
                      <svg
  viewBox="0 0 24 24"
  className="h-[18px] w-[18px] text-white"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
>
  <rect x="3" y="3" width="18" height="18" rx="5" />
  <circle cx="12" cy="12" r="4" />
  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
</svg>
                    </span>
                    {contato.instagramHandle}
                  </a>
                  <a href={contato.facebook} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-white" aria-label={contato.facebookLabel}>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#1877F2] shadow-[0_6px_18px_rgba(24,119,242,.25)]">
                      <svg
  viewBox="0 0 24 24"
  className="h-[18px] w-[18px] text-white"
  fill="currentColor"
>
  <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.58v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
</svg>
                    </span>
                    {contato.facebookLabel}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="relative min-h-[520px] lg:min-h-full">
            <Image src="/images/danielle-retrato.jpg" alt="Retrato profissional de Danielle Saquetto Baruffi" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover object-top" />
            <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] border border-white/20 bg-charcoal/75 p-5 backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-6">
              <div className="flex items-start gap-4"><CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#e3aec0]" /><div><p className="text-xs uppercase tracking-[0.16em] text-white/50">Horários</p><div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-2">{horarios.map((item) => <div key={item.dia} className="text-xs text-white/75"><span className="block text-white">{item.dia.replace('-feira','')}</span>{item.situacao}</div>)}</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
