const express = require("express");
const router = express.Router();
const Product = require("../Models/cars");

// CREATE product
router.post("/", async (req, res) => {
  const Cars = new Product(req.body);
  await Cars.save();
  res.send(Cars);
});

// READ all products
router.get("/", async (req, res) => {
  const products = await Cars.find();
  res.send(Cars);
});

// UPDATE product
router.put("/:id", async (req, res) => {
  const updated = await Cars.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(updated);
});

// DELETE product
router.delete("/:id", async (req, res) => {
  await Cars.findByIdAndDelete(req.params.id);
  res.send("Car Deleted");
});

module.exports = router;
