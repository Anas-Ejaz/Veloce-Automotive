import express from "express";
import Connection from "./db/connection";
import productModel from "./db/productSchema";

const app = express();
const PORT = 2500;
app.use(express.json);

app.listen(PORT, ()=>{
    console.log("server start");
})

Connection();
app.get("/", (req,res)=>{
    res.status(200).json({
        massage: "Home",
    })
});