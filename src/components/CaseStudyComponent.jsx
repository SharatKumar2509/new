/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CaseStudyComponent = ({item, count}) => {
  const settings = [
    {
      background: "#cd0202",
      color: "white",
      classval: "bg-#cd0202! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row-reverse"
    },
    {
      background: "#f6f6f6",
      color: "black",
      classval: "bg-#f6f6f6! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row"
    },
    {
      background: "#040D12",
      color: "white",
      classval: "bg-#040D12! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row-reverse"
    },
    {
      background: "#f6f6f6",
      color: "black",
      classval: "bg-#f6f6f6! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row"
    },
    {
      background: "#02b5ac",
      color: "white",
      classval: "bg-#cd0202! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row-reverse"
    },
    {
      background: "#f6f6f6",
      color: "black",
      classval: "bg-#f6f6f6! gap-5 sm:gap-10 min-h-screen flex-col shadow-md p-4  flex  md:flex-row"
    },
  ];

  if(count>5) {
    count = (count%5)-1;
  }
  
  return (
    <div style={{ backgroundColor: settings[count].background }} className={settings[count].classval}>
      <div className="w-full my-auto">
        <img className="w-full" style={{width: '100%', height: 'auto', aspectRatio: '14/9', objectFit: 'cover', borderRadius: '15px'}} src={"https://www.overninja.com/uploads/portfolio/"+item.project_image_1} alt={item.client} />
      </div>
      <div className={`w-full text-${settings[count].color} my-auto`}>
        <h2 className="text-5xl tracking-wider font-semibold mb-10">{item.client}</h2>

        <p className="mb-10">{item.benefits}</p>
        <div className="w-full my-5 ">
        <div className="flex w-full lg:w-[85%] justify-between mb-4">
            <div className="text-center">
              <p className="text-3xl font-bold">{
                item.value1
              }</p>
              <p className="text-lg">{
                item.title1
              }
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{
                item.value2
              }</p>
              <p className="text-lg">{
                item.title2
              }
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{
                item.value3
              }</p>
              <p className="text-lg">{
                item.title3
              }
              </p>
            </div>
          </div>
        </div>
        <div className="grid  justify-center sm:justify-start">
          <Link to={`/CaseStudies/${item.id}`}>
            <button
              className={`bg-transparent border my-5 border-${settings[count].color}  rounded-md hover:text-black  hover:bg-white  text-${settings[count].color} font-thin py-2 px-6  transition-all duration-300`}
            >
              See full case study
              <span className="pl-1 transition-all hover:pl-3">&#8594;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyComponent;
