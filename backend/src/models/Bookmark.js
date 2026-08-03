const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const BookmarkSchema = new mongoose.Schema(
  {
    targetType: { type: String, enum: ['Blog', 'Project', 'ResearchPaper'], required: true },
    targetId: { type: mongoose.Schema.Types.ObjectId, required: true },
    visitorIpHash: { type: String, required: true },
  },
  { timestamps: true }
);

BookmarkSchema.index({ targetType: 1, targetId: 1, visitorIpHash: 1 }, { unique: true });
BookmarkSchema.plugin(auditPlugin);
module.exports = mongoose.model('Bookmark', BookmarkSchema);
