import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
  if(err){
    console.log("Error on application");
    return;
  }

  const isSmail = result.type == 2;
  qr.generate(result.link, {small: isSmail}, (qrcode) => {
    console.log(chalk.blue("QRCode gerado com sucesso:\n"))
    console.log(qrcode);
  });
}

export default handle