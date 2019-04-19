const express = require("express");
const server = express();
const mongoose = require("mongoose");
const rainbowRouter = require("./RainbowRouter");

const moduleConfig = require("../config/modules");

moduleConfig(server);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("\n connected to MongoDB \n"))
  .catch(err => {
    console.log(err);
  });

server.get("/", (req, res) => {
  res.send("Hello!");
});

server.use("/api/rainbows", rainbowRouter);

module.exports = server;
