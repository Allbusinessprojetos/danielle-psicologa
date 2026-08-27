import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/lib/config";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url), title: siteConfig.seo.titulo, description: siteConfig.seo.descricao,
  alternates: { canonical: "/" }, openGraph: { type: "website", locale: "pt_BR", url: siteConfig.seo.url, siteName: siteConfig.profissional.marca, title: siteConfig.seo.titulo, description: siteConfig.seo.descricao, images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: siteConfig.hero.imagemAlt }] },
  twitter: { card: "summary_large_image", title: siteConfig.seo.titulo, description: siteConfig.seo.descricao, images: [siteConfig.seo.ogImage] }, robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}><body><JsonLd /><SmoothScrollProvider>{children}</SmoothScrollProvider></body></html>;
}
