import React from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Contact from "./components/Contact";
import AboutSection from "./components/AboutSection";
import Hehe from "./components/Hehe";
import Inventory from "./components/Inventory";
 import Garage from "./components/Garage";
import Search from "./components/Search";
import ProblemSection from "./components/ProblemSection";
import Hehe2 from "./components/Hehe2";


function App() {
  return (
    <>
    <div className="">
      <NavBar/>
      <MainPage/>
      <Hehe/>
      <AboutSection/>
      <Hehe2/>
      <ProblemSection/>
      
      <Contact/> 
      
      <Inventory/>
      <Garage/>

      </div>
    </>
  );
}

export default App;
