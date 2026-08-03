const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const LogMetadataSchema = new mongoose.Schema(
  {
    level: { type: String, required: true },
    message: { type: String, required: true },
    context: { type: mongoose.Schema.Types.Mixed },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

LogMetadataSchema.plugin(auditPlugin);
module.exports = mongoose.model('LogMetadata', LogMetadataSchema);
