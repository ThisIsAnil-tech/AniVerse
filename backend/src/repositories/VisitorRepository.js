const BaseRepository = require('./BaseRepository');
const Visitor = require('../models/Visitor');

class VisitorRepository extends BaseRepository {
  constructor() {
    super(Visitor);
  }

  async findByIpHash(ipHash) {
    return await this.model.findOne({ ipHash, status: { $ne: 'deleted' } });
  }
}

module.exports = new VisitorRepository();
