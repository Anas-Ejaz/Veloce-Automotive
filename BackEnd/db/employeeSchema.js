import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema(
    {
        empname: String,
        empdesignation: String,
        address: String,
        empCNIC: String,
    }
)
const productModel = mongoose.model("product", employeeSchema);
export default productModel;