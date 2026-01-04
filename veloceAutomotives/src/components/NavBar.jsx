import React from "react";
import VeloceLogo from "../assets/veloce.png"

function Navbar() {
  return (
    <nav className=" m-0 h-15 flex items-center justify-between fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="veloceLogo size-15">
        <img src={VeloceLogo} alt="image" className="cursor-pointer" />
      </div>
      <ul className="flex flex-1 justify-center space-x-15  text-blue-500">
           <li className="hover:text-purple-500 cursor-pointer">
            Vehicles
          </li>
          <li className="hover:text-purple-500 cursor-pointer">
            Blog
          </li> 
          <li className="hover:text-purple-500 cursor-pointer">
            Contact
          </li>
      </ul>
      <div>
        <button className="m-4 space-y-1.5 p-2  hover:bg-gray-700">
          <span className="block w-6 h-0.5 bg-gray-400"></span>
          <span className="block w-6 h-0.5 bg-blue-500"></span>
          <span className="block w-6 h-0.5 bg-gray-400"></span>
  </button>

      </div>
    </nav>
  );
}

export default Navbar;
