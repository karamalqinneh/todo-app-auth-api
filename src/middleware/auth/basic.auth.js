"use strict";

const base64 = require("base-64");
const database = require("../../database/models/index");

const basicAuth = async (req, res, next) => {
  if (req.headers["authorization"]) {
    let basicHeaderParts = req.headers.authorization.split(" ");
    let encodedPart = basicHeaderParts.pop();
    let decoded = base64.decode(encodedPart);
    let [username, password] = decoded.split(":");
    try {
      let validUser = await database.users.authenticateBasic(
        username,
        password
      );
      if (validUser) {
        req.user = validUser;
        next();
      } else {
        res.status(403).send("invalid");
      }
    } catch (error) {
      console.log(error);
      res.status(403).send("invalid error from basic");
    }
  }
};

module.exports = basicAuth;
