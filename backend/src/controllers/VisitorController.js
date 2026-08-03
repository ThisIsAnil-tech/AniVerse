const BaseController = require('./BaseController');
const VisitorService = require('../services/VisitorService');

class VisitorController extends BaseController {
  async init(req, res, next) {
    try {
      const visitor = await VisitorService.initVisitor(req.ip, req.get('User-Agent'));
      return this.sendSuccess(res, visitor, 'Visitor session initialized');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new VisitorController();
