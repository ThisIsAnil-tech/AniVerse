const BaseController = require('./BaseController');
const AnalyticsService = require('../services/AnalyticsService');

class AnalyticsController extends BaseController {
  async dashboard(req, res, next) {
    try {
      const data = await AnalyticsService.getDashboardOverview();
      return this.sendSuccess(res, data, 'Analytics dashboard overview loaded');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AnalyticsController();
