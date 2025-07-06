import chalk from "chalk";

const mainPrompt = [
  {
    name: "select",
    description: chalk.yellow.bold("Escolha a ferramenta (1- QRCODE ou (2- PASSWORD"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha um número válido"),
    required: true,
  },
];

export default mainPrompt