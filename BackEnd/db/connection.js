import mongoose from "mongoose";
const connection = ()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/");
        console.log("Mongodb start");
    }catch(err){
        console.log(`error is ${err}`);
    }
}
export default connection;