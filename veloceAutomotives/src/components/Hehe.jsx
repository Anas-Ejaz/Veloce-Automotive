import React from "react";
import v3 from "../assets/v1.mp4";

function Hehe() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      <video src={v3} autoPlay muted loop className="absolute w-full h-full object-cover opacity-25"/>
      
      <div className="flex flex-row gap-15 flex-wrap relative mt-24 ml-8 bg-black/40 overflow-hidden rounded-2xl h-80 w-100  ">
        <div className="text-gray-400 flex flex-row flex-wrap gap-20 justify-between p-8  ">
          <div>
            <h1 className="text-5xl font-bold">
              1.5<span className="text-blue-600">K+</span>
            </h1>
            <p className="text-gray-400 mt-1">Total Bookings</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              150<span className="text-blue-600">+</span>
            </h1>
            <p className="text-gray-400 mt-1">Models In Stock</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              99<span className="text-blue-600">%</span>
            </h1>
            <p className="text-gray-400 mt-1">Happy Clients</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              20<span className="text-blue-600">+</span>
            </h1>
            <p className="text-gray-400 mt-1">Daily Bookings</p>
          </div>
        </div>

     <div className="flex justify-center pl-200 pb-10">
          <button className="flex px-20 py-3 text-xl text-white bg-blue-600 opacity-80 rounded hover:bg-blue-500    transition  ">
            View Vehicles  ➜
          </button>
        </div>
      </div>
      </div>
      
      
      );
      }
      export default Hehe;

