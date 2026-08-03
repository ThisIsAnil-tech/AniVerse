const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const ToolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, enum: ['IDE', 'CI/CD', 'Database', 'Cloud', 'Monitoring', 'Utility'], default: 'Utility' },
    icon: { type: String },
  },
  { timestamps: true }
);

ToolSchema.plugin(auditPlugin);
module.exports = mongoose.model('Tool', ToolSchema);
