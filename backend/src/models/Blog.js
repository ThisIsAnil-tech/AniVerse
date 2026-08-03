const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String },
    content: { type: String, required: true },
    coverImage: { type: String },
    author: { type: String, default: 'Anil' },
    categories: [{ type: String }],
    tags: [{ type: String }],
    publishedAt: { type: Date, default: Date.now },
    isPublished: { type: Boolean, default: true },
    readTimeMinutes: { type: Number, default: 5 },
    viewsCount: { type: Number, default: 0 },
    likesCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

BlogSchema.index({ title: 'text', excerpt: 'text', content: 'text', tags: 'text' });
BlogSchema.plugin(auditPlugin);
module.exports = mongoose.model('Blog', BlogSchema);
