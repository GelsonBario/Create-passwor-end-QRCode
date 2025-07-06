import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.green("Digite o link para gerar o QRCode"),
    required: true,
  },
  {
    name: "type",
    description: chalk.green("Escolha entre o tipo de QRCode (1- NORMAL ou 2- PEQUENO)"),
    pattern: /^[1-2]+$/,
    message: chalk.magenta.italic("Escolha apenas 1 ou 2"),
    required: true
  },
  {
    name: "save",
    description: chalk.blue("Deseja salvar o QR Code em um arquivo .png? (S/N)"),
    pattern: /^[snSN]$/,
    message: chalk.magenta.italic("Responda apenas com S ou N"),
    required: true,
  }
];

// Pergunta separada para o nome do arquivo
export const promptFileName = [
    {
        name: "fileName",
        description: chalk.blue("Digite o nome do arquivo para o QR Code"),
        required: true,
    }
];


export default promptQRCode;