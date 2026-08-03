class StorageProvider {
  async uploadFile(fileBuffer, fileName, options = {}) {
    throw new Error('uploadFile method must be implemented');
  }

  async deleteFile(fileId) {
    throw new Error('deleteFile method must be implemented');
  }
}

module.exports = StorageProvider;
