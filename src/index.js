import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  let running = true;

  while (running) {
    prompt.get(mainPrompt, async (err, choose) => {
      if (err) {
        console.log("Ocorreu um erro no programa.");
        running = false;
        return;
      }

      switch (choose.select) {
        case '1':
          await createQRCode();
          break;
        case '2':
          await createPassword();
          break;
        case '3':
          running = false;
          console.log("Saindo do programa. Até mais!");
          break;
        default:
          // O pattern no prompt já lida com isso, mas é uma boa prática ter um default.
          console.log("Opção inválida. Tente novamente.");
          break;
      }
    });

    // Aguarda a conclusão da operação antes de possivelmente sair do loop
    await new Promise(resolve => prompt.stop = resolve);
    if (!running) {
        process.exit();
    }
  }
}

main();