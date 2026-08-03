const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const AdminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ['SuperAdmin', 'Admin', 'Editor', 'Viewer'], default: 'Admin' },
    lastLogin: { type: Date },
    failedAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date },
  },
  { timestamps: true }
);

AdminSchema.plugin(auditPlugin);
module.exports = mongoose.model('Admin', AdminSchema);
