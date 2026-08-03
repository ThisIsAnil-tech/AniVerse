const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const ChatHistorySchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, index: true },
    messages: [
      {
        sender: { type: String, enum: ['user', 'assistant', 'system'], required: true },
        text: { type: String, required: true },
        citations: [{ type: String }],
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

ChatHistorySchema.plugin(auditPlugin);
module.exports = mongoose.model('ChatHistory', ChatHistorySchema);
