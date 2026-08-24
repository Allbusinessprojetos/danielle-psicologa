import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main>
      {[1, 2, 3].map((n) => (
        <section key={n} className="flex h-screen items-center justify-center">
          <Reveal>
            <h2 className="font-display text-5xl text-rose">Bloco {n}</h2>
          </Reveal>
        </section>
      ))}
    </main>
  );
}
