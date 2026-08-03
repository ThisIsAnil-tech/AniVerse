const Visitor = require('../models/Visitor');
const Subscriber = require('../models/Subscriber');
const Project = require('../models/Project');
const Blog = require('../models/Blog');

class AnalyticsService {
  async getDashboardOverview() {
    const [totalVisitors, totalSubscribers, totalProjects, totalBlogs] = await Promise.all([
      Visitor.countDocuments({ status: { $ne: 'deleted' } }),
      Subscriber.countDocuments({ isVerified: true, status: 'active' }),
      Project.countDocuments({ status: 'active' }),
      Blog.countDocuments({ status: 'active' }),
    ]);

    return {
      visitors: totalVisitors,
      subscribers: totalSubscribers,
      projects: totalProjects,
      blogs: totalBlogs,
      systemHealth: 'Optimal',
    };
  }
}

module.exports = new AnalyticsService();
