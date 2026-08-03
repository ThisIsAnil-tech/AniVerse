const BaseController = require('./BaseController');
const SeoService = require('../services/SeoService');

class SeoController extends BaseController {
  async getSitemap(req, res, next) {
    try {
      const xml = await SeoService.generateSitemap();
      res.header('Content-Type', 'application/xml');
      return res.status(200).send(xml);
    } catch (err) {
      next(err);
    }
  }

  getRobots(req, res, next) {
    try {
      const txt = SeoService.generateRobotsTxt();
      res.header('Content-Type', 'text/plain');
      return res.status(200).send(txt);
    } catch (err) {
      next(err);
    }
  }

  async getRss(req, res, next) {
    try {
      const xml = await SeoService.generateRssFeed();
      res.header('Content-Type', 'application/rss+xml');
      return res.status(200).send(xml);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new SeoController();
