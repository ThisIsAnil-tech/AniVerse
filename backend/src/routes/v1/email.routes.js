const express = require('express');
const router = express.Router();
const EmailController = require('../../controllers/EmailController');
const { authenticate } = require('../../middleware/auth');

router.post('/send', authenticate, (req, res, next) => EmailController.send(req, res, next));

module.exports = router;
