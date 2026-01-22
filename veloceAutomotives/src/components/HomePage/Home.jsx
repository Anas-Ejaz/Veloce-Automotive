import { useEffect } from "react";
import MainPage from "./MainPage";
import AboutSection from "../AboutPage/AboutSection";
import Hehe from "./Hehe";
import Inventory from "../InventoryPage/Inventory";
import ProblemSection from "./ProblemSection";
import Subscription from "./Subscription";


function Home() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div>
      <MainPage/>
      <AboutSection/>
      <ProblemSection/>
      <Subscription/>
      </div>
    </>
  );
}

export default Home;