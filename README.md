# Create-passwor-end-QRCode
Estrutura e Lógica do Menu Principal:

O menu principal agora funciona em loop, permitindo que o usuário utilize uma ferramenta e depois retorne ao menu, em vez de o programa encerrar.

Adicionada uma opção "Sair" para fechar o programa de forma limpa.

Uso de uma estrutura switch para melhor legibilidade.

Ferramenta de QR Code:

Nova Função: Além de exibir o QR Code no terminal, o usuário agora tem a opção de salvá-lo como um arquivo de imagem (.png).

Adicionada a biblioteca qrcode, que é mais versátil para salvar arquivos.

Ferramenta de Geração de Senha:

Mais Interatividade: Em vez de depender apenas do arquivo .env, o programa agora pergunta interativamente ao usuário o comprimento da senha e quais tipos de caracteres incluir (maiúsculas, minúsculas, números, símbolos).

Segurança Aprimorada: Substituí Math.random() por crypto.randomInt(), que é uma fonte de aleatoriedade criptograficamente segura, ideal para gerar senhas.

Nova Função: Adicionada a opção de copiar a senha gerada diretamente para a área de transferência para maior conveniência, usando a biblioteca clipboardy.

Gerenciamento de Pacotes (package.json):

Adicionadas as novas dependências (qrcode, clipboardy).

Adicionado nodemon como uma devDependency com um script "dev" para facilitar o desenvolvimento.

Arquivo .gitignore:

Adicionado o arquivo .env para garantir que as variáveis de ambiente e segredos não sejam enviados para o repositório Git.

Estrutura de Arquivos Recomendada
Para manter tudo organizado, esta é a estrutura de pastas e arquivos que usaremos:

├── .env

├── .gitignore

├── package.json

└── src/

    ├── index.js
    
    ├── prompts/
    
    │   ├── prompt-main.js
    
    │   └── prompt-qrcode.js
    
    └── services/
    
        ├── password/
        
        │   ├── create.js
        
        │   └── handle.js
        
        └── qr-code/
        
            ├── create.js
            
            └── handle.js
