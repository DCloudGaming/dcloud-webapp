import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { getAllowApps } from "./api/listing";

function Home() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    const getListingsWrapper = async () => {
      const resp = await getAllowApps();
      if (!resp.error) setListings(resp.data);
    };

    getListingsWrapper();
  }, []);

  return (
    <div>
      {/* <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      /> */}
      <div className="home">
        {listings
          .reduce((all, one, i) => {
            const chunk = Math.floor(i / 4);
            all[chunk] = [].concat(all[chunk] || [], one);
            return all;
          }, [])
          .map((row) => (
            <div className="home__row">
              {row.map((listing) => (
                <Product {...listing} />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
