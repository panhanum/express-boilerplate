require('dotenv').config();

const env = {
  APP_NAME: process.env.APP_NAME as string,
  APP_PORT: process.env.APP_PORT as string,
  DB_NAME: process.env.DB_NAME as string,
  DB_HOST: process.env.DB_HOST as string,
  DB_USER: process.env.DB_USER as string,
  DB_PASS: process.env.DB_PASS as string,
  DB_PORT: process.env.DB_PORT as string,
  NR_APP_NAME: process.env.NR_APP_NAME as string,
  NR_LICENSE_KEY: process.env.NR_LICENSE_KEY as string,
  SENTRY_DSN: process.env.SENTRY_DSN as string,
};

export default env;
