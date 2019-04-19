const router = require("express").Router();

const Horrors = require("./horrors");

router.get("/", async (req, res) => {
  //   try {
  //     const horrors = await Horrors.find();
  //     res.status(200).json(horrors);
  //   } catch (error) {
  //     res.status(500).json(`Something went horribly wrong: ${error}`);
  //   }
  Horrors.find((err, horrors) => {
    err ? res.status(500).json({ error: err }) : res.status(200).json(horrors);
  });
});

router.post("/", async (req, res) => {
  const horror = new Horrors({ ...req.body });
  //   try {
  const newHorror = await horror.save();
  res.status(201).json(newHorror);
  //   } catch (error) {
  //     res.status(500).json(`Something went horribly wrong: ${error}`);
  //   }
});

router.put("/:_id", async (req, res) => {
  const { _id } = req.params;
  const changes = req.body;
  try {
    const updated = await Horrors.findByIdAndUpdate(_id, changes, {
      new: true
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json(`Something went horribly wrong: ${error}`);
  }
});

router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const deleted = await Horrors.findOneAndRemove(_id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json(`Something went horribly wrong: ${error}`);
  }
});

module.exports = router;
