const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const SkillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'AI/ML', 'General'], default: 'General' },
    proficiency: { type: Number, min: 1, max: 100, default: 80 },
    icon: { type: String },
    yearsOfExperience: { type: Number, default: 1 },
  },
  { timestamps: true }
);

SkillSchema.plugin(auditPlugin);
module.exports = mongoose.model('Skill', SkillSchema);
