import React from "react";
import v3 from "../assets/v1.mp4";

function Hehe() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      <video src={v3} autoPlay muted loop className="absolute w-full h-full object-cover opacity-25"/>
       {/* <ul className="flex flex-1 justify-center space-x-15  text-blue-500">
           <li className="hover:text-purple-500 cursor-pointer">
            Vehicles
          </li>
          <li className="hover:text-purple-500 cursor-pointer">
            Blog
          </li> 
          <li className="hover:text-purple-500 cursor-pointer">
            Contact
          </li>
      </ul> */}
      
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

      {/* <h1 className="absolute top-5 text-4xl font-extrabold">
        <span className="text-gray-400">ALL  </span>
        <span className="text-blue-600">IN</span>
        <span className="text-gray-400">  ONE</span>
        <span className="text-blue-600">  SUBSCRIPTION.</span>
      </h1>
      <p className="absolute text-gray-400 text-l font-medium top-26 p-7">Depreciation doesn’t matter. Drive without loans, interest, or long-term commitments. Insurance, maintenance, and paperwork are all included, so you stay worry-free. With transparent pricing, generous mileage, and the freedom to swap vehicles anytime, driving has never been this simple or flexible.</p> */}
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

