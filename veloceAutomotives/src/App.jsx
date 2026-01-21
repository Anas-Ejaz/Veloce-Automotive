import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router";
import Navbar from "./components/Header/NavBar"
import Home from "./components/HomePage/Home"
import Inventory from "./components/InventoryPage/Inventory";
import Contact from "./components/ContactPage/Contact";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignupPage/Signup";
import AboutPage from "./components/AboutPage/AboutPage";

function App() {
  return (
    <>
    <div className="">
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="Inventory" element={<Inventory/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="About" element={<AboutPage/>}/>
      </Routes>

      </div>
    </>
  );
}

export default App;
