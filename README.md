## Bem-vindo ao BookBazaar: Sua Loja Virtual de Livros 📚
O BookBazaar é uma plataforma dedicada aos amantes da leitura, onde você pode descobrir, adquirir e gerenciar uma vasta coleção de livros. Desde clássicos atemporais até as últimas novidades, nossa missão é facilitar seu acesso ao mundo da literatura.

Explore nossa aplicação para criar, listar e gerenciar livros, além de efetuar pedidos de compra de maneira fácil e intuitiva.

## Requisitos

- Node.js
- PostgreSQL

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio

## Instalação das Dependências

```bash
npm install
```

## Configuração do Banco de Dados

Certifique-se de ter um banco de dados PostgreSQL configurado e acessível. No meu caso, utilizei Docker para criar a imagem do banco de dados. O uso do Docker facilitou a integração do projeto com o banco de dados PostgreSQL, fornecendo um ambiente isolado e fácil de configurar. O Docker Compose permite definir e executar vários contêineres de aplicação de maneira simplificada, o que é ideal para desenvolvimento e implantação de projetos.

Para iniciar o banco de dados com Docker Compose, você pode usar o seguinte comando:

```bash
docker-compose up -d
```

Este comando irá iniciar o contêiner do PostgreSQL em segundo plano (-d), conforme configurado no arquivo docker-compose.yml do projeto.

Após configurar o banco de dados, é importante verificar se as configurações de conexão estão corretas no arquivo config/config.js e realizar as migrações do banco de dados conforme necessário. As migrações garantem que o esquema do banco de dados esteja atualizado com o código da aplicação.

## Execução das Migrações do Banco de Dados

Para garantir que o esquema do banco de dados esteja alinhado com o código da aplicação, utilize as migrações do Sequelize para criar ou atualizar as tabelas necessárias.

Certifique-se de que as configurações de conexão com o banco de dados estejam corretas no arquivo `config/config.js`.

Execute o seguinte comando para aplicar as migrações:

```bash
npx sequelize-cli db:migrate
```

## Iniciar o Servidor e Utilizar a Aplicação

Certifique-se de que todas as dependências estão instaladas e o banco de dados está configurado corretamente.

### Iniciar o Servidor

Para iniciar o servidor Node.js, execute o seguinte comando na raiz do projeto:

```bash
node --watch ./app.js
```

Isso iniciará o servidor e sua aplicação estará pronta para receber requisições.

## Criar um Livro
Para criar um novo livro, envie uma requisição POST para a rota /livros com o seguinte corpo da requisição JSON:
```javascript
{
  "titulo": "Nome do Livro",
  "autor": "Nome do Autor",
  "anoPublicacao": 2023,
  "estoque": 10
}
```

## Listar Todos os Livros
Para listar todos os livros cadastrados, envie uma requisição GET para a rota /livros.

## Criar um Pedido
Para criar um pedido de compra de livros, envie uma requisição POST para a rota /pedidos com o seguinte corpo da requisição JSON:
```javascript
{
  "livroId": 1,
  "quantidade": 3
}
```

## Listar Todos os Pedidos
Para listar todos os pedidos cadastrados, envie uma requisição GET para a rota /pedidos.

## Testes
Para testar a aplicação, utilize ferramentas como Postman para enviar requisições HTTP e verificar as respostas da API.

Teste de Criar Livro: Envie uma requisição POST para /livros com os dados de um livro e verifique se o livro foi criado corretamente.
Teste de Listar Livros: Envie uma requisição GET para /livros e verifique se a lista de livros é retornada corretamente.
Teste de Criar Pedido: Envie uma requisição POST para /pedidos com os dados de um pedido e verifique se o pedido foi criado corretamente e se o estoque do livro foi atualizado.
Teste de Listar Pedidos: Envie uma requisição GET para /pedidos e verifique se a lista de pedidos é retornada corretamente.
    
## Contribuindo

Sinta-se à vontade para contribuir com melhorias para o projeto. Abra uma issue para discutir novas funcionalidades ou envie um pull request com suas alterações.

Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Adiciona minha feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.
