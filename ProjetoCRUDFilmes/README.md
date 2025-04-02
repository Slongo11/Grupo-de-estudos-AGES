# Sprint 3

Para este desafio será necessário fazer o backend, mais especificamente uma `API`, que vai realizar o básico do `CRUD`, que envolve criar, consultar, atualizar e deletar dados. Os dados a serem usados e mapeados são `filmes` e `reviews`.

## Sumário

- [Modelagem dos dados](#modelagem-dos-dados)
- [Métodos HTTP](#métodos-http)
  - [Filme](#filme)
  - [Review](#review)
- [Tecnologias](#tecnologias)
- [Arquivo package.json](#arquivo-packagejson)
  - [Comandos para configuração](#comandos-para-configuração)
- [tsconfig.json arquivo para o typescript](#tsconfigjson)
- [Comandos](#comandos)
- [Sites de referências](#sites-de-referências)

## Modelagem dos dados

Filme:

```JSON
{
    "id": 1,
    "title": "Hobbit",
    "description": "follows Bilbo Baggins as he joins a group of dwarves on a quest to reclaim their lost kingdom, Erebor, from the dragon Smaug, encountering various dangers and the infamous ring along the way",
    "director": "Peter Jackson",
    "releaseYear": 2013,
    "genres": "action"
}
```

Os gêneros do filmes são definidos como:

- action (Ação)
- comedy (Comédia)
- drama (Drama)
- fantasy (Fantasia)
- horror (Terror)
- mystery (Mistério)
- romance (Romance)
- thriller (Suspense)

Review:

```JSON
{
    "id": 1,
    "review": "Really good film, i love it <3",
    "rating": 9.7,
    "filmId": 1
}
```

Para avaliações a notas podem variar de `0 até 10`.

## Métodos HTTP

### Filme

- **POST** `/films`
  - Descrição: Rota de cadastro;
  - Precisa de autenticação: Não;
  - Corpo da requisição:

```JSON
{
    "title": "Hobbit",
    "description": "follows Bilbo Baggins as he joins a group of dwarves on a quest to reclaim their lost kingdom, Erebor, from the dragon Smaug, encountering various dangers and the infamous ring along the way",
    "director": "Peter Jackson",
    "releaseYear": 2012,
    "genres": "action"
}

``` 

- Retorno: 201 (Created).

- **GET** `/films/{id}`

  - Descrição: Rota para obter um filme conforme o id;
  - Precisa de autenticação: Não;
  - Corpo da requisição: nenhum;
  - Retorno: 200 (OK) com o corpo do filme desejado:

```JSON
{
    "id": 1,
    "title": "Hobbit",
    "description": "follows Bilbo Baggins as he joins a group of dwarves on a quest to reclaim their lost kingdom, Erebor, from the dragon Smaug, encountering various dangers and the infamous ring along the way",
    "director": "Peter Jackson",
    "releaseYear": 2012,
    "genres": "action"
}
```

- **GET** `/films`

  - Descrição: Rota para obter um filme conforme o id;
  - Precisa de autenticação: Não;
  - Corpo da requisição: nenhum;
  - Retorno: 200 (OK) com o corpo do filme desejado:

```JSON
[
    {
        "id": 1,
        "title": "Hobbit",
        "description": "follows Bilbo Baggins as he joins a group of dwarves on a quest to reclaim their lost kingdom, Erebor, from the dragon Smaug, encountering various dangers and the infamous ring along the way",
        "director": "Peter Jackson",
        "releaseYear": 2012,
        "genres": "action"
    },
    {
        "id": 2,
        "title": "The Hobbit: The Desolation of Smaug",
        "description": "Bilbo Baggins, a hobbit, and his companions face great dangers on their journey to Laketown. Soon, they reach the Lonely Mountain, where Bilbo comes face-to-face with the fearsome dragon Smaug.",
        "director": "Peter Jackson",
        "releaseYear": 2013,
        "genres": "action"
    }
]
```

- **PATCH** `/films/{id}`

  - Descrição: Rota para atualizar um filme conforme o id;
  - Precisa de autenticação: Não;
  - Corpo da requisição:

```JSON
{
    "title": "Hobbit",
    "description": "follows Bilbo Baggins as he joins a group of dwarves on a quest to reclaim their lost kingdom, Erebor, from the dragon Smaug, encountering various dangers and the infamous ring along the way",
    "director": "Peter Jackson",
    "releaseYear": 2012,
    "genres": "action"
}
```

> Enviar apenas os campos ao qual deseja ser atualizado.

- Retorno: 204 (No Content);

- **DELETE** `/films{id}`

  - Descrição: Rota para remover um filme conforme o id;
  - Precisa de autenticação: Não;
  - Corpo da requisição: nenhum;
  - Retorno: 204 (No Content);

### Review

- **POST** `/reviews`
  - Descrição: Rota de cadastro;
  - Precisa de autenticação: Não;
  - Corpo da requisição:

```JSON
{
    "review": "Really good film, i love it <3",
    "rating": 9.7,
    "filmId": 1
}
```

- Retorno: 201 (Created).

- **GET** `/reviews/{id}`

  - Descrição: Rota para obter uma review conforme o id;
  - Precisa de autenticação: Não;
  - Corpo da requisição: nenhum;
  - Retorno: 200 (OK) com o corpo da review desejada:

```JSON
{
    "id": 1,
    "review": "Really good film, i love it <3",
    "rating": 9.7,
    "filmId": 1
}
```

- **GET** `/reviews`

  - Descrição: Rota para obter um filme conforme o id;
  - Precisa de autenticação: Não;
  - Corpo da requisição: nenhum;
  - Retorno: 200 (OK) com o corpo do filme desejado:

```JSON
[
    {
        "id": 1,
        "review": "Really good film, i love it <3",
        "rating": 9.7,
        "filmId": 1
    },
    {
        "id": 1,
        "review": "Really good film, i love it too <3",
        "rating": 9.8,
        "filmId": 2
    }
]
```

- **PATCH** `/reviews/{id}`

  - Descrição: Rota para atualizar uma review conforme o id;
  - Precisa de autenticação: Não;
  - Corpo da requisição: 

```JSON
{
    "review": "Really good film, i love it <3",
    "rating": 9.7,
    "filmId": 1
}
```

> Enviar apenas os campos ao qual deseja ser atualizado.

- Retorno: 204 (No Content);

- **DELETE** `/review{id}`

  - Descrição: Rota para remover uma review conforme o id;
  - Precisa de autenticação: Não;
  - Corpo da requisição: nenhum;
  - Retorno: 204 (No Content);

## Tecnologias

- Typescript
- NodeJS
- Postegres (Banco de dados relacional)
- Primas (Consultas SQL)
- node-config (Configura o banco de dados)

## Arquivo package.json

Neste arquivo ele possui a estrutura do projeto, suas dependencias das bibliotecas, além disso, os [comandos](#comandos) que devem ser executados para rodar a API.

### Comandos para configuração

- npm init -y

> inicia a configuração do projeto package.json

- npm install express dotenv npm install -D typescript ts-node @types/node @types/express nodemon eslint prettier

> baixa as dependências para rodar o formatador de código, o typescript, express, nodemon e eslint

- npx tsc --init

> configura o typescript em seu processo de build

- npm install --save-dev prettier

> precisa configurar o arquivo referente ao prettier (.prettierrc.json)

- npm install @prisma/client
- npm install prisma --save-dev
- npx prisma init
- npx prisma generate
- npx prisma migrate dev --name init

> configura o prisma

Além disso é necessário colocar nos scripts do package.json

```JSON
 "scripts": {
    "build": "tsc",
    "start": "node dist/server.js",
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/server.ts",
    "lint": "eslint 'src/**/*.ts'",
    "format": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\"",
  },
  "prisma": {
      "schema": "./prisma/schema.prisma"
  },
```

- **Nodemon**

Sua funcionalidade é para ajudar os desenvolvedores a programar, atualizando a aplicação quando sofrer alguma alteração no código.

- **Eslint**

Eslint serve para detectar erros de sintaxe no código, muito útil pois avisa e marca os erros referentes.

- **Prettier**

Ajuda formatar o código automaticamente, baseado em um estilo. Usando o seguinte comando `npx prettier --write src/index.ts` para arquivps separados, ou como ja está configurado no arquivo package.json podemos usar `npm run format`.

- **Postgres**

Banco de dados relacional, ao qual será usado para armazenar os dados para essa API. Para isso precisamos colocar uma URL ao qual será utilizada para o banco, por exemplo `export DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres` em um `.env`.

- **Prisma**

Prisma vai serve para fazer consultas no banco de dados, para mais informações de migration do banco de dados o site [prisma docs](https://www.prisma.io/docs) ajuda e muito. Instalndo o prisma `npm install @prisma/client` e logo em seguida `npx prisma generate`, sempre que realizar uma modificação é necessário atualizar o prisma, utilizando o `npx prisma migrate dev`.

## tsconfig.json

Apresenta a configuaração de compilação do typescript para javascript. Como por exemplo:

```JSON
{
    "compilerOptions": {
        /* Language and Environment */
        "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
        /* Modules */
        "module": "commonjs" /* Specify what module code is generated. */,
        "rootDir": "./src" /* Specify the root folder within your source files. */,
        "outDir": "./dist",
        "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
        "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
        "strict": true /* Enable all strict type-checking options. */,
        "skipLibCheck": true /* Skip type checking all .d.ts files. */
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```

## Comandos

- `npm run dev` roda a API local.
- `npm run build` build o projeto.
- `npm run start` roda a API local após o build.
- `npm run lint` utiliza o Eslint em todos os arquivos para ver sintaxe erro.
- `npm run format` ajusta a formatação do código.
- `npm run migrate ...` cria uma migration.
- `tsc --init` inicia um arquivo para configuração do typescript


## Sites de referências

- [How to set up TypeScript with Node.js and Express](https://blog.logrocket.com/express-typescript-node/)
- [Node.js PostgreSQL Connection](https://help.scalegrid.io/docs/postgresql-connecting-to-nodejs-driver)
- [Database migrations with Node.js and PostgreSQL](https://synvinkel.org/notes/node-postgres-migrations)