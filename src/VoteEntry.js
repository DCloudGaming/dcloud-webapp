import { H3, H4, H5, Text, Icon, IconSize } from "@blueprintjs/core";
import React from "react";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { Button, Col, Row } from "reactstrap";
import { voteApp } from "./api/listing";
import "./VoteEntry.css";

function VoteEntry({ app_name, vote_count, publisher, image_url, voted }) {
  const vote = async () => {
    const resp = await voteApp(app_name);
    if (resp["Error"] && resp["Code"] == 401) {
      alert("Please connect your Metamask wallet to vote.");
    }
    // TODO: Fix this
    window.location.reload();
    // forceUpdate();
  };

  return (
    <Col md={6} className={`align-items-md-center ${isMobile && "mb-5"}`}>
      <div
        style={{
          background: "#d2effc",
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
            <Col md={5} xs={7}>
              <img
                style={{
                  borderRadius: "1rem",
                  objectFit: "cover",
                  width: "85%",
                  aspectRatio: "1/1",
                  margin: "1.75rem 0rem 0rem 1rem",
                }}
                src={image_url}
              />
            </Col>
            <Col
              md={6}
              xs={5}
              className={`d-flex flex-column justify-content-md-center ${
                isMobile && "pt-4"
              }`}
            >
              <H3>{app_name}</H3>
              <Text>{publisher}</Text>
              <div style={{ height: "2rem" }}></div>
            </Col>
          </Row>
        </div>
        <BrowserView>
          <Row className="pt-3 pb-4 d-flex align-items-md-center">
            <Col md={5} sm={1} />
            <Col md={4} sm={4}>
              <H4>
                <b>{vote_count}</b> votes
              </H4>
            </Col>
            <Col md={3} sm={4}>
              {!voted && (
                <Button
                  className="ActionModal_action-button"
                  style={{ marginLeft: "-0.5rem" }}
                  onClick={vote}
                >
                  <H5>
                    <b>Vote</b>
                  </H5>
                </Button>
              )}
            </Col>
          </Row>
        </BrowserView>
        <MobileView>
          <Row className="pt-3 pb-4 d-flex align-items-md-center">
            <Col xs={7} />
            <Col xs={5}>
              {!voted ? (
                <Button
                  className="ActionModal_action-button"
                  style={{ marginLeft: "-0.5rem" }}
                  onClick={vote}
                >
                  <H5>
                    <b>{vote_count}</b>
                    <Icon icon="arrow-up" size={IconSize.MEDIUM} />
                  </H5>
                </Button>
              ) : (
                <H5>
                  <b>{vote_count}</b> votes
                </H5>
              )}
            </Col>
          </Row>
        </MobileView>
      </div>
    </Col>
  );
}

export default VoteEntry;
