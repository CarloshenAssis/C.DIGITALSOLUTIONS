# Assinatura "Digital solution by C."

Componente oficial de crédito nos sites entregues a clientes.
É um crédito, não um anúncio: deve ser discreto e nunca competir com a marca
do cliente.

## Regras

- Vai no rodapé, ao lado do aviso de copyright do cliente.
- Opacidade base de 55%, chegando a 100% apenas no hover.
- Tamanho máximo de 12px.
- Nunca usar cor de destaque além do quadrado azul de 5px.
- Sempre com `target="_blank"` e `rel="noopener noreferrer"`.
- Nunca inserir sem o cliente saber que está lá.

## React / Next.js

Já existe no projeto: `src/components/brand/SignatureByC.tsx`.

```tsx
import SignatureByC from "@/components/brand/SignatureByC";

<div className="footer-bottom">
  <span>© 2026 Nome do Cliente</span>
  <SignatureByC href="https://cdigitalsolutions.com.br" />
</div>
```

Em rodapé escuro:

```tsx
<SignatureByC tone="dark" />
```

## HTML + CSS puro

Para sites que não usam React.

```html
<a
  class="c-signature"
  href="https://cdigitalsolutions.com.br"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>Digital solution by</span>
  <strong>C.</strong>
  <i aria-hidden="true"></i>
</a>
```

```css
.c-signature {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  letter-spacing: -0.005em;
  text-decoration: none;
  color: #111318;
  opacity: 0.55;
  transition: opacity 0.3s ease;
}

.c-signature:hover {
  opacity: 1;
}

.c-signature strong {
  font-weight: 600;
  letter-spacing: -0.03em;
}

.c-signature i {
  width: 5px;
  height: 5px;
  border-radius: 1px;
  background: #2f6fed;
  transition: transform 0.3s ease;
}

.c-signature:hover i {
  transform: scale(1.25);
}

/* rodapé escuro */
.c-signature--dark {
  color: #f4f4f1;
}
```

## Resultado esperado

```
© 2026 Nome do Cliente                    Digital solution by C. ■
```
