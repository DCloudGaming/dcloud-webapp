import React, { useState, useEffect } from "react";
import {
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import {
  Card,
  Elevation,
  Icon,
  IconSize,
  H2,
  H4,
  H5,
  Text,
  Menu,
  MenuItem,
} from "@blueprintjs/core";
import "./Listing.css";
import GameCard from "./GameCard";
import { getListing } from "./api/listing";

function Listing() {
  const [listing, setListing] = useState();
  const listingId = 1;

  useEffect(() => {
    const getListingWrapper = async () => {
      const resp = await getListing(listingId);
      if (!resp.error) setListing(resp.data);
    };

    getListingWrapper();
  }, []);

  if (!listing) {
    return <p>Loading</p>;
  }

  return (
    <Container>
      <Row className="mt-4 mb-1 d-flex justify-content-between">
        <H2>{listing.title}</H2>
      </Row>
      <Row className="mb-4 d-flex justify-content-between">
        <H5 style={{ marginTop: "1rem" }}>Hosted by {listing.streamer.name}</H5>
        <H5 style={{ marginTop: "1rem" }}>
          Located in {listing.streamer.location}
        </H5>
        <H5 style={{ marginTop: "1rem" }}>
          Streamed {listing.streamer.sessions} sessions
        </H5>
        <button className="button-secondary">Save</button>
      </Row>
      <Row>
        {listing.games
          .reduce((all, one, i) => {
            const chunk = Math.floor(i / 3);
            all[chunk] = [].concat(all[chunk] || [], one);
            return all;
          }, [])
          .map((row) => (
            <Row>
              {row.map((game) => (
                <Col>
                  <GameCard {...game} isChosen={listing.title == game.title} />
                </Col>
              ))}
            </Row>
          ))}
      </Row>
      <Row className="mt-5">
        <Row>
          <Col md="4">
            <Row className="mb-3">
              <Col md="1">
                <Icon
                  icon="bank-account"
                  size={IconSize.LARGE}
                  className="brand-color"
                />
              </Col>
              <Col md="11">
                <h5>Hardware</h5>
                <Text>{listing.hardware}</Text>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md="1">
                <Icon
                  icon="bank-account"
                  size={IconSize.LARGE}
                  className="brand-color"
                />
              </Col>
              <Col md="11">
                <h5>Connection</h5>
                <Text>100km/h</Text>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md="1">
                <Icon
                  icon="bank-account"
                  size={IconSize.LARGE}
                  className="brand-color"
                />
              </Col>
              <Col md="11">
                <h5>Some stats</h5>
                <Text>Details here</Text>
              </Col>
            </Row>
          </Col>
          <Col md="4" className="pricing">
            <Row className="mb-1 d-flex justify-content-between">
              <p>$291 x 1 hour</p>
              <p>$291</p>
            </Row>
            <Row className="mb-1 d-flex justify-content-between">
              <p>Service fee</p>
              <p>$44</p>
            </Row>
            <Row className="mb-1 d-flex justify-content-between">
              <p>
                <b>Total</b>
              </p>
              <p>$355</p>
            </Row>
          </Col>
          <Col md="4">
            <Card
              interactive={true}
              elevation={Elevation.ZERO}
              style={{
                background: "#a5e4ff",
              }}
            >
              <Row className="mb-2">
                <H4>
                  <b>${listing.hourlyRate}</b> per hour
                </H4>
              </Row>
              <Row className="mb-2">
                <Col>
                  <input
                    className="bp3-input .modifier bp3-fill bp3-large mb-3"
                    type="text"
                    placeholder="From"
                    dir="auto"
                  />
                </Col>
                <Col>
                  <input
                    className="bp3-input .modifier bp3-fill bp3-large mb-4"
                    type="text"
                    placeholder="To"
                    dir="auto"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <button large className="button-highlight full-width">
                    Resevere
                  </button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Listing;
