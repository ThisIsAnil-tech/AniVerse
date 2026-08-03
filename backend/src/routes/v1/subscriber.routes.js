const express = require('express');
const router = express.Router();
const SubscriberController = require('../../controllers/SubscriberController');

router.post('/', (req, res, next) => SubscriberController.subscribe(req, res, next));
router.post('/verify/:token', (req, res, next) => SubscriberController.verify(req, res, next));
router.post('/unsubscribe/:token', (req, res, next) => SubscriberController.unsubscribe(req, res, next));

module.exports = router;
