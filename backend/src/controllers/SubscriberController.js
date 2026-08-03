const BaseController = require('./BaseController');
const SubscriberService = require('../services/SubscriberService');

class SubscriberController extends BaseController {
  async subscribe(req, res, next) {
    try {
      const { email, name } = req.body;
      const subscriber = await SubscriberService.subscribe(email, name);
      return this.sendSuccess(res, subscriber, 'Subscribed successfully. Please check your email to confirm verification.', null, 201);
    } catch (err) {
      next(err);
    }
  }

  async verify(req, res, next) {
    try {
      const { token } = req.params;
      const subscriber = await SubscriberService.verifyToken(token);
      return this.sendSuccess(res, subscriber, 'Email verified successfully');
    } catch (err) {
      next(err);
    }
  }

  async unsubscribe(req, res, next) {
    try {
      const { token } = req.params;
      const subscriber = await SubscriberService.unsubscribeToken(token);
      return this.sendSuccess(res, subscriber, 'Unsubscribed successfully');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new SubscriberController();
