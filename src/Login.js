import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
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
  H1,
  H5,
  Text,
  Menu,
  MenuItem,
} from "@blueprintjs/core";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Container>
      <Row className="mt-10">
        <Col md="3"></Col>
        <Col md="6">
          <Card
            interactive={true}
            elevation={Elevation.ZERO}
            style={{
              background: "#a5e4ff",
            }}
          >
            <Row className="mb-5">
              <img
                className="login__logo"
                src={require("./assets/img/logo.png")}
              />
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
              placeholder="Password"
              dir="auto"
            />
            <Row className="mt-4 mb-5">
              <Col md="5">
                <button large className="button-highlight full-width">
                  Login
                </button>
              </Col>
              <Col md="2" />
              <Col md="5">
                <button large className="button-minimal">
                  Create an account →
                </button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md="3"></Col>
      </Row>
    </Container>
  );
}

export default Login;
