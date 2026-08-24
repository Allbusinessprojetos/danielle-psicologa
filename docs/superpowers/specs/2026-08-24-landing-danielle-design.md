# Landing Page — Danielle Saquetto Baruffi (Design Spec)

**Data:** 2026-08-24
**Cliente:** Danielle Saquetto Baruffi — Psicóloga, CRP 06/83220
**Marca:** Dani Psicologia Clínica
**Objetivo:** Landing page única, de alta conversão, que leve o visitante ao
WhatsApp para agendar consulta.

---

## 1. Contexto e material disponível

| Item | Situação |
|---|---|
| `referencia lp/referencia base lp.png` | Arte de referência gerada por IA — define paleta, tipografia, estrutura de seções e clima. Aprovada pelo cliente. |
| `referencia lp/banner.png` | **Foto real da Danielle**, 1656×944, alta resolução. Composição wide: ela à direita, parede lisa vazia ocupando ~60% à esquerda. Fundo cinza neutro, manta coral na poltrona, expressão serena/profissional. |
| Número de WhatsApp | **PENDENTE.** Único dado bloqueante para publicação. Fica como placeholder em `lib/config.ts`. |

### Decisão sobre o hero (aprovada)

Foto **full-bleed** (ocupa toda a largura do topo, sem moldura) com o texto
sobre a área vazia à esquerda. Sobre a parede cinza entra um **wash** —
gradiente rosa-claro translúcido que se dissipa antes de alcançar a
Danielle, integrando a foto à paleta sem aplicar filtro no rosto ou na roupa.

Alternativas descartadas: recorte de fundo (depende de terceiro, recorte ruim
destrói credibilidade) e foto em card à direita (joga fora a composição wide
e fica com cara de template).

---

## 2. Identidade visual

### Paleta (contraste WCAG verificado, não estimado)

| Token | Hex | Contraste vs branco | Uso permitido |
|---|---|---|---|
| `rose` | `#C9527A` | 4.22:1 — **falha AA em texto normal** | Somente títulos grandes (≥24px bold / ≥18.66px), ícones, elementos decorativos |
| `rose-deep` | `#B03D63` | 5.69:1 — AA ok | Fundo de botão (com texto branco), qualquer texto pequeno em rosa, links |
| `charcoal` | `#2E2A2B` | 14.17:1 — AA ok | Corpo de texto |
| `blush` | `#F7E6EA` | — | Fundo de seção (rosa médio) |
| `blush-light` | `#FDF6F7` | — | Fundo de seção (rosa suave) |
| `coral` | `#D2542F` | 4.16:1 — falha AA em texto normal | Acento raro e decorativo apenas, puxado da manta da foto |
| `white` | `#FFFFFF` | — | Fundo base |

Verificações adicionais já feitas: chumbo sobre `blush` = 11.78:1 (ok);
`rose-deep` sobre `blush` = 4.73:1 (ok).

**Regra dura:** nenhum texto de corpo em `rose` ou `coral`. Se o design pedir
rosa em texto pequeno, usar `rose-deep`.

### Tipografia

- **Playfair Display** — títulos e display. Serifada elegante, alto contraste.
- **Inter** — corpo, navegação, botões.
- Ambas via `next/font/google` (self-hosted no build, sem CDN externa).
- Detalhe da referência a preservar: no título do hero, a primeira linha em
  `rose`, as linhas seguintes em `charcoal`.

### Elementos gráficos

- Motivos florais em SVG, opacidade 0.06–0.12, posicionados nas bordas das
  seções. Nunca competem com o conteúdo nem ficam atrás de texto.
- Ícones **outline finos** (lucide-react, `strokeWidth={1.5}`) dentro de
  círculos com borda de 1px em `rose`. Nunca ícones preenchidos.
- Cards: `rounded-3xl`, sombra suave, padding generoso.
- CTAs: `rounded-full` (pill), fundo `rose-deep`, texto branco.

---

## 3. Arquitetura

```
app/
  layout.tsx            fontes, metadata, JSON-LD, SmoothScrollProvider
  page.tsx              compõe as seções na ordem
  globals.css           tokens CSS + reset
  sitemap.ts
components/
  layout/
    Header.tsx          fixo, transparente → branco ao rolar
    Footer.tsx
  sections/
    Hero.tsx
    Credenciais.tsx
    Especialidades.tsx
    ParaQuem.tsx
    Depoimentos.tsx     ← isolado, removível em uma linha (ver §7)
    Contato.tsx
  ui/
    Button.tsx          variantes: primary (pill rosa), outline
    Card.tsx
    SectionTitle.tsx    título serif + ornamento floral abaixo
    Reveal.tsx          wrapper GSAP ScrollTrigger (fade + subida)
    FloralAccent.tsx    SVG decorativo posicionável
    IconCircle.tsx      ícone outline em círculo com borda
  providers/
    SmoothScrollProvider.tsx   Lenis
lib/
  config.ts             ÚNICA fonte de verdade dos dados
  whatsapp.ts           monta o link wa.me
hooks/
  useReducedMotion.ts
public/
  images/danielle-hero.png    cópia de referencia lp/banner.png
```

