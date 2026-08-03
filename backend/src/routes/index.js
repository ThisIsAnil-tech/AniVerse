const express = require('express');
const router = express.Router();

const authRoutes = require('./v1/auth.routes');
const contentRoutes = require('./v1/content.routes');
const visitorRoutes = require('./v1/visitor.routes');
const subscriberRoutes = require('./v1/subscriber.routes');
const searchRoutes = require('./v1/search.routes');
const aiRoutes = require('./v1/ai.routes');
const analyticsRoutes = require('./v1/analytics.routes');
const emailRoutes = require('./v1/email.routes');
const uploadRoutes = require('./v1/upload.routes');
const settingsRoutes = require('./v1/settings.routes');
const seoRoutes = require('./v1/seo.routes');
const securityRoutes = require('./v1/security.routes');

router.use('/auth', authRoutes);
router.use('/content', contentRoutes);
router.use('/visitor', visitorRoutes);
router.use('/subscribers', subscriberRoutes);
router.use('/search', searchRoutes);
router.use('/ai', aiRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/email', emailRoutes);
router.use('/upload', uploadRoutes);
router.use('/settings', settingsRoutes);
router.use('/seo', seoRoutes);
router.use('/security', securityRoutes);

module.exports = router;
