import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";

const BlogDetails = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);

  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;

    const blog = {
      comment,
      email: user?.email || user?.displayName,
      photoURL:
        user?.photoURL ||
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    };

    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Done!",
          text: "Comment submitted",
          icon: "success",
          confirmButtonText: "OK",
        });
      });

    form.reset();
  };

  useEffect(() => {
    fetch("http://localhost:5000/comment")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }, [comments]);

  return (
    <div>
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

            <div className="flex flex-row-reverse justify-between">
              {user.email === details.email && (
                <div className="card-actions justify-end">
                  <Link to={`/update/${details._id}`}>
                    <button className="p-4 rounded-md px-8 bg-orange-900">Update</button>
                  </Link>
                </div>
              )}

              <div>
                <form onSubmit={handleComment}>
                  <div className="form-control w-72 mt-4">
                    <textarea
                      name="comment"
                      className="textarea textarea-success bg-black text-white h-24"
                      placeholder="Write a comment.."
                    ></textarea>
                    <div className="label">
                      <button className="bg-green-700 p-2 border rounded-xl">
                        Comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <h2 className="border-y-2 w-60 border-x-2 text-xl ">
              Your Comments
            </h2>
            <div className="py-2 grid lg:grid-cols-3 gap-4">
              {comments.map((comment) => (
                <div
                  key={comment._id}
                  className="pr-2 rounded-xl bg-gradient-to-r from-slate-700 to-slate-950"
                >
                  <div className="flex  p-2 rounded-lg">
                    <div className="flex flex-col  mr-4">
                      <img
                        className="rounded-xl w-20 h-24"
                        src={comment.photoURL}
                        alt=""
                      />
                      <p className="mt-2 text-sm text-white">{comment.email}</p>
                    </div>
                    <div className="flex ">
                      <p className="text-white">{comment.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

//
