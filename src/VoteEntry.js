import { H3, H5, Text } from "@blueprintjs/core";
import React from "react";
import { Button, Col, Row } from "reactstrap";
import { voteApp } from "./api/listing";
import "./VoteEntry.css";

function VoteEntry({ app_name, vote_count, publisher }) {
  const vote = async () => {
    await voteApp(app_name);
    // TODO: Fix this
    window.location.reload();
    // forceUpdate();
  };

  return (
    <Col md={6} className="align-items-md-center">
      <div
        style={{
          background: "#2b2d95",
          borderRadius: "2rem 2rem 1.5rem 1.5rem",
          width: "90%",
          boxShadow: "0 0.625rem 3.5rem 0 rgba(198, 203, 222, .45)",
        }}
      >
        <div
          style={{
            background: "white",
            height: "8rem",
            borderRadius: "1rem 1rem 1.5rem 1.5rem",
          }}
        >
          <Row>
            <Col md={5}>
              <img
                style={{
                  borderRadius: "1rem",
                  objectFit: "cover",
                  width: "150px",
                  height: "150px",
                  margin: "1.75rem 0rem 0rem 1rem",
                }}
                src={
                  "https://venturebeat.com/wp-content/uploads/2020/05/Garena-Free-Fire.jpg?w=1200&strip=all"
                }
              />
            </Col>
            <Col
              md={6}
              className="d-flex flex-column justify-content-md-center"
            >
              <H3>{app_name}</H3>
              <Text>{publisher}</Text>
              <div style={{ height: "2rem" }}></div>
            </Col>
          </Row>
        </div>
        <Row className="pt-3 pb-4 d-flex align-items-md-center">
          <Col md={5} />
          <Col md={4}>
            <H5 style={{ color: "white" }}>{vote_count} votes</H5>
          </Col>
          <Col md={3}>
            <Button
              className="ActionModal_action-button"
              style={{ marginLeft: "-0.5rem" }}
              onClick={vote}
            >
              <H5>
                <b>Vote</b>
              </H5>
            </Button>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default VoteEntry;
