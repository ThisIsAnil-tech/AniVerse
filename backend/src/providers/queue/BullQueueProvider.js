const QueueProvider = require('./QueueProvider');

class BullQueueProvider extends QueueProvider {
  constructor(redisUrl) {
    super();
    this.redisUrl = redisUrl;
  }

  async addJob(queueName, data, options = {}) {
    return { id: `bull_${Date.now()}`, queueName, data };
  }
}

module.exports = BullQueueProvider;
