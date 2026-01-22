import React from 'react'
import { NavLink } from "react-router";
import { FaLinkedin, FaGithub} from "react-icons/fa";

export default function HeaderAnimated({open}) {

  return (
    <div className='absolute top-[40px] right-[45px] lg:top-[60px]'>
        <div className={`${open ? "flex" : "hidden"} w-[200px] flex flex-col justify-between h-[250px] p-5 rounded-[10px] hover:flex`} style={{ backgroundColor: 'rgba(255,255,255,0.4)', backdropFilter:'blur(6px)'}}>

            <div className="flex flex-col gap-1.5 text-white">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/Inventory">Inventory</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </div>
            <div>
                <div className="flex space-x-4">
                    <FaLinkedin className="text-gray-600 text-3xl cursor-pointer" />
                    <FaGithub className="text-gray-800 text-3xl cursor-pointer" />
                    <FaLinkedin className="text-gray-600 text-3xl cursor-pointer" />
                    <FaGithub className="text-gray-800 text-3xl cursor-pointer" />
                </div>
            </div>
        </div>
      
    </div>
  )
}
