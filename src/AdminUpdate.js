import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import { Formik } from "formik";
import { H6 } from "@blueprintjs/core";
import "./AdminUpdate.css";
import { getAdmin, updateAdmin } from "./api/admin";
import MultiSelect from "./components/MultiSelect";

function AdminUpdate() {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    const getAdminWrapper = async () => {
      const resp = await getAdmin();
      console.log(resp);
      if (!resp.error) setAdmin(resp.data);
    };

    getAdminWrapper();
  }, []);

  if (!admin) {
    return <p>Loading</p>;
  }

  return (
    <Container>
      <Row>
        <Col md={4} />
        <Col md={4}>
          <Formik
            initialValues={{
              hourly_rate: admin.hourly_rate,
              allowed_apps: admin.allowed_apps,
            }}
            onSubmit={(values, { setSubmitting }) => {
              values.hourly_rate = parseInt(values.hourly_rate);
              updateAdmin(values);
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
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
                  <H6>Hourly rate</H6>
                </Row>
                <Row className="mb-4">
                  <input
                    name="hourly_rate"
                    onChange={handleChange}
                    value={values.hourly_rate}
                  />
                </Row>
                <Row className="mb-1">
                  <H6>Allowed apps</H6>
                </Row>
                <Row className="mb-4">
                  <MultiSelect
                    items={admin.allowed_apps}
                    selectedItems={values.allowed_apps}
                    onItemSelect={(item) =>
                      setFieldValue("allowed_apps", [
                        ...values.allowed_apps,
                        item,
                      ])
                    }
                    onRemove={(item) =>
                      setFieldValue(
                        "allowed_apps",
                        values.allowed_apps.filter((i) => i != item)
                      )
                    }
                  />
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

export default AdminUpdate;
