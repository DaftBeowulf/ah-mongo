const mongoose = require("mongoose");

const HorrorSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  type: String,
  age: {
    type: Number,
    required: true
  },
  friends: [{ name: String, type: String }],
  exists: { type: Boolean, default: false }
});

const Horrors = mongoose.model("Horror", HorrorSchema);

module.exports = Horrors;
