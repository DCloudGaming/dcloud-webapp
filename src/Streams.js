import React, { useEffect, useState } from "react";
import "./Streams.css";
import StreamCard from "./StreamCard";
import { getStreams } from "./api/stream";

function Streams() {
  const [streams, setStreams] = useState([]);
  useEffect(() => {
    const getStreamsWrapper = async () => {
      const resp = await getStreams();
      console.log("Streams");
      console.log(resp);
      if (!resp.error) setStreams(resp.data);
    };

    getStreamsWrapper();
  }, []);

  if (!streams) {
    return <p>Loading</p>;
  }

  return (
    <div>

      {/* <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      /> */}


      <div className="home">
        {streams
          .reduce((all, one, i) => {
            const chunk = Math.floor(i / 4);
            all[chunk] = [].concat(all[chunk] || [], one);
            return all;
          }, [])
          .map((row) => (
            <div className="home__row">
              {row.map((stream) => (
                <StreamCard {...stream} />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Streams;
