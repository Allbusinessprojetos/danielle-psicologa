import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contato } from "@/components/sections/Contato";
import { Credenciais } from "@/components/sections/Credenciais";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Especialidades } from "@/components/sections/Especialidades";
import { Hero } from "@/components/sections/Hero";
import { ParaQuem } from "@/components/sections/ParaQuem";
import { siteConfig } from "@/lib/config";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credenciais />
        <Especialidades />
        <ParaQuem />
        {/* Depoimentos: pendente de confirmação ética com o CRP; controlado por siteConfig.secoes.depoimentos.ativo. */}
        {siteConfig.secoes.depoimentos.ativo && <Depoimentos />}
        <Contato />
      </main>
      <Footer />
    </>
  );
}
