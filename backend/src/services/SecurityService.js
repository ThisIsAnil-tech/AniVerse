const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const config = require('../config');

class SecurityService {
  generateSignedDownloadUrl(fileId, expiresInSeconds = 3600) {
    const token = jwt.sign(
      { fileId, purpose: 'download' },
      config.jwt.secret,
      { expiresIn: expiresInSeconds }
    );
    return `${config.apiPrefix}/download/signed?token=${token}`;
  }

  verifySignedDownloadToken(token) {
    try {
      const decoded = jwt.verify(token, config.jwt.secret);
      if (decoded.purpose !== 'download') {
        throw new Error('Invalid token purpose');
      }
      return decoded;
    } catch (err) {
      const error = new Error('Invalid or expired signed download link');
      error.statusCode = 403;
      throw error;
    }
  }

  generate2FASecret(email) {
    const secret = crypto.randomBytes(20).toString('hex');
    const otpAuthUrl = `otpauth://totp/AniVerse:${email}?secret=${secret}&issuer=AniVerse`;
    return { secret, otpAuthUrl };
  }
}

module.exports = new SecurityService();
