const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const SubjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    code: { type: String },
    description: { type: String },
    grade: { type: String },
  },
  { timestamps: true }
);

SubjectSchema.plugin(auditPlugin);
module.exports = mongoose.model('Subject', SubjectSchema);
