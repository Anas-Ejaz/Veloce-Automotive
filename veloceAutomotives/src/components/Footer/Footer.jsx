import {FaGithub, FaLinkedin } from "react-icons/fa";
import logo from '../../assets/veloce.png';
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <section className="bg-gray-800">
      <div className="max-w-screen-xl h-[50vh] flex flex-col justify-center items-center px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        
        <div>
            <img src={logo} alt="" className="w-[100px]"/>
        </div>

        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          < div className="flex gap-7 px-5 py-2">
              <NavLink to="/Home" className="text-base leading-6 text-white hover:text-gray-400">Home</NavLink>
              <NavLink to="/About" className="text-base leading-6 text-white hover:text-gray-400">About</NavLink>
              <NavLink to="/Inventory" className="text-base leading-6 text-white hover:text-gray-400">Inventory</NavLink>
              <NavLink to="/Login" className="text-base leading-6 text-white hover:text-gray-400">Login</NavLink>
              <NavLink to="/Contact" className="text-base leading-6 text-white hover:text-gray-400">Contact</NavLink>
            </div>
        </nav>

        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-white hover:text-gray-400">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaGithub className="w-8 h-8" />
          </a>
        </div>

        <p className="mt-8 text-base leading-6 text-center text-gray-300">
          © 2026 Veloce, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}