const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const SearchHistorySchema = new mongoose.Schema(
  {
    query: { type: String, required: true },
    resultsCount: { type: Number, default: 0 },
    visitorIpHash: { type: String },
  },
  { timestamps: true }
);

SearchHistorySchema.plugin(auditPlugin);
module.exports = mongoose.model('SearchHistory', SearchHistorySchema);
