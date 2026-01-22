import { useEffect } from "react"
import Garage from "./Garage"
import BgImg from "../../assets/Showroom.jpg"
import suv from "../../assets/suv.png"
import convertable from "../../assets/convertables.png"
import coupe from "../../assets/coupes.png"
import sedan from "../../assets/sedans.png"
import truck from "../../assets/trucks.png"
import porche from "../../assets/porche.webp";
import corvette from "../../assets/corvette.webp";
import bmw from "../../assets/bmw.webp";
import mercedes from "../../assets/mercedes.webp";
import audii from "../../assets/audii.webp";
import chevrolet from "../../assets/chevrolet.webp";

function Inventory() {
     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (  
    <div className='bg-black'>
        
        {/* <div className='flex justify-center'>
            <input type="search" placeholder='Search make, model or type...' className='mb-10 flex justify-center w-150 px-6 py-4 border border-gray-400 rounded-xl placeholder-gray-400 outline-none text-white' />

        </div> */}

        <div className='flex flex-col justify-center items-center w-full h-[60vh] pt-10' style={{
            background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <h1 className='text-5xl text-blue-700 font-mono font-bold'>
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


            {/* <div>
                <Garage/>
            </div> */}
      
    </div>
  )
}

export default Inventory
