const mongoose = require("mongoose");

const RainbowSchema = new mongoose.Schema({
  type: {
    type: String,
    unique: true
  },
  color_count: Number,
  doubleRainbow: {
    type: Boolean,
    default: false
  },
  colors: [{ color: String }],
  randomization: Boolean
});

const Rainbows = mongoose.model("Rainbows", RainbowSchema);

module.exports = Rainbows;
