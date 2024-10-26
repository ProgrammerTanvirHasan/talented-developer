import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const BlogDetails = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div className="text-center">
      <div className=" card glass ">
        <h2 className="card-title text-orange-400 p-4">{details.title}</h2>
        <figure>
          <img src={details.image} />
        </figure>
        <h2 className="text-3xl border-b-4 w-36">About</h2>
        <div className="card-body">
          <p>{details.bio}</p>
          <p>{details.description}</p>
          {user.email === details.email && (
            <div className="card-actions justify-end">
              <Link to={`/update/${details._id}`}>
                <button className="p-4 glass">Update</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
