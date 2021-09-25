import React from "react";
import "./Product.css";
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

function Product({
  id,
  streamerId,
  title,
  hardware,
  hourlyRate,
  duration,
  startTime,
  image,
  rating,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const startTimeObj = new Date(startTime);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: hourlyRate,
        rating: rating,
      },
    });
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
        <CardTitle tag="h5">{title}</CardTitle>
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
          {duration} hours
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
            <button large className="button-highlight" onClick={addToBasket}>
              Vote
            </button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default Product;
