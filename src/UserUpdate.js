import { H6 } from "@blueprintjs/core";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { getUserFromToken, updateUser } from "./api/user";
import "./UserUpdate.css";

function UserUpdate() {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUserWrapper = async () => {
      const resp = await getUserFromToken();
      console.log("get user from token");
      console.log(resp);
      // const resp = await getUser(userId);
      // const resp = await getUser
      // if (!resp.error) setUser(resp.data);
      setUser(resp);
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
            // initialValues={{ email: "", password: "" }}
            initialValues={user}
            onSubmit={(values, { setSubmitting }) => {
              // updateUser(userId, values);
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                updateUser(values);
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
                  <H6>Machine</H6>
                </Row>
                <Row className="mb-4">
                  <input
                    name="machine"
                    onChange={handleChange}
                    value={values.machine}
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
                {/* <Row className="mb-4">
                  <button className="full-width button-secondary">
                    Connect with wallet
                  </button>
                </Row> */}
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
