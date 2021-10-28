import React, { useEffect, useState } from "react";
import "./Home.css";
import { getAllowApps } from "./api/listing";
import VoteEntry from "./VoteEntry";
import { Container, Row, Col } from "reactstrap";
import { Card, Elevation, Icon, H1, H3, H5, Text } from "@blueprintjs/core";

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
    <Container>
      <Row>
        <Col md={10}>
          <Row className="mb-4 justify-content-between">
            <H3>Trending Titles</H3>
          </Row>
          {listings
            .reduce((all, one, i) => {
              const chunk = Math.floor(i / 2);
              all[chunk] = [].concat(all[chunk] || [], one);
              return all;
            }, [])
            .map((row) => (
              <Row className="mb-5">
                {row.map((listing) => (
                  <VoteEntry {...listing} />
                ))}
              </Row>
            ))}
        </Col>
        <Col
          md={2}
          style={{
            background: "linear-gradient(to bottom, #ffc271, transparent)",
            padding: "70rem 1.5rem 0rem 3rem",
            marginTop: "-70rem",
            zIndex: "-1",
            height: "110rem",
            borderRadius: "30%",
          }}
        >
          <b>1. Connect</b> your Metamask wallet.
          <br />
          <br />
          <br />
          <b>2. Vote</b> your favorite game.
          <br />
          <br />
          <br />
          <b>3. Watch out</b> for upcoming airdrops on Declo social media sites.
          <br />
          <br />
          <br />
          <b>4. Join Declo</b> community.
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
