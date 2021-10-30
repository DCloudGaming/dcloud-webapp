import { H1, H3, Icon, IconSize } from "@blueprintjs/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import ImportScript from "./common/importScript";
import { isMobile } from "react-device-detect";
import "./Order.css";

function Play() {
  let data = useLocation();

  // TODO: Fix this hack
  let hwa = data.state
    ? data.state.host_wallet_address
    : "0xe641a324ad3641658251b8d4a3c77b537134f6b0";
  let an = data.state ? data.state.app_name : "Minesweeper";
  localStorage.setItem("host_wallet_address", hwa);
  localStorage.setItem("app_name", an);
  console.log("wallet", hwa);
  console.log("appname", an);
  // useEffect(() => {
  //   const handlePlayStartSessionWrapper = async () => {
  //     await startSession(an, hwa);
  //   };
  //   handlePlayStartSessionWrapper();
  // }, []);

  // Demo
  const query = new URLSearchParams(data.search);
  const demoTitle = query.get("demo");
  if (demoTitle == "Diablo") {
    return renderDiablo();
  }
  if (demoTitle == "Retro") {
    return renderRetro();
  }

  ImportScript(
    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    1
  );
  ImportScript("js/log.js", 2);
  ImportScript("js/env.js", 3);
  ImportScript("js/event/event.js", 4);
  ImportScript("js/network/socket.js", 5);
  ImportScript("js/network/rtcp.js", 6);
  ImportScript("js/appcontroller.js", 7);
  ImportScript("js/init.js", 8);

  return (
    <Container>
      <table id="hostAppsTable" className="table table-borderless">
        {/* <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Name</th>
            <th>GPU</th>
            <th>Review</th>
          </tr>
        </thead> */}
        <tbody id="hostAppsTableBody"></tbody>
      </table>
      {/* <div id="videoPlayer">
        <ReactNetflixPlayer
          // Vídeo Link - Just data is required
          src="http://lucasjunior.com.br/teste.mp4"
          // src={"http://videoinvalid"}
          title={title}
          subTitle={subtitle}
          titleMedia={title}
          extraInfoMedia={subtitle}
          // Text language of player
          playerLanguage="en"
          // Action when the button X (close) is clicked
          backButton={() => {
            history.push("/streams");
          }}
          // The player use the all viewport
          fullPlayer
          autoPlay
          startPosition={0}
          // The action call when the next video is clicked
          // The list reproduction data, will be render in this order
          reprodutionList={videoList}
          // The function call when a item in reproductionList is clicked
          onClickItemListReproduction={(id, playing) => {
            alert("Pick " + id);
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
      </div> */}
      <div>
        <video
          id="app-screen"
          onContextMenu={() => false}
          muted
          playinfullscreen="false"
          poster="/static/assets/img/waiting.svg"
          playsInline
          autoPlay
          width="100%"
          height="100%"
        ></video>
      </div>
    </Container>
  );
}

function renderDiablo() {
  return (
    <div style={{ background: "black" }}>
      {renderBox("Diabo")}
      <div
        style={{
          height: "100vh",
          aspectRatio: "100/76",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="http://clouddiablo.com/embed"
          frameborder="0"
          // allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

function renderRetro() {
  return (
    <div style={{ background: "black" }}>
      {renderBox("Retro")}
      <div
        style={{
          height: "100vh",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://cloudretro.io/"
          frameborder="0"
          // allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

function renderBox(game) {
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        top: "0rem",
        padding: isMobile ? "1rem 1rem 0.75rem 0.25rem" : "2rem",
        left: "15vw",
        borderRadius: "0rem 0rem 1rem 1rem",
      }}
    >
      {!isMobile && (
        <>
          <H1 style={{ color: "white" }}>Playing {game}</H1>
          <br />
        </>
      )}
      <Link to="/glance">
        <H3 style={{ color: "white" }}>
          <Icon icon="chevron-left" size={IconSize.LARGE} /> Go back
        </H3>
      </Link>
    </div>
  );
}

export default Play;
