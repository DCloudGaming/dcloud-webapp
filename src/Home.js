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
    <>
      <Container>
        <Row>
          <Col md={10}>
            <Row className="mb-4 justify-content-between">
              <H3>Your Collection</H3>
            </Row>
            {listings
              .filter((listing) => listing.voted)
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
          <Col md={2} />
        </Row>
        <Row>
          <Col md={10}>
            <Row className="mb-4 justify-content-between">
              <H3>Trending Titles</H3>
            </Row>
            {listings
              .filter((listing) => !listing.voted)
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
          <Col md={2} />
        </Row>
        <Container
          style={{
            position: "fixed",
            top: "0",
            marginLeft: "inherit",
            zIndex: "-1",
          }}
        >
          <Row>
            <Col md={10} />
            <Col
              md={2}
              style={{
                background: "#fff3e0",
                padding: "10rem 0rem 0rem 3rem",
                zIndex: "-1",
                height: "100vh",
              }}
            >
              <b>1. Connect</b> your Metamask wallet.
              <br />
              <br />
              <br />
              <b>2. Vote</b> for game titles you like to see on Declo.
              <br />
              <br />
              <br />
              <b>3. Watch out</b> for upcoming airdrops on Declo social media
              sites.
              <br />
              <br />
              <br />
              <b>4. Join Declo</b> community.
              <img
                alt="logo"
                className="header__logo"
                src={require("./assets/img/cyborg-flying.png")}
                style={{
                  position: "absolute",
                  bottom: "-2rem",
                  marginLeft: "-8rem",
                  width: "15em",
                }}
              />
              <div
                style={{
                  marginLeft: "inherit",
                  background: "inherit",
                  height: "inherit",
                  width: "100vw",
                  position: "fixed",
                  top: "0",
                  zIndex: "-2",
                }}
              ></div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
