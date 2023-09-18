import { useState, useEffect } from "react";
import axios from "axios";

import BlogComponent from "../components/BlogComponent";

const BlogsPage = () => {

  const [blogs, setBlogs] = useState([]);
  const [blogs2, setBlogs2] = useState([]);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if(top==0) {
      window.scrollTo(0,0);
      setTop(1);
    
    document.title = "Overninja: Explore our insights, trends, and industry knowledge";
    axios.get("https://www.overninja.com:8081/blogs")
    .then(res => {
      setBlogs(res.data);
      setBlogs2(res.data.slice(0,9));
    })
    .catch(err => console.log(err));
  }
  });

  const showMore = () => {
    var s = blogs2.length;
    setBlogs2(blogs.slice(0,s+9));
  }

  return (
    <div className="gap-10 flex flex-col items-center justify-center font-custom  mt-10 py-24 ">
      <div className=" w-[90%]  flex flex-col gap-4 items-center justify-center mb-4 sm:w-[60%] ">
        <h2 className="text-5xl  font-bold ">Blogs</h2>
        <p className=" text-center text-gray-400 ">
          Explore our insights, trends, and industry knowledge.
        </p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 m-4 lg:w-[75%]">
        {
          blogs2.map((blog, index) => (
            <BlogComponent key={index} blog={blog} />
          ))
        }
      </div>

      {/* have to fetch more blogs */}
      {
        (blogs.length!=blogs2.length) ? (
          <button className="mt-2 border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition duration-300" onClick={showMore}>
            Read More Blogs
          </button>
        ) : (<></>)
      }
    </div>
  );
};

export default BlogsPage;
