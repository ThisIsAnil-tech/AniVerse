const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const NotificationSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    metadata: { type: mongoose.Schema.Types.Mixed },
  },
  { timestamps: true }
);

NotificationSchema.plugin(auditPlugin);
module.exports = mongoose.model('Notification', NotificationSchema);
