const EmailProvider = require('./EmailProvider');

class MockEmailProvider extends EmailProvider {
  async sendEmail({ to, subject, html, text }) {
    console.log(`[MockEmailProvider] Sent email to: ${to} | Subject: ${subject}`);
    return { success: true, messageId: `mock_email_${Date.now()}` };
  }
}

module.exports = MockEmailProvider;
