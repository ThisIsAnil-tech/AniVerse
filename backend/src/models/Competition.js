const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const CompetitionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    organizer: { type: String, required: true },
    rank: { type: String },
    date: { type: Date },
    summary: { type: String },
  },
  { timestamps: true }
);

CompetitionSchema.plugin(auditPlugin);
module.exports = mongoose.model('Competition', CompetitionSchema);
