const express = require('express');
const router = express.Router();
const SettingsController = require('../../controllers/SettingsController');
const { authenticate } = require('../../middleware/auth');

router.get('/', (req, res, next) => SettingsController.getSettings(req, res, next));
router.put('/', authenticate, (req, res, next) => SettingsController.updateSettings(req, res, next));
router.get('/health', (req, res, next) => SettingsController.healthCheck(req, res, next));

module.exports = router;
