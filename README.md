# NodeJS Boilerplate

## Requirements
* Express JS
* Typescript
* Multer
* Swagger UI
* Eslint + Prettier
* Sentry
* New Relic
* Husky
* Helmet
* Dotenv
* Postgresql
* Sequelize


## Getting Started

Clone The Repo :
```bash
git clone https://github.com/panjihanum/nodejs-boilerplate.git
cd nodejs-boilerplate
npx rimraf ./.git
```

Install Dependencies :
```bash
npm install
```

Set Environment Variable :
```bash
cp .env.dev .env
```

### Setting Up New Relic
Download newrelic.js from https://newrelic.com and move to root project

### Setting Up Sentry
Fill SENTRY_DSN in .env with your Sentry DSN

## Commands
Run by locally :
```bash
npm run dev
```

Run Build :
```bash
npm run build
```

Check Linter :
```bash
npm run lint
```

Check and Fix Linter :
```bash
npm run lint:fix
```

Check Prettier :
```bash
npm run prettier
```

Check and Fix Prettier :
```bash
npm run prettier:fix
```


## Swagger
<ol>
  <li>Run by locally or production</li>
  <li>Go to : <a href="http://localhost:3000/api-docs">localhost:3000/api-docs</a></li>
</ol>
