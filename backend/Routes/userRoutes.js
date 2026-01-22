const express = require("express");
const router = express.Router();
const User = require("../Models/user");

// CREATE USER
router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// READ all USERS
router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(updated);
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User Deleted");
});

module.exports = router;
