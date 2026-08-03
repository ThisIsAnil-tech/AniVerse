const BaseController = require('./BaseController');
const SearchService = require('../services/SearchService');

class SearchController extends BaseController {
  async search(req, res, next) {
    try {
      const { q } = req.query;
      const results = await SearchService.searchGlobal(q, req.pagination);
      return this.sendSuccess(res, results, 'Search results fetched');
    } catch (err) {
      next(err);
    }
  }

  async suggestions(req, res, next) {
    try {
      const { q } = req.query;
      const suggestions = await SearchService.getSuggestions(q);
      return this.sendSuccess(res, suggestions, 'Search suggestions fetched');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new SearchController();
