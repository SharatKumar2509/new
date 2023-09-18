import {useEffect} from 'react';
import { termsOfUseData as data } from '../constant/static';
const TermsOfUse = () => {

  useEffect(() => {
    window.scrollTo(0,0);
    document.title = "Overninja: Terms and Conditions";
  });
  
  return (
    <div className="bg-white w-[90%] mx-auto mt-10 py-28">
      <h1 className="text-2xl font-bold">TERMS OF USE</h1>
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

export default TermsOfUse;

