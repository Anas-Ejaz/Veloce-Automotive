import React from "react";
import VeloceLogo from "../assets/veloce.png"

function Navbar() {
  return (
    <nav className=" m-0 h-18 flex items-center justify-between fixed top-0.5 left-0 w-full bg-transparent z-50">
      <div className="size-20">
        <img src={VeloceLogo} alt="image" className="cursor-pointer" />
      </div>

      {/* <div>
        <button>
        <div className=" bg-gray-800/70 rounded-2xl h-10 w-20" >
        <h1 className="text-2xl text-blue-700">menu</h1>
          
        </div>
        </button>
         <button>
        <div className=" bg-transparent rounded-2xl h-15 w-20" >
      
          
        </div>
        </button>
      </div> */}
      
      
    </nav>
  );
}

export default Navbar;
