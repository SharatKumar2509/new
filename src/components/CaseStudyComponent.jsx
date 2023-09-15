import React from "react";
import CaseStudyStats from "./CaseStudyStats";
import { Link } from "react-router-dom";

const CaseStudyComponent = ({
  reverse,
  bg,
  image,
  heading,
  description,
  color,
  stats,
}) => {
  const reverseClass =
    reverse === "reverse"
      ? ` bg-${bg}! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row`
      : ` bg-${bg}! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row-reverse`;
  return (
    <div style={{ backgroundColor: bg }} className={reverseClass}>
      <div className="w-full my-auto">
        <img className="w-full " src={image} alt={heading} />
      </div>
      <div className={`w-full text-${color} my-auto`}>
        <h2 className="text-5xl tracking-wider font-semibold">{heading}</h2>

        <p className=" mt-5">{description}</p>
        <div className="w-full my-5 ">
          <CaseStudyStats stat={stats} />
        </div>
        <div className="grid  justify-center sm:justify-start">
          <Link to={`/CaseStudies/${heading}`}>
            <button
              className={`bg-transparent border my-5 border-${color}  rounded-md hover:text-black  hover:bg-white  text-${color} font-thin py-2 px-6  transition-all duration-300`}
            >
              See full case study{" "}
              <span className="pl-1 transition-all hover:pl-3">&#8594;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyComponent;
