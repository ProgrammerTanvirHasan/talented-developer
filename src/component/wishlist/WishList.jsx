
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Wish from "./Wish";


const WishList = () => {
 const [wish,setWish]=useState([])
 
 
    useEffect(()=>{
        fetch('http://localhost:5000/wishlist')
        .then(res=>res.json())
        .then(data=>setWish(data))
    },[])

    const handleRemove=(_id)=>{
    
        fetch(`http://localhost:5000/wishlist/${_id}`,{
          method:"DELETE",
        })
      
        .then(res=>res.json())
       .then(data=>{
        console.log(data);
        const remaining=wish.filter(token=>token._id !==_id)
        setWish(remaining)
           
       })
     
   }
  
  
    return (
        <div className="bg-gradient-to-b from-slate-800 to-slate-600 pt-8 pb-8 ">
          <Marquee>
          <p className="text-white mb-4 text-2xl">Blogs That You Are Added To WishList</p>
          </Marquee>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {
            wish.map(card=> <Wish key={card._id} card={card} handleRemove={handleRemove}></Wish>)
         }

        </div>
        </div>
    );
};

export default WishList;