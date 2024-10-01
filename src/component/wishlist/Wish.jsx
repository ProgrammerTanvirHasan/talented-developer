

const Wish = ({card,handleRemove}) => {
    const {title,image,category,email,bio,_id}=card;


    return (
        <div>
            <div className="card card-compact  w-96 h-96 shadow-xl mx-auto bg-blue-950">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-white">{title}</h2>
    <h2 className="text-white text-xl">{category}</h2>
    <p className="text-white">{bio}</p>
    <div className="card-actions justify-center">
      <button className="btn  bg-slate-950   text-green-700 font-bold">Details More</button>
      <button onClick={()=>handleRemove(_id)} className="btn bg-black text-red-600">Remove wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Wish;