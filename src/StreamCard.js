import React from "react";
import "./StreamCard.css";
import { useStateValue } from "./StateProvider";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function StreamCard({
  id,
  host_wallet_address,
  app_name,
  machine,
  hourly_rate,
  duration,
  startTime,
  image,
  rating,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const startTimeObj = new Date(startTime);

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
        <div className="bubble">RPH ${hourly_rate}</div>
        <CardTitle tag="h5">{app_name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-3 mt-2 text-muted">
          {machine}
        </CardSubtitle>
        <CardText>
          {/* {startTimeObj.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          })} */}
          Ends in {duration} hours
        </CardText>
        <br />
        <Row>
          <Col md={6}>
            <div className="product__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>🌟</p>
                ))}
            </div>
          </Col>
          <Col md={6}>
            <Link to={{
              pathname: "/play",
              state: { app_name: app_name, host_wallet_address: host_wallet_address}
            }}>
              <button large className="button-highlight">
                Start playing
              </button>
            </Link>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default StreamCard;
