import React from "react";
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
import { Card, Elevation, Icon, IconSize } from "@blueprintjs/core";
import "./Landing.css";

export default function LandingPage() {
  return (
    <>
      <div>
        <section className="section section-lg top-section">
          <section className="section">
            <Container>
              <Row className="justify-content-md-center">
                <Col md="6">
                  <h1>
                    Hop in. Pick a game. Play instantly. No fancy hardware
                    needed.
                  </h1>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="2">
                  <button large className="button-highlight">
                    Sign up to play
                  </button>
                </Col>
                <Col md="2">
                  <button large className="button-secondary">
                    Apply to stream
                  </button>
                </Col>
              </Row>
              <Row>
                <img
                  className="img-center img-fluid"
                  src={require("./assets/img/positions.png")}
                />
              </Row>
            </Container>
            <Row>
              <img
                className="img-center img-fluid"
                src={require("./assets/img/demo.png")}
              />
            </Row>
            <Container>
              <Row className="justify-content-md-center">
                <Col md="10">
                  <h1>Revolutionary platform to run and publish application</h1>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="12">
                  <h4>
                    CloudMorph is a decentralized, self-hosted cloud
                    gaming/cloud application platform. App deployment for
                    publisher and App access for user are made simple. Users can
                    easily discover and run any application/games directly from
                    their browser. The app content are built up by community in
                    decentralized manner.
                  </h4>
                </Col>
              </Row>
            </Container>
          </section>
        </section>

        <section className="section section-lg">
          <section className="section">
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="4">
                  <Row>
                    <img
                      className="img-center img-fluid"
                      src={require("./assets/img/landing-earn.png")}
                    />
                  </Row>
                </Col>
                <Col md="7">
                  <div className="pl-md-5">
                    <b>STREAM WITH DCLO</b>
                    <h1>
                      Set your own hours.
                      <br />
                      Earn on your own terms.
                    </h1>
                    <p>
                      Maybe you’re preparing for work. Or keeping your computer
                      idle to spend more time with your family. It’s a great
                      time to rent the machine, connect with your community, and
                      earn a little extra cash.
                    </p>
                    <br />
                    <Row>
                      <Col md="1">
                        <Icon
                          icon="bank-account"
                          size={IconSize.LARGE}
                          intent="success"
                        />
                      </Col>
                      <Col md="11">
                        <h5>Reliable earnings</h5>
                        <p>
                          Make money, keep your tips, and use in-app tools to
                          help maximize your earnings.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="1">
                        <Icon
                          icon="time"
                          size={IconSize.LARGE}
                          intent="success"
                        />
                      </Col>
                      <Col md="11">
                        <h5>A flexible schedule</h5>
                        <p>
                          Be your own boss and drive whenever it works for you.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="1">
                        <Icon
                          icon="heart"
                          size={IconSize.LARGE}
                          intent="success"
                        />
                      </Col>
                      <Col md="11">
                        <h5>Get paid promptly</h5>
                        <p>
                          Cash out your earnings whenever you want with Dcloud
                          token.
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="5">
                        <button large className="button-highlight">
                          Apply to stream
                        </button>
                      </Col>
                      <Col md="5">
                        <b>How stream pay works →</b>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg play-section">
          <section className="section">
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                  {/* TODO: switch different here */}
                  <div className="pl-md-5">
                    <b>PLAY WITH DCLO</b>
                    <h1>
                      Ready, set, play
                      <br />
                      in just a few quick clicks.
                    </h1>
                    <p>
                      Whether you’re following your fantasy or your competitive
                      tournament, we’ll get you where you need to play.
                    </p>
                    <br />
                    <Row>
                      <Col md="1">
                        <Icon
                          icon="applications"
                          size={IconSize.LARGE}
                          intent="success"
                        />
                      </Col>
                      <Col md="11">
                        <h5>Get a reliable match in minutes</h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="1">
                        <Icon
                          icon="desktop"
                          size={IconSize.LARGE}
                          intent="success"
                        />
                      </Col>
                      <Col md="11">
                        <h5>Know that your machine can handle any game</h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="1">
                        <Icon
                          icon="timeline-events"
                          size={IconSize.LARGE}
                          intent="success"
                        />
                      </Col>
                      <Col md="11">
                        <h5>Schedule your playtime in advance</h5>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="5">
                        <button large className="button-highlight">
                          Play now
                        </button>
                      </Col>
                    </Row>
                    <Row>
                      <h3 style={{ color: "#171637", fontWeigh: 1000 }}>
                        <b>dclotoken</b>
                      </h3>
                      <p>
                        Pay by DClo Token to unlock perks like 15% off rent fee,
                        free cross-border transaction fee, exclusive offers, and
                        more.
                      </p>
                    </Row>
                  </div>
                </Col>
                <Col className="mt-lg-5" md="6">
                  <Row>
                    <img
                      className="img-center"
                      style={{
                        height: "600px",
                        width: "350px",
                      }}
                      src={require("./assets/img/landing-player-first.png")}
                    />
                  </Row>
                </Col>
              </Row>
              <Row>
                <h1>
                  <b>Pay. Earn. Stake. Go bananas.</b>
                </h1>
                <p>
                  We’ve got options to get you pay smoothly. BTT is a TRC-10
                  utility token based on the blockchain that powers features of
                  the most popular decentralized protocols and applications in
                  the world. DApps powered by BTT include BitTorrent Speed,
                  BitTorrent File System, DLive, and others in the pipeline.
                </p>
              </Row>
              <Row>
                <Col md="5">
                  <button large className="button-highlight">
                    Learn about DCLO Token
                  </button>
                </Col>
                <Col md="5">
                  <b>Exchange & Wallets →</b>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card interactive={true} elevation={Elevation.ZERO}>
                    <h5>
                      <b>First, enable your wallet</b>
                    </h5>
                    <img
                      className="img-center img-fluid"
                      src={require("./assets/img/typing.png")}
                      style={{
                        maxHeight: "150px",
                        margin: "50px 50px",
                      }}
                    />
                    <p>
                      When downloading or upgrading to a new version of
                      BitTorrent or µTorrent Web, or µTorrent Classic, the
                      torrent software will be enabled with a wallet and BTT
                      token balance.
                    </p>
                    <button large className="button-secondary">
                      Connect wallet
                    </button>
                  </Card>
                </Col>
                <Col>
                  <Card interactive={true} elevation={Elevation.ZERO}>
                    <h5>Enjoy faster download speeds</h5>
                    <img
                      className="img-center img-fluid"
                      src={require("./assets/img/fly.png")}
                      style={{
                        maxHeight: "150px",
                        margin: "50px 55px",
                      }}
                    />
                    <p>
                      When downloading torrents, BitTorrent Speed automatically
                      bids BitTorrent (BTT) to other users for faster speeds.
                      Just use the torrent program like normal, there is nothing
                      else you need to learn or do.
                    </p>
                    <button large className="button-secondary">
                      Learn more
                    </button>
                  </Card>
                </Col>
                <Col>
                  <Card interactive={true} elevation={Elevation.ZERO}>
                    <h5>Best part, earn DCLO</h5>
                    <img
                      className="img-center img-fluid"
                      src={require("./assets/img/coin.png")}
                      style={{
                        maxHeight: "150px",
                        margin: "50px 100px",
                      }}
                    />
                    <p>
                      When a torrent file finishes downloading, you can
                      automatically earn BitTorrent (BTT) by seeding. The
                      integrated wallet allows for secure storage of your BTT,
                      which you can send to other wallets.
                    </p>
                    <button large className="button-secondary">
                      Learn more
                    </button>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg estimate-section">
          <Container>
            <Row>
              <Col md="3">
                <h5>
                  <b>
                    Ready to roll?
                    <br />
                    Get a DCLO estimate.
                  </b>
                </h5>
              </Col>
              <Col md="7">
                <input
                  className="bp3-input .modifier bp3-fill bp3-large"
                  type="text"
                  placeholder="Playing time"
                  dir="auto"
                />
              </Col>
              <Col md="2">
                <button large className="button-secondary">
                  Get estimate
                </button>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg">
          <section className="section">
            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="7">
                  <div className="pl-md-5">
                    <b>SAFETY FIRST</b>
                    <h1>
                      How to work together for a
                      <br />
                      best gaming experience
                    </h1>
                    <p>
                      Every gaming session should feel safe and comfy to
                      everyone. A few simple ground rules can help make that
                      happen for all players and streamers.
                    </p>
                    <br />
                    <Row>
                      <Col md="5">
                        <button large className="button-highlight">
                          Learn about safety
                        </button>
                      </Col>
                      <Col md="5">
                        <b>Community guidelines →</b>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="mt-lg-5" md="4">
                  <Row>
                    <img
                      className="img-center img-fluid"
                      src={require("./assets/img/landing-match.png")}
                    />
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <section className="section">
            <Container>
              <Row className="justify-content-md-center">
                <Col md="6">
                  <b>JOIN OUR COMMUNITY</b>
                  <h1>
                    We help you play your
                    <br />
                    favourite game
                  </h1>
                  <br />
                  <p>
                    Affordable gaming solutions, effortless payments, and
                    getting all the right people to all the right places. So you
                    can have the best time.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="7">
                  <Card
                    interactive={true}
                    elevation={Elevation.ZERO}
                    style={{
                      background: "#a5e4ff",
                    }}
                  >
                    <h5>Join our mailing list</h5>
                    <input
                      className="bp3-input .modifier bp3-fill bp3-large"
                      type="text"
                      placeholder="Email"
                      dir="auto"
                    />
                    <button>Submit</button>
                    <p>
                      Discord / Telegram / Twitter / Youtube / Documentation
                    </p>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <img
          className="img-center img-fluid"
          src={require("./assets/img/footer.png")}
        />
      </div>
    </>
  );
}