### Princípio de isolamento

Nenhum componente contém dado do cliente hardcoded. Todos leem de
`lib/config.ts`. Trocar telefone, endereço, um depoimento ou um texto de
especialidade = editar um arquivo só, sem tocar em JSX.

### Fluxo de dados

`lib/config.ts` → `page.tsx` (ou import direto na seção) → componentes de
apresentação. Sem estado global, sem fetch, sem backend. A página é
estática (SSG).

---

## 4. Conteúdo (dados reais, já coletados)

### Profissional
- Nome: Danielle Saquetto Baruffi
- Título: Psicóloga
- CRP: 06/83220
- Marca: Dani Psicologia Clínica
- Abordagem: Terapia Cognitivo-Comportamental (TCC)
- Experiência: mais de 20 anos
- Formação: Graduada Unesp-Assis · Mestre em Psicologia Educacional (PUC-SP)
  · Especialista em Terapia Familiar

### Copy do hero (fornecida pelo cliente, usar literal)
- Título: "Psicoterapia com acolhimento, experiência e base científica."
- Subtítulo: "Um espaço seguro, ético e humanizado para quem deseja
  compreender suas emoções, fortalecer vínculos e construir mudanças reais."

### Credenciais (4 itens)
1. **+20 anos de experiência** — Acolhendo histórias e promovendo mudanças reais.
2. **TCC** — Abordagem baseada em evidências para transformar pensamentos, emoções e comportamentos.
3. **Terapia Familiar** — Atuação especializada para fortalecer vínculos e promover diálogo e compreensão.
4. **Mestre em Psicologia Educacional** — Formação sólida e contínua para oferecer o melhor atendimento.

### Especialidades (6 cards)
1. **Ansiedade** — Manejo dos sintomas e desenvolvimento de estratégias para mais tranquilidade.
2. **Relacionamentos** — Conflitos, comunicação e construção de vínculos saudáveis.
3. **Autoestima** — Fortalecimento da autoconfiança e do amor próprio.
4. **Desenvolvimento emocional** — Autoconhecimento e gestão das emoções para uma vida mais leve.
5. **Qualidade de vida** — Equilíbrio, propósito e bem-estar no dia a dia.
6. **Casais e famílias** — Apoio para superar desafios e construir relações mais saudáveis.

### Para quem é (4 públicos)
1. **Adolescentes** — Apoio para lidar com emoções, conflitos e desafios dessa fase.
2. **Adultos** — Mais clareza, equilíbrio emocional e qualidade de vida.
3. **Casais** — Fortalecimento da relação e resolução de conflitos com respeito e diálogo.
4. **Famílias** — Melhores conexões, compreensão e convivência.

### Depoimentos (avaliações reais do Google, 5 estrelas)
1. Josiane Fernandes — "Foi ótimo! É uma excelente profissional!"
2. Josy Marques — "Profissional maravilhosa!"
3. Luany Farias — "Excelente!!!"

Existe uma quarta avaliação ("Excelente profissional. Recomendamos.") cujo
autor não estava visível na captura. Só entra na página quando o nome for
confirmado — depoimento sem autor identificável não vai ao ar.

### Contato e local
- Clínica Revitalle — Rua Um, 2466, Centro, Jales/SP, CEP 15700-002
- E-mail: daniellerevitalle@gmail.com
- Instagram: @danipsicologiaclinica
- Agenda online existente: maapp.com.br/PsicoDani
- Modalidades: presencial e online

### Horários (reais, do Google Meu Negócio)
| Dia | Situação |
|---|---|
| Domingo | Fechada |
| Segunda | Somente com hora marcada |
| Terça | Somente com hora marcada |
| Quarta | Somente com hora marcada |
| Quinta | Fechada |
| Sexta | Fechada |
| Sábado | Somente com hora marcada |

---

## 5. CTAs

**Decisão do cliente: todos os CTAs vão para o WhatsApp.**

- `lib/whatsapp.ts` monta `https://wa.me/<numero>?text=<mensagem codificada>`.
- Número em formato internacional sem símbolos (ex.: `5517999999999`).
- Mensagem padrão: "Olá, Danielle! Vim pelo site e gostaria de agendar uma
  consulta."
