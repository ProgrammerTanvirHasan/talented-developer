
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const Blogs = ({blog}) => {
    const {title,image,category,email}=blog;
   const [wishlist,setWishlist]=useState([])

   useEffect(()=>{
       fetch('http://localhost:5000/wishlist')
       .then(res=>res.json())
       .then(data=>setWishlist(data))
   },[])

  
   
    
    const handleWishlist=(blog)=>{
      const includeWishlist=wishlist.some(item=> item._id===blog._id);
      if(includeWishlist){
        Swal.fire({
                          title: 'Already added',
                          text: 'This blog is already in your wishlist!',
                          icon: 'warning',
                          confirmButtonText: 'OK'
                      });
                      return;
      }



      fetch('http://localhost:5000/wishlist',{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(blog)
      })
      .then(res=>res.json())
      .then(data=>{ 
       
        Swal.fire({
          title: 'Done!',
          text: 'Blog added to wishlist',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        setWishlist([...wishlist,data])
      })
      .catch(error=>{
        console.log(error.message);
      })
    }
 
    return (
        <div>
            <div className="card bg-gradient-to-b from-zinc-600 to-slate-500 w-full lg:w-[348px] h-[526px] border">
   
    <figure>
    <img 
    
      src={image}
      alt="Image"/>
  </figure>
   
  <div className="card-body 
  ">
    <h2 className="card-title text-orange-300">{title}</h2>
    <p className="text-white font-semibold text-lg
    ">Category:{category}</p>
        <p className="text-white">{email}</p>
        <div className="text-center">
    <button className="btn glass bg-slate-950 text-black ">Details</button>
    <button onClick={()=>handleWishlist(blog)} className="btn glass bg-slate-700 text-black">WishList</button>
  </div>
     </div>
  
</div>
        </div>
    );
};

export default Blogs;









