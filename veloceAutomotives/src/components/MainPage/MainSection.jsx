import React, { useState } from "react";
import porche from "../../assets/porche.webp";
import corvette from "../../assets/corvette.webp";
import bmw from "../../assets/bmw.webp";
import mercedes from "../../assets/mercedes.webp";
import audii from "../../assets/audii.webp";
import chevrolet from "../../assets/chevrolet.webp";
import bg from "../../assets/bz.jpg"
import mercedesCar from "../../assets/gWGN.webp";
import mainCar from "../../assets/porche911.webp";
import corvetteCar from "../../assets/corLTpurple.webp";
import bmwCar from "../../assets/430ibmw.webp";
import audiCar from "../../assets/audiq5.webp";
import chevroletCar from "../../assets/lt.webp";
import porcheCar from "../../assets/ptycan.webp";
//import Navbar from "./../NavBar";

function MainSection() {
  const [mainPic, setMainPic] = useState(mainCar);

  const cars = [
    { name: "Porche", img: porcheCar, logo: porche },
    { name: "Corvette", img: corvetteCar, logo: corvette },
    { name: "BMW", img: bmwCar, logo: bmw },
    { name: "Mercedes", img: mercedesCar, logo: mercedes },
    { name: "Audi", img: audiCar, logo: audii },
    { name: "Chevrolet", img: chevroletCar, logo: chevrolet },
  ];

  const hover = (car) => {
    setMainPic(car.img);
    
  };
  const resetPic = () => {
    setMainPic(mainCar);
  };

  return (
    <div
      className="w-full h-screen relative overflow-hidden bg-black mb-15" >
        {/* <Navbar/> */}
         <img src={bg} alt="bg" className="absolute inset-0 w-full h-full object-cover bg-black opacity-30"/>

      <div className="relative mt-30 ml-8 bg-black/40 overflow-hidden rounded-2xl h-70 w-130  ">
      <h1 className="absolute top-10 left-10 text-4xl font-extrabold space-x-4">
        <span className="text-gray-400">Subscribe.</span>
        <span className="text-blue-600">Veloce.</span>
        <span className="text-gray-400">Swap.</span>
      </h1>
      
      <ol className="absolute text-gray-400 text-xl font-semibold mt-26 ml-20 marker:content-['◎'] space-y-4">
        <li className="pl-4">No Contracts, No Limits.</li>
        <li className="pl-4">One Flat Monthly Fee.</li>
        <li className="pl-4">Freedom and Flexibility</li>
      </ol>
      </div>
                
      <img src={mainPic} alt="car" className="absolute inset-0 m-auto z-10 transition-all duration-300 w-120 left-130 opacity-85"/>

      <div className="absolute bottom-8 w-full flex justify-center items-center space-x-20 px-4 ">
        {cars.map((car, index) => (
          <button key={index} onMouseEnter={() => hover(car)}
          onMouseLeave={resetPic}
           className="focus:outline-none">
            <img
              src={car.logo}
              className="w-16 h-16 object-contain saturate-0 hover:scale-120 hover:saturate-100 transition-all duration-200 cursor-pointer "/>
              

          </button>

        ))}
      </div>
    </div>
    
  );
}

export default MainSection;