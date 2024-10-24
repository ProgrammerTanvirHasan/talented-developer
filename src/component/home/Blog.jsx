



import { useEffect, useState } from "react";
import axios from 'axios';
import Blogs from "./Blogs";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/developers')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-600 pt-8 pb-8 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-10 mt-4">
        {data.slice(2,8).map((blog) => (
          <Blogs blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
