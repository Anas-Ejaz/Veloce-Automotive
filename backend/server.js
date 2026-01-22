const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/veloceData")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
const carRoute = require("./Routes/carsRoutes");
app.use("/cars", carRoute);

const userRoute = require("./Routes/userRoutes");
app.use("/users", userRoute); // ✅ FIXED PATH

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
