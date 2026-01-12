import React from "react";
import Navbar from "./NavBar";
import contactImg from "../assets/contact.webp"
function Contact(){
    return(
        <>
        <div className="flex m-0 bg-stone-500">

        <div className="flex justify-center items-center bg-black m-20 w-300 border rounded-2xl ">
            
            <div>
            <img src={contactImg} alt="img" className="w-50 " />
            </div>
            <div className="m-20 gap-4 flex items-center justify-center flex-col text-white font-bold border-4 border-white p-3 rounded w-80 bg-stone-500  ">
                <label htmlFor="Name">Full Name: </label>
                <input type="text" className="border-2 border-amber-200"/>
                <label htmlFor="E-Mail ">E-Mail: </label>
                <input type="text"className="border-2 border-amber-200"/>
                <label htmlFor="Message">Message: </label>
                <input type="text"className="border-2 border-amber-200"/>
                <button className="bg-amber-400 text-white py-2 rounded hover:bg-red-500 transition">
                    Contact Us
                </button>
                
            
            
            </div>
            <div>
                <h1 className="flex text-amber-100 font-extrabold">Contact</h1>
                <p className="text-amber-200">veloceautos@gmail.com</p>
                <h1 className="flex text-amber-100 font-extrabold">Based in</h1>
                <p className="text-amber-200">Lhr. Pk</p>
                
                <div className="flex gap-8 pt-10">
                <img src="https://img.icons8.com/doodle/80/facebook-new.png" alt="img" className="w-10 h-10" />
                <img src="https://img.icons8.com/3d-fluency/80/youtube-play.png" alt="qiqjiq"className="w-10 h-10" />
                <img src="https://img.icons8.com/fluent/80/discord.png" alt=""className="w-10 h-10" />

                </div></div>
            
        </div></div>
        </>
    );
} export default Contact;