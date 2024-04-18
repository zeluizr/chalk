import chalk from "chalk";

// Simulando a carga de um JSON
const data = {
  produtos: [
    { id: 1, nome: "Teclado Mecânico", preco: 250.0, disponivel: true },
    { id: 2, nome: "Mouse Gamer", preco: 150.0, disponivel: false },
    { id: 3, nome: "Monitor LED 24''", preco: 700.0, disponivel: true },
    { id: 4, nome: "Cabo USB", preco: 25.0, disponivel: true },
    { id: 5, nome: "Webcam HD", preco: 300.0, disponivel: false },
  ],
};

console.log(chalk.bold("Lista de Produtos:\n"));
data.produtos.forEach((produto) => {
  let disponibilidade = produto.disponivel
    ? chalk.green("Disponível")
    : chalk.red("Indisponível");

  console.log(
    chalk.bold(produto.nome) +
      " - Preço: " +
      chalk.blue(`R$${produto.preco.toFixed(2)}`) +
      " - " +
      disponibilidade
  );
});
