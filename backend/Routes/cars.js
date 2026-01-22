const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    noPlate : String, carName : String, carType : String, carBrand : String , carPrice: Number

}); 
module.exports = mongoose.model("Cars", carSchema);
