import prompt from "prompt";
import promptQRCode, { promptFileName } from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  prompt.start();

  // 1. Faz as perguntas iniciais
  prompt.get(promptQRCode, (err, result) => {
    if (err) {
      console.log("Operação cancelada.");
      return;
    }

    // 2. Se o usuário quiser salvar, pergunta o nome do arquivo
    if (result.save.toLowerCase() === 's') {
      prompt.get(promptFileName, (errFile, resultFile) => {
        if (errFile) {
          console.log("Operação cancelada.");
          return;
        }

        // Combina os resultados das duas perguntas em um único objeto
        const finalResult = { ...result, ...resultFile };
        handle(null, finalResult);
      });
    } else {
      // Se não quiser salvar, chama o handle apenas com o primeiro resultado
      handle(null, result);
    }
  });
}


export default createQRCode;