const BaseController = require('./BaseController');
const AuthService = require('../services/AuthService');

class AuthController extends BaseController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login(email, password);
      return this.sendSuccess(res, result, 'Login successful');
    } catch (err) {
      next(err);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.body;
      const result = await AuthService.refreshToken(refreshToken);
      return this.sendSuccess(res, result, 'Token refreshed');
    } catch (err) {
      next(err);
    }
  }

  async me(req, res, next) {
    try {
      return this.sendSuccess(res, req.user, 'Current user retrieved');
    } catch (err) {
      next(err);
    }
  }

  async logout(req, res, next) {
    try {
      return this.sendSuccess(res, {}, 'Logged out successfully');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AuthController();
