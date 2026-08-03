const BaseController = require('./BaseController');
const SecurityService = require('../services/SecurityService');

class SecurityController extends BaseController {
  generateSignedUrl(req, res, next) {
    try {
      const { fileId } = req.body;
      const url = SecurityService.generateSignedDownloadUrl(fileId);
      return this.sendSuccess(res, { signedUrl: url }, 'Signed download link generated');
    } catch (err) {
      next(err);
    }
  }

  setup2FA(req, res, next) {
    try {
      const result = SecurityService.generate2FASecret(req.user.email);
      return this.sendSuccess(res, result, '2FA setup credentials generated');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new SecurityController();
