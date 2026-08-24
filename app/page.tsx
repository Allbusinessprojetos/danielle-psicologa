import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Credenciais } from "@/components/sections/Credenciais";
import { Especialidades } from "@/components/sections/Especialidades";
import { ParaQuem } from "@/components/sections/ParaQuem";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credenciais />
        <Especialidades />
        <ParaQuem />
        <Depoimentos />
        <Contato />
      </main>
    </>
  );
}
