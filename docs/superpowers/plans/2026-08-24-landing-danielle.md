# Landing Page Danielle Saquetto Baruffi — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir uma landing page única, estática e de alta conversão para a psicóloga Danielle Saquetto Baruffi, levando o visitante ao WhatsApp para agendar consulta.

**Architecture:** Next.js App Router com renderização estática (SSG), sem backend. Todo dado do cliente vive em `lib/config.ts` (fonte única de verdade) e é consumido por componentes de apresentação puros. Movimento em duas camadas: Lenis para rolagem suave global e GSAP/ScrollTrigger encapsulado num único componente `<Reveal>`, ambos desligados quando o usuário pede menos movimento.

**Tech Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · lucide-react · Lenis · GSAP + ScrollTrigger · Framer Motion · Vitest · next/font · next/image · Deploy Vercel

**Spec:** `docs/superpowers/specs/2026-08-24-landing-danielle-design.md` — leia a spec junto com este plano. Todo conteúdo textual, paleta e regra de acessibilidade vem de lá.

## Global Constraints

- **Idioma:** todo conteúdo visível ao usuário em português do Brasil. Código, nomes de variáveis e mensagens de commit em inglês; comentários podem ser em português.
- **Fonte única de verdade:** nenhum dado do cliente (nome, CRP, telefone, endereço, e-mail, textos de seção, depoimentos) pode ser escrito direto em componente. Tudo importa de `lib/config.ts`. Isto é critério de reprovação em review.
- **Contraste (verificado, não estimado):** `#C9527A` tem 4.22:1 sobre branco e **reprova AA em texto normal** — usar somente em títulos grandes, ícones e decoração. Para botões e qualquer texto pequeno em rosa, usar `#B03D63` (5.69:1). Texto de corpo sempre `#2E2A2B` (14.17:1).
- **Nunca usar `#C9527A` ou `#D2542F` em texto de corpo.**
- **`prefers-reduced-motion` é não-negociável:** com ele ativo, Lenis não monta e `<Reveal>` renderiza o conteúdo já visível, sem animação.
- **Ícones:** lucide-react com `strokeWidth={1.5}`, sempre outline, nunca preenchidos.
- **CTAs:** sempre pill (`rounded-full`), fundo `#B03D63`, texto branco, apontando para o WhatsApp.
- **Alvos de toque:** mínimo 44×44px.
- **Imagens:** exclusivamente via `next/image`.
- **Sem `aggregateRating`** no JSON-LD.
- **Número de WhatsApp está PENDENTE.** `lib/config.ts` carrega string vazia; a função de link cai no fallback do maapp. Não invente um número.

---

### Task 1: Scaffold do projeto, dependências e config central

**Files:**
- Create: projeto Next.js na raiz `danielle-psicologa/`
- Create: `lib/config.ts`
- Create: `.gitignore` (gerado pelo create-next-app, revisar)
- Create: `public/images/danielle-hero.png` (cópia de `referencia lp/banner.png`)

**Interfaces:**
- Consumes: nada (primeira task)
- Produces: `siteConfig` exportado de `lib/config.ts`, com o shape exato definido no Step 4. Todas as tasks seguintes leem daqui.

- [ ] **Step 1: Inicializar o repositório git**

O projeto ainda não é um repositório git. Rodar na raiz:

```bash
git init
git branch -M main
```

