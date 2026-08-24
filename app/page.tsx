import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contato } from "@/components/sections/Contato";
import { Credenciais } from "@/components/sections/Credenciais";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Especialidades } from "@/components/sections/Especialidades";
import { Hero } from "@/components/sections/Hero";
import { ParaQuem } from "@/components/sections/ParaQuem";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credenciais />
        <Especialidades />
        <ParaQuem />
        {/* Seção de depoimentos: pendente de confirmação ética com o CRP.
            Para remover do ar, basta comentar a linha abaixo. */}
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
