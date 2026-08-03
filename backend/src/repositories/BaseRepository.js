class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const document = new this.model(data);
    return await document.save();
  }

  async findById(id) {
    return await this.model.findOne({ _id: id, status: { $ne: 'deleted' } });
  }

  async findOne(query) {
    return await this.model.findOne({ ...query, status: { $ne: 'deleted' } });
  }

  async find(query = {}, options = {}) {
    const page = parseInt(options.page || 1, 10);
    const limit = parseInt(options.limit || 10, 10);
    const skip = (page - 1) * limit;
    const sort = options.sort || { createdAt: -1 };

    const filter = { ...query, status: { $ne: 'deleted' } };

    const [data, total] = await Promise.all([
      this.model.find(filter).sort(sort).skip(skip).limit(limit),
      this.model.countDocuments(filter),
    ]);

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit) || 1,
      },
    };
  }

  async update(id, data) {
    return await this.model.findOneAndUpdate(
      { _id: id, status: { $ne: 'deleted' } },
      { $set: data },
      { new: true, runValidators: true }
    );
  }

  async delete(id) {
    return await this.model.findOneAndUpdate(
      { _id: id },
      { $set: { status: 'deleted' } },
      { new: true }
    );
  }

  async hardDelete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
