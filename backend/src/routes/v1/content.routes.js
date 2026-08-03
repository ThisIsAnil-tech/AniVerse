const express = require('express');
const router = express.Router();
const ContentController = require('../../controllers/ContentController');
const { authenticate } = require('../../middleware/auth');
const pagination = require('../../middleware/pagination');

router.get('/:module', pagination, (req, res, next) => ContentController.getAll(req, res, next));
router.get('/:module/:id', (req, res, next) => ContentController.getById(req, res, next));
router.post('/:module', authenticate, (req, res, next) => ContentController.create(req, res, next));
router.put('/:module/:id', authenticate, (req, res, next) => ContentController.update(req, res, next));
router.delete('/:module/:id', authenticate, (req, res, next) => ContentController.delete(req, res, next));
router.patch('/:module/:id/publish', authenticate, (req, res, next) => ContentController.publish(req, res, next));
router.patch('/:module/:id/archive', authenticate, (req, res, next) => ContentController.archive(req, res, next));
router.patch('/:module/:id/restore', authenticate, (req, res, next) => ContentController.restore(req, res, next));

module.exports = router;
