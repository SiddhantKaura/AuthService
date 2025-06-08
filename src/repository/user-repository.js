const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      return await User.create(data);
    } catch (error) {
      throw error;
    }
  }

  async destroy(id) {
    try {
      await User.destroy({ where: { id: id } });
    } catch (error) {
      throw error;
    }
  }
}

const UserRepositoryInstance = new UserRepository();
module.exports = UserRepositoryInstance;
