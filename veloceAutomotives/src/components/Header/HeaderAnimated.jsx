import React from 'react'
import { NavLink } from "react-router";
import { FaLinkedin, FaGithub} from "react-icons/fa";

export default function HeaderAnimated({open}) {

  return (
    <div className='absolute top-[60px] right-[45px]'>
        <div className={`${open ? "flex" : "hidden"} w-[200px] flex flex-col justify-between h-[250px] p-5 rounded-[10px] hover:flex`} style={{ backgroundColor: 'rgba(255,255,255,0.4)', backdropFilter:'blur(6px)'}}>

            <div className="flex flex-col gap-1.5 text-white">
                <div className='hover:text-gray-300'>
                <NavLink to="/" end>Home</NavLink>
                </div>
                <div className='hover:text-gray-300'>
                <NavLink to="/Inventory">Inventory</NavLink>
                 </div>
                 <div className='hover:text-gray-300'>
                <NavLink to="/About">About</NavLink>
                 </div>
                  <div className='hover:text-gray-300'>
                <NavLink to="/Contact">Contact</NavLink>
                 </div>
            </div>
            <div>
                <div className="flex space-x-4">
                    <FaLinkedin className="text-gray-400 text-3xl cursor-pointer" />
                    <FaGithub className="text-gray-400 text-3xl cursor-pointer" />
                    <FaLinkedin className="text-gray-400 text-3xl cursor-pointer" />
                    <FaGithub className="text-gray-400 text-3xl cursor-pointer" />
                </div>
            </div>
        </div>
      
   </div>
  )
}
