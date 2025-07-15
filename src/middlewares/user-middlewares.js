const validateAuthRequest = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ success: false, message: "Invalid data !" });
  }
  next();
};

module.exports = { validateAuthRequest };
