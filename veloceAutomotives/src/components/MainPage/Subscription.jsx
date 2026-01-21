import React from "react";
import v3 from "../../assets/v4.mp4";

function Subscription() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      <video src={v3} autoPlay muted loop className="absolute w-full h-full object-cover opacity-55"/>
      
      <div className="flex flex-row gap-15 flex-wrap relative mt-24 ml-8 bg-black/40 overflow-hidden rounded-2xl h-80 w-100  ">
        <div className="text-gray-400 flex flex-row flex-wrap gap-20 justify-between p-8  ">
         
        <h1 className="absolute top-5 text-4xl font-extrabold">
        <span className="text-gray-400">ALL  </span>
        <span className="text-blue-600">IN</span>
        <span className="text-gray-400">  ONE</span>
        <span className="text-blue-600">  SUBSCRIPTION.</span>
      </h1>
      <p className="absolute text-gray-400 text-l font-medium top-26 pt-4">Depreciation doesn’t matter. Drive without loans, interest, or long-term commitments. Insurance, maintenance, and paperwork are all included, so you stay worry-free. With transparent pricing, generous mileage, and the freedom to swap vehicles anytime, driving has never been this simple or flexible.
        </p> 
      </div>
      </div>
      </div>
      
      );
      }
      export default Subscription;

