import React from "react";
import { Link } from "react-router-dom";
import { Col, Container } from "reactstrap";
import "./Header.css";
import MetamaskBox from "./MetamaskBox";
import { isMobile } from "react-device-detect";

function Header() {
  if (isMobile) {
    return (
      <div className="header">
        <Container className="d-flex align-items-center">
          <Link to="/">
            <img
              alt="logo"
              className="header__logo"
              src={require("./assets/img/logo.png")}
            />
          </Link>
        </Container>
      </div>
    );
  }
  return (
    <div className="header">
      <Container className="d-flex align-items-center">
        <Col>
          <Link to="/">
            <img
              alt="logo"
              className="header__logo"
              src={require("./assets/img/logo.png")}
            />
          </Link>
        </Col>
        {/* <Col md={5}>
          <div className="header__search">
            <input className="header__searchInput" type="text" />
          </div>
        </Col> */}
        <Col md={7}>
          <div className="header__nav">
            <a href="/" target="_blank">
              <div className="header__option">
                <span className="header__optionLineOne">What is</span>
                <span className="header__optionLineTwo">Declo</span>
              </div>
            </a>

            {/* <Link to="/dashboard">
              <div className="header__option">
                <span className="header__optionLineOne">.</span>
                <span className="header__optionLineTwo">My Profile</span>
              </div>
            </Link> */}

            <a href="/glance" target="_blank">
              <div className="header__option">
                <span className="header__optionLineOne">Launch</span>
                <span className="header__optionLineTwo">App</span>
              </div>
            </a>
            <a href="/vote" target="_blank">
              <div className="header__option">
                <span className="header__optionLineOne">Vote</span>
                <span className="header__optionLineTwo">Games</span>
              </div>
            </a>

            {/* <Link to="/streams">
              <div className="header__option">
                <span className="header__optionLineOne">.</span>
                <span className="header__optionLineTwo">Discover</span>
              </div>
            </Link>

            <Link to="/user/update">
              <div className="header__option">
                <span className="header__optionLineOne">.</span>
                <span className="header__optionLineTwo">Host Update</span>
              </div>
            </Link>

            <Link to="/admin/update">
              <div className="header__option">
                <span className="header__optionLineOne">.</span>
                <span className="header__optionLineTwo">Admin Update</span>
              </div>
            </Link> */}
            <a href="https://dclosingapore.gitbook.io/dclo/" target="_blank">
              <div className="header__option">
                <span className="header__optionLineOne">Read</span>
                <span className="header__optionLineTwo">Docs</span>
              </div>
            </a>
            <a
              href="https://dclosingapore.gitbook.io/dclo/library/roadmap-1"
              target="_blank"
            >
              <div className="header__option">
                <span className="header__optionLineOne">About</span>
                <span className="header__optionLineTwo">Team</span>
              </div>
            </a>
            <MetamaskBox />
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default Header;
