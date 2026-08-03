const EmailProvider = require('./EmailProvider');

class BrevoProvider extends EmailProvider {
  constructor(apiKey) {
    super();
    this.apiKey = apiKey;
  }

  async sendEmail({ to, subject, html, text }) {
    return { success: true, messageId: `brevo_${Date.now()}` };
  }
}

module.exports = BrevoProvider;
