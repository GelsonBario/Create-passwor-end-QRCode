import qrTerminal from "qrcode-terminal";
import qrCode from "qrcode";
import chalk from "chalk";

async function handle(err, result) {
  if (err) {
    console.log(chalk.red.bold("Erro na aplicação:"), err);
    return;
  }

  // Imprime o QR Code no terminal
  const isSmall = result.type == 2;
  console.log(chalk.blue("QRCode gerado para o terminal:"));
  qrTerminal.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(qrcode);
  });

  // Pergunta se deseja salvar em arquivo
  if (result.save.toLowerCase() === 's') {
    const fileName = `${result.fileName.replace(/\s/g, '-')}.png`;
    console.log(chalk.yellow(`Salvando QR Code no arquivo: ${fileName}...`));
    
    qrCode.toFile(`./${fileName}`, result.link, (error) => {
      if(error) {
        console.log(chalk.red("Erro ao salvar o arquivo QR Code."));
        return;
      }
      console.log(chalk.green.bold("Arquivo QR Code salvo com sucesso!"));
    });
  }
}

export default handle;