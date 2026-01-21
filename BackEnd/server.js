import express from "express";
// import Connection from "./db/connection";

const app = express();
const PORT = 5000;
app.use(express.json);

app.listen(PORT, ()=>{
    console.log("server start");
})

// Connection();
app.get("/", (req,res)=>{
    res.status(200).json({
        massage: "Home",
    })
});