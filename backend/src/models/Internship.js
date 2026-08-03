const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const InternshipSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    isCurrent: { type: Boolean, default: false },
    description: { type: String },
    technologies: [{ type: String }],
    certificateUrl: { type: String },
  },
  { timestamps: true }
);

InternshipSchema.plugin(auditPlugin);
module.exports = mongoose.model('Internship', InternshipSchema);
