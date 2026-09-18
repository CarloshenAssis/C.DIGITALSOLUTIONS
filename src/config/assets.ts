/**
 * Arquivos de imagem que ainda não existem no repositório.
 *
 * Deixe a string vazia até ter o arquivo real. Todos os componentes que
 * consomem estes caminhos têm um estado desenhado para a ausência — nenhum
 * deles quebra, e nenhum deles simula uma imagem que não existe.
 *
 * Coloque os arquivos em /public e preencha abaixo:
 *   portrait     → /public/carlos.jpg
 *   projetos     → /public/work/<slug>/... (referenciados em data/projects.ts)
 */
export const assets = {
  /** Retrato do Carlos. Foto natural, não corporativa de banco de imagens. */
  portrait: "",
  portraitAlt: "Carlos Henrique, fundador da C. Digital Solutions",
} as const;
