const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const LikeSchema = new mongoose.Schema(
  {
    targetType: { type: String, enum: ['Blog', 'Project'], required: true },
    targetId: { type: mongoose.Schema.Types.ObjectId, required: true },
    visitorIpHash: { type: String, required: true },
  },
  { timestamps: true }
);

LikeSchema.index({ targetType: 1, targetId: 1, visitorIpHash: 1 }, { unique: true });
LikeSchema.plugin(auditPlugin);
module.exports = mongoose.model('Like', LikeSchema);
