import {useEffect} from 'react'

// from backend
import { caseStudies } from '../constant/static'

import caseStudyheroclip from "../assets/casestudyhero.mp4"
import CaseStudyComponent from '../components/CaseStudyComponent'
import AllCaseStudyButton from '../components/AllCaseStudyButton'
import HeroMain from '../components/HeroMain'

const CaseStudies = () => {

  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Overninja: Showcase of extraordinary and remarkable achievements";
  });

  return (
    <section className="overflow-hidden font-custom">
       <HeroMain heading={"Dive into case studies that highlight our expertise and commitment"} btn={"Get a free quote"} clip={caseStudyheroclip} />
        {
            caseStudies.map(({title,heading,description,image,bg,reverse,color,stats})=> (<CaseStudyComponent key={title} heading={heading} color={color} bg={bg} stats={stats}  description={description} reverse={reverse} image={image} />))
        }
        {/* <AllCaseStudyButton /> */}
    </section>
  )
}

export default CaseStudies
