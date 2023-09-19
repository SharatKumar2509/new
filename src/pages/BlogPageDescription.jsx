import { useEffect, useState } from "react";
import axios from "axios";

import { BiComment, BiLike } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {AiOutlineCheck} from "react-icons/ai"
import {BiLoaderCircle} from "react-icons/bi";
import { useParams } from "react-router-dom";

const BlogPageDescription = () => {

  const params = useParams();

  const [top, setTop] = useState(0);
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [subscriber, setSubscriber] = useState("");
  const [status, setStatus] = useState(0);
  const [status2, setStatus2] = useState(0);
  const [formData, setFormData] = useState({
    blog_id: '',
    name: '',
    email: '',
    comment: ''
  });

  useEffect(() => {
    if(top==0) {
      window.scrollTo(0,0);
      setTop(1);
      document.title = "Overninja : Welcome to a world of knowledge and innovation!";
    }
      axios.post("https://www.overninja.com:8081/blogs/get", { path: params.id })
        .then(res => {
          if (res.data.length === 0) {
            window.location = "/blogs";
          }
          else {
            setBlog(res.data[0]);
            axios.post("https://www.overninja.com:8081/blog/comment/get", { blog_id: res.data[0].id })
              .then((res3) => {
                setComments(res3.data);
              })
              .catch(err => console.log(err));
          }
        })
        .catch(err => {
          console.log(err);
          window.location = "/Blogs";
        });
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputChange = (e) => {
    setSubscriber(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if(status==0) {
      setStatus(1);
      axios.post("https://www.overninja.com:8081/subscribe", { email: subscriber })
        .then(() => {
            setStatus(2);
        })
        .catch(err => {
          console.log(err);
          setStatus(2);
        });

      setSubscriber('');

      setTimeout(() => {
        setStatus(2);
        setTimeout(() => {
          setStatus(0);
        }, 3000);
      }, 3000);
    }
  };

  const handleLike = () => {
    axios.post("https://www.overninja.com:8081/blog/like", { id: blog.id })
			.catch(err => {
				console.log(err);
			});
  };

  const handleComment = (e) => {
    e.preventDefault();
    if(status2==0) {
      setStatus2(1);
      var f = formData;
      f.blog_id = blog.id;
      setFormData(f);
      axios.post("https://www.overninja.com:8081/blog/comment/add", f)
				.then(() => {
					setStatus2(2);
          setTimeout(() => {
            setStatus2(0);
          }, 3000);
          setFormData({
            name: '',
            email: '',
            comment: ''
          });
        })
				.catch(err => {
					console.log(err);
					setStatus2(0);
				});
    }
  };

  return (
    <div className="w-screen font-custom mt-10 py-24">
      <div className="w-[90%] sm:w-[70%]  mx-auto">
        <img src={"https://www.overninja.com/uploads/blogs/" + blog.blog_image} className="w-[100%]" alt="blog img" />
        <div className="my-6">
          <h1 className="text-3xl font-semibold">{blog.title}</h1>
          <p className="text-gray-600 mt-4">By {blog.author}</p>
        </div>

        <div className="prose">
          <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>

          <div className="mt-8   flex items-center gap-4 text-gray-500">
            <div className="flex cursor-pointer items-center gap-1">
              <BiLike onClick={handleLike} size={32} />
              <span>{blog.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <BiComment size={32} />
              <span>{blog.comments}</span>
            </div>
          </div>
          <div className="text-2xl mt-5">
            <p>Share this post</p>

            {/* have to add the page url to these link */}
            <div className="flex mt-2 flex-row gap-3">
              <a
                href={"https://linkedin.com/shareArticle?url=https://www.overninja.com/Blogs/"+blog.path}
                target="_blank"
                rel="noreferrer noopener"
                className="icon-linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href={"https://www.facebook.com/share.php?u=https://www.overninja.com/Blogs/"+blog.path}
                target="_blank"
                rel="noreferrer noopener"
                className="icon-facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={"https://www.twitter.com/share?url=https://www.overninja.com/Blogs/"+blog.path}
                target="_blank"
                rel="noreferrer noopener"
                className="icon-twitter"
              >
                <FaTwitter />
              </a>
              <a
                href={"https://api.whatsapp.com/send?text=https://www.overninja.com/Blogs/"+blog.path}
                target="_blank"
                rel="noreferrer noopener"
                className="icon-whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>

          </div>

          {/* subscribe form */}
          <div className=" w-full my-20 justify-center  flex items-center ">
            <form className="flex flex-col sm:flex-row gap-2 " onSubmit={handleEmailSubmit}>

              <input
                type="email"
                id="email"
                placeholder="Your email"
                value={subscriber}
                className="outline-none  rounded-md border p-2 border-[#cd0202] "
                onChange={handleInputChange}
                required
              />
              <button
                className="border rounded-md  border-[#cd0202] px-4 py-2 text-[#cd0202]"
                type="submit"
              >
                {
                  (status==1) ? (
                    <BiLoaderCircle />
                  ) : (status==2) ? (
                    <AiOutlineCheck />
                  ) : (
                    <span>Subscribe</span>
                  )
                }
              </button>

            </form>
          </div>


          {/* comment form */}
          {/* onSubmit={onCommentSubmit} */}


          <div className="my-20">
            <form onSubmit={handleComment}>
              <div className="flex gap-1">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                rows="3"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Add a comment..."
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <button
                type="submit"
                className="text-[#cd0202] border border-[#cd0202] py-1 px-4 rounded mt-2"
              >
                {
                  (status2==1) ? (
                    <BiLoaderCircle />
                  ) : (status2==2) ? (
                    <AiOutlineCheck />
                  ) : (
                    <span>Comment</span>
                  )
                }
              </button>
            </form>
          </div>
          <div>

            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-md">
                  <h6>{comment.name}</h6>
                  <p>{comment.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageDescription;

