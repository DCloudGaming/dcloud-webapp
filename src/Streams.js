import React, { useEffect, useState } from "react";
import "./Streams.css";
import StreamCard from "./StreamCard";
import { getStreams, queryLinks } from "./api/stream";
import { useParams } from "react-router-dom";

function Streams() {
  const [streams, setStreams] = useState([]);
  let { invite_url } = useParams();
  useEffect(() => {
    const getStreamsWrapper = async () => {
      var resp;
      if (invite_url) {
        resp = await queryLinks(invite_url);
      } else {
        resp = await getStreams();
      }
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
