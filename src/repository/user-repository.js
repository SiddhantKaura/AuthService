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

  async getByEmail(email) {
    try {
      const userObj = await User.findOne({
        where: { email },
      });
      return userObj;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
        console.log(id, " here");
      const userObj = await User.findByPk(id, { attributes: ["email", "id"] });
      console.log(userObj, " bye");
      return userObj;
    } catch (error) {
      throw error;
    }
  }
}

const UserRepositoryInstance = new UserRepository();
module.exports = UserRepositoryInstance;
