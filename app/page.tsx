import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contato } from "@/components/sections/Contato";
import { Credenciais } from "@/components/sections/Credenciais";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Especialidades } from "@/components/sections/Especialidades";
import { Espaco } from "@/components/sections/Espaco";
import { Hero } from "@/components/sections/Hero";
import { ParaQuem } from "@/components/sections/ParaQuem";
import { Sobre } from "@/components/sections/Sobre";
import { Trajetoria } from "@/components/sections/Trajetoria";
import { siteConfig } from "@/lib/config";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credenciais />
        <Sobre />
        <Especialidades />
        <Trajetoria />
        <ParaQuem />
        <Espaco />
        {siteConfig.secoes.depoimentos.ativo && <Depoimentos />}
        <Contato />
      </main>
      <Footer />
    </>
  );
}
