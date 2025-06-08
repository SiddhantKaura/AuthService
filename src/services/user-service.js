const UserRepositoryInstance = require("../repository/user-repository");

class userService {
  async createUser(data) {
    try {
      return await UserRepositoryInstance.create(data);
    } catch (error) {
      throw error;
    }
  }

  async destroyUser(id) {
    try {
      await UserRepositoryInstance.destroy(id);
    } catch (error) {
      throw error;
    }
  }
}

const UserServiceInstance = new userService();
module.exports = UserServiceInstance;
