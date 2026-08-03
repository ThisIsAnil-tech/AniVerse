const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const SubscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    unsubscribeToken: { type: String },
    preferences: {
      newsletter: { type: Boolean, default: true },
      blogNotifications: { type: Boolean, default: true },
      projectUpdates: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

SubscriberSchema.plugin(auditPlugin);
module.exports = mongoose.model('Subscriber', SubscriberSchema);
