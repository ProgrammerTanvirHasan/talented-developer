

const AddBlog = () => {




const handleBlog=(e)=>{
  e.preventDefault()
  const form= e.target;
  const title=form.title.value;
  const image=form.image.value;
  const bio=form.bio.value;
  const category=form.category.value;
  const blog={title,image,bio,category}
  console.log(blog);


  fetch('http://localhost:5000/developers',{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(blog)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
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
        <div className="form-control">
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
    <span className="label-text text-xl font-semibold text-orange-200 ">Category: </span>
     </div> 
       <select name="category" className="select w-full  ">
  <option disabled selected>Select any</option>
  <option>Programming</option>
  <option>Cloud</option>
  <option>Design</option>
  <option>Marketing</option>
  <option>Development</option>
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