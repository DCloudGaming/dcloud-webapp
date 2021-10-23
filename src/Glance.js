import { Card, Elevation, Text, H1, H3 } from "@blueprintjs/core";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import sample from "./assets/video/pov-playing-game.mp4";
import "./Glance.css";
import "./Listing.css";

function Glance() {
  const streams = [
    {
      title: "Diablo",
      desc: "Play on web browser.",
      image: require("./assets/img/games/diablo.png"),
      action: "Play",
    },
    {
      title: "Starcraft",
      desc: "Play on web browser.",
      image: require("./assets/img/games/starcraft.jpg"),
      action: "Play",
    },
    {
      title: "Trending",
      desc: "Vote new games.",
      image: require("./assets/img/games/freefire.png"),
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
        <Button className="early-access" onClick={toggle}>
          <H3>
            <b>Get early access</b>
          </H3>
        </Button>
        {streams
          .reduce((all, one, i) => {
            const chunk = Math.floor(i / 2);
            all[chunk] = [].concat(all[chunk] || [], one);
            return all;
          }, [])
          .map((row) => (
            <Row className="mb-5">
              {row.map((stream) => (
                <>
                  <Col md={3}>
                    <Card elevation={Elevation.THREE}>
                      <Row>
                        <Col md={5}>
                          <div className="glance-img-container">
                            <img
                              src={stream.image}
                              style={{
                                borderRadius: "1rem",
                                maxWitdth: "100%",
                                maxHeight: "6rem",
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={1} />
                        <Col md={5}>
                          <H3>{stream.title}</H3>
                          <Text>{stream.desc}</Text>
                          <br />
                          <button large className="button-3d">
                            {stream.action}
                          </button>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </>
              ))}
            </Row>
          ))}
      </Container>
    </div>
  );
}

export default Glance;
