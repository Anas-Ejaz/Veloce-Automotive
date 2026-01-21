import MainPage from "../MainPage";
import Contact from "../Contact";
import AboutSection from "../AboutSection";
import Hehe from "../Hehe";
import Inventory from "../Inventory";
 import Garage from "../Garage";
import Search from "../Search";
import ProblemSection from "../ProblemSection";
import Hehe2 from "../Hehe2";


function Home() {
  return (
    <>
    <div className="">
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

export default Home;