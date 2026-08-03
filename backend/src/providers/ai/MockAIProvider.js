const AIProvider = require('./AIProvider');

class MockAIProvider extends AIProvider {
  async chat(prompt, options = {}) {
    return {
      answer: `Mock AI Assistant response for query: "${prompt}". Anil is a Full Stack & AI engineer with extensive expertise in Node.js, Python, Flask, RAG architectures, and MongoDB.`,
      citations: ['Resume - Experience section', 'Projects - AniVerse AI Platform'],
    };
  }

  async checkHealth() {
    return { status: 'healthy', provider: 'mock' };
  }
}

module.exports = MockAIProvider;
