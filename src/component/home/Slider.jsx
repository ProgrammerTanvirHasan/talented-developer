import { useState } from "react";
import Marquee from "react-fast-marquee";



const Slider = () => {
    const images = [
      "https://i.ibb.co.com/RbyDdjb/development-opportunity-strategy-improvement-word-53876-13771.jpg",
      "https://i.ibb.co.com/3rLyXqn/business-problem-concern-worried-graphic-concept-53876-121223.jpg",
      "https://i.ibb.co.com/c6Z5gQP/confident-caring-goodlooking-redhead-sister-rooting-sibling-saying-yes-approving-choice-reco-1258-13.jpg",
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
            <img onMouseEnter={handleMouseEnter} src={image}  className="w-96 h-96" />
           
          </div>
        ))}
      </div>
      </Marquee>
       <div className="absolute -bottom-8 z-10  ">
        <p className=" bg-orange-950 py-4 p-2 text-white text-2xl rounded-xl ">Recent Blog Here</p>
       </div>
     </div>
    );
  };
  
  export default Slider;
  































