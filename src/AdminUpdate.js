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
              hourlyRate: admin.hourlyRate,
              allowedApps: admin.allowedApps,
            }}
            onSubmit={(values, { setSubmitting }) => {
              updateAdmin(values);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
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
                    name="hourlyRate"
                    onChange={handleChange}
                    value={values.hourlyRate}
                  />
                </Row>
                <Row className="mb-1">
                  <H6>Allowed apps</H6>
                </Row>
                <Row className="mb-4">
                  <MultiSelect
                    items={admin.allowedApps}
                    selectedItems={values.allowedApps}
                    onItemSelect={(item) =>
                      setFieldValue("allowedApps", [
                        ...values.allowedApps,
                        item,
                      ])
                    }
                    onRemove={(item) =>
                      setFieldValue(
                        "allowedApps",
                        values.allowedApps.filter((i) => i != item)
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
