const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    tagline: { type: String },
    description: { type: String, required: true },
    content: { type: String },
    coverImage: { type: String },
    demoUrl: { type: String },
    githubUrl: { type: String },
    technologies: [{ type: String }],
    categories: [{ type: String }],
    featured: { type: Boolean, default: false },
    startDate: { type: Date },
    endDate: { type: Date },
    viewsCount: { type: Number, default: 0 },
    likesCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

ProjectSchema.index({ title: 'text', description: 'text', content: 'text', technologies: 'text' });
ProjectSchema.plugin(auditPlugin);
module.exports = mongoose.model('Project', ProjectSchema);
