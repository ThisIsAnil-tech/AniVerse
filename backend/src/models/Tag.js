const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const TagSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

TagSchema.plugin(auditPlugin);
module.exports = mongoose.model('Tag', TagSchema);
