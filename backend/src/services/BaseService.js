class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    return await this.repository.create(data);
  }

  async getById(id) {
    const doc = await this.repository.findById(id);
    if (!doc) {
      const error = new Error('Resource not found');
      error.statusCode = 404;
      throw error;
    }
    return doc;
  }

  async getAll(query = {}, options = {}) {
    return await this.repository.find(query, options);
  }

  async update(id, data) {
    const doc = await this.repository.update(id, data);
    if (!doc) {
      const error = new Error('Resource not found for update');
      error.statusCode = 404;
      throw error;
    }
    return doc;
  }

  async delete(id) {
    const doc = await this.repository.delete(id);
    if (!doc) {
      const error = new Error('Resource not found for deletion');
      error.statusCode = 404;
      throw error;
    }
    return doc;
  }
}

module.exports = BaseService;
