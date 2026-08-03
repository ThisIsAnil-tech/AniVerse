const express = require('express');
const router = express.Router();
const VisitorController = require('../../controllers/VisitorController');

router.post('/init', (req, res, next) => VisitorController.init(req, res, next));

module.exports = router;
