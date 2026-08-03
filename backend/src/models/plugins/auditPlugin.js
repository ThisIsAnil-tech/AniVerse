const mongoose = require('mongoose');

module.exports = function auditPlugin(schema) {
  schema.add({
    createdBy: { type: String, default: 'system' },
    updatedBy: { type: String, default: 'system' },
    status: {
      type: String,
      enum: ['active', 'inactive', 'archived', 'deleted'],
      default: 'active',
      index: true,
    },
    version: { type: Number, default: 1 },
  });

  schema.pre('save', function (next) {
    if (this.isModified() && !this.isNew) {
      this.version += 1;
    }
    next();
  });
};
