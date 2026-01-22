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

import AdminPage from "./components/Admin/AdminPage";
import AdminCars from "./components/Admin/Cars";
import AdminBookings from "./components/Admin/Bookings";


function App() {
  return (
    <>
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

        <Route element={<AdminLayout/>} >
          <Route path="/Admin/Dashboard" element={<AdminPage/>} />
          <Route path="/Admin/Cars" element={<AdminCars/>} />
          <Route path="/Admin/Bookings" element={<AdminBookings/>} />
        </Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
