const config = require('../config');
const FlaskProvider = require('../providers/ai/FlaskProvider');
const MockAIProvider = require('../providers/ai/MockAIProvider');

class AIService {
  constructor() {
    if (config.env === 'production' && config.ai.serviceUrl) {
      this.provider = new FlaskProvider(config.ai.serviceUrl, config.ai.apiKey);
    } else {
      this.provider = new MockAIProvider();
    }
  }

  async askQuestion(prompt, options = {}) {
    return await this.provider.chat(prompt, options);
  }

  async checkHealth() {
    return await this.provider.checkHealth();
  }
}

module.exports = new AIService();
