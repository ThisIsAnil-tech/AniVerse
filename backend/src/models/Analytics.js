const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const AnalyticsSchema = new mongoose.Schema(
  {
    event: { type: String, required: true },
    path: { type: String },
    visitorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Visitor' },
    referrer: { type: String },
    meta: { type: mongoose.Schema.Types.Mixed },
  },
  { timestamps: true }
);

AnalyticsSchema.plugin(auditPlugin);
module.exports = mongoose.model('Analytics', AnalyticsSchema);
