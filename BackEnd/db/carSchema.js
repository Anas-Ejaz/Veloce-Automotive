import mongoose from "mongoose";
const carSchema = new mongoose.Schema(
    {
        title: String,
        price: String,
        address: String
    }
)
const productModel = mongoose.model("product", carSchema);
export default productModel;