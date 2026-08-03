const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const DocumentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, default: 'General' },
    fileUrl: { type: String, required: true },
    provider: { type: String, enum: ['mega', 'cloudinary', 'local'], default: 'mega' },
    sizeBytes: { type: Number, default: 0 },
    checksum: { type: String },
    downloadsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

DocumentSchema.plugin(auditPlugin);
module.exports = mongoose.model('Document', DocumentSchema);
