# Game Store API

## Descrição

A Game Store API é uma API RESTful para gerenciar um catálogo de jogos. A API permite que os usuários visualizem, adicionem, atualizem e excluam jogos no banco de dados MongoDB Atlas. Ela foi desenvolvida utilizando Node.js e TypeScript, e a documentação da API está disponível no Postman.

## URLs Importantes

- **URL da API:** [https://game-store-api-q490.onrender.com/api/games](https://game-store-api-q490.onrender.com/api/games)
- **Documentação da API no Postman:** [Documentação Postman](https://documenter.getpostman.com/view/34454830/2sA3XJk4w5)

## Stack Utilizada

- **Node.js**
- **TypeScript**
- **MongoDB Atlas**
- **Postman**

## Endpoints da API

### Listar todos os jogos

- **Rota:** `GET /api/games`
- **Descrição:** Retorna uma lista de todos os jogos cadastrados.

### Buscar jogo por ID

- **Rota:** `GET /api/games/:id`
- **Descrição:** Retorna um jogo específico pelo seu ID.
- **Parâmetro:** `id` - O identificador único do jogo.

### Buscar jogo por nome

- **Rota:** `GET /api/games/name/:name`
- **Descrição:** Retorna um jogo específico pelo seu nome.
- **Parâmetro:** `name` - O nome do jogo.

### Adicionar um novo jogo

- **Rota:** `POST /api/games`
- **Descrição:** Adiciona um novo jogo ao catálogo.
- **Corpo da Requisição:** `name`, `description`, `genre`, `platform`, `releaseDate`, `price`.

### Atualizar um jogo

- **Rota:** `PUT /api/games/:id`
- **Descrição:** Atualiza as informações de um jogo existente.
- **Parâmetro:** `id` - O identificador único do jogo.
- **Corpo da Requisição:** `name`, `description`, `genre`, `platform`, `releaseDate`, `price`.

### Deletar um jogo

- **Rota:** `DELETE /api/games/:id`
- **Descrição:** Remove um jogo do catálogo.
- **Parâmetro:** `id` - O identificador único do jogo.

## Como Rodar o Projeto Localmente

1. Clone o repositório para a sua máquina local.
    ```bash
    git clone https://github.com/IcaroWil/game-store-api.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd game-store-api
    ```
3. Instale as dependências do projeto utilizando o npm ou yarn:
   ```bash
   npm install
   # ou
   yarn install
   ```
4. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
    ```bash
    PORT=3000
    MONGO_URI=<sua_url_de_conexão_do_mongodb_atlas>
    ```
5. Inicie o servidor:
    ```bash
    npm start
    # ou
    yarn start
    ```
6. Acesse a API em `http://localhost:3000/api/games`

## Contato

Para mais informações, entre em contato através do [GitHub](https://github.com/IcaroWil).