- [ ] **Step 2: Criar o projeto Next.js na pasta atual**

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir=false --import-alias "@/*" --eslint --turbopack --no-git
```

Se o CLI reclamar que a pasta não está vazia, responda que sim para prosseguir — `CLAUDE.md`, `docs/` e `referencia lp/` devem ser preservados.

- [ ] **Step 3: Instalar as dependências do projeto**

```bash
npm install lenis gsap framer-motion lucide-react clsx
npm install -D vitest vite-tsconfig-paths
```

- [ ] **Step 4: Criar o config central**

Crie `lib/config.ts` com exatamente este conteúdo:

```typescript
export const siteConfig = {
  profissional: {
    nome: "Danielle Saquetto Baruffi",
    titulo: "Psicóloga",
    crp: "CRP 06/83220",
    marca: "Dani Psicologia Clínica",
    abordagem: "Terapia Cognitivo-Comportamental (TCC)",
    anosExperiencia: 20,
    formacao: [
      "Graduada pela Unesp-Assis",
      "Mestre em Psicologia Educacional (PUC-SP)",
      "Especialista em Terapia Familiar",
    ],
  },

  hero: {
    tituloDestaque: "Psicoterapia com",
    tituloResto: "acolhimento, experiência e base científica.",
    subtitulo:
      "Um espaço seguro, ético e humanizado para quem deseja compreender suas emoções, fortalecer vínculos e construir mudanças reais.",
    imagem: "/images/danielle-hero.png",
    imagemAlt:
      "Danielle Saquetto Baruffi, psicóloga, sentada em uma poltrona no consultório segurando uma prancheta",
  },

  contato: {
    // PENDENTE: preencher com o número em formato internacional, só dígitos.
    // Exemplo: "5517999999999". Enquanto vazio, os CTAs caem no maapp.
    whatsapp: "",
    mensagemWhatsapp:
      "Olá, Danielle! Vim pelo site e gostaria de agendar uma consulta.",
    email: "daniellerevitalle@gmail.com",
    instagram: "https://instagram.com/danipsicologiaclinica",
    instagramHandle: "@danipsicologiaclinica",
    agendaOnline: "https://maapp.com.br/PsicoDani",
  },

  endereco: {
    clinica: "Clínica Revitalle",
    logradouro: "Rua Um, 2466",
    bairro: "Centro",
    cidade: "Jales",
    uf: "SP",
    cep: "15700-002",
    modalidades: "Atendimento presencial e online",
  },

  horarios: [
    { dia: "Segunda-feira", situacao: "Somente com hora marcada", aberto: true },
    { dia: "Terça-feira", situacao: "Somente com hora marcada", aberto: true },
    { dia: "Quarta-feira", situacao: "Somente com hora marcada", aberto: true },
    { dia: "Quinta-feira", situacao: "Fechada", aberto: false },
    { dia: "Sexta-feira", situacao: "Fechada", aberto: false },
    { dia: "Sábado", situacao: "Somente com hora marcada", aberto: true },
    { dia: "Domingo", situacao: "Fechada", aberto: false },
  ],

  credenciais: [
    {
      icone: "Heart",
      titulo: "+20 anos de experiência",
      descricao: "Acolhendo histórias e promovendo mudanças reais.",
    },
    {
      icone: "Brain",
      titulo: "TCC",
      descricao:
        "Abordagem baseada em evidências para transformar pensamentos, emoções e comportamentos.",
    },
    {
      icone: "Users",
      titulo: "Terapia Familiar",
      descricao:
        "Atuação especializada para fortalecer vínculos e promover diálogo e compreensão.",
    },
    {
      icone: "GraduationCap",
      titulo: "Mestre em Psicologia Educacional",
      descricao:
        "Formação sólida e contínua para oferecer o melhor atendimento.",
    },
  ],

  especialidades: [
    {
      icone: "Wind",
      titulo: "Ansiedade",
      descricao:
        "Manejo dos sintomas e desenvolvimento de estratégias para mais tranquilidade.",
    },
    {
      icone: "HeartHandshake",
      titulo: "Relacionamentos",
      descricao: "Conflitos, comunicação e construção de vínculos saudáveis.",
    },
    {
      icone: "Sparkles",
      titulo: "Autoestima",
      descricao: "Fortalecimento da autoconfiança e do amor próprio.",
    },
    {
      icone: "Leaf",
      titulo: "Desenvolvimento emocional",
      descricao:
        "Autoconhecimento e gestão das emoções para uma vida mais leve.",
    },
    {
      icone: "Sun",
      titulo: "Qualidade de vida",
      descricao: "Equilíbrio, propósito e bem-estar no dia a dia.",
    },
    {
      icone: "Users",
      titulo: "Casais e famílias",
      descricao:
        "Apoio para superar desafios e construir relações mais saudáveis.",
    },
  ],

  publicos: [
    {
      icone: "Sprout",
      titulo: "Adolescentes",
      descricao: "Apoio para lidar com emoções, conflitos e desafios dessa fase.",
    },
    {
      icone: "User",
      titulo: "Adultos",
      descricao: "Mais clareza, equilíbrio emocional e qualidade de vida.",
    },
    {
      icone: "Heart",
      titulo: "Casais",
      descricao:
        "Fortalecimento da relação e resolução de conflitos com respeito e diálogo.",
    },
    {
      icone: "Users",
      titulo: "Famílias",
      descricao: "Melhores conexões, compreensão e convivência.",
    },
  ],

  depoimentos: [
    {
      autor: "Josiane Fernandes",
      texto: "Foi ótimo! É uma excelente profissional!",
      nota: 5,
    },
    {
      autor: "Josy Marques",
      texto: "Profissional maravilhosa!",
      nota: 5,
    },
    {
      autor: "Luany Farias",
      texto: "Excelente!!!",
      nota: 5,
    },
  ],

  ctas: {
    agendar: "Agendar consulta",
    atendimento: "Atendimento presencial e online",
  },

  secoes: {
    especialidades: { titulo: "Especialidades" },
    paraQuem: { titulo: "Para quem é a psicoterapia?" },
    depoimentos: {
      titulo: "O que dizem sobre o meu trabalho",
      selo: "avaliação do Google",
    },
    contato: {
      titulo: "Vamos conversar?",
      subtitulo:
        "Agende seu atendimento e dê o primeiro passo em direção ao seu bem-estar emocional.",
      tituloLocal: "Onde atendo",
      tituloHorarios: "Horários",
      tituloCanais: "Outros canais",
    },
  },

  footer: {
    tagline: "Psicoterapia com acolhimento, experiência e base científica.",
    navegacaoLabel: "Navegação",
    contatoLabel: "Contato",
  },

  navegacao: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#credenciais" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Atendimento", href: "#para-quem" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],

  seo: {
    url: "https://danipsicologiaclinica.com.br",
    titulo:
      "Danielle Saquetto Baruffi — Psicóloga em Jales/SP | CRP 06/83220",
    descricao:
      "Psicoterapia com acolhimento, experiência e base científica. Atendimento em TCC para adolescentes, adultos, casais e famílias em Jales/SP, presencial e online.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
```

**Nota sobre `seo.url`:** se o domínio final ainda não estiver definido, mantenha este valor e troque numa linha quando o cliente confirmar.

- [ ] **Step 5: Copiar a foto do hero para public**

```bash
mkdir -p public/images
cp "referencia lp/banner.png" public/images/danielle-hero.png
```

- [ ] **Step 6: Garantir que a pasta de referência não vá para o Git**

Adicione ao final do `.gitignore`:

```
# Material de referência do cliente (pesado, não versionar)
referencia lp/
```

- [ ] **Step 7: Verificar que o projeto sobe**

Run: `npm run dev`
Expected: servidor inicia sem erro em `http://localhost:3000`. Encerre com Ctrl+C.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js project with central site config"
```

---

### Task 2: Link do WhatsApp (TDD)

Esta é a única lógica real do projeto. É a única task com teste unitário, e é TDD de verdade: o teste é escrito e visto falhando antes da implementação.

**Files:**
- Create: `lib/whatsapp.ts`
- Test: `lib/whatsapp.test.ts`
- Create: `vitest.config.ts`
- Modify: `package.json` (script de teste)

**Interfaces:**
- Consumes: `siteConfig.contato` de `lib/config.ts` (Task 1)
- Produces: `buildWhatsAppLink(phone: string, message: string, fallbackUrl: string): string` — usado por Header, Hero, Contato e Footer.

- [ ] **Step 1: Configurar o Vitest**

Crie `vitest.config.ts`:

```typescript
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "node",
    include: ["**/*.test.ts"],
  },
});
```

Adicione em `package.json`, dentro de `"scripts"`:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 2: Escrever os testes que falham**

Crie `lib/whatsapp.test.ts`:

```typescript
import { describe, expect, it } from "vitest";
import { buildWhatsAppLink } from "./whatsapp";

