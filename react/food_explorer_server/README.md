<h1 align="center"> 🍽️ Food Explorer </h1>
<h4 align="center"> Status: 🚀 Finished </h4>
  
## 💻 Projeto
Food Explorer é o resultado final do desafiador programa Explorer da Rocketseat. É uma aplicação de cardápio digital projetada para um restaurante fictício, proporcionando uma experiência completa de gerenciamento de pedidos e favoritos.

Este repositório abriga o back-end do Food Explorer. Aqui, concentramos toda a lógica de negócios e armazenamento de dados. O front-end, responsável pela interface do usuário, está disponível em outro repositório.

## 🌐 Repositórios Principais do Projeto Explorer - Rocketseat

### Backend
📁 [`react/food_explorer_server`](https://github.com/adhmattheus/explorer_rockeseat/tree/main/react/food_explorer_server)

### Frontend
📁 [`react/food_explorer_frontend`](https://github.com/adhmattheus/explorer_rockeseat/tree/main/react/food_explorer_frontend)

## 🚀 Tecnologias Utilizadas:
- Node.js, 
- Express, 
- SQLite,
- Knex.js,
- Beekeeper Studio,
- Insomnia.

## 🔖 Objetivo
O Food Explorer oferece uma variedade de funcionalidades para tornar a experiência do restaurante mais eficiente e agradável. Algumas das principais funcionalidades incluem:
- Gerenciamento de Usuários: Registre-se, faça login e gerencie seu perfil de usuário.
- Cardápio Interativo: Explore o cardápio digital do restaurante, que inclui uma lista de pratos deliciosos e seus ingredientes.
- Pedidos Simples: Faça pedidos diretamente no aplicativo, adicionando pratos ao seu carrinho de compras.
- Favoritos: Marque pratos como favoritos para acesso rápido e fácil.
- Histórico de Pedidos: Acompanhe o histórico de todos os seus pedidos anteriores.

## 💾 Iniciar Projeto
#### Acesso Remoto ao Back-end
Este projeto utiliza uma hospedagem gratuita para o back-end, o que pode resultar em possíveis atrasos no tempo de resposta do servidor.
O back-end do projeto está hospedado no endereço https://food-explorer-backend-oxwh.onrender.com. Você pode acessá-lo diretamente para testar a API.

#### Executando Localmente ####
Siga estas etapas para configurar e usar a API em sua máquina local:

1- Clone este repositório em seu computador:
```
$ git clone <URL_DO_REPOSITORIO>
```
2- Navegue até a pasta do projeto:
```
$ cd food-explorer
```
3- Instale as dependências:
```
$ npm install
```
4- Crie um arquivo `.env` de acordo com o arquivo `.env.example` e preencha os campos `AUTH_SECRET` e `PORT` com suas informações:
   - Para gerar o valor para o campo `AUTH_SECRET`, você pode utilizar o [MD5 Hash Generator](https://www.md5hashgenerator.com/) para criar uma sequência de caracteres segura.
   - Preencha o campo `PORT` com o número da porta desejada para executar o servidor da aplicação (por exemplo, `3000`).

5- Execute as migrações do banco de dados para configurar as tabelas:
```
$ npm run migrate
```

6- Inicie o servidor:
```
$ npm start
```

7- Verifique se o servidor está funcionando acessando o seguinte endereço no navegador ou em uma ferramenta como o Insomnia ou Postman:
```
http://localhost:<PORT>
```
Substitua `<PORT>` pela porta configurada no arquivo `.env`. Você deve ver uma mensagem indicando que o servidor está em execução.

8- Teste os endpoints da API:
   - Utilize ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para enviar requisições aos endpoints da API.
   - Consulte a [Documentação da API](#-documentação-da-api) para detalhes sobre os endpoints disponíveis.

Agora você pode interagir com o back-end da aplicação Food Explorer tanto remotamente quanto localmente, dependendo das suas necessidades.

## 📖 Documentação da API

A documentação da API foi gerada utilizando o Swagger. Para acessá-la, siga os passos abaixo:

1. Certifique-se de que o servidor está em execução.
2. Acesse o seguinte endereço no navegador: `http://localhost:<PORT>/food-explorer-api-v1/docs`, substituindo `<PORT>` pela porta configurada no arquivo `.env`.

A documentação fornece detalhes sobre todos os endpoints disponíveis, incluindo métodos, parâmetros, e exemplos de requisição e resposta.

## 🤝 Contribuição
Contribuições são sempre bem-vindas! Se você tiver ideias para melhorias, correções de bugs ou novas funcionalidades, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch para sua funcionalidade ou correção:
   ```
   $ git checkout -b minha-nova-funcionalidade
   ```
3. Faça suas alterações e commit:
   ```
   $ git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie suas alterações para o repositório remoto:
   ```
   $ git push origin minha-nova-funcionalidade
   ```
5. Abra um Pull Request explicando suas alterações.

Agradecemos por contribuir para o crescimento deste projeto! 🎉

## 📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Informações do Desenvolvedor
Este projeto foi desenvolvido como parte do programa Explorer da Rocketseat. Caso tenha dúvidas ou sugestões, sinta-se à vontade para contribuir ou entrar em contato.

- **GitHub:** [adhmattheus](https://github.com/adhmattheus)
- **LinkedIn:** [MatTheus AdhonNay.](https://www.linkedin.com/in/adhmattheus)

<h3 align="center">Developed with ☕</h3>

