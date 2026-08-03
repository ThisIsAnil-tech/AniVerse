const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const AwardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: Date },
    description: { type: String },
  },
  { timestamps: true }
);

AwardSchema.plugin(auditPlugin);
module.exports = mongoose.model('Award', AwardSchema);
