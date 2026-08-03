const BaseRepository = require('./BaseRepository');
const mongoose = require('mongoose');

class ContentRepository extends BaseRepository {
  constructor(moduleName) {
    let model;
    try {
      model = mongoose.model(moduleName);
    } catch (err) {
      throw new Error(`Invalid content module: ${moduleName}`);
    }
    super(model);
    this.moduleName = moduleName;
  }

  async findBySlug(slug) {
    return await this.model.findOne({ slug, status: { $ne: 'deleted' } });
  }

  async search(queryText, options = {}) {
    const filter = {
      status: 'active',
      $text: { $search: queryText },
    };
    return await this.find(filter, options);
  }
}

module.exports = ContentRepository;
