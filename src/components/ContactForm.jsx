import { useEffect, useState } from 'react'
import axios from 'axios';
import {AiOutlineSend, AiOutlineCheck} from "react-icons/ai"
import {BiLoaderCircle} from "react-icons/bi";

const ContactForm = () => {

  const [status, setStatus] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+1 ',
    website: '',
    budget: '',
    services: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(status==0) {
      setStatus(1);
      axios.post("https://www.overninja.com:8081/contact", formData)
				.then(() => {
					setStatus(2);
        })
				.catch(err => {
					console.log(err);
					setStatus(0);
				});

      setTimeout(() => {
        setStatus(2);
        setTimeout(() => {
          setStatus(0);
        }, 3000);
      }, 3000);

      axios.get("https://ipapi.co/json")
        .then(res => {
          setFormData({
            name: '',
            email: '',
            phone: res.data.country_calling_code + " ",
            website: '',
            budget: '',
            services: '',
          });
        })
        .catch(err => console.log(err));
    }
  };

  useEffect(() => {
    axios.get("https://ipapi.co/json")
      .then(res => {
        setFormData({
          name: '',
          email: '',
          phone: res.data.country_calling_code + " ",
          website: '',
          budget: '',
          services: '',
        });
      })
      .catch(err => console.log(err));
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border-[#fd0202] border-2 p-2 outline-none"
          value={formData.name}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border-[#fd0202] border-2 p-2 outline-none"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="w-full border-[#fd0202] border-2 p-2 outline-none"
          value={formData.phone}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="website"
          placeholder="Website URL"
          className="w-full border-[#fd0202] border-2 p-2 outline-none"
          value={formData.website}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="budget"
          placeholder="Monthly budget"
          className="w-full border-[#fd0202] border-2 p-2 outline-none"
          value={formData.budget}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <textarea
          name="services"
          placeholder="What services are you looking for?"
          className="w-full border-red-500 border-2 p-2 outline-none"
          rows="3"
          value={formData.services}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="border-red-500 border-2 text-red-500 px-4 py-2 hover:bg-red-400 hover:text-white transition duration-300"
        >
          {
            (status==1) ? (
              <span className="flex gap-1 items-center">
                Sending <BiLoaderCircle />
              </span>
            ) : (status==2) ? (
              <span className="flex gap-1 items-center">
                Message Sent <AiOutlineCheck />
              </span>
            ) : (
              <span className="flex gap-1 items-center">
                Send <AiOutlineSend />
              </span>
            )
          }
        </button>
      </div>
    </form>


  )
}

export default ContactForm