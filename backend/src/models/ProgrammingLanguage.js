const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const ProgrammingLanguageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'], default: 'Advanced' },
    icon: { type: String },
  },
  { timestamps: true }
);

ProgrammingLanguageSchema.plugin(auditPlugin);
module.exports = mongoose.model('ProgrammingLanguage', ProgrammingLanguageSchema);
