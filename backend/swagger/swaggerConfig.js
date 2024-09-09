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
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Enter JWT Bearer token here',
        },
      },
    },
    security: [
      {
        BearerAuth: [], // Apply Bearer token globally to all endpoints
      },
    ],
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
  apis: ['./routes/*.js'], // Path to your route files with Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
    swaggerOptions: {
      persistAuthorization: true, // This ensures the token persists when navigating
    }
  }));
};
