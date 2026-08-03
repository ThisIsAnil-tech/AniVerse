const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const ResearchPaperSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    abstract: { type: String, required: true },
    authors: [{ type: String }],
    journal: { type: String },
    publishedDate: { type: Date },
    doi: { type: String },
    pdfUrl: { type: String },
    citationsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

ResearchPaperSchema.index({ title: 'text', abstract: 'text' });
ResearchPaperSchema.plugin(auditPlugin);
module.exports = mongoose.model('ResearchPaper', ResearchPaperSchema);
