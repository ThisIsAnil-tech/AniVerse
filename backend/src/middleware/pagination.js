const pagination = (req, res, next) => {
  req.pagination = {
    page: parseInt(req.query.page || '1', 10),
    limit: parseInt(req.query.limit || '10', 10),
  };
  next();
};

module.exports = pagination;
