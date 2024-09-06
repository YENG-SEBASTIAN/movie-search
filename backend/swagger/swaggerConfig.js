const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Movie Search API',
      version: '1.0.0',
      description: 'API Documentation for the Movie Search App',
    },
    servers: [
      { url: `http://localhost:${process.env.PORT || 5000}` },
    ],
    // Add tags for grouping by controller
    tags: [
      {
        name: 'Auth',
        description: 'Authentication endpoints',
      },
      {
        name: 'Movies',
        description: 'Movie-related endpoints (search, details, etc.)',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
