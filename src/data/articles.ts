export type Article = {
  slug: string;
  index: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  /** Parágrafos. Conteúdo aberto para expansão posterior. */
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "nem-todo-problema-precisa-de-ferramenta",
    index: "01",
    title: "Por que nem todo problema precisa de uma nova ferramenta",
    category: "Perspectiva",
    date: "2026-02-10",
    readingTime: "4 min",
    excerpt:
      "A pergunta que economiza mais dinheiro em um projeto digital raramente é técnica.",
    body: [
      "Existe um reflexo comum quando algo não vai bem em uma operação: procurar uma ferramenta. Um sistema, um aplicativo, uma plataforma, um plano anual. A ferramenta chega, a equipe é treinada, o problema continua — agora com uma assinatura mensal.",
      "Na maior parte das vezes, o que estava errado não era a ausência de software. Era a ausência de definição. Ninguém tinha escrito, em nenhum lugar, qual era exatamente o fluxo, quem decidia o quê e em que ordem. Automatizar um processo indefinido produz um processo indefinido mais rápido.",
      "Por isso a primeira etapa de qualquer projeto que eu conduzo não envolve escolher tecnologia. Envolve descrever o que acontece hoje, com nomes, etapas e responsáveis. É uma conversa desconfortável, porque frequentemente revela que o problema não estava onde se imaginava.",
      "Às vezes o resultado dessa conversa é um sistema. Às vezes é uma automação. E às vezes é a constatação de que bastava mudar a ordem de duas etapas. As três respostas são boas. A única resposta ruim é construir algo caro para resolver um problema que ninguém formulou.",
    ],
  },
  {
    slug: "quando-um-processo-pede-automacao",
    index: "02",
    title: "Quando um processo manual começa a pedir automação",
    category: "Processo",
    date: "2026-01-22",
    readingTime: "5 min",
    excerpt:
      "Existem sinais bem concretos. Nenhum deles é 'porque todo mundo está automatizando'.",
    body: [
      "Nem toda tarefa repetitiva deve ser automatizada. Automatizar tem custo: de construção, de manutenção e de atenção quando algo quebra. A pergunta certa não é se dá para automatizar — quase sempre dá. É se compensa.",
      "Três sinais costumam indicar que sim. O primeiro é frequência: a tarefa acontece várias vezes por semana, sempre do mesmo jeito. O segundo é regra: existe um critério claro do que fazer em cada situação, e não um julgamento que muda conforme o caso. O terceiro é consequência: quando alguém esquece, algo ruim acontece — um prazo perdido, um dado inconsistente, um cliente sem resposta.",
      "Quando os três aparecem juntos, automatizar deixa de ser modernização e vira redução de risco. Quando só um aparece, geralmente é mais barato melhorar o processo do que codificá-lo.",
      "O erro mais caro que vejo não é automatizar cedo demais. É automatizar uma regra que ninguém validou, e só descobrir isso quando o volume já cresceu.",
    ],
  },
  {
    slug: "o-que-um-bom-site-precisa-fazer",
    index: "03",
    title: "O que um bom site precisa fazer além de parecer bonito",
    category: "Digital",
    date: "2025-12-15",
    readingTime: "4 min",
    excerpt:
      "Estética é pré-requisito, não entrega. A entrega é o que acontece depois que a pessoa entra.",
    body: [
      "Um site bonito que não responde às perguntas certas é uma vitrine sem placa de preço. A pessoa olha, aprova e vai embora — sem nunca ter descoberto se aquilo servia para ela.",
      "Antes de definir uma paleta, eu costumo listar as perguntas que alguém tem ao chegar: o que essa empresa faz, se ela atende o meu caso, se é confiável e como falar com alguém. Se a página não responde a essas quatro coisas em poucos segundos, o design está trabalhando contra o negócio.",
      "Isso não significa abrir mão de direção visual. Significa o contrário: a direção visual existe para tornar essas respostas mais rápidas e mais críveis. Hierarquia é uma decisão de negócio disfarçada de decisão estética.",
      "O teste que aplico no final é simples. Abro a página como se nunca tivesse visto, olho por cinco segundos e fecho. Se eu não consigo dizer o que aquela empresa faz, não é o conteúdo que precisa crescer. É a hierarquia que precisa ser refeita.",
    ],
  },
  {
    slug: "ia-como-ferramenta-nao-como-estrategia",
    index: "04",
    title: "IA como ferramenta, não como estratégia",
    category: "Tecnologia",
    date: "2025-11-28",
    readingTime: "5 min",
    excerpt:
      "Adotar IA não é uma estratégia. É uma escolha de implementação dentro de uma.",
    body: [
      "Quando uma empresa diz que quer usar inteligência artificial, ela raramente quer isso. O que ela quer é responder mais rápido, gastar menos tempo em tarefas manuais ou entender melhor os próprios dados. IA pode ser o caminho para qualquer um desses objetivos — ou pode ser um desvio caro.",
      "A diferença está na ordem das perguntas. Começar por 'onde posso aplicar IA' produz projetos que impressionam em demonstração e somem em três meses. Começar por 'onde estamos perdendo tempo ou dinheiro' produz uma lista curta de problemas reais, e aí sim dá para avaliar quais deles se beneficiam de IA.",
      "Na prática, uso IA todos os dias: para acelerar desenvolvimento, para analisar volumes de informação que levariam horas e para estruturar conteúdo. Ela encurta caminhos reais. Só não define qual caminho seguir.",
      "Tecnologia muda rápido. Problemas de negócio continuam existindo. Quem entende o segundo consegue trocar o primeiro sem refazer tudo.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
