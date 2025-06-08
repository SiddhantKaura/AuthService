const express = require("express");
const apiV1Router = require("./v1/index");

const router = express.Router();

router.use("/v1", apiV1Router);

module.exports = router;