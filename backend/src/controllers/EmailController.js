const BaseController = require('./BaseController');
const EmailService = require('../services/EmailService');

class EmailController extends BaseController {
  async send(req, res, next) {
    try {
      const { to, subject, html, text } = req.body;
      const result = await EmailService.sendEmail(to, subject, html, text);
      return this.sendSuccess(res, result, 'Email sent successfully');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new EmailController();
