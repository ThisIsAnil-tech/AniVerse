const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../../.env') });

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '5000', 10),
  appName: process.env.APP_NAME || 'AniVerse AI Portfolio Platform',
  apiPrefix: process.env.API_PREFIX || '/api/v1',
  corsOrigin: process.env.CORS_ORIGIN || '*',

  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio_db',
  },

  jwt: {
    secret: process.env.JWT_SECRET || 'fallback_secret_key_development_only',
    expiresIn: process.env.JWT_EXPIRES_IN || '15m',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'fallback_refresh_secret_key',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  },

  admin: {
    initialEmail: process.env.ADMIN_INITIAL_EMAIL || 'admin@aniverse.io',
    initialPassword: process.env.ADMIN_INITIAL_PASSWORD || 'AdminSecurePassword123!',
  },

  cache: {
    driver: process.env.CACHE_DRIVER || 'memory',
    redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  },

  queue: {
    driver: process.env.QUEUE_DRIVER || 'memory',
    redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  },

  storage: {
    provider: process.env.STORAGE_PROVIDER || 'mock',
    cloudinary: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
    mega: {
      email: process.env.MEGA_EMAIL,
      password: process.env.MEGA_PASSWORD,
    },
  },

  email: {
    provider: process.env.EMAIL_PROVIDER || 'mock',
    resendApiKey: process.env.RESEND_API_KEY,
    brevoApiKey: process.env.BREVO_API_KEY,
    from: process.env.EMAIL_FROM || 'Portfolio Notifications <noreply@aniverse.io>',
  },

  ai: {
    serviceUrl: process.env.AI_SERVICE_URL || 'http://localhost:5001',
    apiKey: process.env.AI_SERVICE_API_KEY || 'ai_service_internal_secret_key_2026',
  },
};
