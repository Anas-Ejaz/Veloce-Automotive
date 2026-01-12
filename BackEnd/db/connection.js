import mongoose from "mongoose";
const Connection = ()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/");
        console.log("Mongodb start");
    }catch(err){
        console.log(`error is ${err}`);
    }
}