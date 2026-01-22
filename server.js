const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/veloceData")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const productRoutes = require("./routes/productRoutes");
const { default: axios } = require("axios");
app.use("/products", productRoutes);

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
