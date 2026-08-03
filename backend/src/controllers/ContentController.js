const BaseController = require('./BaseController');
const ContentService = require('../services/ContentService');

// Map URL parameter :module to upper camel case Mongoose model names
const moduleMap = {
  projects: 'Project',
  blogs: 'Blog',
  categories: 'Category',
  tags: 'Tag',
  skills: 'Skill',
  subjects: 'Subject',
  languages: 'ProgrammingLanguage',
  frameworks: 'Framework',
  tools: 'Tool',
  internships: 'Internship',
  experience: 'WorkExperience',
  research: 'ResearchPaper',
  publications: 'Publication',
  patents: 'Patent',
  certificates: 'Certificate',
  awards: 'Award',
  competitions: 'Competition',
  scholarships: 'Scholarship',
  positions: 'Position',
  volunteering: 'Volunteering',
  extracurricular: 'ExtraCurricular',
  resumes: 'Resume',
};

class ContentController extends BaseController {
  getService(moduleParam) {
    const modelName = moduleMap[moduleParam.toLowerCase()] || moduleParam;
    return new ContentService(modelName);
  }

  async getAll(req, res, next) {
    try {
      const service = this.getService(req.params.module);
      const result = await service.getAll(req.query, req.pagination);
      return this.sendSuccess(res, result.data, 'Content retrieved successfully', result.meta);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const service = this.getService(req.params.module);
      const item = await service.getById(req.params.id);
      return this.sendSuccess(res, item, 'Content retrieved successfully');
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const service = this.getService(req.params.module);
      const item = await service.create(req.body);
      return this.sendSuccess(res, item, 'Content created successfully', null, 201);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const service = this.getService(req.params.module);
      const item = await service.update(req.params.id, req.body);
      return this.sendSuccess(res, item, 'Content updated successfully');
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const service = this.getService(req.params.module);
      const item = await service.delete(req.params.id);
      return this.sendSuccess(res, item, 'Content deleted successfully');
    } catch (err) {
      next(err);
    }
  }

  async publish(req, res, next) {
    try {
      const service = this.getService(req.params.module);
      const item = await service.publish(req.params.id);
      return this.sendSuccess(res, item, 'Content published successfully');
    } catch (err) {
      next(err);
    }
  }

  async archive(req, res, next) {
    try {
      const service = this.getService(req.params.module);
      const item = await service.archive(req.params.id);
      return this.sendSuccess(res, item, 'Content archived successfully');
    } catch (err) {
      next(err);
    }
  }

  async restore(req, res, next) {
    try {
      const service = this.getService(req.params.module);
      const item = await service.restore(req.params.id);
      return this.sendSuccess(res, item, 'Content restored successfully');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ContentController();
