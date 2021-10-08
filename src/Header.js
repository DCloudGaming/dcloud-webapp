import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Row, Col, Container } from "reactstrap";
import MetamaskBox from "./MetamaskBox";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Container className="d-flex align-items-center">
        <Col>
          <Link to="/">
            <img
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
