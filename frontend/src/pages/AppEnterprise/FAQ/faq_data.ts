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
      question: "Como cadastro uma nova empresa?",
      answer:
        "Na tela de registro, preencha nome, CNPJ, e‑mail, senha e, opcionalmente, um banner. Após enviar, você receberá um token para convidar funcionários.",
    },
    {
      question: "Como convido um funcionário?",
      answer:
        "No painel de funcionários, use o token da empresa ou envie o e‑mail dele; ao aceitar o convite, o funcionário terá acesso ao estoque da sua empresa.",
    },
    {
      question: "Como adiciono um produto ao estoque?",
      answer:
        "Vá em Produtos → Cadastrar Produto, informe nome, descrição, preço, categoria e foto. Após salvar, ele aparecerá na lista de produtos.",
    },
    {
      question: "O que é estoque mínimo?",
      answer:
        "É a quantidade mínima de um produto que você deseja manter; quando o estoque cair abaixo desse valor, o sistema alerta que é hora de repor.",
    },
  ];