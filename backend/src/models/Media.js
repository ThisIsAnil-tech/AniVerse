const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const MediaSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    publicId: { type: String },
    format: { type: String },
    width: { type: Number },
    height: { type: Number },
    bytes: { type: Number },
    folder: { type: String, default: 'gallery' },
    provider: { type: String, enum: ['cloudinary', 'local'], default: 'cloudinary' },
  },
  { timestamps: true }
);

MediaSchema.plugin(auditPlugin);
module.exports = mongoose.model('Media', MediaSchema);
