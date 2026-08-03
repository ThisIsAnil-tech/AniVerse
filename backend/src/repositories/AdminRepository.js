const BaseRepository = require('./BaseRepository');
const Admin = require('../models/Admin');

class AdminRepository extends BaseRepository {
  constructor() {
    super(Admin);
  }

  async findByEmail(email) {
    return await this.model.findOne({ email: email.toLowerCase(), status: { $ne: 'deleted' } });
  }
}

module.exports = new AdminRepository();
