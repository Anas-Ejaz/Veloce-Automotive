import mongoose from "mongoose";
const customerSchema = new mongoose.Schema(
    {
        cname: String,
        cnic: String,
        address: String,
        phone: String,
        carid: String,
    }
)
const productModel = mongoose.model("product", customerSchema);
export default productModel;