import {useState, useEffect} from 'react';
import { privacyPolicyData as data } from '../constant/static';
const PrivacyPolicy = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  });
  
  return (
    <div className="bg-white w-[90%] mx-auto py-28">
      <h1 className="text-2xl font-bold">PRIVACY POLICY</h1>
      <p>{data.introduction}</p>
      {data.sections.map((section, index) => (
        <div key={index} className="mt-4">
          <h2 className="text-xl font-bold">{section.title}</h2>
          <ul className="list-disc list-inside">
            {section.content.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <p>If you have any questions about these terms and conditions, please contact us at <a  className="text-blue underline" href="mailto:INFO@OVERNINJA.COM">SALES@OVERNINJA.COM</a></p>
    </div>
  );
};

export default PrivacyPolicy;
