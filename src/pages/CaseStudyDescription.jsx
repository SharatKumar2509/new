import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios'

import AllCaseStudyButton from '../components/AllCaseStudyButton'
import CaseStudyDescComp from '../components/CaseStudyDescComp'
import HeroMain from '../components/HeroMain'

const CaseStudyDescription = () => {

  const params = useParams();

  const [top, setTop] = useState(0);
  const [caseStudy, setCaseStudy] = useState({});

  useEffect(() => {
    if(top==0) {
      window.scrollTo(0,0);
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
      <HeroMain heading={caseStudy.client} btn={"Get a free quote"} clip={"https://www.overninja.com/uploads/portfolio/"+caseStudy.project_video} />
      <CaseStudyDescComp key={caseStudy.id} item={caseStudy} />
      <AllCaseStudyButton />
    </section>
  )
}

export default CaseStudyDescription