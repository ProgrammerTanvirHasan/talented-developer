import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const update = useLoaderData();

  const updateBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const bio = form.bio.value;
    const description = form.description.value;
    const category = form.category.value;

    const blog = {
      title,
      image,
      bio,
      category,
      description,
    };

    fetch(`http://localhost:5000/developers/${update._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Done!",
          text: "Blog updated successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      });

    form.reset();
  };

  return (
    <div>
      <div className="bg-gradient-to-b from-zinc-600 to-slate-500">
        <h2 className="text-center font-bold text-white border-b-2 py-4">
          Update Your Blog
        </h2>

        <div className="hero w-full">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <div className="text-center lg:text-left"></div>
            <div className="bg-slate-500 w-full lg:w-1/2 shadow-2xl">
              <form onSubmit={updateBlog} className="card-body w-full">
                <div>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text text-xl font-semibold text-orange-200">
                        Blog title
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Blog Name"
                      name="title"
                      defaultValue={update.title}
                      className="input input-bordered input-primary w-full text-black"
                    />
                  </label>

                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text text-xl font-semibold text-orange-200">
                        ImageURL
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Photo"
                      name="image"
                      defaultValue={update.image}
                      className="input input-bordered input-primary w-full text-black"
                    />
                  </label>
                </div>

                <div className="flex w-full">
                  <div className="label">
                    <span className="label-text text-xl font-semibold text-orange-200">
                      Short-Description
                    </span>
                  </div>
                  <textarea
                    className="textarea textarea-primary w-full text-black"
                    placeholder="Type here"
                    defaultValue={update.bio}
                    name="bio"
                  ></textarea>
                </div>

                <div className="flex w-full">
                  <div className="label">
                    <span className="label-text text-xl font-semibold text-orange-200">
                      Long-Description
                    </span>
                  </div>
                  <textarea
                    className="textarea textarea-primary w-full text-black"
                    placeholder="description"
                    defaultValue={update.description}
                    name="description"
                  ></textarea>
                </div>

                <div className="flex w-full">
                  <div className="label">
                    <span className="label-text text-xl font-semibold text-orange-200">
                      Category:
                    </span>
                  </div>
                  <select
                    name="category"
                    defaultValue={update.category}
                    className="select w-full text-black"
                  >
                    <option disabled>Select a category</option>
                    <option value="Technology">Technology</option>
                    <option value="Travel">Travel</option>
                    <option value="Programming">Programming</option>
                    <option value="Business">Business</option>
                    <option value="News">News</option>
                    <option value="Wellness">Wellness</option>
                    <option value="Education">Education</option>
                    <option value="Psychology">Psychology</option>
                    <option value="Gaming">Gaming</option>
                  </select>
                </div>

                <div className="text-center mt-4">
                  <button className="btn glass w-full text-xl px-12">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
