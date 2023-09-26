import {useEffect} from "react";

import { pricingWebsiteAudit } from "../constant/static";
import TableSection from "./TableSection";
import PricingComponent from "../components/PricingComponent";
import { Link } from "react-router-dom";

const Pricing = () => {

  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Overninja: Transparent pricing for all";
  });

  return (
    <div className="w-screen font-custom mt-10 mx-auto py-24">
      <div className="text-center ">
        <h2 className="text-3xl sm:text-5xl font-bold">Transperant Pricing</h2>
        <p className="mt-5"> Pick a plan & improve engagement</p>
      </div>
      <div className="flex gap-10 flex-col py-10  justify-center">
        <div
          id="table"
          className="w-[99%] sm:w-[90%] mx-auto border overflow-scroll"
        >
          <table className="table-auto  w-full  border-collapse border ">
            <thead>
              <tr>
                <th className="p-2 text-[#cd0202]  text-2xl border ">
                  Features
                </th>
                <th className="p-2 text-white bg-[#3f2caa]  border">
                  <span>
                    <p>Basic</p>
                    <p className="">$750 / month</p>
                  </span>
                </th>
                <th className="p-2  text-white bg-[#cd0202]   border">
                  <span>
                    <p>Pro</p>
                    <p>$1500 / month</p>
                  </span>
                </th>
                <th className="p-2  bg-[#013220] text-white border">
                  <span>
                    <p>Growth</p>
                    <p className="">$3000 / month</p>
                  </span>
                </th>
                <th className="p-2 text-white bg-black border">
                  <span>
                    <p>Enterprise</p>
                    <p className="text-white">$5000 / month</p>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingWebsiteAudit.map(({ main, sub }) => (
                <>
                  <tr className="">
                    <td className=" text-center text-2xl py-2  col-span-3">
                      {main}
                    </td>
                  </tr>

                  <TableSection key={main} main={main} sub={sub} />
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-[95%] sm:w-[90%] mx-auto border">
          <PricingComponent />
        </div>
        <div className=" flex items-center justify-center">
          <Link to="/GetAFreeQuote">
            <span
              className="mt-10 inline-block px-4 py-1 border border-[#fd0202]  rounded hover:bg-white text-[#fd0202] transition duration-300 ease-in-out"
            >
              Get a free quote
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
