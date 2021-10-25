import { H5 } from "@blueprintjs/core";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import "./ActionModal.css";

function ActionModal({ desc, action, className }) {
  return (
    <Row
      className={`ActionModal_background justify-content-md-between align-items-md-center ${className}`}
    >
      <Col md={8}>
        <H5 style={{ color: "white" }}>{desc}</H5>
      </Col>
      <Col md={4}>
        <Link target="_blank" to="/glance">
          <Button className="ActionModal_action-button" onClick={() => {}}>
            <H5>
              <b>{action}</b>
            </H5>
          </Button>
        </Link>
      </Col>
    </Row>
  );
}

export default ActionModal;
