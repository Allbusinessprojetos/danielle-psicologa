# Danielle Psicóloga — Landing Pages

Projeto para produzir landing pages bonitas, profissionais e rápidas para
Danielle Saquetto Baruffi (Psicóloga, CRP 06/83220). Este arquivo é vivo:
sempre que chegarmos a um resultado bom (estrutura, biblioteca, padrão visual
que funcionou), atualizamos este documento para reaproveitar da próxima vez.

## Stack padrão

- **Next.js (App Router)** + TypeScript.
- **Tailwind CSS** para estilização.
- **shadcn/ui** como base de componentes (botões, cards, accordion, etc.) —
  copiar/adaptar componentes ao invés de instalar libs de UI fechadas.
- **lucide-react** para ícones de linha (combina com o estilo do design de
  referência: ícones outline, delicados).
- **Lenis** para rolagem suave — sozinho já dá sensação de site premium/caro.
  Usar em toda landing.
- **GSAP + ScrollTrigger** para animações ligadas ao scroll (reveals, elementos
  que entram suavemente conforme a pessoa rola). É o que separa o trabalho de
  um "site de template".
- **Framer Motion (Motion)** para microinterações simples de UI (hover,
  aparecer/sumir, transições de estado). Usar com moderação — nada de exagero,
  o público é adultos buscando acolhimento, não uma landing de startup tech.
- **next/font** para tipografia (evitar CDNs externas quando possível) — olhar
  também **Fontshare** (fontshare.com) como fonte de fontes gratuitas de boa
  qualidade se precisar de algo além do Google Fonts.
- **next/image** para todas as imagens (otimização automática).
- **clsx** para classes condicionais.
- Deploy alvo: **Vercel**.

