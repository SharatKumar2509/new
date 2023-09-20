import { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReviewCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.overninja.com:8081/testimonials")
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#040D12] font-custom flex-col justify-center items-center sm:py-5  flex h-screen py-10 gap-10 sm:gap-5 ">
      <div className="sm:w-1/2 w-full flex justify-center items-center px-4">
        <h2 className="text-white text-center font-bold sm:text-5xl text-3xl">
          &quot;What our clients say&quot;
        </h2>
      </div>
      <div className="sm:w-1/2 w-full px-4">
        {loading ? (
          // Show a loading 
          <div>Loading...</div>
        ) : error ? (
          // Show an error message here
          <div>Error: {error}</div>
        ) : (
          <Carousel
            stopOnHover={false}
            autoPlay={true}
            autoFocus={true}
            showIndicators={true}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            className="h-full"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 h-auto my-5 text-white"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="justify-self-start mb-4">
                  <p>{review.review}</p>
                  <h3 className="font-bold mt-14 text-xl">{review.fullname}</h3>
                  <h2 className="font-light text-lg">
                    {review.designation}, {review.company}
                  </h2>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ReviewCarousel;
