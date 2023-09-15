/* eslint-disable react/prop-types */
import {BiComment,BiLike} from "react-icons/bi"
import { Link } from 'react-router-dom';

const BlogComponent = ({ blog }) => {
  return (
    <div className="flex flex-col justify-between cursor-pointer">
     <Link to={`/Blogs/${blog.path}`}> <img src={"https://www.overninja.com/uploads/blogs/"+blog.blog_image} alt={blog.title} className="w-full h-44 object-cover mb-2" />
     </Link>
      <div className='p-2'>
      <h3 className="text-md font-semibold">{blog.title}</h3>
      <p className="text-gray-500">By {blog.author}</p>
      <div className="mt-2 flex items-center gap-2 text-gray-500">
        <div className='flex items-center gap-1'>
        <BiLike />
        <span>{blog.likes}</span>
        </div>
        <div className='flex items-center gap-1'>
        <BiComment />
        <span>{blog.comments}</span>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default BlogComponent;
