const BaseController = require('./BaseController');
const UploadService = require('../services/UploadService');

class UploadController extends BaseController {
  async uploadImage(req, res, next) {
    try {
      const fileName = req.body.fileName || `img_${Date.now()}.png`;
      const result = await UploadService.uploadImage(req.body, fileName);
      return this.sendSuccess(res, result, 'Image uploaded successfully');
    } catch (err) {
      next(err);
    }
  }

  async uploadDocument(req, res, next) {
    try {
      const fileName = req.body.fileName || `doc_${Date.now()}.pdf`;
      const result = await UploadService.uploadDocument(req.body, fileName);
      return this.sendSuccess(res, result, 'Document uploaded successfully');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UploadController();
