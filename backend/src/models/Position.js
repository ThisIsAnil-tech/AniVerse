const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const PositionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    organization: { type: String, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    isCurrent: { type: Boolean, default: false },
    responsibilities: [{ type: String }],
  },
  { timestamps: true }
);

PositionSchema.plugin(auditPlugin);
module.exports = mongoose.model('Position', PositionSchema);
