const express = require('express');
const router = express.Router();
const AIController = require('../../controllers/AIController');

router.post('/chat', (req, res, next) => AIController.chat(req, res, next));
router.get('/health', (req, res, next) => AIController.health(req, res, next));

module.exports = router;
