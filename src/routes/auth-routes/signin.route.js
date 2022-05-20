const express = require("express");
const router = express.Router();
const basicAuth = require("../../middleware/auth/basic.auth");

// signup Function
function signinController(req, res) {
  res.status(200).json({
    username: req.user.username,
    token: req.user.token,
    action: req.user.actions,
  });
}

module.exports = router.post("/signin", basicAuth, signinController);
