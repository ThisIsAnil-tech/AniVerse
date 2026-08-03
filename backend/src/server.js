const app = require('./app');
const config = require('./config');
const { connectDatabase } = require('./config/database');
const logger = require('./config/logging');

const startServer = async () => {
  await connectDatabase();

  const server = app.listen(config.port, () => {
    logger.info(`[Server] ${config.appName} listening on port ${config.port}`);
  });

  const gracefulShutdown = (signal) => {
    logger.info(`[Server] Received ${signal}. Shutting down gracefully...`);
    server.close(() => {
      logger.info('[Server] HTTP server closed.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown('SIGINT'));
};

startServer();
