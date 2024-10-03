import { useState } from "react";
import Marquee from "react-fast-marquee";



const Slider = () => {
    const images = [
  
      "https://i.ibb.co.com/3rLyXqn/business-problem-concern-worried-graphic-concept-53876-121223.jpg",
      
      "https://i.ibb.co.com/chns4hK/web-hosting-development-connection-networking-concept-53876-165256.jpg",
      "https://i.ibb.co.com/YNDc2x5/create-your-own-brand-words-woman-working-laptop-background-53876-16099.jpg",
      "https://i.ibb.co.com/19D1KXD/life-is-journey-exploration-adventure-traveling-53876-121009.jpg"
    ];
  
   
    const [pause, setPause] = useState(false);

    const handleMouseEnter = () => {
        setPause(true);
       
    };
  
 
    return (
     <div className="py-2 bg-stone-800 relative">
       <Marquee pauseOnHover={pause}>
        <div className="flex gap-2">
        {images.map((image, index) => (
          <div key={index} >
            <img onMouseEnter={handleMouseEnter} src={image}  className="w-full h-[486px]" />
           
          </div>
        ))}
      </div>
      </Marquee>
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-6xl text-black bg-gradient-to-r from-purple-400 to-green-500 w-96 h-52 flex items-center justify-center">
          <div className="flex gap-4">
            <p className="glass p-2 rounded-xl ">B</p>
            <p className="glass p-2 rounded-xl">L</p>
            <p className="glass p-2 rounded-xl">O</p>
            <p className="glass p-2 rounded-xl">G</p>
          </div>
        </div>
      </div>

       <div className="absolute -bottom-8 z-10  ">
        <p className=" bg-orange-950 py-4 p-2 text-white text-2xl rounded-xl ">Recent Blog Here</p>
       </div>
     </div>
    );
  };
  
  export default Slider;
  































