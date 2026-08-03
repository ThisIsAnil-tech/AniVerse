const VisitorRepository = require('../repositories/VisitorRepository');
const crypto = require('crypto');

class VisitorService {
  async initVisitor(ipAddress, userAgent) {
    const ipHash = crypto.createHash('sha256').update(ipAddress || '127.0.0.1').digest('hex');
    let visitor = await VisitorRepository.findByIpHash(ipHash);

    if (visitor) {
      visitor.totalVisits += 1;
      visitor.lastVisitedAt = new Date();
      await visitor.save();
    } else {
      visitor = await VisitorRepository.create({
        ipHash,
        userAgent,
      });
    }

    return visitor;
  }
}

module.exports = new VisitorService();
