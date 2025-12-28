import React, { useState } from "react";
import porche from "../assets/porche.webp";
import corvette from "../assets/corvette.webp";
import bmw from "../assets/bmw.webp";
import mercedes from "../assets/mercedes.webp";
import audii from "../assets/audii.webp";
import chevrolet from "../assets/chevrolet.webp";
import porcheCar from "../assets/porcheCar.webp";
import corvetteCar from "../assets/corvetteCar.webp";
import bmwCar from "../assets/bmwCar.webp";
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
         <img src={bg} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-60 filter contrast-120"
  />

      <h1 className="absolute top-20 left-10 text-5xl font-extrabold flex space-x-4">
        <span className="text-gray-400">Subscribe.</span>
        <span className="text-blue-600">Veloce.</span>
        <span className="text-gray-400">Swap.</span>
      </h1>
      <img src={mainPic} alt="car" className="absolute inset-0 m-auto z-10 transition-all duration-300 w-[550px]"
/>

      <div className="absolute bottom-10 left-0 w-full flex justify-center items-center space-x-20 px-4 ">
        {cars.map((car, index) => (
          <button key={index} onMouseEnter={() => hover(car)}
          onMouseLeave={resetPic}
           className="focus:outline-none">
            <img
              src={car.bg}
              className="w-12 h-12 object-contain contrast-50 hover:scale-150 hover:contrast-100 transition-all duration-200 cursor-pointer"/>
              

          </button>

        ))}
      </div>
    </div>
  );
}

export default MainPage;
