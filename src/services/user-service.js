const { SECRET } = require("../config/serverConfig");
const UserRepositoryInstance = require("../repository/user-repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class userService {
  async createUser(userObj) {
    try {
      return await UserRepositoryInstance.create(userObj);
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

  async getById(id) {
    try {
      return await UserRepositoryInstance.getById(id);
    } catch (error) {
      throw error;
    }
  }

  async validateUserCredentials(userCreds) {
    try {
      const { email, password } = userCreds;
      const userObj = await UserRepositoryInstance.getByEmail(email);
      const isMatch = bcrypt.compareSync(password, userObj.password);
      return { isMatch, userObj };
    } catch (error) {
      throw error;
    }
  }

  async generateToken(userObj) {
    try {
      const { id, email } = userObj;
      const token = jwt.sign({ id, email }, SECRET, { expiresIn: "1h" });
      return token;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(userCreds) {
    try {
      const { isMatch, userObj } = await this.validateUserCredentials(
        userCreds
      );
      if (isMatch) {
        return this.generateToken(userObj);
      }
      throw "Invalid User";
    } catch (error) {
      throw error;
    }
  }

  async isAuthenticated(token) {
    try {
      const decoded = jwt.verify(token, SECRET);
      if (!decoded) {
        throw "Invalid token";
      }
      const userObj = await this.getById(decoded.id);
      if (!userObj) {
        throw "User doesn't exist";
      }
      return userObj.id;
    } catch (error) {
      throw error;
    }
  }
}

const UserServiceInstance = new userService();
module.exports = UserServiceInstance;
