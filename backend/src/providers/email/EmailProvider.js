class EmailProvider {
  async sendEmail({ to, subject, html, text }) {
    throw new Error('sendEmail method must be implemented');
  }
}

module.exports = EmailProvider;
