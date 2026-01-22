const express = require("express");
const router = express.Router();
const Product = require("../Models/user");

// CREATE USER
router.post("/", async (req, res) => {
  const Users = new Users(req.body);
  await Users.save();
  res.send(Users);
});

// READ all USERS
router.get("/", async (req, res) => {
  const products = await Users.find();
  res.send(Users);
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  const updated = await Users.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(updated);
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  await Users.findByIdAndDelete(req.params.id);
  res.send("User Deleted");
});

module.exports = router;
