import axios from "axios";
import { useEffect, useState } from "react";
import AllCard from "./AllCard";
import { MdSearch } from "react-icons/md";

const AllBlog = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/developers")
      .then((res) => {
        
        setData(res.data);
        setSelectedData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleCategory = (e) => {
    const category = e.target.value;

    if (category === "All") {
      setSelectedData(data);
    } else {
      const filteredBlogs = data.filter((blog) => blog.category === category);
      setSelectedData(filteredBlogs);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value.toLowerCase();
    setSearchTerm(search);

    const filteredBlogs = data.filter((blog) =>
      blog.title.toLowerCase().includes(search)
    );
    setSelectedData(filteredBlogs);
  };

  return (
    <div className="glass pb-4">
      <h2 className="text-3xl text-center">All Blog Added By Any Blogger</h2>
      <div className="lg:flex justify-around border-b-4 py-8 ">
        <div>
          <select
            onChange={handleCategory}
            className="select w-80 lg:w-full max-w-xs bg-slate-800 text-white"
          >
            <option disabled selected>
              pick your selected category
            </option>

            <option value="All">All</option>
            <option value="Travel">Travel</option>
            <option value="Programming">Programming</option>
            <option value="Business">Business</option>
            <option value="News">News</option>
            <option value="WellNess">Wellness</option>
            <option value="Education">Education</option>
            <option value="Psychology">Psychology</option>
            <option value="Gaming">Gaming</option>
          </select>
          {selectedData.map((select) => (
            <li key={select._id}> {select.title} </li>
          ))}
        </div>

        <br />

        <div>
          <form
            onSubmit={handleSearch}
            className="input w-80 lg:w-full input-bordered flex items-center gap-2 bg-slate-800 text-white"
          >
            <input
              type="text"
              className="grow "
              placeholder="Search"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="flex items-center justify-center">
              <MdSearch />
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-10 mt-8">
        {selectedData.length > 0 ? (
          selectedData.map((blog) => (
            <AllCard blog={blog} key={blog._id}></AllCard>
          ))
        ) : (
          <p className="text-red-300 text-2xl">No blogs found</p>
        )}
      </div>
    </div>
  );
};

export default AllBlog;
