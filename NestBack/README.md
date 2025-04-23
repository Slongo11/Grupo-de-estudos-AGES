# Sprint4-Grupo5

Este repositório é para organizar o time de desenvolvimento da sprint 4, do grupo de estudos da ages. Ao qual temos como objetivo fazer o backend de um front já existente, seguindo as especificações do projeto, como mostrado no [README](https://github.com/Grupo-de-Estudos-AGES-Creatus/Sprint-4/blob/main/README.md) da sprint; sendo assim, será realizado um CRUD mais avançado com autenticação com JWT, controlando nivel de acesso dentre 1 até 5.

## Integrantes do grupo

- [André Luiz Goi Quatrin](https://github.com/Andre6925)
- [Eduardo Spies Acauan](https://github.com/eduardoacauan)
- [Matheus Darde Holdefer](https://github.com/dardematheus).
- [Pedro Henrique Corral Livi](https://github.com/Livi2112)
- [Rodrigo Miotto Slongo](https://github.com/Slongo11).

## Sumário

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Padrão do projeto GIT](#padrão-do-projeto-git)
  - [Como criar nomes das branch (normas)](#como-criar-nomes-das-branch-normas)
  - [Realizar commits](#realizar-commits)
  - [Criar pull request](#criar-pull-request)
- [Inicializar a apliação](#inicializar-a-apliação)
- [Finalizar a aplicação](#finalizar-a-aplicação)
- [Rodando completamente a aplicação](#rodando-completamente-a-aplicação)
- [Problemas com Podman](#problemas-com-podman)
- [Problemas com Prisma](#problemas-com-prisma)
- [Problemas com Nest](#problemas-com-nest)
- [Configuração do Compose](#configuração-do-compose)
  - [Configuração do arquivo compose.yaml](#configuração-do-arquivo-composeyaml)

## Tecnologias utilizadas

- [Podman](https://podman.io/) ou [Docker](https://www.docker.com/).
- [Nestjs](https://docs.nestjs.com/)
- TypeScript
- [Prisma](https://www.prisma.io/docs?utm_medium=promo-generate-v5-17&utm_source=cli&utm_campaign=tip-1-pulse)
- [Postgres](https://hub.docker.com/_/postgres)

## Padrão do projeto GIT

Para realizar qualquer alteração no projeto, TODAS as branchs devem ser iniciadas na branch release/1.0 ao qual é acessada após ter feito o clone do repositório:

```bash
# clona o repositório atual
git clone <link>

# cria a branch que deve ser usada para fazer operações de merge 
# e de criar novas apartir de versões dela.
# a flag -b indica que após criar uma branch vai ser mudada para ela.
git checkout -b release/1.0

# atualiza a branch atual
git pull origin release/1.0

# cria a sua branch de desenvolvimento
git checkout -b <nome-da-branch>
```

Agora é possível desenvolver na branch com a qual deve seguir algumas [normas](#como-criar-nomes-das-branch-normas)

*****

### Como criar nomes das branch (normas)

Para criar novas branchs devemos seguir a seguinte nomenclatura `git branch feature/nome-da-feature`, como já está exemplificado no trello, no entanto podem surgir funcionalidades que não foram previstas, e então é necessário seguir este padrão

*****

### Realizar commits

Para realizar commits antes de tudo verifique em qual branch está localizado, utilizando o seguinte comando:

```sh
git branch
```

Ao qual vai listar todas a branchs do projeto baixadas e local, assim vai aparecer um `*` que indica a branch atual. Antes de adicionar qualquer elemento com o `git add <arquivo>` olhar suas modificações estão de acordo com sua intenção, utilize o seguinte comando:

```sh
git status
```

Após adicionar todos os arquivos para o commit usando o `git add <arquivo>`, realize o commit com um nome *discritivo* como o exemplo:

```sh
git commit -m "Adiciona modificação referente as permissões do usuário"
```

Quando realizar o commit, suba para o repositório remoto, com o seguinte comando:

```sh
git push origin <nome-da-sua-branch>
```

*****

### Criar pull request

Os pull requests devem ser criados apenas quando foi terminado alguma feature, sendo que deve estar funcionando, além disso, o mais importante é NUNCA fazer `force push` em nenhuma branch. Sendo assim, todos os pull requests devem ser da `sua branch` para a `release/1.0` NUNCA na `main`.

*****

## Inicializar a apliação

Habilitar o seu sistema operacional executar o script `init-compose.sh` é necessário colocar o seguinte comando supondo que esteja na raiz do projeto:

```sh
chmod +x init-compose.sh
```

Em seguida só colocar o seguinte script:

```sh
./init-compose.sh
```

*****

## Finalizar a aplicação

Mais uma vez, caso não tenha habilitado o bash de funcionar utilize:

```sh
chmod +x stop.sh
```

Para finalizar a aplicação de funcinar é necessário aplicar o seguinte comando:

```sh
./end.sh
```

*****

## Rodando completamente a aplicação

Para rodar completamente usamos o script:

```sh
./init.sh
```

Este comando vai iniciar automaticamente o Prettier e além disso o docker ou o podman, que vai executar o compose.

Mais uma vez utilizar o comando para permitir o script:

```sh
chmod +x init.sh
```

*****

## Problemas com Podman

Para rodar o Podman é necessário inicializar a VM `podman machine init` e `podman machine start` após ter feito isso, rodar o `./init-compose.sh`. Isso ocorre para maquinas que são diferente de linux, seja mac ou windows é necessário inicializar a VM. Para mais informações [Podman Installation Instructions](https://podman.io/docs/installation).

*****

## Problemas com Prisma

O prisma resultou em grandes problemas, quando falamos para rodar em containers ou na maquina, ao qual resultou em algumas soluções, para rodar localmente o `.env` ao qual configura o BD deve ser colocado:

```sh
DATABASE_URL=postgresql://usuario:senha@localhost:5432/sealco?schema=public
```

E para configurar no container:

```sh
DATABASE_URL=postgresql://usuario:senha@db:5432/sealco?schema=public
```

Mas ainda para operar completamente foi necessário remover aonde o /dist iria aparecer os arquivos gerado pelo prisma.

*****

## Problemas com Nest

O nest quando existe a chamada referencia circular, em que um módulo chama o outro, ficando nesse loop, é necessário colocar o seguinte trecho no construtor:

```typeScript
@Inject(forwardRef(() => AuthService))
private authService: AuthService,
```

Indicando que é necessário chamar obrigatoriamente a classe, evitando a referência circular. Isso é aplicado em ambas as classes.

*****

## Configuração do Compose

Para configurar o Compose foi utilizado os seguintes comando no Dockerfile do backend:

- FROM: Indica qual é a imagem que deve ser baixada antes de executar seu container
- WORKDIR: Muda o diretório ao qual vai ser trabalhado dentro do container.
- EXPOSE: Indica qual é a porta que a aplicação está ouvindo.
- COPY: Copia os arquivos da origem para o destino.
- RUN: Executa comando para build
- CMD: Indica o comando que deve ser executado por padrão.

```DOCKERFILE
FROM node:23

WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN npm install

RUN npx prisma generate

CMD ["npm", "run", "start:dev"]
```

Para executar manualmente podemos rodar os seguintes comandos

```sh
# builda o projeto, -t indica qual é o nome e a tag da imagem
podman build -t nestjs .

# roda a imagem na porta 3000
podman run -p 3000:3000 nestjs

# a flag -f inica qual arquivo do docker deseja executar
podman build -t nestjs-prod -f Dockerfile .
```

*****

### Configuração do arquivo compose.yaml

Para o banco de dados, consegue importar sua `image`, configurado o banco as váriaveis de ambiente e ainda o local onde é armazenado seus arquivos no `volumes`, está saindo a na porta `5433`.

Para o Backend a porta padrão escolhida é `3000`, além disso ela apresenta a `DATABASE_URL` que indica qual vai ser o banco de dados usado, e assim fazer a conexão com o prisma.

Para o Frontend a porta padrão escolhida é `5173`.

```yaml
services:
  db:
    image: "docker.io/postgres:17.2"
    restart: always
    environment:
      POSTGRES_USER: ${DATABASE_USER}
      POSTGRES_PASSWORD: ${DATABASE_PASSWORD}
      POSTGRES_DB: ${DATABASE_NAME}
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5433:5432"
  
  backend:
    build: 
     context: ./Backend/seal-co/
     dockerfile: Dockerfile
    container_name: seal-co-backend
    env_file:
      - .env
    environment:
      - PORT=3000
      - DATABASE_URL=postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@db:5432/{DATABASE_NAME}?schema=public
    volumes:
      - ./Backend/seal-co/src:/usr/src/app/src
    ports:
    - 3000:3000
    depends_on:
      - db
    command: bash -c 'npx prisma migrate reset --force --skip-seed && npx prisma generate && npx prisma migrate dev --name init --skip-seed && npx prisma db seed && npm run start:dev'
  
  frontend:
    build:
     context: ./Frontend
     dockerfile: Dockerfile
    container_name: seal-co-frontend
    volumes:
      - /user/src/frontend
    ports:
      - 5173:5173
    depends_on:
      - backend
volumes:
  pgdata:

```
