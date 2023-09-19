import { Link } from 'react-router-dom';

const AllCaseStudyButton = () => {
  return (
    <div className="h-[25vh] font-custom w-screen flex items-center justify-center">
    <Link to={`/CaseStudies`}
      className=" text-[#cd0202]  rounded-md border border-[#cd0202] py-2 px-4 text-lg hover:bg-[#cd0202] hover:text-white"
    >
      More case studies
    </Link>
  </div>
  )
}

export default AllCaseStudyButton