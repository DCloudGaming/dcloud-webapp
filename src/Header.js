import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Row, Col, Container } from "reactstrap";

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
            <Link to={!user && "/login"}>
              <div onClick={handleAuthenticaton} className="header__option">
                <span className="header__optionLineOne">
                  Hello {!user ? "Guest" : user.email}
                </span>
                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>

            <Link to="/orders">
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Link>

            <a href="https://dclosingapore.gitbook.io/dclo/">
              <div className="header__option">
                <span className="header__optionLineOne">Friendly</span>
                <span className="header__optionLineTwo">Introduction</span>
              </div>
            </a>

            <Link to="/checkout">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default Header;
