import { H1, H5, H6, Icon, IconSize, Text } from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "reactstrap";
import { getUserProfile, retrieveAccount } from "./api/user";
import "./UserDashboard.css";

function UserDashboard() {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUserWrapper = async () => {
      const account = retrieveAccount();
      const resp = await getUserProfile(account);
      console.log("Dashboard");
      console.log(resp);
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
          <H6>Wallet {user.wallet_address}</H6>
          <Row className="mt-5 mb-5 dashboard__balance-section">
            <img
              alt="piggy"
              style={{
                width: "80%",
                borderRadius: "2rem",
                zIndex: -1,
              }}
              src={require("./assets/img/piggybank.png")}
            />
            <div className="dashboard__balance-amount">
              <H5>Current Unreleased Balance</H5>
              <H1>δ {user.cur_unreleased_balance}</H1>
            </div>
          </Row>
          <Table borderless>
            <thead>
              <tr>
                <th>ID</th>
                <th>Reward ($)</th>
                <th>App Name</th>
                <th>Max Duration (s)</th>
                <th>Total Duration (s)</th>
                <th>Stream Status (s)</th>
              </tr>
            </thead>
            <tbody>
              {user.host_sessions.map((trx) => (
                <tr>
                  {" "}
                  <td>{trx.ID}</td>
                  <td>{trx.accum_charge}</td>
                  <td>{trx.app_name}</td>
                  <td>{trx.max_duration}</td>
                  <td>{trx.total_duration}</td>
                  <td>{trx.stream_status}</td>
                  {/* {new Date(trx.createTime).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })} */}
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
                  {/* {new Date(user.createTime).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })} */}
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
                <Text>Streamed {user.host_sessions.length} sessions</Text>
              </Text>
            </Col>
          </Row>
          <H5 className="mt-5">Machine</H5>
          <Row className="mb-3 mt-4">
            <Col md="1">
              <Icon
                icon="desktop"
                size={IconSize.LARGE}
                className="brand-color"
              />
            </Col>
            <Col md="11">
              <Text>{user.machine}</Text>
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
            {/* <Col md="11">
              <Text>
                <Text>{user.streamer.hardware.avgConnection}</Text>
              </Text>
            </Col> */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default UserDashboard;