- Enquanto o número não chegar, o config carrega string vazia e a função
  retorna o link do maapp como fallback, para o site nunca ficar com botão
  quebrado.
- O link `maapp.com.br/PsicoDani` aparece apenas como alternativa discreta na
  seção de contato — nunca como CTA principal.

---

## 6. Movimento

- **Lenis** — rolagem suave em todo o site, montado em
  `SmoothScrollProvider`.
- **GSAP + ScrollTrigger** — componente `<Reveal>`: opacidade 0→1 e
  translateY 24px→0 quando a seção entra na viewport. Grids de cards com
  `stagger` de ~0.08s.
- **Framer Motion** — exclusivamente hover de card e botão.
- **`prefers-reduced-motion`** (não-negociável): o hook `useReducedMotion`
  desliga o Lenis e faz o `<Reveal>` renderizar tudo já visível, sem
  animação. Precisa ser testado de verdade, não assumido.

Nada de parallax agressivo ou movimento chamativo: o público são adultos
buscando acolhimento emocional.

---

## 7. Ressalva ética — seção de depoimentos

O Código de Ética do CFP é restritivo quanto a autopromoção e ao uso de
depoimentos de clientes em publicidade. As avaliações são públicas e
voluntárias no Google, o que atenua, mas **não elimina** a questão.

Encaminhamento: a seção é construída, porém isolada em
`components/sections/Depoimentos.tsx` e removível comentando **uma linha** em
`app/page.tsx`. Alternativa já prevista: substituir os cards por um link
discreto "ver avaliações no Google".

**A Danielle deve confirmar com o CRP dela antes da publicação.** Isso é
decisão profissional dela, não nossa.

---

## 8. Mobile

Celular é experiência própria, não desktop encolhido.

- **Hero:** a foto recorta nela (`object-position: right center`), altura
  reduzida, texto empilhado abaixo sobre fundo `blush` sólido. O wash em
  gradiente do desktop não se aplica.
- **Especialidades:** grid de 6 → 1 coluna (2 em `sm`).
- **Depoimentos:** slider horizontal com scroll-snap, em vez de grid.
- **Header:** menu hambúrguer; CTA WhatsApp permanece visível na barra.
- Alvos de toque com no mínimo 44×44px.

---

## 9. SEO e dados estruturados

- Metadata em `pt-BR`: title, description, Open Graph, Twitter card.
- Imagem OG dedicada.
- `app/sitemap.ts`.
- JSON-LD de `Psychologist` com `name`, `address` (PostalAddress completo),
  `openingHoursSpecification`, `url`, `email`, `sameAs` (Instagram),
  `areaServed`.
- **Sem `aggregateRating`.** Marcação de avaliação sobre a própria empresa
  não gera rich result e pode ser interpretada como manipulação.

---

## 10. Testes

Conforme o `CLAUDE.md`: teste só onde existe lógica com comportamento.

**Testado (Vitest, TDD real — teste escrito e visto falhar antes do código):**
- `lib/whatsapp.ts` — codificação correta da mensagem, formato do número,
  fallback para o maapp quando o número está vazio.

**Não testado com unit test (validado no navegador):**
- JSX, CSS, layout, animações. Verificação visual via Playwright em duas
  larguras (375px e 1440px).

---

## 11. Segurança antes do deploy

1. Headers de segurança em `next.config.js` — `X-Frame-Options`,
   `Content-Security-Policy`, `Referrer-Policy`, `X-Content-Type-Options`,
   `Strict-Transport-Security`.
2. Nenhum segredo no código. Este projeto não tem backend nem chave de API —
   se isso mudar, entra `.env` e a chave nunca vai ao Git nem ao chat.
3. `.gitignore` adequado. Revisar arquivo por arquivo antes do commit —
   nada de mídia pesada não intencional nem config pessoal.

---

## 12. Critérios de aceitação

- [ ] Lighthouse ≥ 90 em Performance, Acessibilidade, Best Practices e SEO.
- [ ] Contraste AA em 100% dos textos (a paleta de §2 já garante, se as
      regras de uso forem respeitadas).
- [ ] Navegação completa por teclado, com foco visível.
- [ ] `prefers-reduced-motion` testado e funcionando de verdade.
- [ ] Zero dado do cliente hardcoded fora de `lib/config.ts`.
- [ ] Testes do `lib/whatsapp.ts` passando.
- [ ] Layout verificado em 375px e 1440px.
- [ ] CRP 06/83220 visível no hero e no footer.
- [ ] Headers de segurança ativos.

---

## 13. Fora de escopo

Blog, área de membros, pagamento online, multi-idioma, tema escuro,
formulário de contato com backend, integração de analytics. A agenda
continua no maapp; não vamos reconstruí-la.
