import React from "react";
import { NavLink } from "react-router";
import v from "../../assets/v7.mp4";

function AboutSection() {

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      <video src={v} autoPlay muted loop className="absolute w-full h-full object-cover opacity-25 "/>


      <div className="flex flex-col justify-between h-full py-[50px]">
        
        {/* <h2 className="text-3xl font-bold text-gray-400 ">
          - About us
        </h2> */}
        <div></div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-40 text-gray-400  ">
          <div>
            <h1 className="text-5xl font-bold">
              1.5<span className="text-blue-600">K+</span>
            </h1>
            <p className="text-gray-400 mt  -1">Total Bookings</p>
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
          <NavLink to='/Inventory'>
            <button className="flex px-20 py-3 text-xl cursor-pointer text-white bg-blue-600 opacity-80 rounded hover:bg-blue-500 transition  ">
              View Vehicles  ➜
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default AboutSection;
