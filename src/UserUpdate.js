import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import { Formik } from "formik";
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
import "./UserUpdate.css";
import { getUser, updateUser } from "./api/user";

function UserUpdate() {
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
        <Col md={4} />
        <Col md={4}>
          <Formik
            initialValues={{
              name: user.name,
              location: user.location,
              hardware: user.streamer.hardware.hardware,
              avgConnection: user.streamer.hardware.avgConnection,
            }}
            onSubmit={(values, { setSubmitting }) => {
              updateUser(userId, values);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <Row className="mb-1">
                  <H6>Name</H6>
                </Row>
                <Row className="mb-4">
                  <input
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    lable="Name"
                  />
                </Row>
                <Row className="mb-1">
                  <H6>Location</H6>
                </Row>
                <Row className="mb-4">
                  <input
                    name="location"
                    onChange={handleChange}
                    value={values.location}
                  />
                </Row>
                <Row className="mb-1">
                  <H6>Hardware</H6>
                </Row>
                <Row className="mb-4">
                  <input
                    name="hardware"
                    onChange={handleChange}
                    value={values.hardware}
                  />
                </Row>
                <Row className="mb-1">
                  <H6>Connection</H6>
                </Row>
                <Row className="mb-4">
                  <input
                    name="avgConnection"
                    onChange={handleChange}
                    value={values.avgConnection}
                  />
                </Row>
                <Row className="mb-4">
                  <button className="full-width button-secondary">
                    Connect with wallet
                  </button>
                </Row>
                <Row>
                  <button
                    className="button-highlight mt-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Save
                  </button>
                </Row>
              </form>
            )}
          </Formik>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}

export default UserUpdate;
