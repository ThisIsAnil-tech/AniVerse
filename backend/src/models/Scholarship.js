const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const ScholarshipSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    organization: { type: String, required: true },
    amount: { type: String },
    year: { type: Number },
    description: { type: String },
  },
  { timestamps: true }
);

ScholarshipSchema.plugin(auditPlugin);
module.exports = mongoose.model('Scholarship', ScholarshipSchema);
