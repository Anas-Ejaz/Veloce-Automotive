import React from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Contact from "./components/Contact";
//import CarBrands from "./components/CarBrands";

function App() {
  return (
    <>
    
     <div> 
      <NavBar/>
    </div>
    <div>
        <MainPage/>
    </div> 
    <div>
      <Contact/>
    </div> 
    </>
  );
}

export default App;
