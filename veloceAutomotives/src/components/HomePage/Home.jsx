import { useEffect } from "react";
import MainPage from "./MainPage";
import AboutSection from "../AboutPage/AboutSection";
import Hehe from "./Hehe";
import Inventory from "../InventoryPage/Inventory";
import ProblemSection from "./ProblemSection";
import Hehe2 from "./Hehe2";


function Home() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="">
      <MainPage/>
      <Hehe/>
      <AboutSection/>
      <Hehe2/>
      <ProblemSection/>
      </div>
    </>
  );
}

export default Home;