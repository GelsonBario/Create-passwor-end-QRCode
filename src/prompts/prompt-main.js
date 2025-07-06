import chalk from "chalk";

const mainPrompt = [
  {
    name: "select",
    description: chalk.yellow.bold("Escolha a ferramenta (1- QRCODE, 2- PASSWORD, 3- SAIR)"),
    pattern: /^[1-3]+$/,
    message: chalk.red.italic("Escolha um número válido (1, 2 ou 3)"),
    required: true,
  },
];

export default mainPrompt;