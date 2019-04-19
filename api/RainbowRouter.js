const router = require("express").Router();
const Rainbows = require("./Rainbows");

router.post("/", async (req, res) => {
  const rainbow = new Rainbows({ ...req.body });
  !rainbow.type
    ? res.status(400).json({ message: "Need all rainbows things, please" })
    : null;

  const newRainbow = await rainbow.save();
  res.status(201).json(newRainbow);
});

router.get("/", async (req, res) => {
  const rainbows = await Rainbows.find();
  res.status(200).json(rainbows);
});

module.exports = router;
