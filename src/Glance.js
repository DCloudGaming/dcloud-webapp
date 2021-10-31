import { Card, Elevation, H3, Text } from "@blueprintjs/core";
import React, { useState } from "react";
import { isMobile, MobileView } from "react-device-detect";
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import sample from "./assets/video/pov-playing-game.mp4";
import "./Glance.css";
import "./Listing.css";

function Glance() {
  const streams = [
    {
      title: "Retro",
      desc: "Play on web browser.",
      url: "/play?demo=Retro",
      image: require("./assets/img/games/retro.png"),
      action: "Play",
    },
    {
      title: "Diablo",
      desc: "Play on web browser. Beta version.",
      url: "/play?demo=Diablo",
      image: require("./assets/img/games/diablo.png"),
      action: "Play",
    },
    {
      title: "Trending",
      desc: "Vote new games.",
      url: "/vote",
      image: require("./assets/img/games/starcraft.jpg"),
      action: "Vote",
    },
  ];
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className="fullscreen" size="lg">
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <iframe
            title="loading"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeEMI1vgsCqRZ_WQKvUDak8Yq0cGiDXfRYamF4-gnEjeBS7ZQ/viewform?embedded=true"
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </ModalBody>
      </Modal>
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
      </div>
      <Container>
        {streams
          .reduce((all, one, i) => {
            const chunk = Math.floor(i / 2);
            all[chunk] = [].concat(all[chunk] || [], one);
            return all;
          }, [])
          .map((row) => (
            <Row className="mb-md-5 mb-sm-5">
              {row.map((stream) => (
                <>
                  <Col md={4} sm={6} xs={12}>
                    <Card
                      style={{ borderRadius: "3rem" }}
                      elevation={Elevation.THREE}
                    >
                      <Row>
                        <Col md={6} xs={4}>
                          <div className="glance-img-container">
                            <img
                              alt="stream"
                              src={stream.image}
                              style={{
                                borderRadius: "1rem",
                                maxWidth: "100%",
                                // maxHeight: "inherit",
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={6} xs={7}>
                          <H3>{stream.title}</H3>
                          <Text>{stream.desc}</Text>
                          <br />
                          {isMobile && stream.title === "Diablo" ? (
                            <button disabled className="button-3d">
                              Big screen required!
                            </button>
                          ) : (
                            <a
                              href={stream.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button large className="button-3d">
                                {stream.action}
                              </button>
                            </a>
                          )}
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <MobileView>
                    <br />
                  </MobileView>
                </>
              ))}
            </Row>
          ))}
        <Button className="early-access" onClick={toggle}>
          <H3>
            <b>Get early access</b>
          </H3>
        </Button>
      </Container>
    </div>
  );
}

export default Glance;
