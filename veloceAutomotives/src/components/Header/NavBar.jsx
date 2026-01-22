import { NavLink } from "react-router";
import VeloceLogo from "../../assets/veloce.png"
import { useState } from "react";
import HeaderAnimated from "./HeaderAnimated";

function Navbar() {
  const [isOpen, setIsOpen] = useState();

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  
  return (
    <nav className="w-full mt-2 lg:mt-0 lg:h-18 flex items-center justify-between fixed top-0 left-0 lg:w-full bg-transparent z-50 lg:pr-10 lg:pl-2 ">
      <div className="veloceLogo size-20">
        <NavLink to='/' end>
          <img src={VeloceLogo} alt="image" className="cursor-pointer" />
        </NavLink>
      </div>
      
      <div className="flex flex-col lg:flex-row justify-center gap-3 items-center">
        
        <NavLink to={'/Signup'} className="order-3 lg:order-1 p-1.25 pr-5 pl-5 rounded-[10px] bg-transparent border-[2px] border-blue-700 text-white hover:bg-blue-700">SignUp</NavLink>
        <NavLink to={'/Login'} className="order-2 lg:order-2 bg-blue-700 p-1.25 pr-5 pl-5 rounded-[10px] hover:bg-transparent border-[2px] border-blue-700 text-white">Login</NavLink>

        <div className="lg:order-3">
          <button className="space-y-1.5 p-2 border-white border-[1px]  hover:bg-gray-700 rounded cursor-pointer" onClick={toggleMenu}>
            <span className="block w-6 h-0.5 bg-gray-400"></span>
            <span className="block w-6 h-0.5 bg-blue-500"></span>
            <span className="block w-6 h-0.5 bg-gray-400"></span>
          </button>
          <HeaderAnimated open={isOpen}/>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
