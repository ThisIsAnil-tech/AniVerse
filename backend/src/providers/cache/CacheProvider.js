class CacheProvider {
  async get(key) {
    throw new Error('get method must be implemented');
  }

  async set(key, value, ttlSeconds) {
    throw new Error('set method must be implemented');
  }

  async del(key) {
    throw new Error('del method must be implemented');
  }
}

module.exports = CacheProvider;
