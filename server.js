require("dotenv").config();
require("express-async-errors");

const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const horrorRouter = require("./horrorRouter");

const server = express();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/horrors", horrorRouter);

server.get("/", (req, res) => {
  res.send("Hello");
});
module.exports = server;
