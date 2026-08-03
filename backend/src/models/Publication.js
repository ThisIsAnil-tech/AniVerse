const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const PublicationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    publisher: { type: String, required: true },
    url: { type: String },
    publishedDate: { type: Date },
    summary: { type: String },
  },
  { timestamps: true }
);

PublicationSchema.plugin(auditPlugin);
module.exports = mongoose.model('Publication', PublicationSchema);
