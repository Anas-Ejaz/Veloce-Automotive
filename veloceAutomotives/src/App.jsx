import React from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Contact from "./components/Contact";
import AboutSection from "./components/AboutSection";
import Hehe from "./components/Hehe";
import Inventory from "./components/Inventory";
//import CarBrands from "./components/CarBrands";

function App() {
  return (
    <>
      <NavBar/>
      <MainPage/>
      <AboutSection/>
      <Contact/> 
      <Hehe/>
      <Inventory/>
    </>
  );
}

export default App;
