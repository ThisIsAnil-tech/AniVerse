const QueueProvider = require('./QueueProvider');

class InMemoryQueueProvider extends QueueProvider {
  constructor() {
    super();
    this.jobs = [];
  }

  async addJob(queueName, data, options = {}) {
    const job = { id: `job_${Date.now()}`, queueName, data, createdAt: new Date() };
    this.jobs.push(job);
    console.log(`[InMemoryQueueProvider] Added job to queue '${queueName}':`, job.id);
    return job;
  }
}

module.exports = InMemoryQueueProvider;
