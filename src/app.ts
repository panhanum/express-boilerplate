import config from './api/v1/config';

import express from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import 'newrelic';
import swaggerDocument from '../doc/index';
import router from './api/v1/routes';

config.db
  .authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err: string) => {
    console.log('Error: ' + err);
  });

// If u want to create table in database automaticly
config.db.sync();

const app = express();

Sentry.init({
  dsn: config.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use(helmet());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));
app.use('/api/v1', router);

app.use(Sentry.Handlers.errorHandler());
app.use(
  Sentry.Handlers.requestHandler({
    serverName: false,
    user: ['email'],
  }),
);

const PORT = config.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is live at localhost:${PORT}`);
});
