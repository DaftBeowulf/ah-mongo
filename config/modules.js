const helmet = require("helmet");
const cors = require("cors");

module.exports = server => {
  require("dotenv").config();
  require("express-async-errors");
  server.use(helmet());
  server.use(require("express").json());
  server.use(cors());
};
