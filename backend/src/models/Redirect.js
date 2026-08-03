const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const RedirectSchema = new mongoose.Schema(
  {
    fromPath: { type: String, required: true, unique: true },
    toUrl: { type: String, required: true },
    statusCode: { type: Number, default: 301 },
    hitsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

RedirectSchema.plugin(auditPlugin);
module.exports = mongoose.model('Redirect', RedirectSchema);
