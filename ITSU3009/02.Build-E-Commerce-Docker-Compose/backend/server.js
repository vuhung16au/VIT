const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Environment variables
const {
  NODE_ENV = 'development',
  MONGODB_HOST = 'db',
  MONGODB_PORT = 27017,
  MONGODB_USER = 'root',
  MONGODB_PASSWORD = 'secret',
  MONGODB_DATABASE = 'ecommerce',
  REDIS_HOST = 'redis',
  REDIS_PORT = 6379,
  RABBITMQ_HOST = 'rabbitmq',
  RABBITMQ_PORT = 5672,
  RABBITMQ_USER = 'admin',
  RABBITMQ_PASSWORD = 'secret',
  GITLAB_CI = 'false',
  OFFLINE_MODE = 'true'
} = process.env;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: NODE_ENV,
    services: {
      mongodb: {
        host: MONGODB_HOST,
        port: MONGODB_PORT,
        database: MONGODB_DATABASE
      },
      redis: {
        host: REDIS_HOST,
        port: REDIS_PORT
      },
      rabbitmq: {
        host: RABBITMQ_HOST,
        port: RABBITMQ_PORT
      }
    },
    configuration: {
      gitlab_ci: GITLAB_CI === 'true',
      offline_mode: OFFLINE_MODE === 'true'
    }
  });
});

// API Routes
app.get('/api', (req, res) => {
  res.json({
    message: 'E-commerce API is running!',
    version: '1.0.0',
    environment: NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// Products endpoint
app.get('/api/products', (req, res) => {
  res.json({
    products: [
      {
        id: 1,
        name: 'Sample Product 1',
        price: 29.99,
        description: 'This is a sample product for the e-commerce platform',
        category: 'Electronics'
      },
      {
        id: 2,
        name: 'Sample Product 2',
        price: 49.99,
        description: 'Another sample product for demonstration',
        category: 'Clothing'
      }
    ],
    total: 2
  });
});

// Orders endpoint
app.get('/api/orders', (req, res) => {
  res.json({
    orders: [
      {
        id: 1,
        productId: 1,
        quantity: 2,
        total: 59.98,
        status: 'completed',
        createdAt: new Date().toISOString()
      }
    ],
    total: 1
  });
});

// System info endpoint
app.get('/api/system', (req, res) => {
  res.json({
    system: {
      node_version: process.version,
      platform: process.platform,
      arch: process.arch,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      environment: NODE_ENV
    },
    services: {
      mongodb: `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`,
      redis: `redis://${REDIS_HOST}:${REDIS_PORT}`,
      rabbitmq: `amqp://${RABBITMQ_USER}:${RABBITMQ_PASSWORD}@${RABBITMQ_HOST}:${RABBITMQ_PORT}`
    },
    configuration: {
      gitlab_ci: GITLAB_CI === 'true',
      offline_mode: OFFLINE_MODE === 'true',
      port: PORT
    }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
    method: req.method
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 E-commerce API server running on port ${PORT}`);
  console.log(`📊 Environment: ${NODE_ENV}`);
  console.log(`🔧 GitLab CI: ${GITLAB_CI === 'true' ? 'Enabled' : 'Disabled'}`);
  console.log(`🏠 Offline Mode: ${OFFLINE_MODE === 'true' ? 'Enabled' : 'Disabled'}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 API endpoint: http://localhost:${PORT}/api`);
});

module.exports = app;
