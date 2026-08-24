import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { IconCircle } from "@/components/ui/IconCircle";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-blush-light p-12">
      <FloralAccent className="-right-10 top-0 w-64 text-rose/25" />
      <SectionTitle>Especialidades</SectionTitle>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Card>
          <IconCircle name="Wind" />
          <h3 className="mt-4 font-display text-xl text-rose-deep">Ansiedade</h3>
          <p className="mt-2 text-sm text-charcoal/80">Texto de exemplo.</p>
        </Card>
        <Card>
          <IconCircle name="Sparkles" />
          <h3 className="mt-4 font-display text-xl text-rose-deep">Autoestima</h3>
          <p className="mt-2 text-sm text-charcoal/80">Texto de exemplo.</p>
        </Card>
      </div>
      <Button href="#" className="mt-10">Agendar consulta</Button>
    </main>
  );
}
