const express = require('express');
const router = express.Router();
const AnalyticsController = require('../../controllers/AnalyticsController');
const { authenticate } = require('../../middleware/auth');

router.get('/dashboard', authenticate, (req, res, next) => AnalyticsController.dashboard(req, res, next));

module.exports = router;
