import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router";
import Home from "./components/HomePage/Home"
import Inventory from "./components/Inventory";
import Navbar from "./components/NavBar"

function App() {
  return (
    <>
    <div className="">
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="Inventory" element={<Inventory/>}/>
      </Routes>

      </div>
    </>
  );
}

export default App;
