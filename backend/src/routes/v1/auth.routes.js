const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/AuthController');
const { authenticate } = require('../../middleware/auth');

router.post('/login', (req, res, next) => AuthController.login(req, res, next));
router.post('/refresh', (req, res, next) => AuthController.refresh(req, res, next));
router.get('/me', authenticate, (req, res, next) => AuthController.me(req, res, next));
router.post('/logout', authenticate, (req, res, next) => AuthController.logout(req, res, next));

module.exports = router;