**Fontes de componentes/inspiração de UI** (usar como referência ou para
copiar/adaptar trechos, nunca instalar como dependência fechada):
- shadcn/ui — base de componentes acessíveis.
- [Watermelon UI](https://ui.watermelon.sh/) e [Skiper UI](https://skiper-ui.com/)
  — componentes já estilizados/animados, bom pra acelerar seções específicas.
- [React Bits](https://reactbits.dev/get-started/index) — animações e efeitos
  React prontos (bom repertório para pequenos "uaus").
- [GSAP](https://gsap.com/) e [Lenis](https://lenis.dev/) — documentação
  oficial das libs de animação/scroll acima.

Evitar dependências pesadas ou pouco mantidas. Preferir sempre a opção mais
simples que resolve o problema.

## Referência visual

Ver `referencia lp/` — screenshot de referência do estilo aprovado
("Dani Psicologia Clínica"). Principais elementos a preservar:

- **Paleta**: tons de rosa/terracota (`#c9527a`-ish para destaques, rosa claro
  `#f7e6ea`-ish para fundos de seção), branco, texto em cinza-chumbo escuro.
  Nunca usar cores frias/corporativas (azul, roxo tech) — o tom é acolhedor,
  humano, feminino.
- **Tipografia**: título com serifada elegante (ex: um serif estilo Playfair
  Display / Cormorant) combinada com um sans-serif limpo pro corpo de texto
  (ex: Inter, Poppins). Contraste serif/sans é parte da identidade.
- **Motivos florais** sutis como elementos decorativos de fundo (baixa
  opacidade, não competem com o conteúdo).
- **Ícones outline finos** em círculos com borda, não ícones preenchidos/bold.
- Cards com cantos arredondados generosos, sombras suaves, bastante
  respiro (padding/whitespace).
- CTA principal sempre em pill/rounded-full, cor de destaque (rosa).
- Foto da profissional é protagonista no hero — tratamento acolhedor, sorriso,
  ambiente claro.

## Estrutura de seções (padrão para landing de psicóloga)

1. Header fixo: logo + nome + navegação + CTA "Agendar consulta".
2. Hero: título forte (dor → transformação), subtítulo, 2 CTAs (agendar +
   info sobre atendimento), foto da profissional, selo com nome/CRP.
3. Bloco de credenciais rápidas (anos de experiência, abordagem, formação) —
   grid de 4 itens com ícone.
4. Especialidades/áreas de atuação — grid de cards.
5. "Para quem é" — públicos atendidos (adolescentes, adultos, casais,
   famílias).
6. Depoimentos (carrossel ou grid simples, com estrelas).
7. CTA final + informações de contato/localização.
8. Footer com navegação, contato, redes sociais, CRP.

## Copywriting

- Tom acolhedor, ético, baseado em evidência — nunca sensacionalista.
- Sempre incluir CRP visível (obrigatório para psicólogos, credibilidade).
- Evitar jargão clínico pesado; falar a língua de quem está buscando ajuda.
- CTAs claros: "Agendar consulta", nunca "Saiba mais" genérico como CTA
  principal.

## Requisitos técnicos não-negociáveis

- Responsivo mobile-first (grande parte do tráfego de saúde mental é mobile).
  Celular é uma experiência própria, não "PC encolhido": onde no desktop
  temos um scroll-reveal elaborado, no mobile pode valer mais um slider ou
  layout mais simples e direto.
- Acessibilidade: contraste AA, alt text em imagens, navegação por teclado,
  e **respeitar `prefers-reduced-motion`** — desligar/reduzir animações do
  GSAP/Framer Motion para quem pede menos movimento (evita enjoo e ajuda
  no SEO/boas práticas).
- Performance: Lighthouse ≥ 90 em Performance/Acessibilidade/SEO. Se usar
  sequência de imagens estilo "scroll cinematográfico", fazer via canvas
  (sequência de imagens), não via vídeo — vídeo trava/engasga no scroll.
- SEO básico: metadata (title/description/OG), sitemap, dados estruturados
  de `LocalBusiness`/`MedicalBusiness` quando fizer sentido.
- LGPD: formulário de contato deve ter texto de consentimento; sem trackers
  desnecessários.

## Skills de processo

Usamos o plugin [obra/superpowers](https://github.com/obra/superpowers)
(instalado via `/plugin marketplace add obra/superpowers` +
`/plugin install superpowers`). Skills principais pro fluxo deste projeto:

- **brainstorming** — desenhar a ideia e ter aprovação antes de codar
  qualquer seção/landing nova.
- **systematic-debugging** — achar causa raiz antes de tentar consertar.
- **test-driven-development** — teste antes do código, só pra lógica com
  comportamento (validação de formulário, funções de config), não pra
  JSX/CSS visual.
- **requesting-code-review** — pedir revisão focada antes de deploy.
- **writing-plans** — transformar um design aprovado em plano de tasks.

## Padrões de arquitetura

- **Config central**: todos os dados variáveis do site (nome, CRP, telefone,
  endereço, horários, links de redes sociais, textos-chave) ficam num único
  arquivo de configuração (ex.: `lib/config.ts` ou `content/site.ts`). Nunca
  espalhar esses dados hardcoded pelos componentes — muda num lugar só e
  reflete no site inteiro.

## Checklist de segurança antes de todo deploy

1. **Headers de segurança ligados** (proteção contra clickjacking, injeção
   de conteúdo, etc. — configurar em `next.config.js`).
2. **Nenhum segredo/chave no código nem no chat.** Se algo vazar, rotacionar
   na hora (gerar nova chave e invalidar a antiga).
3. **Revisar o que vai pro Git** antes do commit: nada de imagem/vídeo
   pesado fora do controle, `.env`, ou config pessoal. Usar `.gitignore`
   adequado e conferir arquivo por arquivo (`git status`/`git diff`).

## Aprendizados (atualizar conforme formos testando)

_Registrar no formato "o que aconteceu → o que eu aprendi/mudo a partir de
agora". É a parte mais valiosa deste documento — evita repetir o mesmo erro
em rodadas futuras._

- O rosa `#C9527A` da referência reprova AA em texto normal (4.22:1) → toda
  paleta nova passa por verificação de contraste calculada antes de virar
  token, e cores de marca ganham uma variante escura para texto
  (`rose-deep`).
- A arte gerada por IA trazia uma foto de poltrona que não existia no
  material real → conferir quais imagens da referência existem de fato antes
  de desenhar seções que dependem delas.
- Classes de opacidade sobre cinza (`text-charcoal/45`, `text-charcoal/60`)
  pareciam visualmente OK mas reprovavam contraste AA (2.63:1 e 3.96:1) em
  texto pequeno no rodapé e em estados "fechado" — o Lighthouse só pegou
  parte das ocorrências numa única passada → verificação de contraste vale
  para qualquer variante derivada por opacidade, não só para a cor de marca
  em hex cheio. `text-charcoal/70` (≈5.3:1) é o piso seguro para texto
  secundário sobre fundo branco; abaixo disso, calcular antes de usar.
- Uma seção sem título visível (bloco de credenciais, ícones em grid) ainda
  precisa manter a ordem semântica de headings sequencial — usar `h3` direto
  ali pulava do `h1` do hero pro `h3` sem passar por `h2`, reprovando o
  audit de heading-order do Lighthouse → toda seção que não usa
  `SectionTitle` (h2) precisa promover o heading do item para o nível
  correto (h2 nesse caso) em vez de assumir h3 "porque é conteúdo de card".
- GSAP ScrollTrigger revela seções conforme o scroll real dispara; um
  screenshot "full page" do Playwright não dispara esses scroll events e
  mostra a página com blocos inteiros em branco (opacity:0 inicial), dando
  falsa impressão de bug → para inspecionar visualmente seções com reveal
  scroll-linked, rolar de verdade em incrementos (`window.scrollTo` em loop)
  antes de tirar o screenshot, não confiar no modo fullPage direto.
- Depois de várias edições, um dev server (Turbopack) de longa duração às
  vezes mantém no console erros de SSR antigos (ex.: `ReferenceError` de um
  ícone que já não é mais importado no arquivo atual) mesmo com o código-
  fonte já corrigido → antes de tratar um erro de console como bug real na
  verificação final, reiniciar o dev server limpo (matar processo + apagar
  `.next/`) e reproduzir.
- No Windows, o `lighthouse` CLI às vezes lança `EPERM` ao tentar limpar a
  pasta temp do Chrome no fim da execução, mesmo com o relatório já escrito
  com sucesso → checar se o arquivo de output existe em vez de confiar no
  código de saída/últimas linhas do log antes de assumir que a run falhou.
