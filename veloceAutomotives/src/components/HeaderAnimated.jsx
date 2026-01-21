import React from 'react'
import { NavLink } from "react-router";

export default function HeaderAnimated({open}) {
  return (
    <div>
        <div className={`open-menu ${open ? "block" : "hidden"}`}>
            <div className="flex flex-col">
                {/* <Link>Home</Link> */}
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/Inventory">Trending Concerts</NavLink>
                {/* <NavLink to="/concerts">All Concerts</NavLink>
                <NavLink to="/account">Account</NavLink> */}
            </div>
            <div>
                <div className="icons">
                    {/* <FaLinkedin className="faIcons"></FaLinkedin>
                    <FaGithub className="faIcons"></FaGithub>
                    <FaInstagram className="faIcons"></FaInstagram>
                    <FaFacebook className="faIcons"></FaFacebook> */}
                </div>
            </div>
        </div>
      
    </div>
  )
}
