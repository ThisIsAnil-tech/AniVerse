const AIProvider = require('./AIProvider');
const axios = require('axios');

class FlaskProvider extends AIProvider {
  constructor(baseUrl, apiKey) {
    super();
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    });
  }

  async chat(prompt, options = {}) {
    try {
      const response = await this.client.post('/assistant/chat', { prompt, ...options });
      return response.data;
    } catch (error) {
      console.error('[FlaskProvider] AI Service call failed:', error.message);
      return {
        answer: 'I am currently operating in offline mode. Please try again shortly.',
        citations: [],
        error: error.message,
      };
    }
  }

  async checkHealth() {
    try {
      const response = await this.client.get('/health');
      return response.data;
    } catch (error) {
      return { status: 'down', error: error.message };
    }
  }
}

module.exports = FlaskProvider;
