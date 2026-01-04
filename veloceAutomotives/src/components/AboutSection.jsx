import React from "react";
import v1 from "../assets/v1.mp4";

function AboutSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      <video src={v1} autoPlay muted loop className="absolute w-full h-full object-cover opacity-25"/>


      <div className="relative flex flex-col justify-between h-full pt-10 pl-10">
        
        <h2 className="text-3xl font-bold text-gray-400 ">
          - About us
        </h2>

        <div className="flex justify-center items-center gap-40 text-gray-400  ">
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
          <button className="flex px-20 py-3 text-xl text-white bg-blue-600 rounded hover:bg-red-500 transition opacity-65 ">
            Learn more  ➜
          </button>
        </div>

      </div>
    </div>
  );
}

export default AboutSection;
