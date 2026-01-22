const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name : String,  : String, carType : String, carBrand : String , carPrice: Number

}); 
module.exports = mongoose.model("Cars", carSchema);
