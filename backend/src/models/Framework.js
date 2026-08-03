const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const FrameworkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    type: { type: String, enum: ['Frontend', 'Backend', 'Fullstack', 'Mobile', 'AI'], default: 'Backend' },
    icon: { type: String },
  },
  { timestamps: true }
);

FrameworkSchema.plugin(auditPlugin);
module.exports = mongoose.model('Framework', FrameworkSchema);
