const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    module: { type: String, default: 'Blog' },
  },
  { timestamps: true }
);

CategorySchema.plugin(auditPlugin);
module.exports = mongoose.model('Category', CategorySchema);
