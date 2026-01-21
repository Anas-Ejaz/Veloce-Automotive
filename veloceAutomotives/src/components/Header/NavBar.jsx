import { NavLink } from "react-router";
import VeloceLogo from "../../assets/veloce.png"
import { useState } from "react";
import HeaderAnimated from "./HeaderAnimated";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  
  return (
    <nav className="pr-10 pl-2 m-0 h-18 flex items-center justify-between fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="veloceLogo size-20">
        <NavLink to='/' end>
          <img src={VeloceLogo} alt="image" className="cursor-pointer" />
        </NavLink>
      </div>
      
      <div className="flex flex-row justify-center gap-3 items-center">
        
        <NavLink to={'/Signup'} className="p-1.25 pr-5 pl-5 rounded-[10px] bg-transparent border-[2px] border-blue-700 text-white hover:bg-blue-700">SignUp</NavLink>
        <NavLink to={'/Login'} className="bg-blue-700 p-1.25 pr-5 pl-5 rounded-[10px] hover:bg-transparent border-[2px] border-blue-700 text-white">Login</NavLink>

        <div>
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
