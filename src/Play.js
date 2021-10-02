import React from "react";
import "./Order.css";
import ReactNetflixPlayer from "react-netflix-player";
import { Container } from "reactstrap";
import ImportScript from "./common/importScript";

function Play({ order }) {
  ImportScript("/static/js/log.js");
  ImportScript("/static/js/env.js");
  ImportScript("/static/js/event/event.js");
  ImportScript("/static/js/network/socket.js");
  ImportScript("/static/js/network/rtcp.js");
  ImportScript("/static/js/appcontroller.js");
  ImportScript("/static/js/init.js");

  return (
    <Container>
      <div>
        <ReactNetflixPlayer
          // Vídeo Link - Just data is required
          src="http://lucasjunior.com.br/teste.mp4"
          // src={"http://videoinvalid"}
          title="Dragon Ball Z"
          subTitle="Opening"
          titleMedia="Dragon Ball Z"
          extraInfoMedia="Opening"
          // Text language of player
          playerLanguage="pt"
          // Action when the button X (close) is clicked
          backButton={() => {}}
          // The player use the all viewport
          fullPlayer
          autoPlay
          startPosition={0}
          // The info of the next video action
          dataNext={{ title: "Não existe um próximo vídeo." }}
          // The action call when the next video is clicked
          onNextClick={() => {}}
          // The list reproduction data, will be render in this order
          reprodutionList={[
            {
              nome: "Opening",
              id: 1,
              playing: true,
            },
            {
              nome: "Teste",
              id: 2,
              playing: false,
            },
          ]}
          // The function call when a item in reproductionList is clicked
          onClickItemListReproduction={(id, playing) => {
            return {
              id,
              playing,
            };
          }}
          // The function is call when the video finish
          onEnded={() => {}}
          // The function is call when the video is playing (One time for frame)
          onTimeUpdate={() => {}}
          // Enable the orverlay when player is paused
          overlayEnabled
          // Enabled the auto clode controlls of player
          autoControllCloseEnabled
          // Style
          primaryColor="#03dffc"
          secundaryColor="#ffffff"
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

          // subtitleMedia="/teste.vtt"
        />
      </div>
    </Container>
  );
}

export default Play;
