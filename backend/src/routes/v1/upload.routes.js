const express = require('express');
const router = express.Router();
const UploadController = require('../../controllers/UploadController');
const { authenticate } = require('../../middleware/auth');

router.post('/image', authenticate, (req, res, next) => UploadController.uploadImage(req, res, next));
router.post('/document', authenticate, (req, res, next) => UploadController.uploadDocument(req, res, next));

module.exports = router;
