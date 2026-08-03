const BaseController = require('./BaseController');
const SettingsService = require('../services/SettingsService');

class SettingsController extends BaseController {
  async getSettings(req, res, next) {
    try {
      const settings = await SettingsService.getSettings();
      return this.sendSuccess(res, settings, 'System settings loaded');
    } catch (err) {
      next(err);
    }
  }

  async updateSettings(req, res, next) {
    try {
      const settings = await SettingsService.updateSettings(req.body);
      return this.sendSuccess(res, settings, 'System settings updated');
    } catch (err) {
      next(err);
    }
  }

  async healthCheck(req, res, next) {
    try {
      return this.sendSuccess(res, { status: 'UP', timestamp: new Date() }, 'Node.js Gateway is operational');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new SettingsController();
