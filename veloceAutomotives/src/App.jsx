<<<<<<< HEAD
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
=======
import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router";
import Home from "./components/HomePage/Home";
import Inventory from "./components/InventoryPage/Inventory";
import Contact from "./components/ContactPage/Contact";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignupPage/Signup";
import AboutPage from "./components/AboutPage/AboutPage";

import PublicLayout from "./PublicLayout";
import AdminLayout from "./AdminLayout";

import AdminPage from "./components/admin/AdminPage";
>>>>>>> 9cd1fe10039935c3b1230bfa805e5cb053832071


function App() {
  return (
    <>
<<<<<<< HEAD
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
=======
    <div className="bg-black">
      <Routes>
        <Route element={<PublicLayout/>} >
          <Route index element={<Home/>} />
          <Route path="Inventory" element={<Inventory/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Signup" element={<Signup/>}/>
          <Route path="About" element={<AboutPage/>}/>
        </Route>
>>>>>>> 9cd1fe10039935c3b1230bfa805e5cb053832071

        <Route element={<AdminLayout/>} >
          <Route path="Admin" element={<AdminPage/>} />
        </Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
