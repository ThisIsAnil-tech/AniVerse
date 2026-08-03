const BaseService = require('./BaseService');
const ContentRepository = require('../repositories/ContentRepository');
const slugify = require('slugify');

class ContentService extends BaseService {
  constructor(moduleName) {
    const repository = new ContentRepository(moduleName);
    super(repository);
    this.moduleName = moduleName;
  }

  async create(data) {
    if (data.title && !data.slug) {
      data.slug = slugify(data.title, { lower: true, strict: true }) + '-' + Date.now();
    }
    if (data.name && !data.slug && ['Category', 'Tag'].includes(this.moduleName)) {
      data.slug = slugify(data.name, { lower: true, strict: true });
    }
    return await super.create(data);
  }

  async getBySlug(slug) {
    const doc = await this.repository.findBySlug(slug);
    if (!doc) {
      const error = new Error(`${this.moduleName} with slug '${slug}' not found`);
      error.statusCode = 404;
      throw error;
    }
    return doc;
  }

  async publish(id) {
    return await this.update(id, { status: 'active', isPublished: true });
  }

  async archive(id) {
    return await this.update(id, { status: 'archived', isPublished: false });
  }

  async restore(id) {
    return await this.update(id, { status: 'active' });
  }

  async bulkCreate(items) {
    const results = [];
    for (const item of items) {
      const created = await this.create(item);
      results.push(created);
    }
    return results;
  }
}

module.exports = ContentService;
