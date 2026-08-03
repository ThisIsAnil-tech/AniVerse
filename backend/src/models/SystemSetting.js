const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const SystemSettingSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true },
    value: { type: mongoose.Schema.Types.Mixed, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

SystemSettingSchema.plugin(auditPlugin);
module.exports = mongoose.model('SystemSetting', SystemSettingSchema);
