# Rota Protegida

Este é um projeto de exemplo que demonstra como criar rotas protegidas usando Node.js, Express, JWT (JSON Web Token) e bcrypt para hashing de senhas.

## Estrutura do Projeto

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/O-Farias/rota-protegida
   cd rota-protegida
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```env
   PORT=3000
   JWT_SECRET=sua_chave_secreta
   JWT_EXPIRES_IN=3600
   ```

## Scripts Disponíveis

- `npm start`: Inicia o servidor em modo de produção.
- `npm run dev`: Inicia o servidor em modo de desenvolvimento com `nodemon`.

## Endpoints

### Autenticação

- **POST /auth/register**: Registra um novo usuário.

  - Body:
    ```json
    {
      "nome": "Nome do Usuário",
      "email": "email@example.com",
      "senha": "senha123"
    }
    ```

- **POST /auth/login**: Realiza o login de um usuário.
  - Body:
    ```json
    {
      "email": "email@example.com",
      "senha": "senha123"
    }
    ```

### Usuários

- **GET /users**: Retorna todos os usuários. (Protegido)
- **DELETE /users/:id**: Deleta um usuário pelo ID. (Protegido)
- **POST /users/admin**: Cria um novo administrador. (Protegido)

### Bem-vindo

- **GET /welcome**: Retorna uma mensagem de boas-vindas. (Protegido)

## Middleware

- **auth.js**: Middleware para verificar o token JWT.

## Configuração

- **jwt.js**: Configurações relacionadas ao JWT, como segredo e tempo de expiração.

## Como Funciona

1. **Registro**: O usuário se registra enviando nome, email e senha para o endpoint `/auth/register`. A senha é hashada usando `bcrypt` antes de ser armazenada.

2. **Login**: O usuário faz login enviando email e senha para o endpoint `/auth/login`. Se as credenciais estiverem corretas, um token JWT é gerado e retornado.

3. **Proteção de Rotas**: Algumas rotas são protegidas pelo middleware `auth.js`, que verifica a presença e validade do token JWT no cabeçalho da requisição.

## Dependências

- [express](https://www.npmjs.com/package/express)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon) (dev)

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
