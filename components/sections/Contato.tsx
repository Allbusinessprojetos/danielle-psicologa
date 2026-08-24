import { CalendarClock, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Contato() {
  const { endereco, contato, horarios, ctas } = siteConfig;
  const textos = siteConfig.secoes.contato;

  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="relative overflow-hidden bg-blush py-20 lg:py-24"
    >
      <FloralAccent className="-left-24 top-8 w-80 text-rose/20" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle id="titulo-contato">{textos.titulo}</SectionTitle>
          <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-charcoal/80">
            {textos.subtitulo}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={whatsappHref()} external>
              {ctas.agendar}
            </Button>
          </div>
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8">
            <MapPin
              className="h-6 w-6 text-rose"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display text-lg text-charcoal">
              {textos.tituloLocal}
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-charcoal/75">
              <p>{endereco.clinica}</p>
              <p>
                {endereco.logradouro} — {endereco.bairro}
              </p>
              <p>
                {endereco.cidade}/{endereco.uf}, CEP {endereco.cep}
              </p>
              <p className="pt-1 text-rose-deep">{endereco.modalidades}</p>
            </address>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <CalendarClock
              className="h-6 w-6 text-rose"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display text-lg text-charcoal">
              {textos.tituloHorarios}
            </h3>
            <dl className="mt-3 space-y-1.5 text-sm">
              {horarios.map((item) => (
                <div key={item.dia} className="flex justify-between gap-4">
                  <dt className="text-charcoal/75">{item.dia}</dt>
                  <dd
                    className={
                      item.aberto ? "text-charcoal" : "text-charcoal/45"
                    }
                  >
                    {item.situacao}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <Mail
              className="h-6 w-6 text-rose"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display text-lg text-charcoal">
              {textos.tituloCanais}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-charcoal/75">
              <li>
                <a
                  href={`mailto:${contato.email}`}
                  className="transition-colors hover:text-rose-deep"
                >
                  {contato.email}
                </a>
              </li>
              <li>
                <a
                  href={contato.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-rose-deep"
                >
                  {contato.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={contato.agendaOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-rose-deep"
                >
                  Agenda online
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
