# C. Digital Solutions

Site institucional, portfólio e apresentação profissional de
**Carlos Henrique / C. Digital Solutions**.

> Tecnologia que resolve problemas de negócio.
> Problem first. Solution second.

---

## Stack

| Camada     | Escolha                                            |
| ---------- | -------------------------------------------------- |
| Framework  | Next.js 16 (App Router, React 19, Server Components)|
| Linguagem  | TypeScript (strict)                                 |
| Estilo     | Tailwind CSS v4 (CSS-first) + design system próprio |
| Ícones     | lucide-react                                        |
| Animação   | CSS + IntersectionObserver (sem biblioteca)         |
| Deploy     | Vercel                                              |

### Por que não Framer Motion

O briefing citava Framer Motion como preferência. Todo o movimento deste site
— reveal, parallax, transição de página, traçado do símbolo, timeline — é
expressável em CSS puro, e uma biblioteca de animação custaria entre 40kb e
60kb de JavaScript para entregar o mesmo resultado.

A escolha foi trocar isso por duas *engines* mínimas
(`src/components/motion/`) que usam **um único** IntersectionObserver e **um
único** listener de scroll para a página inteira, independentemente de quantos
elementos animam. Os componentes animados continuam sendo Server Components:
eles só recebem um atributo `data-reveal`.

Resultado: praticamente todo o site é HTML estático, e o JavaScript de
interface se resume a cabeçalho, cursor, formulário e as duas engines.

---

## Começando

```bash
npm install
npm run dev      # http://localhost:3000
```

Scripts:

```bash
npm run build      # build de produção
npm run start      # servidor de produção
npm run lint       # ESLint
npm run typecheck  # TypeScript sem emitir
```

---

## O que preencher antes de publicar

Tudo que muda com o tempo está centralizado. Nenhum dado de contato,
link ou métrica está escrito dentro de componentes.

### 1. Contato — `src/config/contact.ts`

```ts
export const contact = {
  email: "",      // ex.: "contato@cdigitalsolutions.com.br"
  whatsapp: "",   // apenas dígitos com DDI, ex.: "5512999999999"
  city: "",
};
```

Campo vazio significa que o canal simplesmente não é renderizado. Nada quebra.

### 2. Redes — `src/config/social.ts`

```ts
export const social = {
  linkedin: "",
  instagram: "",
  github: "",
  behance: "",
};
```

Sem link, o item não aparece no rodapé nem na página de contato.

### 3. Domínio — `.env.local` (ou variáveis da Vercel)

```
NEXT_PUBLIC_SITE_URL="https://seudominio.com.br"
```

Usado em metadata, canonical, `sitemap.xml`, `robots.txt` e JSON-LD.

**Opcional.** Sem essa variável, `src/config/site-url.ts` resolve o domínio
nesta ordem:

1. `NEXT_PUBLIC_SITE_URL`;
2. o domínio de produção do projeto na Vercel (`VERCEL_PROJECT_PRODUCTION_URL`);
3. a URL do deploy atual (`VERCEL_URL`, útil em previews);
4. o fallback em `site-url.ts`.

Valores em branco, sem protocolo, com barra final ou inválidos são
normalizados ou descartados — a resolução nunca lança. Isso importa porque
`new URL("")` em `metadataBase` derruba o build inteiro na coleta de
metadata, e uma variável **declarada e vazia** na Vercel é o jeito mais fácil
de cair nesse caso (`??` não a trata como ausente).

### 4. Recebimento do formulário — opcional

```
CONTACT_WEBHOOK_URL="https://..."
```

Qualquer serviço que aceite `POST` com JSON (Formspree, n8n, Resend via rota
própria, Supabase Edge Function). O comportamento é em cascata:

1. **Com `CONTACT_WEBHOOK_URL`** → o briefing é enviado e o visitante vê a
   confirmação.
2. **Sem webhook, mas com e-mail ou WhatsApp em `contact.ts`** → o formulário
   valida, monta o briefing e entrega pelo canal direto.
3. **Sem nenhum canal** → o site diz a verdade: mostra o briefing pronto com
   um botão de copiar, em vez de fingir um envio que não aconteceu.

### 5. Imagens dos projetos

```
public/work/<slug>/hero.jpg
```

E então em `src/data/projects.ts`:

```ts
{
  slug: "nobrega-correa",
  image: "/work/nobrega-correa/hero.jpg",
  gallery: [
    { src: "/work/nobrega-correa/desktop.jpg", alt: "…", kind: "desktop" },
    { src: "/work/nobrega-correa/mobile.jpg",  alt: "…", kind: "mobile"  },
  ],
}
```

**Enquanto não houver arquivo**, cada moldura renderiza uma capa tipográfica
desenhada (`ProjectPlate`) — com o nome, a categoria e o arco do símbolo.
Isso é deliberado: um mockup fictício seria um dado inventado. A troca é de
uma linha por projeto.

