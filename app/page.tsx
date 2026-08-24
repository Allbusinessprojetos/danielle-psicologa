import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Credenciais } from "@/components/sections/Credenciais";
import { Especialidades } from "@/components/sections/Especialidades";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credenciais />
        <Especialidades />
      </main>
    </>
  );
}
