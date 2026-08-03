const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const VisitorSchema = new mongoose.Schema(
  {
    ipHash: { type: String, required: true, index: true },
    userAgent: { type: String },
    country: { type: String, default: 'Unknown' },
    city: { type: String, default: 'Unknown' },
    device: { type: String, default: 'Desktop' },
    browser: { type: String },
    os: { type: String },
    firstVisitedAt: { type: Date, default: Date.now },
    lastVisitedAt: { type: Date, default: Date.now },
    totalVisits: { type: Number, default: 1 },
  },
  { timestamps: true }
);

VisitorSchema.plugin(auditPlugin);
module.exports = mongoose.model('Visitor', VisitorSchema);
