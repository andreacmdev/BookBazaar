# Book Bazaar

Book Bazaar é uma aplicação para gerenciar livros e pedidos de compra de livros.

## Requisitos

- Node.js
- PostgreSQL

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio

Instale as dependências:
  "npm install"
  
Configure o banco de dados:

Certifique-se de ter um banco de dados PostgreSQL configurado e acessível. No meu caso, utilizei Docker para criar a imagem do banco de dados. O uso do Docker facilitou a integração do projeto com o banco de dados PostgreSQL, fornecendo um ambiente isolado e fácil de configurar. O Docker Compose permite definir e executar vários contêineres de aplicação de maneira simplificada, o que é ideal para desenvolvimento e implantação de projetos.

Execute as migrações do banco de dados:
 npx sequelize-cli db:migrate

Inicie o servidor:

Uso
Criar um Livro
  "URL: POST /api/livros"

Corpo da Requisição:

{
  "titulo": "Nome do Livro",
  "autor": "Nome do Autor",
  "anoPublicacao": 2023,
  "estoque": 10
}

Listar Todos os Livros
URL: 'GET /livros'

Criar um Pedido
URL: 'POST /pedidos'

Corpo da Requisição:
{
  "livroId": 1,
  "quantidade": 3
}

Listar Todos os Pedidos
URL: 'GET /pedidos'

Testes
Para testar a aplicação, você pode usar ferramentas como Postman ou realizar testes automatizados com frameworks como Jest.

Teste de Criar Livro:

Envie uma requisição POST para /api/livros com os dados de um livro.
Verifique se o livro foi criado corretamente.
Teste de Listar Livros:

Envie uma requisição GET para /api/livros.
Verifique se a lista de livros é retornada corretamente.
Teste de Criar Pedido:

Envie uma requisição POST para /api/pedidos com os dados de um pedido.
Verifique se o pedido foi criado corretamente e se o estoque do livro foi atualizado.
Teste de Listar Pedidos:

Envie uma requisição GET para /api/pedidos.
Verifique se a lista de pedidos é retornada corretamente.
Contribuindo
Sinta-se à vontade para contribuir com melhorias para o projeto. Abra uma issue para discutir novas funcionalidades ou envie um pull request com suas alterações.
