const Project = require('../models/Project');
const Blog = require('../models/Blog');
const ResearchPaper = require('../models/ResearchPaper');
const Patent = require('../models/Patent');
const SearchHistory = require('../models/SearchHistory');

class SearchService {
  async searchGlobal(queryText, options = {}) {
    if (!queryText) {
      return { projects: [], blogs: [], researchPapers: [], patents: [] };
    }

    const regex = new RegExp(queryText, 'i');

    const [projects, blogs, researchPapers, patents] = await Promise.all([
      Project.find({ $or: [{ title: regex }, { description: regex }, { technologies: regex }], status: 'active' }).limit(10),
      Blog.find({ $or: [{ title: regex }, { excerpt: regex }, { content: regex }], status: 'active' }).limit(10),
      ResearchPaper.find({ $or: [{ title: regex }, { abstract: regex }], status: 'active' }).limit(10),
      Patent.find({ $or: [{ title: regex }, { abstract: regex }], status: 'active' }).limit(10),
    ]);

    const totalResults = projects.length + blogs.length + researchPapers.length + patents.length;

    // Record Search History
    await SearchHistory.create({
      query: queryText,
      resultsCount: totalResults,
    });

    return {
      query: queryText,
      totalResults,
      results: {
        projects,
        blogs,
        researchPapers,
        patents,
      },
    };
  }

  async getSuggestions(queryText) {
    if (!queryText || queryText.length < 2) return [];
    const regex = new RegExp(`^${queryText}`, 'i');
    const blogs = await Blog.find({ title: regex }).select('title slug').limit(5);
    const projects = await Project.find({ title: regex }).select('title slug').limit(5);
    return [...blogs.map(b => ({ title: b.title, type: 'blog' })), ...projects.map(p => ({ title: p.title, type: 'project' }))];
  }
}

module.exports = new SearchService();
