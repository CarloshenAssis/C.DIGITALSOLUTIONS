export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Conteúdo estático gerado no servidor a partir de src/config.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
