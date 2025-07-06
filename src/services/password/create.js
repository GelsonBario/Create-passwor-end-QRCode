import chalk from "chalk";
import prompt from "prompt";
import clipboard from "clipboardy";
import createPassword from "./handle.js";

async function main() {
  prompt.start();
  const questions = [
    {
      name: "length",
      description: chalk.cyan("Qual o tamanho da senha?"),
      pattern: /^\d+$/,
      message: "Por favor, digite um número.",
      default: process.env.PASSWORD_LENGTH || 12,
    },
    {
      name: "uppercase",
      description: chalk.cyan("Incluir letras maiúsculas? (s/n)"),
      pattern: /^[snSN]$/,
      default: 's'
    },
    {
      name: "lowercase",
      description: chalk.cyan("Incluir letras minúsculas? (s/n)"),
      pattern: /^[snSN]$/,
      default: 's'
    },
    {
      name: "numbers",
      description: chalk.cyan("Incluir números? (s/n)"),
      pattern: /^[snSN]$/,
      default: 's'
    },
    {
      name: "special",
      description: chalk.cyan("Incluir caracteres especiais? (s/n)"),
      pattern: /^[snSN]$/,
      default: 'n'
    }
  ];

  prompt.get(questions, async (err, result) => {
    const options = {
      length: parseInt(result.length),
      includeUppercase: result.uppercase.toLowerCase() === 's',
      includeLowercase: result.lowercase.toLowerCase() === 's',
      includeNumbers: result.numbers.toLowerCase() === 's',
      includeSpecial: result.special.toLowerCase() === 's'
    };

    const password = await createPassword(options);
    if(password) {
        console.log(chalk.green.bold("\nSenha gerada com sucesso:"));
        console.log(chalk.white.bgBlack(` ${password} `));

        // Opção para copiar para a área de transferência
        prompt.get([{
            name: "copy",
            description: chalk.yellow("\nDeseja copiar a senha para a área de transferência? (s/n)"),
            pattern: /^[snSN]$/,
            default: 's'
        }], (err, copyResult) => {
            if(copyResult.copy.toLowerCase() === 's') {
                clipboard.writeSync(password);
                console.log(chalk.blue.bold("Senha copiada!"));
            }
        });
    }
  });
}

export default main;