import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Container } from "reactstrap";
import {
  Card,
  Elevation,
  Icon,
  IconSize,
  H1,
  H5,
  Text,
  Menu,
  MenuItem,
} from "@blueprintjs/core";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Container>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILxbLJ7WORoz6aXZbiKI7-jZFRBMPWm3kAQ&usqp=CAU"
            alt=""
          />

          <div className="mt-10 mb-5">
            <b>Hello Anh</b>
            <H1>Your game basket</H1>
            <div className="mb-5" />

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={
                  "https://hoangmarketing.com/wp-content/uploads/2021/08/Thetan-Arena-la-gi.jpg"
                }
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <Card
          interactive={true}
          elevation={Elevation.ZERO}
          style={{
            background: "#a5e4ff",
          }}
        >
          <Subtotal />
        </Card>
      </div>
    </Container>
  );
}

export default Checkout;
