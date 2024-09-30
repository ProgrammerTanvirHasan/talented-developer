

const Blogs = ({blog}) => {
    const {title,bio,image,category}=blog;
    return (
        <div>
            <div className="card bg-gradient-to-b from-zinc-600 to-slate-500 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-orange-300">{title}</h2>
    <p className="text-white font-semibold text-lg
    ">Category:{category}</p>
  <div className="text-center">
    <button className="btn glass bg-slate-950 text-black">Details</button>
    <button className="btn glass bg-slate-700 text-black">WishList</button>
  </div>
  </div>
</div>
        </div>
    );
};

export default Blogs;