const FALLBACK = "https://maapp.com.br/PsicoDani";

describe("buildWhatsAppLink", () => {
  it("monta o link wa.me com a mensagem codificada", () => {
    const link = buildWhatsAppLink("5517999999999", "Olá", FALLBACK);
    expect(link).toBe("https://wa.me/5517999999999?text=Ol%C3%A1");
  });

  it("remove formatação do número antes de montar o link", () => {
    const link = buildWhatsAppLink("+55 (17) 99999-9999", "Olá", FALLBACK);
    expect(link).toBe("https://wa.me/5517999999999?text=Ol%C3%A1");
  });

  it("codifica acentos, espaços e pontuação da mensagem", () => {
    const link = buildWhatsAppLink(
      "5517999999999",
      "Olá, Danielle! Quero agendar?",
      FALLBACK,
    );
    expect(link).toBe(
      "https://wa.me/5517999999999?text=Ol%C3%A1%2C%20Danielle!%20Quero%20agendar%3F",
    );
  });

  it("retorna o fallback quando o número está vazio", () => {
    expect(buildWhatsAppLink("", "Olá", FALLBACK)).toBe(FALLBACK);
  });

  it("retorna o fallback quando o número não tem nenhum dígito", () => {
    expect(buildWhatsAppLink("(  ) -", "Olá", FALLBACK)).toBe(FALLBACK);
  });
});
```

- [ ] **Step 3: Rodar os testes e confirmar que falham**

Run: `npm test`
Expected: FAIL — erro de import, "Failed to resolve import './whatsapp'" ou equivalente. Confirme que a falha é por o módulo não existir, não por erro de digitação no teste.

- [ ] **Step 4: Implementar o mínimo para passar**

Crie `lib/whatsapp.ts`:

```typescript
/**
 * Monta o link de conversa do WhatsApp com mensagem pré-preenchida.
 * Se o número ainda não foi cadastrado, devolve a URL de fallback para
 * o site nunca ficar com um botão quebrado.
 */
