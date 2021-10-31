import React from "react";
import "./Paycard.css";
import MainScreen from "./screens/MainScreen";
import { BrowserView, MobileView } from "react-device-detect";

function PayCard(props) {
  return (
    <>
      <MobileView>{props.children}</MobileView>
      <BrowserView>
        <MainScreen {...props} />
      </BrowserView>
    </>
  );
}

export default PayCard;
