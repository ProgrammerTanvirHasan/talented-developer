import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";

const FeaturedBlog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/developers")
      .then((res) => {
        const sortedData = res.data.sort(
          (a, b) => b.description.length - a.description.length
        );
        setData(sortedData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="glass pb-4">
      <h1 className="text-3xl text-center py-4 glass">Top 10 Post Here</h1>

      <div>
        <div className="grid lg:grid-cols-4 lg:gap-4 text-orange-300 lg:text-2xl mb-2 ">
          <th>SL</th>
          <th>B.Title</th>
          <th>B.Owner</th>
          <th>Photo</th>
        </div>
        {data.slice(0, 10).map((feature, index) => (
          <Table key={feature._id} index={index} feature={feature}></Table>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlog;
