import { useEffect } from 'react';
import AboutSection from "./AboutSection";
import aboutImg from "../../assets/about.jpg"

export default function AboutPage() {
     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <div className='flex flex-col justify-center items-center w-full h-[60vh]' style={{
            background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${aboutImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <h1 className='text-5xl text-blue-700 font-mono font-bold'>
                About
            </h1>
            <h2 className='w-[50%] text-center text-l text-gray-400'>
                At Veloce Automotives, we provide reliable, high-quality car rental services designed to make your journeys smooth, convenient, and enjoyable.!
            </h2>
        </div>

        <AboutSection/>
    </div>
  )
}
