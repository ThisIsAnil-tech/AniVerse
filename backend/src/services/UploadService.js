const config = require('../config');
const MockStorageProvider = require('../providers/storage/MockStorageProvider');
const CloudinaryProvider = require('../providers/storage/CloudinaryProvider');
const MEGAProvider = require('../providers/storage/MEGAProvider');

class UploadService {
  constructor() {
    if (config.storage.provider === 'cloudinary') {
      this.imageProvider = new CloudinaryProvider(config.storage.cloudinary);
    } else {
      this.imageProvider = new MockStorageProvider();
    }

    if (config.storage.provider === 'mega') {
      this.docProvider = new MEGAProvider(config.storage.mega);
    } else {
      this.docProvider = new MockStorageProvider();
    }
  }

  async uploadImage(fileBuffer, fileName) {
    return await this.imageProvider.uploadFile(fileBuffer, fileName);
  }

  async uploadDocument(fileBuffer, fileName) {
    return await this.docProvider.uploadFile(fileBuffer, fileName);
  }
}

module.exports = new UploadService();
