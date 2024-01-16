### Boilerplate Node.js com Sequelize e PostgreSQL

Este é um boilerplate Node.js que utiliza Sequelize como ORM e PostgreSQL como banco de dados. Ele foi projetado para facilitar o início de novos projetos, fornecendo uma estrutura sólida e alguns scripts úteis para desenvolvimento e gerenciamento de banco de dados.

#### Requisitos

Certifique-se de ter os seguintes requisitos instalados na sua máquina:

- Node.js
- PostgreSQL

Instalação:

- Após clonar o repositório, instale as dependencias:

> npm install ou yarn

#### Docker

Existe um dockerfile e um docker-compose para que seja possivel rodar via docker, configure as variaveis de ambiente e rode o comando:

> docker compose up -d

#### Comandos Disponíveis

- `npm run dev`: Inicie o servidor local para desenvolvimento usando nodemon. Ele irá monitorar alterações nos arquivos TypeScript (`.ts`) e reiniciar o servidor automaticamente.

- `npm run build`: Compile o projeto TypeScript para JavaScript e coloque os arquivos compilados no diretório `./build`.

- `npm run compile`: Compile o projeto TypeScript manualmente.

- `npm start`: Inicie o servidor a partir dos arquivos compilados em JavaScript no diretório `./build`.

- `npm run db:reset`: Recrie o banco de dados. Este comando executa as seguintes etapas em ordem: compila o código TypeScript, exclui o banco de dados existente, cria um novo banco de dados, executa todas as migrações e preenche o banco de dados com dados iniciais (se houver).

- `npm run db:init`: Inicialize o banco de dados. Este comando compila o código TypeScript, cria um novo banco de dados, executa todas as migrações e preenche o banco de dados com dados iniciais (se houver).

#### Configuração do Banco de Dados

Para configurar as opções do banco de dados, você pode editar o arquivo src/config/database.ts. Certifique-se de que as configurações estejam corretas antes de executar comandos relacionados ao banco de dados.
