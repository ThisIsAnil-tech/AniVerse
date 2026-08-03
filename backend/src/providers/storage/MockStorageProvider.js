const StorageProvider = require('./StorageProvider');

class MockStorageProvider extends StorageProvider {
  async uploadFile(fileBuffer, fileName, options = {}) {
    return {
      url: `https://mock-storage.aniverse.io/uploads/${fileName}`,
      fileId: `mock_${Date.now()}_${fileName}`,
      provider: 'mock',
    };
  }

  async deleteFile(fileId) {
    return { success: true, message: `Mock file ${fileId} deleted` };
  }
}

module.exports = MockStorageProvider;
