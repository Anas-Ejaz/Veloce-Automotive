import React, { useState } from "react";
import porche from "../assets/porche.webp";
import corvette from "../assets/corvette.webp";
import bmw from "../assets/bmw.webp";
import mercedes from "../assets/mercedes.webp";
import audii from "../assets/audii.webp";
import chevrolet from "../assets/chevrolet.webp";

import porcheCar from "../assets/porsche.png";
import corvetteCar from "../assets/corvetteCar.webp";
import bmwCar from "../assets/bmwCar.webp";
import mercedesCar from "../assets/mercedesCar.webp";
import audiiCar from "../assets/audiiCar.webp";
import chevroletCar from "../assets/chevroletCar.webp";

import rydex from "../assets/rydex.webp";
import bg from "../assets/bg.jpg";

function MainPage() {
  const [mainPic, setMainPic] = useState(); // ✅ default car

  const cars = [
    { name: "Porche", img: porcheCar, thumb: porche },
    { name: "Corvette", img: corvetteCar, thumb: corvette },
    { name: "BMW", img: bmwCar, thumb: bmw },
    { name: "Mercedes", img: mercedesCar, thumb: mercedes },
    { name: "Audi", img: audiiCar, thumb: audii },
    { name: "Chevrolet", img: chevroletCar, thumb: chevrolet },
  ];

  return (
    <div
      className="w-full h-screen relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Car Image */}
      <img
        src={mainPic}
        alt="car"
        className="absolute inset-0 m-auto transition-all duration-300"
      />

      {/* Heading */}
      <h1 className="absolute top-20 left-10 text-5xl font-extrabold flex space-x-4">
        <span className="text-amber-300">Subscribe.</span>
        <span className="text-red-600">Veloce.</span>
        <span className="text-amber-300">Swap.</span>
      </h1>

      {/* Thumbnails */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center items-center space-x-20 px-4">
        {cars.map((car, index) => (
          <button
            key={index}
            onClick={() => setMainPic(car.img)}
            className="focus:outline-none"
          >
            <img
              src={car.thumb}
              alt={car.name}
              className="w-12 h-12 object-contain contrast-50 hover:scale-150 hover:contrast-100 transition-all duration-200 cursor-pointer"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
