const UserServiceInstance = require("../services/user-service");

const create = async (req, res) => {
  try {
    const response = await UserServiceInstance.createUser(req.body);
    return res.status(201).json({ succes: true, message: "User created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

const destroy = async (req, res) => {
  try {
    await UserServiceInstance.destroyUser(req.params);
    return res.status(200).json({ succes: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

module.exports = { create, destroy };
