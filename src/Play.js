import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Order.css";
import ReactNetflixPlayer from "react-netflix-player";
import { Container } from "reactstrap";
import ImportScript from "./common/importScript";
import { startSession } from "./api/stream";
import {useLocation} from "react-router-dom";

function Play({ order }) {
  let data = useLocation();
  // TODO: Fix this hack
  localStorage.setItem("host_wallet_address", data.state.host_wallet_address);
  localStorage.setItem("app_name", data.state.app_name);
  // useEffect(() => {
  //   const handlePlayStartSessionWrapper = async () => {
      // await startSession(data.state.app_name, data.state.host_wallet_address);
  //   }
  //   handlePlayStartSessionWrapper();
  // }, []);

  ImportScript(
    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
  );
  ImportScript("js/log.js");
  ImportScript("js/env.js");
  ImportScript("js/event/event.js");
  ImportScript("js/network/socket.js");
  // setTimeout(()=>{
  // }, 5000);
  ImportScript("js/network/rtcp.js");
  ImportScript("js/appcontroller.js");
  ImportScript("js/init.js");
  
  const history = useHistory();
  const [title, setTitle] = useState("Free Fire");
  const [subtitle, setSubTitle] = useState(" - Streaming from Anh");
  const [videoList, setVideoList] = useState([
    {
      nome: "Free Fire from Hieu",
      id: 1,
      playing: true,
    },
    {
      nome: "Free Fire from Thanh",
      id: 2,
      playing: false,
    },
    {
      nome: "Free Fire from Ngoc",
      id: 3,
      playing: false,
    },
  ]);


  return (
    <Container>
      <table id="hostAppsTable" className="table table-borderless">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Name</th>
            <th>GPU</th>
            <th>Review</th>
          </tr>
        </thead>
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
        <video id="app-screen" onContextMenu={() => false} muted playinfullscreen="false" poster="/static/assets/img/waiting.svg" playsInline
             autoPlay width="100%" height="100%"></video>
      </div>
    </Container>
  );
}

export default Play;
