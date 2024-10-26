import { Link } from "react-router-dom";

const Wish = ({ card, handleRemove }) => {
  const { title, image, category, bio, _id } = card;

  return (
    <div>
      <div className="card card-compact  w-96 h-96 shadow-xl mx-auto bg-blue-950">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{title}</h2>
          <h2 className="text-white text-xl">{category}</h2>
          <p className="text-white">{bio}</p>
          <div className="card-actions justify-center">
            <Link to={`/details/${_id}`}>
              <button className="btn glass bg-green-700 text-white">
                Details More
              </button>
            </Link>
            <button
              onClick={() => handleRemove(_id)}
              className="btn bg-red-800 text-white"
            >
              Remove wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wish;
