const StorageProvider = require('./StorageProvider');

class MEGAProvider extends StorageProvider {
  constructor(config) {
    super();
    this.config = config;
  }

  async uploadFile(fileBuffer, fileName, options = {}) {
    // MEGA storage abstraction for documents
    return {
      url: `https://mega.nz/file/mock_${Date.now()}#key`,
      fileId: `mega_${fileName}`,
      provider: 'mega',
    };
  }

  async deleteFile(fileId) {
    return { success: true, fileId };
  }
}

module.exports = MEGAProvider;
