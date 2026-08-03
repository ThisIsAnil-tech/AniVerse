const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const ResumeVersionSchema = new mongoose.Schema(
  {
    resumeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume', required: true },
    versionNumber: { type: String, required: true },
    changelog: { type: String },
    fileUrl: { type: String, required: true },
  },
  { timestamps: true }
);

ResumeVersionSchema.plugin(auditPlugin);
module.exports = mongoose.model('ResumeVersion', ResumeVersionSchema);
