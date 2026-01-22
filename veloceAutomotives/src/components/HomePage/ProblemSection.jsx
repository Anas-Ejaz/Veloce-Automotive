import React from 'react'
import Depreciation from "../../assets/depreciation.png"
import Aprs from "../../assets/interest.png"
import Insurance from "../../assets/insurance.png"
import Maintenance from "../../assets/maintenance.png"
import Contract from "../../assets/contracts.png"
import Tax from "../../assets/costs.png"
import Mileage from "../../assets/mileage.png"
import Fees from "../../assets/fees.png"


function problemSection() {
  return (
    <div className='relative p-5 lg:p-20 bg-black'>
        <div className='flex justify-center pb-5'>
            <h1 className='text-2xl font-mono text-blue-500'>
                PROBLEMS WITH
            </h1>
        </div>
        <div className='flex justify-center gap-3'>
            <h1 className='text-3xl lg:text-5xl font-extrabold text-gray-300'>Ownership</h1>
            <h1 className='text-3xl lg:text-5xl font-extrabold text-blue-500'>&</h1>
            <h1 className='text-3xl lg:text-5xl font-extrabold text-gray-300'>Leasing</h1>
        </div>
        <div className='lg:pr-28 lg:pl-28 pt-15'>
    <div className='w-full flex overflow-x-auto scroll-smooth gap-6 px-3 no-scrollbar opacity-85'>
        
        <div className="relative overflow-hidden min-w-72 min-h-70 rounded-lg inline-flex">
           
            <img src={Depreciation} alt="dep"/>
           
        </div>

         <div className='relative overflow-hidden min-w-72 min-h-70 rounded-lg inline-flex'>
            <img src={Aprs} alt="dep" className=''/>

        </div>
         <div className="relative overflow-hidden min-w-72 min-h-70 rounded-lg inline-flex">
            <img src={Insurance} alt="dep" className=''/>

        </div>
         <div className='relative overflow-hidden min-w-72 min-h-70 rounded-lg inline-flex'>
            <img src={Maintenance} alt="dep" className=''/>

        </div>
         <div className='relative overflow-hidden min-w-72 min-h-70 rounded-lg inline-flex'>
            <img src={Contract} alt="dep" className=''/>

        </div>
         <div className='relative overflow-hidden min-w-72 min-h-70 rounded-lg inline-flex'>
            <img src={Tax} alt="dep" className=''/>


        </div>
         <div className='relative overflow-hidden min-w-72 min-h-70 rounded-lg inline-flex'>
            <img src={Mileage} alt="dep" className=''/>

        </div>
         <div className='relative overflow-hidden min-w-72 min-h-70 rounded-lg inline-flex'>
            <img src={Fees} alt="dep" className=''/>

        </div>
      
    </div>
    </div>
    </div>
  )
}

export default problemSection
