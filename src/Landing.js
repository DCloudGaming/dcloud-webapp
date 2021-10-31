import {
  Checkbox,
  Divider,
  H1,
  H5,
  Icon,
  IconSize,
  Text,
} from "@blueprintjs/core";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { Col, Container, Row } from "reactstrap";
import topFirst from "./assets/video/landing-top-first.mp4";
import topSecond from "./assets/video/landing-top-second.mp4";
import topThird from "./assets/video/landing-top-third.mp4";
import ActionModal from "./components/ActionModal";
import PayCard from "./components/Paycard";
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
        <section>
          <section className="top-section">
            {/* TODO */}
            {/* <img
              alt="img"
              className="img-landing-top"
              src={require("./assets/img/positions.png")}
            /> */}
            <BrowserView>
              <img
                alt="img"
                className="img-landing-top"
                src={require("./assets/img/cyborg-flying.png")}
              />
            </BrowserView>
            <Container className="top-section">
              <div id="badge-landing-top">Ready to join us?</div>
              <Row>
                <Col md="6" xs={12}>
                  <H1>
                    <b>Decentralized Cloud Gaming</b>
                  </H1>
                </Col>
              </Row>
              <Row className="mb-4 mt-4">
                <Col md="6" xs={12}>
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
                <Col md="4" xs={12}>
                  <H5>For streamers</H5>
                  <Text className="bp3-running-text">
                    Put your game library and spare hardware to productive use.{" "}
                    <br />
                    Earn profit. Multiply joy.
                  </Text>
                </Col>
                <Col md="4" xs={12}>
                  <MobileView>
                    <br />
                  </MobileView>
                  <H5>For gamers</H5>
                  <Text className="bp3-running-text">
                    Play the best collection of AAA, Indie and Retro games
                    without the need to purchase fancy hardware. <br />
                    Pay-as-you-use. Cancel anytime. No ads. No in-app purchase.
                  </Text>
                </Col>
              </Row>
              <Row className="mt-3 mb-4">
                <Link target="_blank" to="/glance">
                  <button large className="launch-app-button">
                    Launch App
                  </button>
                </Link>
              </Row>
              <BrowserView>
                <Row className="mt-10">
                  <Col md="3" className="flex-center">
                    <div className="video-demo">
                      <video autoPlay loop muted>
                        <source src={topFirst} type="video/mp4" />
                      </video>
                    </div>
                  </Col>
                  <Col md="3" className="flex-center">
                    <div className="video-demo">
                      <video autoPlay loop muted>
                        <source src={topSecond} type="video/mp4" />
                      </video>
                    </div>
                  </Col>
                  <Col md="3" className="flex-center">
                    <div className="video-demo">
                      <video autoPlay loop muted>
                        <source src={topThird} type="video/mp4" />
                      </video>
                    </div>
                  </Col>
                </Row>
              </BrowserView>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <section className="section">
            <Container>
              <Row className="row-grid justify-content-between mb-5">
                <Col className="mt-lg-5 d-none d-sm-block" md="4">
                  <Row>
                    <img
                      alt="img"
                      className="img-center img-fluid"
                      src={require("./assets/img/landing-earn.png")}
                    />
                  </Row>
                </Col>
                <Col md="7" xs={12}>
                  <div className="pl-md-5">
                    <Row className="mb-2">
                      <b>STREAM WITH DCLO</b>
                      <br />
                      <br />
                      <H1>
                        Running GPUs at full capacity,
                        <br />
                        safely and profitably
                      </H1>
                    </Row>
                    <Row className="mb-5">
                      <Text>
                        Let's admit, GPU is not a small investment and leaving
                        the hardware idly sitting day in and day out is not the
                        best approach to utilizing that spending. How about
                        renting out the GPUs to earn extra cash? Join the DCLO
                        community.
                      </Text>
                    </Row>
                    <Row className="mb-3">
                      <Col md="1" xs={2}>
                        <Icon
                          icon="time"
                          size={IconSize.LARGE}
                          className="brand-color"
                        />
                      </Col>
                      <Col md="11" xs={10}>
                        <h5>A flexible schedule</h5>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col md="1" xs={2}>
                        <Icon
                          icon="bank-account"
                          size={IconSize.LARGE}
                          className="brand-color"
                        />
                      </Col>
                      <Col md="11" xs={10}>
                        <h5>
                          Use DCLO supporting tools to strategize earnings
                        </h5>
                      </Col>
                    </Row>
                    <Row className="mb-5">
                      <Col md="1" xs={2}>
                        <Icon
                          icon="heart"
                          size={IconSize.LARGE}
                          className="brand-color"
                        />
                      </Col>
                      <Col md="11" xs={10}>
                        <h5>Get paid promptly</h5>
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col md="4" xs={6}>
                        <Link target="_blank" to="/glance">
                          <button large className="button-highlight">
                            Start playing
                          </button>
                        </Link>
                      </Col>
                      <Col md="5" xs={6}>
                        <a
                          href="https://dclosingapore.gitbook.io/dclo/"
                          target="_blank"
                        >
                          <button className="button-minimal">
                            How stream pay works →
                          </button>
                        </a>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section play-section">
          <section className="section">
            <Container>
              <Row>
                <Col md="7">
                  <Row className="row-grid justify-content-between">
                    {/* TODO: switch different here */}
                    <Row className="mb-2">
                      <b>PLAY WITH DCLO</b>
                      <br />
                      <br />
                      <H1>Winning knows no boundaries</H1>
                    </Row>
                    <Row className="mb-5">
                      <Text>
                        Whether it's League of Legends, Grand Theft Auto or
                        Counter Strike, enjoy high quality access to the games
                        you love with just your laptop and a working internet
                        connection. Low latency. Sharp resolution. At your own
                        convenience.
                      </Text>
                    </Row>
                    <Row className="mb-4">
                      <Col md="1" xs={2}>
                        <Icon
                          icon="applications"
                          size={IconSize.LARGE}
                          className="brand-color"
                        />
                      </Col>
                      <Col md="11" xs={10}>
                        <h5>Match instantly</h5>
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col md="1" xs={2}>
                        <Icon
                          icon="desktop"
                          size={IconSize.LARGE}
                          className="brand-color"
                        />
                      </Col>
                      <Col md="11" xs={10}>
                        <h5>Rich game library</h5>
                      </Col>
                    </Row>
                    <Row className="mb-5">
                      <Col md="1" xs={2}>
                        <Icon
                          icon="timeline-events"
                          size={IconSize.LARGE}
                          className="brand-color"
                        />
                      </Col>
                      <Col md="11" xs={10}>
                        <h5>Schedule ahead</h5>
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col md="4" xs={7}>
                        <Link target="_blank" to="/glance">
                          <button large className="button-highlight">
                            Start streaming
                          </button>
                        </Link>
                      </Col>
                      <Col md="5" xs={5}>
                        <a
                          href="https://dclosingapore.gitbook.io/dclo/"
                          target="_blank"
                        >
                          <button large className="button-minimal">
                            See FAQs
                          </button>
                        </a>
                      </Col>
                    </Row>
                  </Row>
                </Col>
                <Col md="5" xs={12}>
                  <Row
                    style={{
                      maxHeight: "500px",
                    }}
                  >
                    <img
                      alt="img"
                      className="img-center"
                      style={{
                        maxWidth: "600px",
                        position: "relative",
                        bottom: "-8rem",
                      }}
                      src={require("./assets/img/landing-player-first.png")}
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
              <Row className="mt-10 mb-5">
                <b>INTRODUCING DCLO TOKEN</b>
                <br />
                <br />
                <Row className="mb-5">
                  <H1>Gaming, meet payment</H1>
                </Row>
                <Row>
                  <Col md={6} xs={12}>
                    <PayCard role="Streamer">
                      <H5 className="mt-3 mb-4">STREAMER CHECKLIST</H5>
                      <Checkbox>Connect your Metamask wallet</Checkbox>
                      <Checkbox>Install Declo desktop app</Checkbox>
                      <Checkbox>List your games and schedule</Checkbox>
                      <Checkbox>
                        Check DCLO tokens earned after streaming session
                      </Checkbox>
                      <H5 className="mt-3 mb-5">Earn profit. Multiply joy.</H5>
                      <BrowserView>
                        <Divider />
                        <H5 className="mt-5 mb-3">
                          <b>Bonus</b> Get a Declo Virtual Card
                        </H5>
                      </BrowserView>
                    </PayCard>
                  </Col>
                  <Col md={6} xs={12}>
                    <PayCard role="Player">
                      <H5 className="mt-3 mb-4">GAMER CHECKLIST</H5>
                      <Checkbox>Connect your Metamask wallet</Checkbox>
                      <Checkbox>High-speed internet connection</Checkbox>
                      <Checkbox>Add DCLO tokens to your wallet</Checkbox>
                      <Checkbox>
                        Select the titles you want to play on Declo web app.
                      </Checkbox>
                      <H5 className="mt-3 mb-5">Enjoy the game!</H5>
                      <BrowserView>
                        <Divider />
                        <H5 className="mt-5 mb-3 d-none d-sm-block">
                          <b>Bonus</b> Get a Declo Virtual Card
                        </H5>
                      </BrowserView>
                    </PayCard>
                  </Col>
                </Row>
              </Row>
              {/* TODO */}
              {/* <Row>
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
              </Row> */}
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <Container>
            <Row className="mb-5 mt-10">
              <img alt="" src={`/img/landing/charts/howitworks.png`} />
            </Row>
            <Row>
              <a
                target="_blank"
                href="https://dclosingapore.gitbook.io/dclo/getting-started/network-flow"
              >
                <button large className="button-highlight">
                  Read user guide
                </button>
              </a>
            </Row>
          </Container>
        </section>
        {/* TODO */}
        {/* <section className="section section-lg estimate-section">
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
        </section> */}
        {/* <section className="section section-lg">
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
        </section> */}
        <section className="section mt-10">
          <section className="section">
            <Container>
              <Row style={{ maxHeight: "600px", overflow: "hidden" }}>
                <Col md="6">
                  <Row>
                    <b>JOIN OUR COMMUNITY</b>
                    <br /> <br />
                    <Row className="mb-2">
                      <H1>Good things are coming</H1>
                    </Row>
                    <Text className="bp3-running-text mb-5">
                      Affordable gaming solution, effortless payment, and
                      getting all the right people to all the right places. So
                      you can have the best time.
                    </Text>
                  </Row>
                  <Row className="mb-5">
                    <Col md="2" xs="2">
                      <SocialIcon
                        url="https://twitter.com/dclodeclo"
                        network="twitter"
                      />
                    </Col>
                    <Col md="2" xs="2">
                      <SocialIcon
                        url="https://discord.com/invite/WvyXAF4j"
                        network="discord"
                      />
                    </Col>
                    <Col md="2" xs="2">
                      <SocialIcon
                        url="https://t.me/dclodecloChannel"
                        network="telegram"
                      />
                    </Col>
                    <Col md="2" xs="2">
                      <SocialIcon
                        url="https://t.me/dclodeclo"
                        network="telegram"
                      />
                    </Col>
                    <Col md="2" xs="2">
                      <SocialIcon url="https://declo.substack.com/p/coming-soon?showWelcome=true" />
                    </Col>
                    {/* <Col md="6">
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
                    </Col> */}
                  </Row>
                  <MobileView>
                    <br />
                  </MobileView>
                  <BrowserView>
                    <ActionModal
                      desc="You scrolled till the end. Why not take a look at our app?"
                      action="TRY FOR FREE"
                      className="mb-11"
                    />
                  </BrowserView>
                </Col>
                <Col md="1" />
                <Col md="5">
                  <img
                    alt="img"
                    className="img-landing-footer d-none d-sm-block"
                    src={require("./assets/img/cyborg-hatching.png")}
                  />
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        {/* TODO */}
        {/* <section className="section section-lg mt-10">
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
        </section> */}
        <div id="footer">
          <Container>
            <H5>© Copyright 2021, Declo. All Rights Reserved.</H5>
          </Container>
        </div>
      </div>
    </>
  );
}
