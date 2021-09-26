import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import {
  Card,
  Elevation,
  Icon,
  IconSize,
  H1,
  H2,
  H4,
  H5,
  H6,
  Text,
  Menu,
  MenuItem,
} from "@blueprintjs/core";
import "./UserDashboard.css";
import { getUser } from "./api/user";

function UserDashboard() {
  const [user, setUser] = useState();
  const userId = 1;

  useEffect(() => {
    const getUserWrapper = async () => {
      const resp = await getUser(userId);
      if (!resp.error) setUser(resp.data);
    };

    getUserWrapper();
  }, []);

  if (!user) {
    return <p>Loading</p>;
  }

  return (
    <Container>
      <Row>
        <Col md={7}>
          <H1>{user.name}</H1>
          <H6>Wallet {user.wallet.address}</H6>
          <Row className="mt-5 mb-5 dashboard__balance-section">
            <img
              style={{
                width: "80%",
                borderRadius: "2rem",
                zIndex: -1,
              }}
              src={require("./assets/img/piggybank.png")}
            />
            <div className="dashboard__balance-amount">
              <H5>Balance</H5>
              <H1>δ {user.wallet.balance}</H1>
            </div>
          </Row>
          <Table borderless>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {user.wallet.transactions.map((trx) => (
                <tr>
                  {" "}
                  <td>{trx.type}</td>
                  <td>δ {trx.amount}</td>
                  {new Date(trx.createTime).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={4}>
          <H5>About</H5>
          <Row className="mb-3 mt-4">
            <Col md="1">
              <Icon
                icon="area-of-interest"
                size={IconSize.LARGE}
                className="brand-color"
              />
            </Col>
            <Col md="11">
              <Text>Lives in {user.location}</Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md="1">
              <Icon
                icon="calendar"
                size={IconSize.LARGE}
                className="brand-color"
              />
            </Col>
            <Col md="11">
              <Text>
                <Text>
                  Joined in{" "}
                  {new Date(user.createTime).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
              </Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md="1">
              <Icon icon="play" size={IconSize.LARGE} className="brand-color" />
            </Col>
            <Col md="11">
              <Text>
                <Text>Streamed {user.streamer.sessions} sessions</Text>
              </Text>
            </Col>
          </Row>
          <H5 className="mt-5">Hardware</H5>
          <Row className="mb-3 mt-4">
            <Col md="1">
              <Icon
                icon="desktop"
                size={IconSize.LARGE}
                className="brand-color"
              />
            </Col>
            <Col md="11">
              <Text>{user.streamer.hardware.hardware}</Text>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md="1">
              <Icon
                icon="exchange"
                size={IconSize.LARGE}
                className="brand-color"
              />
            </Col>
            <Col md="11">
              <Text>
                <Text>{user.streamer.hardware.avgConnection}</Text>
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default UserDashboard;
