const logger = require('../config/logging');

const errorHandler = (err, req, res, next) => {
  logger.error(`[Error] ${err.message}`, { stack: err.stack });

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const code = err.code || 'SERVER_ERROR';

  res.status(statusCode).json({
    success: false,
    error: message,
    code,
    details: err.details || {},
    timestamp: new Date().toISOString(),
  });
};

module.exports = errorHandler;
