import { randomInt } from "crypto";

// Função para gerar um array de caracteres permitidos com base nas opções
async function getPermittedCharacters(options) {
  let permitted = [];

  if (options.includeUppercase) {
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (options.includeLowercase) {
    permitted.push(..."abcdefghijklmnopqrstuvwxyz");
  }
  if (options.includeNumbers) {
    permitted.push(..."0123456789");
  }
  if (options.includeSpecial) {
    permitted.push(..."!@#$%^&*()_+-=[]{}|;:,.<>?");
  }

  return permitted;
}

// Função principal que gera a senha
async function createPassword(options) {
  const characters = await getPermittedCharacters(options);

  if (characters.length === 0) {
    console.log("Você deve selecionar pelo menos um tipo de caractere para gerar a senha.");
    return null;
  }

  let password = "";
  for (let i = 0; i < options.length; i++) {
    // Usa crypto.randomInt para uma geração de número aleatório mais segura
    const randomIndex = randomInt(0, characters.length);
    password += characters[randomIndex];
  }

  return password;
}

export default createPassword;