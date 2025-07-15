const express = require("express");
const UserController = require("../../controllers/user-controller");
const UserMiddlewares = require("../../middlewares/user-middlewares");

const router = express.Router();

router.post(
  "/users/signup",
  UserMiddlewares.validateAuthRequest,
  UserController.create
);
router.post(
  "/users/login",
  UserMiddlewares.validateAuthRequest,
  UserController.login
);
router.get("/users/authenticate", UserController.isAuthenticated);

module.exports = router;
