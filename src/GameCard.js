import React from "react";
import "./GameCard.css";
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
import { green } from "@material-ui/core/colors";

function GameCard({ title, image, isChosen }) {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src={
          "https://hoangmarketing.com/wp-content/uploads/2021/08/Thetan-Arena-la-gi.jpg"
        }
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-3 mt-2 text-muted">
          {isChosen ? (
            <p style={{ color: "green" }}>
              4 fellow gamers are looking at this listing
            </p>
          ) : (
            <p>Some content to fill this space</p>
          )}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}

export default GameCard;
