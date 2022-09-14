const swagger = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'My User Project CRUD',
    description: 'My User Project Application API',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  host: 'localhost:3000',
  basePath: '/',
  tags: [
    {
      name: 'Example',
    },
  ],
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
};

export default swagger;
