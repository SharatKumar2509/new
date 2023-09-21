import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Trustedcarousel = () => {

  const [logos, setLogos] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, 
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    axios
      .get("https://www.overninja.com:8081/brands")
      .then((res) => {
        setLogos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="font-custom flex-col justify-center items-center sm:py-5  flex h-screen py-10 gap-10  ">
      <div className="w-full flex justify-center items-center px-4">
        <h2 className='text-black text-center font-bold sm:text-5xl text-3xl'>Trusted by Leading Companies</h2>
      </div>
      <div className="w-full px-4">
        {
          (logos.length>0) ? (
            <Slider {...settings}>
              {logos.map((item, index) => (
                <div key={index} className="p-4 w-full h-auto gap-5 flex my-5 text-white">
                  <div className="w-full">
                    <img className='w-full' src={"https://www.overninja.com/uploads/brands/"+item.logo} alt={item.company} style={{aspectRatio: '5/1', objectFit: 'contain'}} />
                  </div>
                </div>
              ))}
            </Slider>
          ) : (<></>)
        }
      </div>
    </div>
  );
};

export default Trustedcarousel;
