const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const CertificateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    issuer: { type: String, required: true },
    issueDate: { type: Date },
    expiryDate: { type: Date },
    credentialId: { type: String },
    credentialUrl: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

CertificateSchema.plugin(auditPlugin);
module.exports = mongoose.model('Certificate', CertificateSchema);
