import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider";
import { Link } from "react-router-dom";

const AllCard = ({ blog }) => {
  const { title, image, category ,_id} = blog;

  const [wishlist, setWishlist] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/wishlist")
      .then((res) => res.json())
      .then((data) => setWishlist(data))
      .catch((err) => console.error(err));
  }, []);

  const handleWishlist = (blog) => {
    const includeWishlist = wishlist.some(
      (item) => item.title === blog.title && item.email === user.email
    );

    if (includeWishlist) {
      Swal.fire({
        title: "Already added",
        text: "This blog is already in your wishlist!",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const wishlistItem = {
      ...blog,
      email: user.email,
    };

    fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlistItem),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            throw err;
          });
        }
        return res.json();
      })
      .then((data) => {
        Swal.fire({
          title: "Done!",
          text: "Blog added to wishlist",
          icon: "success",
          confirmButtonText: "OK",
        });
        setWishlist([...wishlist, data]);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        Swal.fire({
          title: "Error",
          text: error.message || "Something went wrong!",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div>
      <div>
        <div className="card  border-b w-full lg:w-[348px]">
          <figure>
            <img className="h-96 w-96" src={image} alt="Image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-300">{title}</h2>
            <p className="text-white font-semibold text-lg">
              Category: {category}
            </p>

            <div className="text-center">
              <Link to={`/details/${_id}`}>
                <button className="btn glass bg-slate-950 text-black">
                  Details
                </button>
              </Link>
              <button
                onClick={() => handleWishlist(blog)}
                className="btn glass bg-slate-700 text-black"
              >
                WishList
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCard;
