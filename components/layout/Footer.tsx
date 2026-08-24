import { AtSign, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const { profissional, contato, endereco, navegacao, footer, ctas } =
    siteConfig;
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-rose/15 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-xl text-charcoal">
            {profissional.marca}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-rose-deep">
            {profissional.nome}
          </p>
          <p className="mt-4 text-sm text-charcoal/75">{footer.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/60">
            {footer.navegacaoLabel}
          </p>
          <ul className="mt-4 space-y-2">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-charcoal/80 transition-colors hover:text-rose-deep"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/60">
            {footer.contatoLabel}
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic text-charcoal/80">
            <p>{endereco.clinica}</p>
            <p>
              {endereco.logradouro}, {endereco.bairro}
            </p>
            <p>
              {endereco.cidade}/{endereco.uf} — CEP {endereco.cep}
            </p>
            <p>
              <a
                href={`mailto:${contato.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-rose-deep"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {contato.email}
              </a>
            </p>
          </address>
        </div>

        <div className="flex flex-col items-start gap-5">
          <Button href={whatsappHref()} external>
            {ctas.agendar}
          </Button>
          <a
            href={contato.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${contato.instagramHandle}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rose/40 text-rose transition-colors hover:bg-blush"
          >
            <AtSign className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-rose/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-charcoal/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {ano} {profissional.marca}. Todos os direitos reservados.
          </p>
          <p>{profissional.crp}</p>
        </div>
      </div>
    </footer>
  );
}
