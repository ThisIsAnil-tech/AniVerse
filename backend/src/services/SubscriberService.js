const SubscriberRepository = require('../repositories/SubscriberRepository');
const crypto = require('crypto');

class SubscriberService {
  async subscribe(email, name) {
    let subscriber = await SubscriberRepository.findByEmail(email);
    if (subscriber) {
      if (!subscriber.isVerified) {
        return subscriber;
      }
      const error = new Error('Email is already subscribed');
      error.statusCode = 400;
      throw error;
    }

    const verificationToken = crypto.randomBytes(32).toString('hex');
    const unsubscribeToken = crypto.randomBytes(32).toString('hex');

    subscriber = await SubscriberRepository.create({
      email,
      name,
      verificationToken,
      unsubscribeToken,
    });

    return subscriber;
  }

  async verifyToken(token) {
    const subscriber = await SubscriberRepository.findByVerificationToken(token);
    if (!subscriber) {
      const error = new Error('Invalid verification token');
      error.statusCode = 404;
      throw error;
    }

    subscriber.isVerified = true;
    subscriber.verificationToken = null;
    await subscriber.save();

    return subscriber;
  }

  async unsubscribeToken(token) {
    const subscriber = await SubscriberRepository.findByUnsubscribeToken(token);
    if (!subscriber) {
      const error = new Error('Invalid unsubscribe token');
      error.statusCode = 404;
      throw error;
    }

    subscriber.status = 'inactive';
    await subscriber.save();

    return subscriber;
  }
}

module.exports = new SubscriberService();
