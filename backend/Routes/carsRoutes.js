const express = require("express");
const router = express.Router();
const Cars = require("../Models/cars");

// CREATE car
router.post("/", async (req, res) => {
  const car = new Cars(req.body);
  await car.save();
  res.send(car);
});

// READ all cars
router.get("/", async (req, res) => {
  const cars = await Cars.find();
  res.send(cars);
});

// UPDATE car
router.put("/:id", async (req, res) => {
  const updated = await Cars.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(updated);
});

// DELETE car
router.delete("/:id", async (req, res) => {
  await Cars.findByIdAndDelete(req.params.id);
  res.send("Car Deleted");
});

module.exports = router;
