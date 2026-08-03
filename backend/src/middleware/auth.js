const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      error: 'Authentication token is required',
      code: 'UNAUTHORIZED',
      timestamp: new Date().toISOString(),
    });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      error: 'Invalid or expired authentication token',
      code: 'UNAUTHORIZED',
      timestamp: new Date().toISOString(),
    });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || (roles.length && !roles.includes(req.user.role))) {
      return res.status(403).json({
        success: false,
        error: 'Forbidden: Insufficient privileges',
        code: 'FORBIDDEN',
        timestamp: new Date().toISOString(),
      });
    }
    next();
  };
};

module.exports = {
  authenticate,
  authorize,
};
