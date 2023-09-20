import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios'
import { Link } from 'react-router-dom'

import AllCaseStudyButton from '../components/AllCaseStudyButton'
import CaseStudyDescComp from '../components/CaseStudyDescComp'
import HeroMain from '../components/HeroMain'

const CaseStudyDescription = () => {

  const params = useParams();

  const [top, setTop] = useState(0);
  const [caseStudy, setCaseStudy] = useState({});

  useEffect(() => {
    if (top == 0) {
      window.scrollTo(0, 0);
      setTop(1);
      document.title = "Overninja: Showcase of extraordinary and remarkable achievements";
      axios.post("https://www.overninja.com:8081/portfolio/get", { id: params.id })
        .then(res => {
          if (res.data.length === 0) {
            window.location = "/CaseStudies";
          }
          else {
            setCaseStudy(res.data[0]);
          }
        })
        .catch(err => {
          console.log(err);
          window.location = "/CaseStudies";
        });
    }
  });

  return (
    <section className="overflow-hidden font-custom">
      {/* <HeroMain heading={caseStudy.client} btn={"Get a free quote"} clip={"https://www.overninja.com/uploads/portfolio/" + caseStudy.project_video} /> */}
      <div className="relative font-custom h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <video
          src={"https://www.overninja.com/uploads/portfolio/" + caseStudy.project_video}
          autoPlay
          autobuffer="true"
          loop
          muted
          className="object-cover w-full h-full"
        />
          {/* <img src={"https://www.overninja.com/uploads/portfolio/" + caseStudy.project_video} className="object-cover w-full h-full" /> */}
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute w-[90%] sm:w-[75%] mx-auto inset-0 flex flex-col items-start justify-center ">
          <h1 className="text-3xl sm:text-5xl mb-5 leading-[1.1] text-[#f4f4f4] font-semibold">
            {caseStudy.client}

          </h1>
          <p className="text-white lg:w-[75%] my-4" style={{fontSize: "1.1em"}}>{caseStudy.introduction}</p>
          <Link to="/GetAFreeQuote"><span

            className="mt-10 inline-block px-4 py-2 border border-[#fd0202] text-[#f4f4f4] rounded hover:bg-white hover:text-[#fd0202] transition duration-300 ease-in-out"
          >
            Get a free quote
          </span>
          </Link>
        </div>

      </div>
      <CaseStudyDescComp key={caseStudy.id} item={caseStudy} />
      <AllCaseStudyButton />
    </section>
  )
}

export default CaseStudyDescription