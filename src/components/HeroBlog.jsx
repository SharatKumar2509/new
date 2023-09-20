import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogComponent from './BlogComponent';
import { Link } from 'react-router-dom';

const HeroBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.overninja.com:8081/blogs")
      .then((res) => {
        setBlogs(res.data.slice(0, 6));
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); //  loading to false on error
      });
  }, []);

  return (
    <div className="gap-10 flex flex-col items-center justify-center font-custom py-10">
      <div className="w-[90%] my-5 flex flex-col items-center text-center justify-center sm:w-[60%]">
        <h2 className="text-5xl font-bold mb-4">Blogs</h2>
        <p className="mb-4 text-gray-400">
          Explore our insights, trends, and industry knowledge.
        </p>
      </div>

      {loading ? (
        // Show a loading spinner 
        <div className="spinner"></div>
      ) : (
        // Show the blog list 
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-4 lg:w-[75%]">
          {blogs.map((blog, index) => (
            <BlogComponent key={index} blog={blog} />
          ))}
        </div>
      )}

      <Link to="/Blogs">
        <button className="mt-2 border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition duration-300">
          More Blogs
        </button>
      </Link>
    </div>
  );
};

export default HeroBlog;
