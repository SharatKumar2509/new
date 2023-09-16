/* eslint-disable react/prop-types */
import {useEffect} from 'react'

const TableSection = ({sub}) => {
   
  useEffect(() => {
    window.scrollTo(0,0);
  });
    
  return (<>

  {
    
    sub.map(({title,data})=>(<>
        <tr>
    <td className="p-4  text-bold"><strong>{title}</strong></td>
    <td className="p-4 text-center"></td>
    <td className="p-4 text-center"></td>
    <td className="p-4 text-center"></td>
    <td className="p-4 text-center"></td>
  </tr>
    {data.map(({subtitle,values}, index)=>(  <tr key={index}>
    <td className="p-4 border ">{subtitle}</td>
    <td className="p-4 border text-white bg-[#3f2caa] text-center">{values[0] }</td>
    <td className="p-4 border bg-[#ff0303]   text-white text-center">{values[1]}</td>
    <td className="p-4 border  bg-[#013220]  text-white text-center">{values[2]}</td>
    <td className="p-4 border  bg-black text-white text-center">{values[3]}</td>
  </tr>))}
    </>))
  }

  
   
 
  </>
  )
}

export default TableSection