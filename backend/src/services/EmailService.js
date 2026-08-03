const config = require('../config');
const MockEmailProvider = require('../providers/email/MockEmailProvider');
const ResendProvider = require('../providers/email/ResendProvider');
const BrevoProvider = require('../providers/email/BrevoProvider');

class EmailService {
  constructor() {
    if (config.email.provider === 'resend') {
      this.provider = new ResendProvider(config.email.resendApiKey);
    } else if (config.email.provider === 'brevo') {
      this.provider = new BrevoProvider(config.email.brevoApiKey);
    } else {
      this.provider = new MockEmailProvider();
    }
  }

  async sendEmail(to, subject, html, text) {
    return await this.provider.sendEmail({ to, subject, html, text });
  }
}

module.exports = new EmailService();
