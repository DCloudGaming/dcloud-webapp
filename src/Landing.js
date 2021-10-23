import {
  Card,
  Elevation,
  H1,
  H5,
  Icon,
  IconSize,
  Menu,
  MenuItem,
  Text,
} from "@blueprintjs/core";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import sample from "./assets/video/pov-playing-game.mp4";
import topFirst from "./assets/video/landing-top-first.mp4";
import topSecond from "./assets/video/landing-top-second.mp4";
import topThird from "./assets/video/landing-top-third.mp4";

import "./Landing.css";

export default function LandingPage() {
  const streamerFooter = [
    "Become a Streamer",
    "Earnings",
    "Cities",
    "Help",
    "Safety",
    "Application Requirements",
    "Bonus",
    "DCLO Rewards",
    "Hub",
  ];
  const playerFooter = [
    "Become a Player",
    "Earnings",
    "Cities",
    "Help",
    "Safety",
    "Application Requirements",
    "Bonus",
    "DCLO Rewards",
    "Hub",
    "Gift Cards",
    "Something",
    "Donate",
  ];
  const dcloFooter = [
    "Careers",
    "Developers",
    "Press",
    "Investor Relations",
    "Media",
    "Business",
  ];

  return (
    <>
      <div>
        <section className="section section-lg">
          <section className="top-section">
            {/* TODO */}
            {/* <img
              alt="img"
              className="img-landing-top"
              src={require("./assets/img/positions.png")}
            /> */}
            <img
              alt="img"
              className="img-landing-top"
              src={require("./assets/img/cyborg-flying.png")}
            />
            <Container className="top-section">
              <Row>
                <Col md="6">
                  <H1>
                    <b>Decentralized Cloud Gaming</b>
                  </H1>
                </Col>
              </Row>
              <Row className="mb-4 mt-4">
                <Col md="6">
                  <Text className="bp3-running-text">
                    <b>Declo</b>, through the use of <b>DCLO tokens</b>, is the
                    leading network that connects high-productivity server
                    providers (streamers) and anyone who wants to play
                    graphically demanding games on their regular devices
                    (gamers).
                  </Text>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col md="4">
                  <H5>For gamers</H5>
                  <Text className="bp3-running-text">
                    Play the best collection of AAA, Indie and Retro games
                    without the need to purchase fancy hardware. <br />
                    Pay-as-you-use. Cancel anytime. No ads. No in-app purchase.
                  </Text>
                </Col>
                <Col md="1" />
                <Col md="4">
                  <H5>For streamers</H5>
                  <Text className="bp3-running-text">
                    Put your game library and spare hardware to productive use.{" "}
                    <br />
                    Earn profit. Multiply joy.
                  </Text>
                </Col>
              </Row>
              <Row className="mt-3 mb-4">
                <button large className="launch-app-button">
                  Launch App
                </button>
              </Row>
              <Row className="mt-10">
                <Col md="4" className="flex-center">
                  <div className="video-demo">
                    <video autoPlay loop muted>
                      <source src={topFirst} type="video/mp4" />
                    </video>
                  </div>
                </Col>
                <Col md="4" className="flex-center">
                  <div className="video-demo">
                    <video autoPlay loop muted>
                      <source src={topSecond} type="video/mp4" />
                    </video>
                  </div>
                </Col>
                <Col md="4" className="flex-center">
                  <div className="video-demo">
                    <video autoPlay loop muted>
                      <source src={topThird} type="video/mp4" />
                    </video>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* TODO */}
          {/* <section className="section mb-5">
            <Row>
              <img
                alt="img"
                className="img-center img-fluid"
                src={require("./assets/img/demo.png")}
              />
            </Row>
          </section> */}
        </section>

        <section className="section section-lg">
          <section className="section">
            <Container>
              <Row className="row-grid justify-content-between mb-5">
                <Col className="mt-lg-5" md="4">
                  <Row>
                    <img
                      alt="img"
                      className="img-center img-fluid"
                      src={require("./assets/img/landing-earn.png")}
                    />
                  </Row>
                </Col>
                <Col md="7">
                  <div className="pl-md-5">
                    <Row className="mb-2">
                      <b>STREAM WITH DCLO</b>
                      <br />
                      <H1>
                        Set your own hours.
                        <br />
                        Earn on your own terms.
                      </H1>
                    </Row>
                    <Row className="mb-5">
                      <Text>
                        Maybe you’re preparing for work. Or keeping your
                        computer idle to spend more time with your family. It’s
                        a great time to rent the machine, connect with your
                        community, and earn a little extra cash.
                      </Text>
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
                        <h5>Reliable earnings</h5>
                        <Text>
                          Make money, keep your tips, and use in-app tools to
                          help maximize your earnings.
                        </Text>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md="1">
                        <Icon
                          icon="time"
                          size={IconSize.LARGE}
                          className="brand-color"
                        />
                      </Col>
                      <Col md="11">
                        <h5>A flexible schedule</h5>
                        <Text>
                          Be your own boss and drive whenever it works for you.
                        </Text>
                      </Col>
                    </Row>
                    <Row className="mb-5">
                      <Col md="1">
                        <Icon
                          icon="heart"
                          size={IconSize.LARGE}
                          className="brand-color"
                        />
                      </Col>
                      <Col md="11">
                        <h5>Get paid promptly</h5>
                        <Text>
                          Cash out your earnings whenever you want with Dcloud
                          token.
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <button large className="button-highlight">
                          Apply to stream
                        </button>
                      </Col>
                      <Col md="5">
                        <button large className="button-minimal">
                          How stream pay works →
                        </button>
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
              <Row className="row-grid justify-content-between mb-5">
                <Col md="7">
                  {/* TODO: switch different here */}
                  <Row className="mb-2">
                    <b>PLAY WITH DCLO</b>
                    <H1>
                      Ready set play
                      <br />
                      in a few clicks
                    </H1>
                  </Row>
                  <Row className="mb-5">
                    <Text>
                      Whether you’re following your fantasy or your competitive
                      tournament, we’ll get you the right hardware for your best
                      gaming experience.
                    </Text>
                  </Row>
                  <Row className="mb-4">
                    <Col md="1">
                      <Icon
                        icon="applications"
                        size={IconSize.LARGE}
                        className="brand-color"
                      />
                    </Col>
                    <Col md="11">
                      <h5>Get a reliable match in minutes</h5>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col md="1">
                      <Icon
                        icon="desktop"
                        size={IconSize.LARGE}
                        className="brand-color"
                      />
                    </Col>
                    <Col md="11">
                      <h5>Know that your machine can handle any game</h5>
                    </Col>
                  </Row>
                  <Row className="mb-5">
                    <Col md="1">
                      <Icon
                        icon="timeline-events"
                        size={IconSize.LARGE}
                        className="brand-color"
                      />
                    </Col>
                    <Col md="11">
                      <h5>Schedule your playtime in advance</h5>
                    </Col>
                  </Row>
                  <Row className="mb-5">
                    <Col md="3">
                      <button large className="button-highlight">
                        Play now
                      </button>
                    </Col>
                    <Col md="8">
                      <button large className="button-minimal">
                        See frequently asked question →
                      </button>
                    </Col>
                  </Row>
                </Col>
                <Col md="1"></Col>
                <Col md="4">
                  <Row>
                    <img
                      alt="img"
                      className="img-center"
                      style={{
                        height: "500px",
                        width: "300px",
                      }}
                      src={require("./assets/img/landing-player-first.png")}
                    />
                  </Row>
                </Col>
              </Row>
              <Row className="mt-10 mb-5">
                <b>PAY WITH DCLO TOKEN</b>
                <Row className="mb-2">
                  <H1>Pay Earn Stake. Go bananas.</H1>
                </Row>
                <Row>
                  <Text className="bp3-running-text">
                    We’ve got options to get you pay smoothly. BTT is a TRC-10
                    utility token based on the blockchain that powers features
                    of the most popular decentralized protocols and applications
                    in the world. DApps powered by BTT include BitTorrent Speed,
                    BitTorrent File System, DLive, and others in the pipeline.
                  </Text>
                </Row>
              </Row>
              <Row>
                <Col>
                  <Card interactive={true} elevation={Elevation.ZERO}>
                    <h5>
                      <b>First, enable your wallet</b>
                    </h5>
                    <img
                      alt="img"
                      className="img-center img-fluid"
                      src={require("./assets/img/typing.png")}
                      style={{
                        maxHeight: "150px",
                        margin: "50px 50px",
                      }}
                    />
                    <Text className="bp3-running-text mb-5">
                      When downloading or upgrading to a new version of
                      BitTorrent or µTorrent Web, or µTorrent Classic, the
                      torrent software will be enabled with a wallet and BTT
                      token balance.
                    </Text>
                    <button large className="button-secondary">
                      Connect wallet
                    </button>
                  </Card>
                </Col>
                <Col>
                  <Card interactive={true} elevation={Elevation.ZERO}>
                    <h5>
                      <b>Then, enjoy faster stream speed</b>
                    </h5>
                    <img
                      alt="img"
                      className="img-center img-fluid"
                      src={require("./assets/img/fly.png")}
                      style={{
                        maxHeight: "150px",
                        margin: "50px 55px",
                      }}
                    />
                    <Text className="bp3-running-text mb-5">
                      When downloading torrents, BitTorrent Speed automatically
                      bids BitTorrent (BTT) to other users for faster speeds.
                      Just use the torrent program like normal, there is nothing
                      else you need to learn or do.
                    </Text>
                    <button large className="button-secondary">
                      See reviews
                    </button>
                  </Card>
                </Col>
                <Col>
                  <Card interactive={true} elevation={Elevation.ZERO}>
                    <h5>
                      <b>Best part, earn DCLO.</b>
                    </h5>
                    <img
                      alt="img"
                      className="img-center img-fluid"
                      src={require("./assets/img/coin.png")}
                      style={{
                        maxHeight: "150px",
                        margin: "50px 100px",
                      }}
                    />
                    <Text className="bp3-running-text mb-5">
                      When a torrent file finishes downloading, you can
                      automatically earn BitTorrent (BTT) by seeding. The
                      integrated wallet allows for secure storage of your BTT,
                      which you can send to other wallets.
                    </Text>
                    <button large className="button-secondary">
                      Airdrop programs
                    </button>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-5 mb-5">
                <Col md="2">
                  <button large className="button-highlight">
                    Learn more
                  </button>
                </Col>
                <Col md="5">
                  <button large className="button-minimal">
                    Exchange & Wallets →
                  </button>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg estimate-section">
          <Container>
            <Row className="mb-5">
              <Col md="3">
                <h5>
                  <b>
                    Ready to roll?
                    <br />
                    Get an estimate.
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
                <button large className="button-highlight">
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
                <Col md="6">
                  <div className="pl-md-5">
                    <b>PRIVACY FIRST</b>
                    <Row className="mb-2">
                      <H1>
                        How to collaborate for a
                        <br />
                        fuss-free gaming experience
                      </H1>
                    </Row>
                    <Text className="bp3-running-text mb-5">
                      Every gaming session should feel safe and comfy to
                      everyone. A few simple ground rules can help make that
                      happen for all players and streamers.
                    </Text>
                    <br />
                    <Row className="mb-5">
                      <Col md="5">
                        <button large className="button-highlight">
                          Learn about privacy
                        </button>
                      </Col>
                      <Col md="6">
                        <button large className="button-minimal">
                          Community guidelines →
                        </button>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md="5">
                  <Row>
                    <img
                      alt="img"
                      className="img-center img-fluid"
                      src={require("./assets/img/landing-match.png")}
                    />
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg mt-10">
          <section className="section">
            <Container>
              <Row className="justify-content-md-center">
                <Col md="12">
                  <b>JOIN OUR COMMUNITY</b>
                  <Row className="mb-2">
                    <H1>A place to enjoy your favourite games</H1>
                  </Row>
                  <Text className="bp3-running-text mb-5">
                    Affordable gaming solution, effortless payment, and getting
                    all the right people to all the right places. So you can
                    have the best time.
                  </Text>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md="6">
                  <img
                    alt="img"
                    className="img-center"
                    style={{
                      height: "350px",
                      width: "500px",
                    }}
                    src={require("./assets/img/landing-community.png")}
                  />
                </Col>
                <Col md="6">
                  <Card
                    interactive={true}
                    elevation={Elevation.ZERO}
                    style={{
                      background: "#a5e4ff",
                    }}
                  >
                    <Row className="mb-4">
                      <h5>Join our mailing list</h5>
                    </Row>
                    <input
                      className="bp3-input .modifier bp3-fill bp3-large mb-3"
                      type="text"
                      placeholder="Email"
                      dir="auto"
                    />
                    <input
                      className="bp3-input .modifier bp3-fill bp3-large mb-4"
                      type="text"
                      placeholder="Another field to fill up space"
                      dir="auto"
                    />
                    <Row className="mt-4">
                      <Col md="4">
                        <button large className="button-highlight">
                          Submit
                        </button>
                      </Col>
                      <Col md="6">
                        <button large className="button-minimal">
                          Do something else →
                        </button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg mt-10">
          <section className="section footer">
            <Row className="justify-content-md-center">
              <img
                alt="img"
                className="img-center img-fluid"
                src={require("./assets/img/landing-footer.png")}
              />
            </Row>

            <Container>
              <Row className="pb-5">
                <Col md={3}>
                  <Menu className="transparent">
                    <br />
                    <H5>STREAMER</H5>
                    {streamerFooter.map((link) => (
                      <MenuItem text={link} />
                    ))}
                  </Menu>
                </Col>
                <Col md={3}>
                  <Menu className="transparent">
                    <br />
                    <H5>PLAYER</H5>
                    {playerFooter.map((link) => (
                      <MenuItem text={link} />
                    ))}
                  </Menu>
                </Col>
                <Col md={3}>
                  <Menu className="transparent">
                    <br />
                    <H5>Declo</H5>
                    {dcloFooter.map((link) => (
                      <MenuItem text={link} />
                    ))}
                  </Menu>
                </Col>
                <Col md={3}>
                  <button class="button-highlight mt-5 mb-4 full-width">
                    DCLO streamer app
                  </button>
                  <button class="button-highlight mb-5 full-width">
                    DCLO player app
                  </button>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
      </div>
    </>
  );
}
