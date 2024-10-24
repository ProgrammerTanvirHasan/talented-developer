import { useEffect, useState } from "react";
import Table from "./Table";




const FeaturedBlog = () => {

  const [item,setItem]=useState([]);


  useEffect(()=>{
         fetch('http://localhost:5000/developers')
         .then(res=>res.json())
         .then(data=>setItem(data))
  },[])






    return (
        <div >
        <h2>Top 10 Blogs Here:</h2>
      
        <div className="grid grid-cols-4 ">

        <th>sl</th>
        <th>Title</th>  
        <th>Owner</th>
        <th>Photo</th>
            <div>
            {
                item.map((blog,index)=> <Table key={blog._id} blog={blog} index={index}></Table>)
            }

            </div>
        </div>
       
        
  

        </div>
    );
};

export default FeaturedBlog;