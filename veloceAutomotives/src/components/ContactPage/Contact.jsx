import { useEffect } from "react";
import contactImg from "../../assets/contact.webp"
import contactMainImg from "../../assets/ContactUs.jpg";

function Contact(){
     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
        <div className='flex flex-col justify-center items-center w-full h-[60vh]' style={{
            background: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${contactMainImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <h1 className='text-5xl text-blue-700 font-mono font-bold'>
                Contact
            </h1>
            <h2 className='text-2xl text-gray-400 font-semibold'>
                Leave your message for us!
            </h2>
        </div>

        <div className="flex m-0 bg-black">

        <div className="flex justify-between items-center m-20 w-[100%]">
            
            <div className="w-[22%]">
            <img src={contactImg} alt="img" className="w-[100%] rounded-[20px]" />
            </div>
            <div className="w-[40%] m-20 pt-[30px] pb-[30px] gap-4 flex items-center justify-center flex-col text-white font-bold border-[2px] border-white p-3 rounded-[20px] bg-stone-500  ">
                <label htmlFor="Name">Full Name: </label>
                <input type="text" className="border-2 border-blue-700"/>
                <label htmlFor="E-Mail ">E-Mail: </label>
                <input type="text"className="border-2 border-blue-700"/>
                <label htmlFor="Message">Message: </label>
                <textarea name="" id="" cols="30" rows="5" className="border-2 border-blue-700"></textarea>
                <button className="bg-blue-700 px-[20px] py-[10px] text-white rounded hover:bg-red-500 transition">
                    Contact Us
                </button>
                
            
            
            </div>
            <div className="w-[22%]">
                <h1 className="flex text-amber-100 font-extrabold">Contact</h1>
                <p className="text-amber-200">veloceautos@gmail.com</p>
                <h1 className="flex text-amber-100 font-extrabold">Based in</h1>
                <p className="text-amber-200">Lhr. Pk</p>
                
                <div className="flex gap-8 pt-10">
                <img src="https://img.icons8.com/doodle/80/facebook-new.png" alt="img" className="w-10 h-10" />
                <img src="https://img.icons8.com/3d-fluency/80/youtube-play.png" alt="qiqjiq"className="w-10 h-10" />
                <img src="https://img.icons8.com/fluent/80/discord.png" alt=""className="w-10 h-10" />

                </div></div>
            
        </div></div>
        </>
    );
} export default Contact;