const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  eMail: String
});

module.exports = mongoose.model("Users", userSchema);
