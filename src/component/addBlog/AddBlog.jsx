import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";




const AddBlog = () => {

  const {user}=useContext(AuthContext)
 


const handleBlog=(e)=>{

  e.preventDefault()
  const form= e.target;
  const title=form.title.value;
  const image=form.image.value;
  const bio=form.bio.value;
  const description=form.description.value;
  const category=form.category.value;
  const email=form.email.value;
  const time=form.time.value;
  const blog={title,image,bio,category,email,time,description}
  
  
 


  fetch('http://localhost:5000/developers',{
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
        text: 'Blog added successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      })
  })


  form.reset()
}









    return (
        <div className="bg-gradient-to-b from-zinc-600 to-slate-500">
            <h2 className="text-center font-bold text-white">Added Your Blog</h2>
    

    <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
    </div>
    <div className=" bg-slate-500 w-full max-w-sm  border shadow-2xl">
      <form onSubmit={handleBlog} className="card-body">

   
   
      <label className="form-control  ">
      <input type="text"  name="time"  className="text-orange-500 bg-slate-600 px-2 text-center" defaultValue={user?.metadata.creationTime || 'N/A'} />
        </label>
         

            <div className="form-control">
        
                <label className="form-control ">
      <input type="email"  name="email" className="text-orange-500 bg-slate-600 px-2 text-center"  defaultValue={user?.email || 'developer@gmail.com'} />
        </label>
     
   
   
         <label className="form-control w-full max-w-xs ">
  <div className="label">
    <span className="label-text text-xl font-semibold text-orange-200 ">Blog title</span>
     </div>
  <input type="text" placeholder="Blog Name" name="title" className="input input-bordered input-primary w-full max-w-xs" />
   </label>
   

        <label className="form-control w-full max-w-xs ">
  <div className="label">
    <span className="label-text text-xl font-semibold text-orange-200 ">ImageURL</span>
     </div>
  <input type="text" placeholder="Photo" name="image" className="input input-bordered input-primary w-full max-w-xs" />
   </label>
          
        </div>

        <div className="flex">

        <div className="label">
    <span className="label-text text-xl font-semibold text-orange-200 ">Short-Description</span>
     </div> 
        <textarea className="textarea textarea-primary" placeholder="Type here" name="bio"></textarea>
    
        </div>

        <div className="flex">

        <div className="label">
    <span className="label-text text-xl font-semibold text-orange-200 ">Long-Description</span>
     </div> 
        <textarea className="textarea textarea-primary" placeholder="description" name="description"></textarea>
    
        </div>

        <div className="flex">

        <div className="label">
    <span className="label-text text-xl font-semibold text-orange-200 ">Category: </span>
     </div> 
       <select name="category" className="select w-full  ">
  <option disabled selected>Technology</option>
  <option>Travel</option>
  <option>Programming</option>
  <option>Business</option>
  <option>News</option>
  <option>WellNess</option>
   <option>Education</option>
  <option>Psychology</option>
  <option>Gaming</option>
 
</select>
 </div>
 <div className="text-center mt-4">
   <button className="btn glass px-12 ">Add Blog</button>
 
  </div>
  </form>

 
    </div>
   
  </div>
</div>



        </div>
    );
};

export default AddBlog;









