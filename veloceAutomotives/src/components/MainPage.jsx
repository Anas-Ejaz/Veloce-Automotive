import React, { useState } from "react";
import porche from "../assets/porche.webp";
import corvette from "../assets/corvette.webp";
import bmw from "../assets/bmw.webp";
import mercedes from "../assets/mercedes.webp";
import audii from "../assets/audii.webp";
import chevrolet from "../assets/chevrolet.webp";
import porcheCar from "../assets/porche911.png";
import corvetteCar from "../assets/corvettez06.png";
import bmwCar from "../assets/bmwc.png";
import mercedesCar from "../assets/mercedesCar.webp";
import audiiCar from "../assets/audiiCar.webp";
import chevroletCar from "../assets/chevroletCar.webp";
import bg from "../assets/bgg.png"
import dodge from "../assets/dodgeMain.png"

function MainPage() {
  const [mainPic, setMainPic] = useState(dodge);

  const cars = [
    { name: "Porche", img: porcheCar, bg: porche },
    { name: "Corvette", img: corvetteCar, bg: corvette },
    { name: "BMW", img: bmwCar, bg: bmw },
    { name: "Mercedes", img: mercedesCar, bg: mercedes },
    { name: "Audi", img: audiiCar, bg: audii },
    { name: "Chevrolet", img: chevroletCar, bg: chevrolet },
  ];

  const hover = (car) => {
    setMainPic(car.img);
  };
  const resetPic = () => {
    setMainPic(dodge);
  };

  return (
    <div
      className="w-full h-screen relative overflow-hidden bg-cover bg-center bg-black" >
         <img src={bg} alt="bg" className="absolute inset-0 w-full h-full object-cover bg-black"/>

      <div className="flex relative bg-black opacity-70">
      <h1 className="relative top-20 left-10 text-5xl font-extrabold space-x-4">
        <span className="text-gray-400">Subscribe.</span>
        <span className="text-blue-600">Veloce.</span>
        <span className="text-gray-400">Swap.</span>
      </h1>
      
      <ol className="absolute text-gray-400 text-2xl font-semibold mt-45 ml-20 marker:content-['◎'] space-y-4">
        <li className="pl-4">No Contracts, No Limits.</li>
        <li className="pl-4">One Flat Monthly Fee.</li>
        <li className="pl-4">Freedom and Flexibility</li>
      </ol>
      <button className="absolute bg-blue-600 text-white text-1xl font-semibold rounded hover:bg-red-500 transition mt-85 ml-30 py-2 px-6">
          View Vehicles
      </button>
      </div>
                
      <img src={mainPic} alt="car" className="absolute inset-0 m-auto z-10 transition-all duration-300 w-[550px] left-100"/>

      <div className="absolute bottom-10 left-0 w-full flex justify-center items-center space-x-20 px-4 ">
        {cars.map((car, index) => (
          <button key={index} onMouseEnter={() => hover(car)}
          onMouseLeave={resetPic}
           className="focus:outline-none">
            <img
              src={car.bg}
              className="w-12 h-12 object-contain saturate-0 hover:scale-120 hover:saturate-100 transition-all duration-200 cursor-pointer"/>
              

          </button>

        ))}
      </div>
    </div>
  );
}

export default MainPage;