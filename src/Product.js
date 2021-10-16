import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { voteApp } from "./api/listing";
import "./Product.css";

function Product({
  id,
  app_name,
  vote_count,
  // hardware,
  // hourlyRate,
  // duration,
  // startTime,
  // image,
}) {
  // const [{ basket }, dispatch] = useStateValue();
  // const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  let startTime = 1632536814826 + Math.round(Math.random() * 100);
  const startTimeObj = new Date(startTime);
  let hourlyRate = 1;
  // let duration = Math.round(Math.random() * 24);
  let rating = Math.round(Math.random() * 5);
  let hardware = "MSI Aegis RS 11th Gen";

  const vote = async () => {
    await voteApp(app_name);
    // TODO: Fix this
    window.location.reload();
    // forceUpdate();
  };

  return (
    <Card className="product">
      <CardImg
        top
        width="100%"
        src={
          "https://hoangmarketing.com/wp-content/uploads/2021/08/Thetan-Arena-la-gi.jpg"
        }
      />
      <CardBody>
        <div className="bubble">RPH ${hourlyRate}</div>
        <CardTitle tag="h5">{app_name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-3 mt-2 text-muted">
          {hardware}
        </CardSubtitle>
        <CardText>
          {startTimeObj.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })}
          <span aria-hidden="true"> · </span>
          Count Vote: {vote_count}
        </CardText>
        <br />
        <Row>
          <Col md={8}>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>🌟</p>
                ))}
            </div>
          </Col>
          <Col md={3}>
            <button large className="button-highlight" onClick={vote}>
              Vote
            </button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default Product;
