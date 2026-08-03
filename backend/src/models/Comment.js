const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const CommentSchema = new mongoose.Schema(
  {
    targetType: { type: String, enum: ['Blog', 'Project'], required: true },
    targetId: { type: mongoose.Schema.Types.ObjectId, required: true },
    authorName: { type: String, required: true },
    authorEmail: { type: String, required: true },
    content: { type: String, required: true },
    isApproved: { type: Boolean, default: false },
    parentCommentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  },
  { timestamps: true }
);

CommentSchema.plugin(auditPlugin);
module.exports = mongoose.model('Comment', CommentSchema);
