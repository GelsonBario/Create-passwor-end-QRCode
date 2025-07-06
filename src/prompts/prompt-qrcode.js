import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.green("Digite o link para gerar o QRCode"),
  },
  {
    name: "type",
    description: chalk.green("Escolha entre o tipo de QRCode (1- NORMAL ou (2- TERMINAL"),
    pattern: /^[1-2]+$/,
    message: chalk.magenta.italic("Escolha apenas itens válidos"),
    required: true
  },
  
];

export default promptQRCode;