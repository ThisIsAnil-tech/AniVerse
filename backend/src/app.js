const express = require('express');
const config = require('./config');
const configureSecurity = require('./middleware/security');
const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();

// Security and middleware
configureSecurity(app);
app.use(requestLogger);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    appName: config.appName,
    timestamp: new Date().toISOString(),
  });
});

// API Routes Gateway
app.use(config.apiPrefix, routes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
