const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Leads API',
      version: '1.0.0',
      description: 'API para gestión de leads con IA'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./src/routes/*.js'], // ruta donde se lee los comentarios.
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;