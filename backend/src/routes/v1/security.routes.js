const express = require('express');
const router = express.Router();
const SecurityController = require('../../controllers/SecurityController');
const { authenticate } = require('../../middleware/auth');

router.post('/signed-url', authenticate, (req, res, next) => SecurityController.generateSignedUrl(req, res, next));
router.post('/2fa/setup', authenticate, (req, res, next) => SecurityController.setup2FA(req, res, next));

module.exports = router;
