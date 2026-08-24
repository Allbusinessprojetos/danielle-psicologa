import { siteConfig } from "@/lib/config";

export function JsonLd() {
  const { profissional, endereco, contato, seo } = siteConfig;

  const data = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: `${profissional.nome} — ${profissional.marca}`,
    description: seo.descricao,
    url: seo.url,
    email: contato.email,
    image: `${seo.url}${seo.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: endereco.logradouro,
      addressLocality: endereco.cidade,
      addressRegion: endereco.uf,
      postalCode: endereco.cep,
      addressCountry: "BR",
    },
    areaServed: `${endereco.cidade}/${endereco.uf}`,
    availableLanguage: "pt-BR",
    sameAs: [contato.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
