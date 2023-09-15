// StatComponent.js
import React from 'react';

function StatComponent({ value ,title}) {
  return (
    <div className="text-[#f4f4f4] mt-8">
      <div className="text-4xl sm:text-5xl  leading-[1.1] font-semibold">
        {value}
      </div>
      <div className="text-sm">{title}</div>
      
    </div>
  );
}

export default StatComponent;
