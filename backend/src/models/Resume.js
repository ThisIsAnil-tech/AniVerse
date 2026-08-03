const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const ResumeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    isPrimary: { type: Boolean, default: false },
    fileUrl: { type: String, required: true },
    storageProvider: { type: String, enum: ['mega', 'cloudinary', 'local'], default: 'mega' },
    fileSize: { type: Number },
    mimeType: { type: String, default: 'application/pdf' },
    downloadsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

ResumeSchema.plugin(auditPlugin);
module.exports = mongoose.model('Resume', ResumeSchema);
