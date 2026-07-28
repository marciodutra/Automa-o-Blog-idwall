# Automação E2E - Blog Idwall

Framework de automação de testes End-to-End desenvolvido com Playwright utilizando JavaScript (ES Modules).

## Objetivo

Este projeto tem como objetivo validar funcionalidades do Blog da Idwall por meio de testes automatizados, seguindo boas práticas de arquitetura, organização e manutenção de código.

Site testado:

https://blog.idwall.co/

## Tecnologias

- Playwright
- JavaScript (ES Modules)
- Node.js
- Git

## Estrutura do Projeto

```text
.
├── components/
├── fixtures/
├── helpers/
├── pages/
├── tests/
│   ├── api/
│   └── ui/
├── utils/
├── .env.example
├── playwright.config.js
└── package.json
```

## Executando os testes

Instalar as dependências:

```bash
npm install
```

Executar todos os testes:

```bash
npm test
```

Executar com navegador visível:

```bash
npm run test:headed
```

Executar em modo debug:

```bash
npm run test:debug
```

Abrir o relatório HTML:

```bash
npm run report
```

## Status

Projeto em desenvolvimento.