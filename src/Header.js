import React from "react";
import { Link } from "react-router-dom";
import { Col, Container } from "reactstrap";
import "./Header.css";
import MetamaskBox from "./MetamaskBox";

function Header() {
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
        <Col md={5}>
          <div className="header__search">
            <input className="header__searchInput" type="text" />
          </div>
        </Col>
        <Col md={5}>
          <div className="header__nav">
            <MetamaskBox />

            <Link to="/dashboard">
              <div className="header__option">
                <span className="header__optionLineOne">.</span>
                <span className="header__optionLineTwo">My Profile</span>
              </div>
            </Link>

            <Link to="/vote">
              <div className="header__option">
                <span className="header__optionLineOne">.</span>
                <span className="header__optionLineTwo">Vote</span>
              </div>
            </Link>

            <Link to="/streams">
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
            </Link>

            <Link to="/landing">
              <div className="header__option">
                <span className="header__optionLineOne">.</span>
                <span className="header__optionLineTwo">Landing</span>
              </div>
            </Link>

            <a href="https://dclosingapore.gitbook.io/dclo/" target="_blank">
              <div className="header__option">
                <span className="header__optionLineOne">.</span>
                <span className="header__optionLineTwo">Docs</span>
              </div>
            </a>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default Header;
