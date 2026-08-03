const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const ApplicationSettingSchema = new mongoose.Schema(
  {
    siteName: { type: String, default: 'AniVerse Portfolio' },
    ownerName: { type: String, default: 'Anil' },
    headline: { type: String, default: 'Full Stack & AI Engineer' },
    maintenanceMode: { type: Boolean, default: false },
    featureFlags: {
      enableAiChat: { type: Boolean, default: true },
      enableComments: { type: Boolean, default: true },
      enableSubscriptions: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

ApplicationSettingSchema.plugin(auditPlugin);
module.exports = mongoose.model('ApplicationSetting', ApplicationSettingSchema);
