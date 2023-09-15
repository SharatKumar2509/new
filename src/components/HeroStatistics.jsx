/* eslint-disable react/prop-types */
import StatComponent from "./StatComponent";
import axios from "axios";
import { useEffect, useState } from "react";

const HeroStatistics = ({ clip }) => {

  const [statistics, setStatistics] = useState([
    {
      "title": "Satisfied Clients",
      "value": "50+",
    },
    {
      "title": "Campaign managed",
      "value": "100+",
    },
    {
      "title": "Revenue Generated",
      "value": "1M+",
    },
    {
      "title": "Client Retention",
      "value": "100%",
    }
  ]);

  useEffect(() => {
    axios.get("https://www.overninja.com:8081/statistics")
    .then((res) => {
      var data = res.data[0];
      var stats = [
        {
          "title": "Satisfied Clients",
          "value": data['clients'],
        },
        {
          "title": "Campaign managed",
          "value": data['campaign'],
        },
        {
          "title": "Revenue Generated",
          "value": data['revenue'],
        },
        {
          "title": "Client Retention",
          "value": data['retention'],
        }
      ];
      setStatistics(stats);
    })
    .catch(err => console.log(err));
  });

  return (
    <div className="relative font-custom h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          src={clip}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute  inset-0 flex flex-col items-center">
        <div className="w-[80%] sm:w-[70%] h-auto my-auto sm:flex-row flex-col   items-start justify-center">
          {
            statistics.map((stat, index) => (
              <StatComponent key={index} title={stat.title} value={stat.value} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default HeroStatistics;
