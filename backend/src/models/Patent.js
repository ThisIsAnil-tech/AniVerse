const mongoose = require('mongoose');
const auditPlugin = require('./plugins/auditPlugin');

const PatentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    patentNumber: { type: String, required: true },
    office: { type: String, default: 'USPTO' },
    status: { type: String, enum: ['Pending', 'Granted'], default: 'Granted' },
    filingDate: { type: Date },
    grantDate: { type: Date },
    url: { type: String },
    abstract: { type: String },
  },
  { timestamps: true }
);

PatentSchema.plugin(auditPlugin);
module.exports = mongoose.model('Patent', PatentSchema);
