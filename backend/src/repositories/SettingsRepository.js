const BaseRepository = require('./BaseRepository');
const ApplicationSetting = require('../models/ApplicationSetting');

class SettingsRepository extends BaseRepository {
  constructor() {
    super(ApplicationSetting);
  }

  async getSettings() {
    let settings = await this.model.findOne();
    if (!settings) {
      settings = await this.create({});
    }
    return settings;
  }
}

module.exports = new SettingsRepository();
