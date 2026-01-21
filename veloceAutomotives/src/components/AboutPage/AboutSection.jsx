import React from "react";
<<<<<<<< HEAD:veloceAutomotives/src/components/MainPage/ViewVehicles.jsx
import { Link } from "react-router-dom";
import v from "../../assets/v7.mp4";

function ViewVehicles() {
========
import { NavLink } from "react-router";
import v from "../../assets/v3.mp4";

function AboutSection() {

>>>>>>>> 9cd1fe10039935c3b1230bfa805e5cb053832071:veloceAutomotives/src/components/AboutPage/AboutSection.jsx
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      <video src={v} autoPlay muted loop className="absolute w-full h-full object-cover opacity-25 "/>


      <div className="flex flex-col justify-between h-full py-[50px]">
        
<<<<<<<< HEAD:veloceAutomotives/src/components/MainPage/ViewVehicles.jsx
        <h2 className="text-3xl font-bold text-gray-400 ">
          - Why Choose Us? 
        </h2>
========
        {/* <h2 className="text-3xl font-bold text-gray-400 ">
          - About us
        </h2> */}
        <div></div>
>>>>>>>> 9cd1fe10039935c3b1230bfa805e5cb053832071:veloceAutomotives/src/components/AboutPage/AboutSection.jsx

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

        <Link to="/Inventory">
        <div className="flex justify-center pl-200 pb-10">
<<<<<<<< HEAD:veloceAutomotives/src/components/MainPage/ViewVehicles.jsx
          <button className="flex px-20 py-3 text-xl text-white bg-blue-600 opacity-80 rounded hover:opacity-65 transition  ">
            View Vehicles  ➜
          </button>
========
          <NavLink to='/Inventory'>
            <button className="flex px-20 py-3 text-xl cursor-pointer text-white bg-blue-600 opacity-80 rounded hover:bg-blue-500 transition  ">
              View Vehicles  ➜
            </button>
          </NavLink>
>>>>>>>> 9cd1fe10039935c3b1230bfa805e5cb053832071:veloceAutomotives/src/components/AboutPage/AboutSection.jsx
        </div>
        </Link>

      </div>
    </div>
  );
}

export default ViewVehicles;
