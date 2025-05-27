interface FaqItemProps {
    question: string;
    answer: string;
}

export const FAQ_DATA: FaqItemProps[] = [
    {
      question: "O que é o SyncStock?",
      answer:
        "O SyncStock é uma plataforma para gestão de estoque e equipe, que permite o cadastro de empresas, funcionários e o controle de produtos de forma simples e segura.",
    },
    {
      question: "Como faço movimentações de produtos?",
      answer:
        "Vá em Produtos → Botão de Movimentações → Informe o tipo de movimentação (entrada ou saída) e a quantidade desejada.",
    },
    {
      question: "Como visualizo os produtos da empresa?",
      answer:
        "Acesse a aba Produtos. Opcionalmente, você pode utilizar os filtros para facilitar a busca por um item específico.",
    },
    {
      question: "Como adicionar um produto ou categoria na empresa?",
      answer:
        "Essa função é exclusiva dos administradores. Como funcionário, você pode apenas visualizar produtos e categorias, além de realizar movimentações.",
    },
    {
      question: "O que é estoque mínimo?",
      answer:
        "É a quantidade mínima de um produto que você deseja manter; quando o estoque cair abaixo desse valor, o sistema alerta que é hora de repor.",
    },
  ];