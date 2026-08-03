const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const AdminRepository = require('../repositories/AdminRepository');

class AuthService {
  async login(email, password) {
    const admin = await AdminRepository.findByEmail(email);
    if (!admin) {
      const error = new Error('Invalid email or password');
      error.statusCode = 401;
      throw error;
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      const error = new Error('Invalid email or password');
      error.statusCode = 401;
      throw error;
    }

    const accessToken = jwt.sign(
      { id: admin._id, email: admin.email, role: admin.role },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn }
    );

    const refreshToken = jwt.sign(
      { id: admin._id },
      config.jwt.refreshSecret,
      { expiresIn: config.jwt.refreshExpiresIn }
    );

    admin.lastLogin = new Date();
    await admin.save();

    return {
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
      tokens: {
        accessToken,
        refreshToken,
      },
    };
  }

  async refreshToken(refreshToken) {
    try {
      const decoded = jwt.verify(refreshToken, config.jwt.refreshSecret);
      const admin = await AdminRepository.findById(decoded.id);
      if (!admin) {
        throw new Error('User not found');
      }

      const accessToken = jwt.sign(
        { id: admin._id, email: admin.email, role: admin.role },
        config.jwt.secret,
        { expiresIn: config.jwt.expiresIn }
      );

      return { accessToken };
    } catch (err) {
      const error = new Error('Invalid or expired refresh token');
      error.statusCode = 401;
      throw error;
    }
  }
}

module.exports = new AuthService();
