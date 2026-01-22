import React from 'react'
import imgCar from "../../assets/430ibmw.webp"; 
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

export default function Cars() {
  let carName = "BMW i8"; 
  let price = "500"; 
  let brand = "Bmw"; 
  let cardetail = [{imgCar, carName, price, brand},{imgCar, carName, price, brand}];
  return (
    <div className='w-full px-8 mt-[12vh] h-screen text-white'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold'>Cars</h1>
        <button className='bg-blue-700 px-6 py-2 cursor-pointer rounded'>Add Cars</button>
      </div>

      <div className='bg-[rgb(24,24,27)] mt-10 flex flex-col gap-8 p-2 px-5 rounded-[10px]'>
          {cardetail.map((items, index) =>{
            return(
              <div key={index} className='flex my-[20px] justify-between items-center'>
                <div className='flex gap-10 items-center'>
                  <img src={items.imgCar} alt="" className='w-[12vw] h-auto' />
                  <div>
                  <h3 className='text-3xl'>{items.carName}</h3>
                  <h4 className='text-l text-gray-300'>{items.brand}</h4>
                  <h4 className='text-xl mt-5'>{items.price} $</h4>
                  </div>
                </div>

                <div className='flex flex-col gap-5'>
                  <button><FaPencilAlt className="text-blue-500 hover:text-blue-700 cursor-pointer" /></button>
                  <button><FaTrashAlt className="text-red-500 hover:text-red-700 cursor-pointer" /></button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  )
}
