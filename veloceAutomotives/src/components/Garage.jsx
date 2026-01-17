import React from "react"
import porche from "../assets/porche.webp";
import corvette from "../assets/corvette.webp";
import bmw from "../assets/bmw.webp";
import mercedes from "../assets/mercedes.webp";
import audii from "../assets/audii.webp";
import chevrolet from "../assets/chevrolet.webp";
import p911 from "../assets/porche911.webp";
import mGwgn from "../assets/gWGN.webp";
import bmwX3 from "../assets/x3bmw.webp";
import bmw430i from "../assets/430ibmw.webp";
import bmw330i from "../assets/330ibmw.webp";
import chevLT from "../assets/lt.webp";
import audiQ5 from "../assets/audiq5.webp";
import corLTp from "../assets/corLTpurple.webp";
import corLTr from "../assets/corLTred.webp";
import corLTb from "../assets/corLTblack.webp";
import pTycan from "../assets/ptycan.webp";
import pCayenne from "../assets/pmaycan.webp";
import PMaycan from "../assets/pcayenne.webp";

function Garage() {
  return (
    <div className="bg-black">
        <div className="flex flex-row flex-wrap gap-3 p-3 justify-between">
            <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={porche} alt="porche" className="w-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">Porche 911</h1>
                    
                    <p className="text-white font-extralight">Carrera / Carrera 4</p>
                </div>
                </div>
                    <img src={p911} alt="911" className="w-70"/>
                </button>

                <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={mercedes} alt="mercedes" className="w-15 h-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">Mercedes G-wagon</h1>
                    
                    <p className="text-white font-extralight">Benz G550</p>
                </div>
                </div>
                    <img src={mGwgn} alt="benz G class" className="w-70"/>
                </button>

                 <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={chevrolet} alt="chevrolet" className="w-15 h-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">Chevrolet Silverado</h1>
                    
                    <p className="text-white font-extralight">LT</p>
                </div>
                </div>
                    <img src={chevLT} alt="benz G class" className="w-70"/>
                </button>

                 <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={bmw} alt="bmw" className="w-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">BMW 430i</h1>
                    
                    <p className="text-white font-extralight">Base</p>
                </div>
                </div>
                    <img src={bmw430i} alt="330i" className="w-70"/>
                </button>

                 <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={bmw} alt="bmw" className="w-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">BMW 330i</h1>
                    
                    <p className="text-white font-extralight">Base</p>
                </div>
                </div>
                    <img src={bmw330i} alt="330i" className="w-70"/>
                </button>

                 <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={bmw} alt="bmw" className="w-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">BMW X3</h1>
                    
                    <p className="text-white font-extralight">xDrive 30i</p>
                </div>
                </div>
                    <img src={bmwX3} alt="bmw x3" className="w-70"/>
                </button>

                <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={audii} alt="audi" className="w-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">Audi Q5</h1>
                    
                    <p className="text-white font-extralight">Premium</p>
                </div>
                </div>
                    <img src={audiQ5} alt="Audi q5" className="w-70"/>
                </button>


                <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={corvette} alt="corvette" className="w-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">Chevrolet Corvette</h1>
                    
                    <p className="text-white font-extralight">Standard 1LT</p>
                </div>
                </div>
                    <img src={corLTp} alt="corvette LT" className="w-70"/>
                </button>

                
                <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={corvette} alt="corvette" className="w-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">Chevrolet Corvette</h1>
                    
                    <p className="text-white font-extralight">Standard 1LT</p>
                </div>
                </div>
                    <img src={corLTr} alt="corvette LT" className="w-70"/>
                </button>

                
                <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={corvette} alt="corvette" className="w-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">Chevrolet Corvette</h1>
                    
                    <p className="text-white font-extralight">3LT</p>
                </div>
                </div>
                    <img src={corLTb} alt="corvette LT" className="w-70"/>
                </button>

                 <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={porche} alt="porche" className="w-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">Porche Tycan</h1>
                    
                    <p className="text-white font-extralight">Type Y1A</p>
                </div>
                </div>
                    <img src={pTycan} alt="porche Tycan" className="w-70"/>
                </button>

                 <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={porche} alt="porche" className="w-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">Porche Maycan</h1>
                    
                    <p className="text-white font-extralight">Type 95B</p>
                </div>
                </div>
                    <img src={PMaycan} alt="porche Maycan" className="w-70"/>
                </button>


             <button className="bg-zinc-900 overflow-hidden rounded-2xl h-55 w-73 hover:bg-amber-600 cursor-pointer transition">
                <div className="flex gap-2">
                    <img src={porche} alt="porche" className="w-15 "/>
                    <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-gray-200">Porche Cayenne</h1>
                    
                    <p className="text-white font-extralight">Type 9YA</p>
                </div>
                </div>
                    <img src={pCayenne} alt="porche Cayenne" className="w-70"/>
                </button>












        








            </div>
    </div>


  );
}
  export default Garage;
