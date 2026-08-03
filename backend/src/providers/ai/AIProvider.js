class AIProvider {
  async chat(prompt, options = {}) {
    throw new Error('chat method must be implemented');
  }

  async checkHealth() {
    throw new Error('checkHealth method must be implemented');
  }
}

module.exports = AIProvider;