### 6. Retrato — `src/config/assets.ts`

```ts
export const assets = { portrait: "/carlos.jpg" };
```

Foto natural, não corporativa de banco de imagens. Vazio → superfície
tipográfica no lugar.

---

## Estrutura

```
src/
├── app/                 rotas (App Router)
│   ├── projetos/[slug]/ estudos de caso
│   ├── journal/[slug]/  notas
│   ├── contato/         formulário + server action
│   ├── sitemap.ts · robots.ts · opengraph-image.tsx
│   └── globals.css      DESIGN SYSTEM
│
├── components/
│   ├── brand/           símbolo, wordmark, assinatura de cliente
│   ├── layout/          header, footer, abertura, cursor
│   ├── motion/          engines de reveal e parallax
│   ├── sections/        seções da home (reusadas nas páginas internas)
│   ├── ui/              Section, Eyebrow, ArrowLink, molduras
│   └── work/            moldura e capa de projeto
│
├── config/              brand · contact · social · seo · assets · metrics
├── data/                projects · services · experience · articles · …
└── lib/                 JSON-LD, formatação de data
```

---

## Design system

Definido em `src/app/globals.css`, em três camadas explícitas
(`@theme`, `@layer base`, `@layer components`). A ordem importa: os resets de
elemento ficam em `base` justamente para que qualquer utilitário do Tailwind
aplicado no JSX continue vencendo.

### Três primitivas, todas derivadas do símbolo

| Primitiva    | O que é                                             | Onde aparece                                      |
| ------------ | --------------------------------------------------- | ------------------------------------------------- |
| **Spine**    | canaleta à esquerda com índice + rótulo + régua      | toda seção (`<Section index label>`)              |
| **Terminal** | quadrado azul de 7px                                 | onde algo foi decidido — no máximo um por viewport |
| **Aperture** | arcos concêntricos incompletos                       | abertura, pausa editorial, capas, 404             |

### Superfícies

Em vez de prefixos `dark:`, cada superfície redefine as variáveis locais:

```css
.surface-dark  { --canvas … --fg … --rule … --brand: #5b8dff }
.surface-black { … }
```

Nenhum componente precisa saber em que fundo está. O azul é elevado no escuro
para manter contraste AA.

### Escala

- Espaço: base 4px — `--s-1 … --s-40` (4 → 160)
- Raio: 2 / 4 / 8 / 12px. Nada vira "pill" sem motivo.
- Réguas: `1px solid rgb(17 19 24 / 0.10)` — estruturam, não chamam atenção.
- Tipografia: Inter Tight (display) · Inter (texto) · Space Grotesk (rótulos
  e numerais), servidas localmente via `next/font`.

---

## Regra de integridade dos dados

Está escrita no código, e não só aqui.

**Nunca** registrar cliente, resultado, número, depoimento, faturamento,
conversão, experiência, certificação, tecnologia, cargo ou data que não seja
real e verificável.

Consequências no projeto:

- `src/data/testimonials.ts` é um array **vazio** — a seção não é renderizada.
- Não existe contador de clientes, de anos nem de conversão em lugar nenhum.
- Projetos sem URL pública não exibem botão "Visitar o site".
- Projetos sem imagem mostram capa tipográfica, não mockup fictício.
- O formulário não simula envio quando não há canal configurado.

A credibilidade do site depende disso mais do que de qualquer detalhe visual.

---

## Acessibilidade

- HTML semântico, um `<h1>` por página, hierarquia de headings contínua.
- Skip link para o conteúdo.
- Foco visível (`:focus-visible`) com contorno na cor da marca.
- Navegação por teclado em todo o site; o processo usa `<details>` nativo.
- `prefers-reduced-motion: reduce` desliga reveals, parallax, abertura e
  cursor — o conteúdo aparece direto.
- `aria-expanded` / `aria-controls` no menu mobile; `aria-live` na resposta
  do formulário.

---

## SEO

- Metadata por rota, com `title.template` e canonical.
- `sitemap.xml` e `robots.txt` gerados a partir dos dados reais.
- JSON-LD: `WebSite`, `ProfessionalService`, `Person`, `CreativeWork`,
  `Article` — sem endereço físico e sem avaliação inventados.
- Open Graph gerado no build (`opengraph-image.tsx`), na mesma linguagem
  visual do site.

---

## Deploy na Vercel

1. Push para o GitHub.
2. Importar o repositório na Vercel — o preset Next.js é detectado sozinho.
3. Definir `NEXT_PUBLIC_SITE_URL` (e `CONTACT_WEBHOOK_URL`, se houver).
4. Deploy.

Todas as rotas são estáticas (SSG). Não há banco, runtime dinâmico ou
dependência externa em tempo de execução.

---

## Marca

Ativos e regras de uso em [`public/brand/README.md`](public/brand/README.md).
Assinatura para sites de clientes em [`docs/assinatura.md`](docs/assinatura.md).
