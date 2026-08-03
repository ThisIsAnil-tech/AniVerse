const express = require('express');
const router = express.Router();
const SearchController = require('../../controllers/SearchController');
const pagination = require('../../middleware/pagination');

router.get('/', pagination, (req, res, next) => SearchController.search(req, res, next));
router.get('/suggestions', (req, res, next) => SearchController.suggestions(req, res, next));

module.exports = router;
