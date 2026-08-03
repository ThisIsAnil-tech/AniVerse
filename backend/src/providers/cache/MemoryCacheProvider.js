const CacheProvider = require('./CacheProvider');

class MemoryCacheProvider extends CacheProvider {
  constructor() {
    super();
    this.store = new Map();
  }

  async get(key) {
    const item = this.store.get(key);
    if (!item) return null;
    if (item.expiry && item.expiry < Date.now()) {
      this.store.delete(key);
      return null;
    }
    return item.value;
  }

  async set(key, value, ttlSeconds = 300) {
    const expiry = Date.now() + ttlSeconds * 1000;
    this.store.set(key, { value, expiry });
    return true;
  }

  async del(key) {
    this.store.delete(key);
    return true;
  }
}

module.exports = MemoryCacheProvider;
