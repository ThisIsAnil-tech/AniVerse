const express = require('express');
const router = express.Router();
const SeoController = require('../../controllers/SeoController');

router.get('/sitemap.xml', (req, res, next) => SeoController.getSitemap(req, res, next));
router.get('/robots.txt', (req, res, next) => SeoController.getRobots(req, res, next));
router.get('/rss.xml', (req, res, next) => SeoController.getRss(req, res, next));

module.exports = router;
