const BaseController = require('./BaseController');
const AIService = require('../services/AIService');

class AIController extends BaseController {
  async chat(req, res, next) {
    try {
      const { prompt, sessionId } = req.body;
      const response = await AIService.askQuestion(prompt, { sessionId });
      return this.sendSuccess(res, response, 'AI response generated');
    } catch (err) {
      next(err);
    }
  }

  async health(req, res, next) {
    try {
      const status = await AIService.checkHealth();
      return this.sendSuccess(res, status, 'AI microservice health checked');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AIController();