export function buildWhatsAppLink(
  phone: string,
  message: string,
  fallbackUrl: string,
): string {
  const digits = (phone ?? "").replace(/\D/g, "");
  if (!digits) return fallbackUrl;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
```

- [ ] **Step 5: Rodar os testes e confirmar que passam**

Run: `npm test`
Expected: PASS — 5 testes verdes, saída sem warning.

- [ ] **Step 6: Criar o helper que a UI vai consumir**

Adicione ao final de `lib/whatsapp.ts`:

```typescript
import { siteConfig } from "./config";

/** Link pronto para uso nos CTAs, já ligado ao config central. */
export function whatsappHref(): string {
  return buildWhatsAppLink(
    siteConfig.contato.whatsapp,
    siteConfig.contato.mensagemWhatsapp,
    siteConfig.contato.agendaOnline,
  );
}
```

- [ ] **Step 7: Rodar os testes de novo**

Run: `npm test`
Expected: PASS — os 5 testes continuam verdes após o acréscimo.

- [ ] **Step 8: Commit**

```bash
git add lib/whatsapp.ts lib/whatsapp.test.ts vitest.config.ts package.json package-lock.json
git commit -m "feat: add WhatsApp link builder with maapp fallback"
```

---

### Task 3: Design tokens e tipografia

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `siteConfig.seo` (Task 1)
- Produces: classes utilitárias `bg-rose`, `text-rose-deep`, `bg-blush`, `text-charcoal`, `font-display`, `font-body` disponíveis para todas as tasks seguintes.

- [ ] **Step 1: Definir os tokens no globals.css**

Substitua todo o conteúdo de `app/globals.css` por:

```css
@import "tailwindcss";

@theme {
  --color-rose: #c9527a;
  --color-rose-deep: #b03d63;
  --color-charcoal: #2e2a2b;
  --color-blush: #f7e6ea;
  --color-blush-light: #fdf6f7;
  --color-coral: #d2542f;

  --font-display: var(--font-playfair), Georgia, serif;
  --font-body: var(--font-inter), system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #ffffff;
  color: var(--color-charcoal);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}

/* Foco visível em toda a navegação por teclado — requisito de acessibilidade */
:focus-visible {
  outline: 2px solid var(--color-rose-deep);
  outline-offset: 3px;
  border-radius: 4px;
}

/* Quem pede menos movimento não recebe nem o smooth scroll nativo */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Carregar as fontes e a metadata base**

Substitua `app/layout.tsx` por:

```tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.titulo,
  description: siteConfig.seo.descricao,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Verificar visualmente que os tokens funcionam**

Substitua temporariamente o conteúdo de `app/page.tsx` por:

```tsx
export default function Home() {
  return (
    <main className="bg-blush p-12">
      <h1 className="font-display text-5xl text-rose">Playfair em rosa</h1>
      <p className="font-body text-charcoal">Inter em chumbo sobre blush.</p>
      <button className="mt-6 rounded-full bg-rose-deep px-8 py-3 text-white">
        Agendar consulta
      </button>
    </main>
  );
}
```

Run: `npm run dev` e abra `http://localhost:3000`
Expected: título serifado rosa, parágrafo sans chumbo, fundo rosa claro, botão pill rosa escuro. Se as cores não aplicarem, o Tailwind v4 não leu o bloco `@theme` — confira se o `@import "tailwindcss"` é a primeira linha do CSS.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx app/page.tsx
git commit -m "feat: add design tokens and typography"
```

---

### Task 4: Componentes de UI primitivos

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/IconCircle.tsx`
- Create: `components/ui/Card.tsx`
- Create: `components/ui/SectionTitle.tsx`
- Create: `components/ui/FloralAccent.tsx`

**Interfaces:**
- Consumes: tokens de cor da Task 3
- Produces:
  - `<Button href variant="primary"|"outline" children />`
  - `<IconCircle name={LucideIconName} />` — `name` é a string do campo `icone` no config
  - `<Card children className? />`
  - `<SectionTitle children id? />`
  - `<FloralAccent className position? />`

- [ ] **Step 1: Criar o Button**

Crie `components/ui/Button.tsx`:

```tsx
import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={clsx(
        // min-h-[44px] garante o alvo de toque mínimo
        "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-colors duration-200",
        variant === "primary" &&
          "bg-rose-deep text-white hover:bg-[#9a3456]",
        variant === "outline" &&
          "border border-rose-deep text-rose-deep hover:bg-blush",
        className,
      )}
    >
      {children}
    </a>
  );
}
```

- [ ] **Step 2: Criar o IconCircle**

Crie `components/ui/IconCircle.tsx`. Ele traduz a string do config num ícone lucide, mantendo o config livre de JSX:

```tsx
import {
  Brain,
  GraduationCap,
  Heart,
  HeartHandshake,
  Leaf,
  Sparkles,
  Sprout,
  Sun,
  User,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Brain,
  GraduationCap,
  Heart,
  HeartHandshake,
  Leaf,
  Sparkles,
  Sprout,
  Sun,
  User,
  Users,
  Wind,
};

export function IconCircle({ name }: { name: string }) {
  const Icon = ICONS[name] ?? Heart;
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-rose/40"
    >
      <Icon className="h-6 w-6 text-rose" strokeWidth={1.5} />
    </span>
  );
}
```

O `aria-hidden` é proposital: o ícone é decorativo, o significado está no título ao lado.

- [ ] **Step 3: Criar o Card**

Crie `components/ui/Card.tsx`:

```tsx
import clsx from "clsx";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-rose/15 bg-white p-8 shadow-[0_2px_20px_rgba(46,42,43,0.05)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(46,42,43,0.09)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Criar o SectionTitle**

Crie `components/ui/SectionTitle.tsx`:

```tsx
import type { ReactNode } from "react";

export function SectionTitle({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2
        id={id}
        className="font-display text-3xl text-charcoal sm:text-4xl"
      >
        {children}
      </h2>
      {/* ornamento decorativo abaixo do título */}
      <span
        aria-hidden="true"
        className="mt-4 flex items-center gap-2"
      >
        <span className="h-px w-10 bg-rose/40" />
        <span className="h-1.5 w-1.5 rotate-45 bg-rose/60" />
        <span className="h-px w-10 bg-rose/40" />
      </span>
    </div>
  );
}
```

- [ ] **Step 5: Criar o FloralAccent**

Crie `components/ui/FloralAccent.tsx`. É um SVG decorativo de pétalas, em opacidade baixa:

```tsx
import clsx from "clsx";

export function FloralAccent({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={clsx("pointer-events-none absolute", className)}
      fill="none"
    >
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.5">
        <ellipse cx="100" cy="60" rx="18" ry="42" />
        <ellipse cx="100" cy="60" rx="18" ry="42" transform="rotate(60 100 100)" />
        <ellipse cx="100" cy="60" rx="18" ry="42" transform="rotate(120 100 100)" />
        <ellipse cx="100" cy="140" rx="18" ry="42" />
        <ellipse cx="100" cy="60" rx="18" ry="42" transform="rotate(240 100 100)" />
        <ellipse cx="100" cy="60" rx="18" ry="42" transform="rotate(300 100 100)" />
        <circle cx="100" cy="100" r="8" />
      </g>
    </svg>
  );
}
```

Uso previsto: `<FloralAccent className="-right-16 top-10 w-64 text-rose/25" />` dentro de um container `relative overflow-hidden`.

- [ ] **Step 6: Verificar visualmente**

Substitua temporariamente `app/page.tsx` por uma página que renderiza os cinco componentes juntos:

```tsx
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
```

Run: `npm run dev`
Expected: dois cards arredondados com ícones outline em círculo, título serifado com ornamento centralizado, botão pill, floral discreto no canto. Navegue com Tab e confirme que o botão recebe contorno rosa visível.

- [ ] **Step 7: Commit**

```bash
git add components/ui app/page.tsx
git commit -m "feat: add UI primitives"
```

---

### Task 5: Infraestrutura de movimento (Lenis, GSAP, reduced motion)

**Files:**
- Create: `hooks/useReducedMotion.ts`
- Create: `components/providers/SmoothScrollProvider.tsx`
- Create: `components/ui/Reveal.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: nada das tasks anteriores
- Produces:
  - `useReducedMotion(): boolean`
  - `<SmoothScrollProvider>{children}</SmoothScrollProvider>`
  - `<Reveal stagger? delay? className? as?>{children}</Reveal>` — usado por todas as seções

- [ ] **Step 1: Criar o hook de reduced motion**

Crie `hooks/useReducedMotion.ts`:

```typescript
"use client";

import { useEffect, useState } from "react";

/**
 * Retorna true quando o usuário pediu menos movimento no sistema.
 * Começa em true para que, no primeiro frame, nada anime — assim
 * quem pediu menos movimento nunca vê um flash de animação.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
```

- [ ] **Step 2: Criar o provider do Lenis**

Crie `components/providers/SmoothScrollProvider.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  useEffect(() => {
    // Quem pediu menos movimento não recebe rolagem suave.
    if (reduced) return;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });

    // O ScrollTrigger precisa saber que a posição mudou.
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [reduced]);

  return <>{children}</>;
}
```

- [ ] **Step 3: Criar o componente Reveal**

Crie `components/ui/Reveal.tsx`:

```tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  /** Anima os filhos diretos em cascata em vez do bloco inteiro. */
  stagger?: boolean;
  delay?: number;
  className?: string;
};

export function Reveal({
  children,
  stagger = false,
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    // Com reduced motion o conteúdo já está visível — não tocamos em nada.
    if (reduced || !ref.current) return;

    const element = ref.current;
    const targets = stagger ? Array.from(element.children) : [element];

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        delay,
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [reduced, stagger, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
```

Detalhe importante: usamos `gsap.from`, não `gsap.to`. Assim o HTML entregue pelo servidor já contém o conteúdo visível — se o JavaScript falhar, a página continua legível.

- [ ] **Step 4: Montar o provider no layout**

Em `app/layout.tsx`, importe o provider e envolva `{children}`:

```tsx
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
```

E troque o corpo do `<body>`:

```tsx
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
```

- [ ] **Step 5: Verificar a rolagem suave e o reduced motion**

Substitua temporariamente `app/page.tsx` por uma página alta com três blocos revelados:

```tsx
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
```

Run: `npm run dev`
Expected (motion normal): a rolagem tem inércia suave e cada bloco entra com fade + subida.

Agora ative "reduzir movimento" no sistema operacional (Windows: Configurações → Acessibilidade → Efeitos visuais → desligar "Mostrar animações no Windows) e recarregue.
Expected (reduced motion): rolagem instantânea, sem inércia, e os três blocos já visíveis sem animação. **Teste de verdade — não assuma que funciona.**

- [ ] **Step 6: Commit**

```bash
git add hooks components/providers components/ui/Reveal.tsx app/layout.tsx app/page.tsx
git commit -m "feat: add smooth scroll and scroll reveal with reduced-motion support"
```

---

### Task 6: Header e Footer

**Files:**
- Create: `components/layout/Header.tsx`
- Create: `components/layout/Footer.tsx`

**Interfaces:**
- Consumes: `siteConfig` (Task 1), `whatsappHref()` (Task 2), `Button` (Task 4)
- Produces: `<Header />` e `<Footer />` para `app/page.tsx` (Task 11)

- [ ] **Step 1: Criar o Header**

Crie `components/layout/Header.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "bg-white/95 shadow-sm backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="font-display text-lg text-charcoal sm:text-xl">
            {siteConfig.profissional.marca}
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-rose-deep">
            {siteConfig.profissional.nome}
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {siteConfig.navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-charcoal transition-colors hover:text-rose-deep"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* O wrapper controla a visibilidade: aplicar `hidden` direto no
              Button colidiria com o `inline-flex` das classes base. */}
          <div className="hidden sm:block">
            <Button href={whatsappHref()} external>
              {siteConfig.ctas.agendar}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação mobile"
          className="border-t border-rose/15 bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-5 py-3">
            {siteConfig.navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[44px] items-center text-charcoal"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3 sm:hidden">
              <Button href={whatsappHref()} external className="w-full">
                {siteConfig.ctas.agendar}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Criar o Footer**

Crie `components/layout/Footer.tsx`:

```tsx
import { Instagram, Mail } from "lucide-react";
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
            <Instagram className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
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
```

- [ ] **Step 3: Verificar visualmente**

Substitua temporariamente `app/page.tsx`:

```tsx
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-[150vh] bg-blush-light" />
      <Footer />
    </>
  );
}
```

Run: `npm run dev`
Expected: header transparente no topo que ganha fundo branco ao rolar; em largura menor que 1024px aparece o hambúrguer e o menu abre/fecha; footer com 4 colunas, CRP visível. Navegue tudo por Tab e confirme foco visível.

- [ ] **Step 4: Commit**

```bash
git add components/layout app/page.tsx
git commit -m "feat: add header and footer"
```

---

### Task 7: Seção Hero

**Files:**
- Create: `components/sections/Hero.tsx`

**Interfaces:**
- Consumes: `siteConfig.hero`, `siteConfig.profissional` (Task 1), `whatsappHref()` (Task 2), `Button` (Task 4)
- Produces: `<Hero />`

- [ ] **Step 1: Criar o Hero**

Crie `components/sections/Hero.tsx`. São dois layouts: no mobile a foto fica num bloco próprio recortado nela, com o texto abaixo sobre fundo rosa; a partir de `lg` a foto vira fundo full-bleed com o wash em gradiente.

```tsx
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { FloralAccent } from "@/components/ui/FloralAccent";

