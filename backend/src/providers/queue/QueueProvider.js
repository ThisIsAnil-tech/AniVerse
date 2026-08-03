class QueueProvider {
  async addJob(queueName, data, options = {}) {
    throw new Error('addJob method must be implemented');
  }
}

module.exports = QueueProvider;
