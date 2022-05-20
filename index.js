const server = require("./src/server");
require("dotenv").config();
const database = require("./src/database/models/index");
const port = process.env.PORT;

database.sequelize.sync().then(() => {
  server.start(port || 5050);
});
