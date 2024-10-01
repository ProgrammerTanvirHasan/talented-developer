import {  useEffect, useState } from "react";
import axios from 'axios';
import Blogs from "./Blogs";






const Blog = () => {

const [data,setData]=useState([])



useEffect(()=>{
    axios.get('http://localhost:5000/developers')
    .then(res=>{
        setData(res.data)
    })
    .catch(error=>{
        console.log(error.message);
    })

},[])



   
    return ( 
       <div className="bg-gradient-to-b from-slate-800 to-slate-600 pt-8 pb-8 ">
       

         <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 ">
           
            <h2 className="text-white font-bold text-xl text-center mt-8">Recent Blog Here</h2>
            
              {
                 data.map((blog)=> <Blogs blog={blog} key={blog._id}></Blogs>)
                                       
                                                        
              }
                 
             </div>

     </div>
 );
};

export default Blog;




 

