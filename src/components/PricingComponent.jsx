import React from 'react';
import { perPrice } from '../constant/static';


const PricingComponent = () => {
  return (
    <div className="grid sm:grid-cols-2 font-custom grid-cols-1 gap-4">
      {perPrice.map((item, index) => (
        <div
          key={index}
          className={`bg-[${item.background}] flex flex-col justify-center items-center h-[20vh] py-2 px-2 rounded-lg shadow-md text-${item.color}  text-center`}
        >
          <h2 className="sm:text-2xl text-xl font-semibold">{item.title}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PricingComponent;

