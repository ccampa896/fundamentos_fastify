<div align="center">
  <a href="www.linkedin.com/in/carlos-campanari" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"  />
  </a>
  <a href="instagram.com/campanaricarlos" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="instagram logo"  />
  </a>
</div>

###

<div align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=ccampa896.ccampa896&"  />
</div>

###

<h1 align="center">TypeScript e Fastify</h1>

###

<h3 align="left">👩‍💻  Sobre mim</h3>

###

<p align="left">Meu nome é Carlos, atualmente sou Capitão da Polícia Militar do Estado de São Paulo. Com paixão por tecnologia, sou estudante do curso de Ciência da Computação pela UNINTER.<br><br>- 🔭 Trabalho com Inteligência Estratégica, com o objetivo de auxiliar os tomadores de decisão, os Comandantes da PMESP responsáveis pela Região Metropolitana de SP.<br>- 💻 Possuo experiência em nível de estágio em JavaScript e TypeScript com foco no back-end, com uso do framework Nest.js.<br>- ⌨️ Além de funções de CRUD, tenho experiência com tecnologias para log, cache, mensageria e serverless (Sentry, Redis, AWS SQS e AWS Lambda).<br>- 📚 Atualmente estou aprendendo e reforçando os conhecimentos em Node.js para me especializar em ferramentas de desenvolvimento web, com o foco no universo do JavaScript.<br>- ⚡ Nas horas de folga, além de ficar com a família, gosto de esportes de luta, com foco no Jiu Jitsu.</p>

###

<p align="left">💎 Controlador de refeições</p>

Para iniciar o ambiente de desenvolvimento e testes, execute o comando:

```bash
docker compose up -d
```

A aplicação utiliza dois servidores de banco de dados, um servidor Redis para armazenamento de sessões e um servidor PostgreSQL para armazenamento de dados.

Instale as dependências do projeto:

```bash
npm install
```

Conforme o script dev do arquivo package.json, a aplicação será iniciada em modo de desenvolvimento com o comando:

```bash
npm run dev
```

O que esta aplicação faz?

Esta é uma aplicação didática, criada para o início de estudos em back-end com Node.js e Fastify. Seu objetivo é demonstrar:

- Criação de rotas HTTP usando Fastify.
- Integração com banco de dados PostgreSQL via Prisma ORM.
- Uso de sessões para gerenciar autenticação, armazenadas no Redis.
- Boas práticas de organização de código e configuração de ambiente de desenvolvimento.

Principais Funcionalidades

- Criação e autenticação de usuários: cada usuário possui credenciais de acesso e dados relacionados.
- Registro de informações (ex.: refeições) associadas a um usuário, com possibilidade de edição e exclusão.
- Sessões com Redis: mantém o estado de “usuário logado” entre requisições, sem precisar armazenar dados sensíveis no navegador.
- Exemplos de métricas e consultas, ilustrando como manipular dados no banco de forma eficiente.

Como funciona o uso de sessões com Redis?

- Login: Quando o usuário faz login, a aplicação cria uma sessão e armazena as informações básicas do usuário (ex.: userId) no Redis.
- Cookie de sessão: O servidor envia ao cliente (navegador ou ferramenta de teste) apenas um ID de sessão (sessionId) dentro de um cookie seguro.
- Validação em cada requisição: A cada nova requisição, esse cookie é enviado automaticamente pelo cliente. O Fastify (com o plugin de sessões) busca no Redis os dados associados àquele sessionId.
- Manutenção de estado: Se o servidor encontrar os dados no Redis, significa que o usuário continua autenticado. Caso contrário, é retornado erro de sessão inválida ou expirada.

Vantagens de armazenar sessões no Redis

- Centralização e escalabilidade: múltiplas instâncias do servidor podem compartilhar o mesmo Redis, facilitando o balanceamento de carga.
- Segurança: dados sensíveis (ex.: userId) ficam no servidor (Redis), não expostos em cookies no cliente.
- Desempenho: Redis é extremamente rápido para leitura e escrita, garantindo respostas ágeis.

Por que Fastify em vez de Express?

- Performance: O Fastify foi projetado para ser rápido e eficiente, alcançando altas taxas de requisições por segundo.
- Plugin Ecosystem: Possui um sistema de plugins mais enxuto e organizado, facilitando a manutenção do código.
- TypeScript Friendly: O suporte a TypeScript é mais fluido e intuitivo no ecossistema do Fastify.
- Boas Práticas Embutidas: Estrutura de hooks e validação integrada em plugins, simplificando a adoção de padrões de projeto.

Apesar de o Express ser um framework muito popular, o Fastify tem se mostrado uma opção moderna e performática, mantendo a simplicidade para quem está começando no back-end com Node.js.
Observações

- Aplicação Didática: Não é recomendada para produção sem antes adicionar camadas adicionais de segurança, logs, e testes.
- Volumes no Docker: O arquivo docker-compose.yml atual não persiste dados em volumes; logo, ao remover os contêineres, todos os dados são perdidos. Em um ambiente real, configuraria volumes para PostgreSQL e Redis.
- Validação de Dados: Em aplicações mais robustas, recomenda-se o uso de bibliotecas (ex.: Zod ou Joi) para validar a entrada de dados nas rotas.
- Senhas: Para fins de estudo, usamos o bcryptjs para hashing de senhas. Sempre utilize hashing (nunca salve senhas em texto puro).

###

<h3 align="left">🛠 Language and tools</h3>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" alt="vscode logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
</div>

###

<h3 align="left">🔥   My Stats :</h3>

###

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=ccampa896&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false&order=1" height="150" alt="stats graph"  />
  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=ccampa896&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false&order=2" height="150" alt="languages graph"  />
</div>

###
