# Ativos de marca

| Arquivo          | Uso                                                  |
| ---------------- | ---------------------------------------------------- |
| `logo-mark.svg`  | Símbolo em fundo claro                               |
| `logo-light.svg` | Símbolo em fundo escuro                              |
| `favicon.svg`    | Favicon / ícone de aba (versão simplificada, 2 arcos)|

O símbolo também existe como componente React em
`src/components/brand/Mark.tsx`, que é o que o site usa em tempo de execução
(permite animar o traçado no loader e no 404). Os arquivos `.svg` acima
servem para uso externo: assinatura de e-mail, documentos, apresentações.

## Substituindo pelo arquivo original

Estes vetores são uma reconstrução fiel da geometria do símbolo original
(três arcos concêntricos incompletos + terminal quadrado azul). Se o arquivo
vetorial original estiver disponível, substitua os `.svg` desta pasta e
ajuste os raios em `src/components/brand/Mark.tsx` para corresponder.

Não altere a geometria: a abertura à direita e o terminal quadrado são a
identidade do símbolo.

## Grade de uso

- Área de proteção mínima: metade da largura do símbolo em todos os lados.
- Tamanho mínimo: 20px.
- Nunca aplicar sombra, gradiente ou contorno adicional.
- Em fundo escuro, usar exclusivamente a versão `light`.
