const SettingsRepository = require('../repositories/SettingsRepository');

class SettingsService {
  async getSettings() {
    return await SettingsRepository.getSettings();
  }

  async updateSettings(data) {
    const settings = await SettingsRepository.getSettings();
    return await SettingsRepository.update(settings._id, data);
  }
}

module.exports = new SettingsService();
