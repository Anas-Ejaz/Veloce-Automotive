import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";

function PublicLayout({children}) {
  return (
    <>
    <div className="bg-black">
      <Navbar/>
      <Outlet /> {/* Fetches inner children route */}
      <Footer/>
      </div>
    </>
  );
}

export default PublicLayout;
