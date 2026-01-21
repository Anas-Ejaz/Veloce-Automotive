import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainPage/MainSection";
import Contact from "./components/Contact";
import AboutSection from "./components/MainPage/ViewVehicles";
import Hehe from "./components/Hehe";
import Inventory from "./components/Inventory";
 import Garage from "./components/Garage";
import Search from "./components/Search";
import ProblemSection from "./components/MainPage/ProblemSection";
import Subscription from "./components/MainPage/Subscription";


function App() {
  return (
    <>
    <div>
      {/* <MainPage/> */}
      <Routes>
  <Route path="/" element={
    <>
    <NavBar/>
    <MainSection/>
    <AboutSection />
    <ProblemSection/>
    <Subscription/>
    <Garage/>

    
    </>
    } />
  <Route path="/inventory" element={<Inventory />} />
  </Routes>

      {/* <NavBar/>
      <MainPage/>
      <Hehe/>
      <AboutSection/>
      <Hehe2/>
      <ProblemSection/>
      
      <Contact/> 
      
      <Inventory/>
      <Garage/> */}

      </div>
    </>
  );
}

export default App;
