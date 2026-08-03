const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const KnowledgeDocumentSchema = new mongoose.Schema(
  {
    sourceModule: { type: String, required: true },
    sourceId: { type: String, required: true },
    title: { type: String, required: true },
    contentChunk: { type: String, required: true },
    vectorId: { type: String },
    indexedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

KnowledgeDocumentSchema.plugin(auditPlugin);
module.exports = mongoose.model('KnowledgeDocument', KnowledgeDocumentSchema);
