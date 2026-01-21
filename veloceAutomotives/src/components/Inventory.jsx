import React from 'react'
import Navbar from './NavBar'
import suv from "../assets/suv.png"
import convertable from "../assets/convertables.png"
import coupe from "../assets/coupes.png"
import sedan from "../assets/sedans.png"
import truck from "../assets/trucks.png"
import porche from "../assets/porche.webp";
import corvette from "../assets/corvette.webp";
import bmw from "../assets/bmw.webp";
import mercedes from "../assets/mercedes.webp";
import audii from "../assets/audii.webp";
import chevrolet from "../assets/chevrolet.webp";

function Inventory() {
  return (
    
    
    <div className='bg-black pt-20 pb-15'>
        <Navbar/>
        
        <div className='flex justify-center'>
            <input type="search" placeholder='Search make, model or type...' className='mb-10 flex justify-center w-150 px-6 py-4 border border-gray-400 rounded-xl placeholder-gray-400 outline-none text-white' />

        </div>


        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl text-blue-700 font-mono'>
                Inventory
            </h1>
            <h2 className='text-2xl text-gray-400 font-semibold'>
                Browse Vehicles
            </h2>
            </div>


            <div className='flex flex-row justify-between p-10'>
                <button className='w-55 cursor-pointer hover:scale-105 transition'>
                    <img src={suv} alt="suv" className='rounded-xl'/>
                </button>
                 <button className='w-55 cursor-pointer hover:scale-105 transition'>
                    <img src={sedan} alt="sedan" className='rounded-xl' />
                </button>
                 <button className='w-55 cursor-pointer hover:scale-105 transition'>
                    <img src={convertable} alt="convertable" className='rounded-xl' />
                </button>
                 <button className='w-55 cursor-pointer hover:scale-105 transition'>
                    <img src={coupe} alt="coupe" className='rounded-xl' />
                </button>
                 <button className='w-55 cursor-pointer hover:scale-105 transition'>
                    <img src={truck} alt="truck" className='rounded-xl'/>
                </button>
                </div>


                 <div className='flex flex-row justify-between p-10 '>

               
                <button className='flex flex-col items-center justify-center w-45 h-35 cursor-pointer hover:scale-105 transition'>
                    <img src={porche} alt="porche" className='w-25'/>
                    <h1 className='text-white font-bold'>Porche</h1>
                </button>
                  <button className='flex flex-col items-center justify-center w-45 h-35 cursor-pointer hover:scale-105 transition'>
                    <img src={audii} alt="audii" className='w-25'/>
                    <h1 className='text-white font-bold'>Audi</h1>
                </button>
                 <button className='flex flex-col items-center justify-center w-45 h-35 cursor-pointer hover:scale-105 transition'>
                    <img src={chevrolet} alt="chevrolet" className='w-25'/>
                    <h1 className='text-white font-bold'>Chevrolet</h1>
                </button>
                 <button className='flex flex-col items-center justify-center w-45 h-35 cursor-pointer hover:scale-105 transition'>
                    <img src={bmw} alt="bmw" className='w-25'/>
                    <h1 className='text-white font-bold'>BMW</h1>
                </button>
                 <button className='flex flex-col items-center justify-center w-45 h-35 cursor-pointer hover:scale-105 transition'>
                    <img src={mercedes} alt="mercedes" className='w-25'/>
                    <h1 className='text-white font-bold'>Mercedes</h1>
                </button>
                 <button className='flex flex-col items-center justify-center w-45 h-35 cursor-pointer hover:scale-105 transition'>
                    <img src={corvette} alt="corvette" className='w-25'/>
                    <h1 className='text-white font-bold'>Corvette</h1>
                </button>
                </div>









      
    </div>
  )
}

export default Inventory
