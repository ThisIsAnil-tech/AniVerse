const BaseRepository = require('./BaseRepository');
const Subscriber = require('../models/Subscriber');

class SubscriberRepository extends BaseRepository {
  constructor() {
    super(Subscriber);
  }

  async findByEmail(email) {
    return await this.model.findOne({ email: email.toLowerCase(), status: { $ne: 'deleted' } });
  }

  async findByVerificationToken(token) {
    return await this.model.findOne({ verificationToken: token, status: { $ne: 'deleted' } });
  }

  async findByUnsubscribeToken(token) {
    return await this.model.findOne({ unsubscribeToken: token, status: { $ne: 'deleted' } });
  }
}

module.exports = new SubscriberRepository();
