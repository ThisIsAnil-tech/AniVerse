const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const AIMetadataSchema = new mongoose.Schema(
  {
    modelName: { type: String, default: 'mistral' },
    embeddingModel: { type: String, default: 'all-MiniLM-L6-v2' },
    totalQueriesHandled: { type: Number, default: 0 },
    avgResponseTimeMs: { type: Number, default: 0 },
    lastSyncedAt: { type: Date },
  },
  { timestamps: true }
);

AIMetadataSchema.plugin(auditPlugin);
module.exports = mongoose.model('AIMetadata', AIMetadataSchema);
