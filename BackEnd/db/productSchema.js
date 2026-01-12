import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        title: String,
        price: String,
        address: String
    }
)
const productModel = mongoose.model("product", productSchema);
export default productModel;