const bcrypt = require('bcryptjs');
const config = require('../config');
const { connectDatabase, disconnectDatabase } = require('../config/database');
const Admin = require('../models/Admin');
const ApplicationSetting = require('../models/ApplicationSetting');
const Project = require('../models/Project');
const Blog = require('../models/Blog');

const seedData = async () => {
  await connectDatabase();
  console.log('[Seed] Seeding database...');

  // Admin seed
  const existingAdmin = await Admin.findOne({ email: config.admin.initialEmail });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(config.admin.initialPassword, 12);
    await Admin.create({
      name: 'Portfolio Admin',
      email: config.admin.initialEmail,
      password: hashedPassword,
      role: 'SuperAdmin',
    });
    console.log(`[Seed] Admin user created: ${config.admin.initialEmail}`);
  }

  // Application Settings seed
  const settings = await ApplicationSetting.findOne();
  if (!settings) {
    await ApplicationSetting.create({
      siteName: 'AniVerse AI Portfolio',
      ownerName: 'Anil',
      headline: 'Senior Full Stack & AI Engineer',
    });
    console.log('[Seed] Application settings created');
  }

  // Seed sample Project
  const sampleProject = await Project.findOne({ slug: 'aniverse-ai-portfolio' });
  if (!sampleProject) {
    await Project.create({
      title: 'AniVerse AI Portfolio',
      slug: 'aniverse-ai-portfolio',
      tagline: 'Enterprise-grade AI-powered Portfolio with RAG Pipeline',
      description: 'Comprehensive personal portfolio platform built with Node.js API Gateway, Python Flask RAG AI microservice, MongoDB, and Ollama.',
      content: 'Detailed project description of AniVerse AI Portfolio architecture...',
      technologies: ['Node.js', 'Express', 'Python', 'Flask', 'MongoDB', 'RAG', 'ChromaDB', 'Ollama'],
      featured: true,
    });
    console.log('[Seed] Sample Project created');
  }

  // Seed sample Blog
  const sampleBlog = await Blog.findOne({ slug: 'building-enterprise-rag-architecture' });
  if (!sampleBlog) {
    await Blog.create({
      title: 'Building Enterprise RAG Architecture',
      slug: 'building-enterprise-rag-architecture',
      excerpt: 'How to build production-grade Retrieval-Augmented Generation systems using Flask and ChromaDB.',
      content: 'Full post content detailing enterprise RAG architecture and LLM orchestration...',
      tags: ['AI', 'RAG', 'Python', 'Architecture'],
    });
    console.log('[Seed] Sample Blog created');
  }

  console.log('[Seed] Database seeding complete!');
  await disconnectDatabase();
};

seedData();
