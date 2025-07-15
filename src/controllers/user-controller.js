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

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const token = await UserServiceInstance.loginUser({email, password});
        res.status(200).json({success: true, message: "Successfully logged in", token});
    }
    catch(error){
        console.log(error);
        res.status(500).json({success: false});
    }
}

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await UserServiceInstance.isAuthenticated(token);
        return res.status(200).json({success: true, userId: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({success: false});
    }
}

module.exports = { create, destroy, login, isAuthenticated };
