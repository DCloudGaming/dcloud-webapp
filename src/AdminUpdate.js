import { H6, Button } from "@blueprintjs/core";
import { Formik, Field, FieldArray } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./AdminUpdate.css";
import { getAdmin, updateAdmin } from "./api/admin";
import MultiSelect from "./components/MultiSelect";

function AdminUpdate() {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    const getAdminWrapper = async () => {
      // TODO
      // const resp = await getAdmin();
      // console.log(resp);
      // if (!resp.error) setAdmin(resp.data);

      setAdmin({
        hourly_rate: 10,
        allowed_apps: [
          {
            app_name: "Golden",
            publisher: "Harry Styles",
            image_url:
              "https://cdn.dribbble.com/users/1578582/screenshots/6637936/201_d_4x.png?compress=1&resize=400x300",
          },
        ],
      });
    };

    getAdminWrapper();
  }, []);

  if (!admin) {
    return <p>Loading</p>;
  }

  return (
    <Container>
      <Row>
        <Formik
          initialValues={{
            hourly_rate: admin.hourly_rate,
            allowed_apps: admin.allowed_apps,
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            values.hourly_rate = parseInt(values.hourly_rate);
            updateAdmin(values);
          }}
        >
          {({
            values,
            errors,
            setFieldValue,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Row className="mb-1">
                <Col md={2}>
                  <H6>Hourly rate</H6>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={2}>
                  <input
                    name="hourly_rate"
                    onChange={handleChange}
                    value={values.hourly_rate}
                  />
                </Col>
              </Row>
              <Row className="mb-1">
                <H6>Allowed apps</H6>
              </Row>
              <FieldArray name="allowed_apps">
                {({ insert, remove, push }) => (
                  <div>
                    {values.allowed_apps.length > 0 &&
                      values.allowed_apps.map((app, index) => (
                        <Row key={index} className="mb-3">
                          <Col md={3}>
                            <label
                              htmlFor={`allowed_apps.${index}.app_name`}
                              className="mb-2"
                            >
                              App name
                            </label>
                            <Field
                              name={`allowed_apps.${index}.app_name`}
                              type="text"
                            />
                          </Col>
                          <Col md={4}>
                            <label
                              htmlFor={`allowed_apps.${index}.image_url`}
                              className="mb-2"
                            >
                              Image Url
                            </label>
                            <Field
                              name={`allowed_apps.${index}.image_url`}
                              type="text"
                            />
                          </Col>
                          <Col md={3}>
                            <label
                              htmlFor={`allowed_apps.${index}.publisher`}
                              className="mb-2"
                            >
                              Publisher
                            </label>
                            <Field
                              name={`allowed_apps.${index}.publisher`}
                              type="text"
                            />
                          </Col>
                          <Col md={1} className="pt-2">
                            <br />
                            <Button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              Remove
                            </Button>
                          </Col>
                        </Row>
                      ))}
                    <Button
                      type="button"
                      className="secondary mt-4"
                      onClick={() =>
                        push({ app_name: "", image_url: "", publisher: "" })
                      }
                    >
                      Add app
                    </Button>
                  </div>
                )}
              </FieldArray>
              <Row>
                <button
                  className="button-highlight mt-5"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Save
                </button>
              </Row>
            </form>
          )}
        </Formik>
      </Row>
    </Container>
  );
}

export default AdminUpdate;