export function Hero() {
  const { hero, profissional, ctas } = siteConfig;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-blush lg:min-h-[92vh]"
    >
      {/* Foto: bloco próprio no mobile, fundo full-bleed a partir de lg */}
      <div className="relative h-[46vh] min-h-[300px] w-full lg:absolute lg:inset-0 lg:h-full">
        <Image
          src={hero.imagem}
          alt={hero.imagemAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-right"
        />
        {/* Wash: tinge a parede cinza de rosa e some antes de alcançar a Danielle */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-gradient-to-r from-blush via-blush/85 via-40% to-transparent lg:block"
        />
      </div>

      <FloralAccent className="-left-16 bottom-0 w-72 text-rose/20 lg:left-auto lg:right-10 lg:top-24 lg:w-96" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 lg:flex lg:min-h-[92vh] lg:items-center lg:px-8 lg:pb-0 lg:pt-0">
        <div className="max-w-xl lg:pt-24">
          <h1 className="font-display text-4xl leading-[1.12] text-charcoal sm:text-5xl lg:text-6xl">
            <span className="text-rose">{hero.tituloDestaque}</span>
            <br />
            {hero.tituloResto}
          </h1>

          <span
            aria-hidden="true"
            className="mt-7 flex h-px w-40 bg-rose/40"
          />

          <p className="mt-7 max-w-md text-base leading-relaxed text-charcoal/85">
            {hero.subtitulo}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappHref()} external>
              {ctas.agendar}
            </Button>
            <Button href="#para-quem" variant="outline">
              {ctas.atendimento}
            </Button>
          </div>
        </div>
      </div>

      {/* Selo com nome e CRP */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 lg:absolute lg:inset-x-0 lg:bottom-12 lg:px-8">
        <div className="ml-auto w-fit rounded-2xl bg-white/92 px-7 py-4 text-center shadow-[0_4px_24px_rgba(46,42,43,0.10)] backdrop-blur">
          <p className="font-display text-lg text-rose-deep">
            {profissional.nome}
          </p>
          <p className="mt-1 text-xs text-charcoal/75">
            {profissional.titulo} &nbsp;|&nbsp; {profissional.crp}
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar o hero nas duas larguras**

Substitua temporariamente `app/page.tsx`:

```tsx
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
```

Run: `npm run dev`

Expected em 1440px: foto ocupando toda a largura, Danielle à direita, parede à esquerda tingida de rosa suave sumindo em direção a ela, título com a primeira linha em rosa, dois botões, selo branco com CRP no canto inferior direito. **O rosto e a roupa dela não podem estar cobertos pelo gradiente.**

Expected em 375px: foto recortada nela no topo, texto empilhado abaixo sobre fundo rosa sólido, botões em coluna ocupando a largura.

Se em 1440px o gradiente estiver cobrindo o rosto, ajuste a parada `via-40%` para um valor menor (ex.: `via-30%`). Se sobrar cinza sem tingir à esquerda, aumente para `via-50%`.

- [ ] **Step 3: Commit**

```bash
git add components/sections/Hero.tsx app/page.tsx
git commit -m "feat: add hero section with full-bleed photo and rose wash"
```

---

### Task 8: Seções Credenciais e Especialidades

**Files:**
- Create: `components/sections/Credenciais.tsx`
- Create: `components/sections/Especialidades.tsx`

**Interfaces:**
- Consumes: `siteConfig.credenciais`, `siteConfig.especialidades` (Task 1), `IconCircle`, `Card`, `SectionTitle`, `FloralAccent` (Task 4), `Reveal` (Task 5)
- Produces: `<Credenciais />`, `<Especialidades />`

- [ ] **Step 1: Criar a seção Credenciais**

Crie `components/sections/Credenciais.tsx`:

```tsx
import { siteConfig } from "@/lib/config";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";

export function Credenciais() {
  return (
    <section id="credenciais" className="bg-blush-light py-16 lg:py-20">
      <Reveal
        stagger
        className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8"
      >
        {siteConfig.credenciais.map((item) => (
          <div key={item.titulo} className="flex flex-col items-start gap-4">
            <IconCircle name={item.icone} />
            <h3 className="font-display text-xl leading-snug text-charcoal">
              {item.titulo}
            </h3>
            <p className="text-sm leading-relaxed text-charcoal/75">
              {item.descricao}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
```

- [ ] **Step 2: Criar a seção Especialidades**

Crie `components/sections/Especialidades.tsx`:

```tsx
import { siteConfig } from "@/lib/config";
import { Card } from "@/components/ui/Card";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Especialidades() {
  return (
    <section
      id="especialidades"
      aria-labelledby="titulo-especialidades"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      <FloralAccent className="-left-20 top-10 w-72 text-rose/15" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle id="titulo-especialidades">
            {siteConfig.secoes.especialidades.titulo}
          </SectionTitle>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.especialidades.map((item) => (
            <Card key={item.titulo} className="text-center">
              <div className="flex justify-center">
                <IconCircle name={item.icone} />
              </div>
              <h3 className="mt-5 font-display text-xl text-rose-deep">
                {item.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                {item.descricao}
              </p>
            </Card>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verificar visualmente**

Adicione as duas seções ao `app/page.tsx` abaixo do `<Hero />` e rode `npm run dev`.

Expected: credenciais em 4 colunas no desktop e 1 no mobile; especialidades em 3 colunas com 6 cards, entrando em cascata conforme a rolagem. Com reduced motion ativo, tudo aparece já visível.

- [ ] **Step 4: Commit**

```bash
git add components/sections app/page.tsx
git commit -m "feat: add credentials and specialties sections"
```

---

### Task 9: Seções Para Quem é e Depoimentos

**Files:**
- Create: `components/sections/ParaQuem.tsx`
- Create: `components/sections/Depoimentos.tsx`

**Interfaces:**
- Consumes: `siteConfig.publicos`, `siteConfig.depoimentos` (Task 1), `IconCircle`, `Card`, `SectionTitle`, `FloralAccent` (Task 4), `Reveal` (Task 5)
- Produces: `<ParaQuem />`, `<Depoimentos />`

Nota: a arte de referência tinha uma foto de poltrona nesta seção. Não temos essa foto, então `ParaQuem` usa fundo rosa com floral no lugar. Não invente nem baixe imagem de banco de imagens.

- [ ] **Step 1: Criar a seção Para Quem é**

Crie `components/sections/ParaQuem.tsx`:

```tsx
import { siteConfig } from "@/lib/config";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ParaQuem() {
  return (
    <section
      id="para-quem"
      aria-labelledby="titulo-para-quem"
      className="relative overflow-hidden bg-blush py-20 lg:py-24"
    >
      <FloralAccent className="-right-24 bottom-0 w-96 text-rose/20" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle id="titulo-para-quem">
            {siteConfig.secoes.paraQuem.titulo}
          </SectionTitle>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.publicos.map((item) => (
            <div key={item.titulo} className="flex flex-col items-start gap-4">
              <IconCircle name={item.icone} />
              <h3 className="font-display text-xl text-charcoal">
                {item.titulo}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/75">
                {item.descricao}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Criar a seção Depoimentos**

Crie `components/sections/Depoimentos.tsx`. No mobile é um slider com scroll-snap; a partir de `sm` vira grid.

```tsx
import { Quote, Star } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Depoimentos() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="titulo-depoimentos"
      className="bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle id="titulo-depoimentos">
            {siteConfig.secoes.depoimentos.titulo}
          </SectionTitle>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
        >
          {siteConfig.depoimentos.map((item) => (
            <Card
              key={item.autor}
              className="min-w-[85%] snap-center sm:min-w-0"
            >
              <Quote
                className="h-7 w-7 text-rose"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <p className="mt-4 font-display text-lg italic leading-relaxed text-charcoal">
                {item.texto}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className="flex gap-0.5"
                  role="img"
                  aria-label={`${item.nota} de 5 estrelas`}
                >
                  {Array.from({ length: item.nota }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-rose text-rose"
                      aria-hidden="true"
                    />
                  ))}
                </span>
                <span className="text-xs text-charcoal/60">
                  {item.autor} — {siteConfig.secoes.depoimentos.selo}
                </span>
              </div>
            </Card>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
```

As estrelas são o único uso de ícone preenchido permitido — uma estrela vazia não comunica nota.

- [ ] **Step 3: Verificar visualmente**

Adicione as duas seções ao `app/page.tsx` e rode `npm run dev`.

Expected em 375px: depoimentos deslizam horizontalmente com encaixe. Em 1440px: grid de 3 colunas. Leitor de tela deve anunciar "5 de 5 estrelas".

- [ ] **Step 4: Commit**

```bash
git add components/sections app/page.tsx
git commit -m "feat: add audience and testimonials sections"
```

---

### Task 10: Seção Contato

**Files:**
- Create: `components/sections/Contato.tsx`

**Interfaces:**
- Consumes: `siteConfig.endereco`, `siteConfig.contato`, `siteConfig.horarios` (Task 1), `whatsappHref()` (Task 2), `Button`, `SectionTitle`, `FloralAccent` (Task 4), `Reveal` (Task 5)
- Produces: `<Contato />`

- [ ] **Step 1: Criar a seção Contato**

Crie `components/sections/Contato.tsx`:

```tsx
import { CalendarClock, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { whatsappHref } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { FloralAccent } from "@/components/ui/FloralAccent";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Contato() {
  const { endereco, contato, horarios, ctas } = siteConfig;
  const textos = siteConfig.secoes.contato;

  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="relative overflow-hidden bg-blush py-20 lg:py-24"
    >
      <FloralAccent className="-left-24 top-8 w-80 text-rose/20" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle id="titulo-contato">{textos.titulo}</SectionTitle>
          <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-charcoal/80">
            {textos.subtitulo}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={whatsappHref()} external>
              {ctas.agendar}
            </Button>
          </div>
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8">
            <MapPin
              className="h-6 w-6 text-rose"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display text-lg text-charcoal">
              {textos.tituloLocal}
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-charcoal/75">
              <p>{endereco.clinica}</p>
              <p>
                {endereco.logradouro} — {endereco.bairro}
              </p>
              <p>
                {endereco.cidade}/{endereco.uf}, CEP {endereco.cep}
              </p>
              <p className="pt-1 text-rose-deep">{endereco.modalidades}</p>
            </address>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <CalendarClock
              className="h-6 w-6 text-rose"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display text-lg text-charcoal">
              {textos.tituloHorarios}
            </h3>
            <dl className="mt-3 space-y-1.5 text-sm">
              {horarios.map((item) => (
                <div key={item.dia} className="flex justify-between gap-4">
                  <dt className="text-charcoal/75">{item.dia}</dt>
                  <dd
                    className={
                      item.aberto ? "text-charcoal" : "text-charcoal/45"
                    }
                  >
                    {item.situacao}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <Mail
              className="h-6 w-6 text-rose"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="mt-4 font-display text-lg text-charcoal">
              {textos.tituloCanais}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-charcoal/75">
              <li>
                <a
                  href={`mailto:${contato.email}`}
                  className="transition-colors hover:text-rose-deep"
                >
                  {contato.email}
                </a>
              </li>
              <li>
                <a
                  href={contato.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-rose-deep"
                >
                  {contato.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={contato.agendaOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-rose-deep"
                >
                  Agenda online
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar visualmente**

Adicione a seção ao `app/page.tsx` e rode `npm run dev`.

Expected: três cards brancos sobre rosa; a lista de horários mostra os dias fechados em cinza mais claro; todos os links externos abrem em nova aba.

- [ ] **Step 3: Commit**

```bash
git add components/sections/Contato.tsx app/page.tsx
git commit -m "feat: add contact section"
```

---

### Task 11: Montagem da página, SEO, JSON-LD e headers de segurança

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`
- Create: `components/seo/JsonLd.tsx`
- Create: `app/sitemap.ts`
- Modify: `next.config.ts`

**Interfaces:**
- Consumes: todas as seções (Tasks 6–10), `siteConfig` (Task 1)
- Produces: página completa em `/`

- [ ] **Step 1: Montar a página final**

Substitua `app/page.tsx` por:

```tsx
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
```

- [ ] **Step 2: Criar o JSON-LD**

Crie `components/seo/JsonLd.tsx`:

```tsx
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
    image: `${seo.url}/images/danielle-hero.png`,
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
```

Decisão deliberada: **não incluímos `openingHoursSpecification`.** Os horários reais são "somente com hora marcada", sem hora de abertura e fechamento definidas — inventar valores seria publicar dado falso. Quando a Danielle informar os horários exatos, acrescentamos. E **não incluímos `aggregateRating`**, conforme a spec.

- [ ] **Step 3: Completar a metadata e montar o JSON-LD no layout**

Em `app/layout.tsx`, substitua o objeto `metadata` por:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: siteConfig.seo.titulo,
  description: siteConfig.seo.descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.seo.url,
    siteName: siteConfig.profissional.marca,
    title: siteConfig.seo.titulo,
    description: siteConfig.seo.descricao,
    images: [
      {
        url: "/images/danielle-hero.png",
        width: 1656,
        height: 944,
        alt: siteConfig.hero.imagemAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.titulo,
    description: siteConfig.seo.descricao,
    images: ["/images/danielle-hero.png"],
  },
  robots: { index: true, follow: true },
};
```

E adicione o `<JsonLd />` dentro do `<body>`, antes do provider:

```tsx
import { JsonLd } from "@/components/seo/JsonLd";
```

```tsx
      <body>
        <JsonLd />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
```

- [ ] **Step 4: Criar o sitemap**

Crie `app/sitemap.ts`:

```typescript
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.seo.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
```

- [ ] **Step 5: Ligar os headers de segurança**

Substitua `next.config.ts` por:

```typescript
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // 'unsafe-inline' é necessário para o JSON-LD e os estilos do Next
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
```

- [ ] **Step 6: Verificar o build de produção**

Run: `npm run build`
Expected: build conclui sem erro; a rota `/` aparece marcada como estática. Corrija qualquer erro de tipo antes de seguir.

- [ ] **Step 7: Verificar os headers**

Run: `npm run start` e, noutro terminal, `curl -I http://localhost:3000`
Expected: a resposta contém `x-frame-options`, `content-security-policy`, `referrer-policy` e `x-content-type-options`.

- [ ] **Step 8: Commit**

```bash
git add app components/seo next.config.ts
git commit -m "feat: assemble page with SEO, structured data and security headers"
```

---

### Task 12: Verificação final de qualidade

**Files:**
- Modify: qualquer arquivo que precise de correção após a verificação

**Interfaces:**
- Consumes: a página completa (Task 11)
- Produces: site pronto para deploy

- [ ] **Step 1: Rodar a suíte de testes**

Run: `npm test`
Expected: PASS — os 5 testes de `lib/whatsapp.test.ts` verdes.

- [ ] **Step 2: Verificar que nenhum dado do cliente escapou do config**

Dados de identificação e contato:

```bash
grep -rn "Danielle\|83220\|Revitalle\|daniellerevitalle\|Jales\|15700-002\|maapp" app components --include="*.tsx" --include="*.ts"
```

Copy voltada ao visitante (frases inteiras, para não colidir com nomes de componente):

```bash
grep -rn "Agendar consulta\|Vamos conversar\|Onde atendo\|Outros canais\|avaliação do Google\|presencial e online\|Para quem é\|o meu trabalho\|Psicoterapia com" app components --include="*.tsx" --include="*.ts"
```

Expected em ambos: **nenhum resultado.** Qualquer ocorrência é violação da regra de fonte única de verdade — mova o texto para `lib/config.ts` e importe.

Atenção ao que **não** conta como violação: `id` de âncora (`id="especialidades"`), `aria-labelledby`, `aria-label` de controle de interface ("Abrir menu", "Fechar menu"), nomes de componente e de função. Isso é estrutura e acessibilidade de UI, não conteúdo do cliente — pode continuar no JSX.

- [ ] **Step 3: Conferir a página nas duas larguras**

Run: `npm run dev`, abra `http://localhost:3000` e verifique em 375px e 1440px.

Checklist visual:
- Header transparente no topo, branco após rolar
- Hero: gradiente não cobre o rosto dela; CRP legível no selo
- Cascata dos cards suave, sem "pulo"
- Depoimentos deslizam no mobile e viram grid no desktop
- Nenhuma barra de rolagem horizontal na página

- [ ] **Step 4: Testar navegação por teclado**

Percorra a página inteira só com Tab, do topo ao footer.
Expected: todo link e botão recebe contorno rosa visível; o menu hambúrguer abre com Enter; a ordem de foco segue a ordem visual.

- [ ] **Step 5: Testar prefers-reduced-motion**

Ative "reduzir movimento" no sistema e recarregue.
Expected: sem inércia na rolagem, todas as seções já visíveis, nenhuma animação de entrada. **Verifique de verdade — este é critério de aceitação da spec.**

- [ ] **Step 6: Rodar o Lighthouse**

Com `npm run build && npm run start` rodando, abra o DevTools → Lighthouse → modo Desktop e depois Mobile.
Expected: ≥ 90 em Performance, Acessibilidade, Best Practices e SEO.

Se Performance ficar abaixo de 90, o suspeito número um é o peso de `danielle-hero.png` (1.5MB). Converta para WebP e atualize `siteConfig.hero.imagem`:

```bash
npx sharp-cli --input public/images/danielle-hero.png --output public/images/danielle-hero.webp --format webp --quality 82
```

- [ ] **Step 7: Revisar o que vai para o Git**

Run: `git status` e depois `git diff --cached` antes de commitar.
Expected: nenhum `.env`, nenhuma mídia pesada não intencional, `referencia lp/` fora do controle de versão.

- [ ] **Step 8: Commit final**

```bash
git add -A
git commit -m "chore: final quality pass — a11y, responsive and performance"
```

- [ ] **Step 9: Registrar os aprendizados**

Abra `CLAUDE.md` e preencha a seção "Aprendizados" com o que esta rodada ensinou, no formato "o que aconteceu → o que mudo a partir de agora". Candidatos já conhecidos:

- O rosa `#C9527A` da referência reprova AA em texto normal (4.22:1) → toda paleta nova passa por verificação de contraste calculada antes de virar token, e cores de marca ganham uma variante escura para texto.
- A arte gerada por IA trazia uma foto de poltrona que não existia no material real → conferir quais imagens da referência existem de fato antes de desenhar seções que dependem delas.

---

## Pendências que bloqueiam a publicação

1. **Número de WhatsApp da Danielle** — preencher `siteConfig.contato.whatsapp` com o formato internacional só de dígitos. Enquanto vazio, os CTAs caem no maapp.
2. **Confirmação ética da seção de depoimentos** com o CRP dela (ver §7 da spec).
3. **Domínio final** — atualizar `siteConfig.seo.url`.
4. **Quarta avaliação do Google** — só entra quando o nome do autor for confirmado.
