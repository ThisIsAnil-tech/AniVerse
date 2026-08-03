const EmailProvider = require('./EmailProvider');

class ResendProvider extends EmailProvider {
  constructor(apiKey) {
    super();
    this.apiKey = apiKey;
  }

  async sendEmail({ to, subject, html, text }) {
    return { success: true, messageId: `resend_${Date.now()}` };
  }
}

module.exports = ResendProvider;
