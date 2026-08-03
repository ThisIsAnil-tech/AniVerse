const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const VolunteeringSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    organization: { type: String, required: true },
    cause: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    description: { type: String },
  },
  { timestamps: true }
);

VolunteeringSchema.plugin(auditPlugin);
module.exports = mongoose.model('Volunteering', VolunteeringSchema);
