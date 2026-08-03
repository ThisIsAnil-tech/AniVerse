const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const ExtraCurricularSchema = new mongoose.Schema(
  {
    activity: { type: String, required: true },
    role: { type: String },
    description: { type: String },
    achievement: { type: String },
  },
  { timestamps: true }
);

ExtraCurricularSchema.plugin(auditPlugin);
module.exports = mongoose.model('ExtraCurricular', ExtraCurricularSchema);
