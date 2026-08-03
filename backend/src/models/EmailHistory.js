const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const EmailHistorySchema = new mongoose.Schema(
  {
    recipient: { type: String, required: true },
    subject: { type: String, required: true },
    templateName: { type: String },
    status: { type: String, enum: ['queued', 'sent', 'failed'], default: 'queued' },
    sentAt: { type: Date },
    error: { type: String },
  },
  { timestamps: true }
);

EmailHistorySchema.plugin(auditPlugin);
module.exports = mongoose.model('EmailHistory', EmailHistorySchema);
