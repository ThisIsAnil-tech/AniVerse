const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const WorkExperienceSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    isCurrent: { type: Boolean, default: false },
    highlights: [{ type: String }],
    technologies: [{ type: String }],
    companyLogo: { type: String },
  },
  { timestamps: true }
);

WorkExperienceSchema.plugin(auditPlugin);
module.exports = mongoose.model('WorkExperience', WorkExperienceSchema);
