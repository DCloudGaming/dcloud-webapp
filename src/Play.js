import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import { startSession } from "./api/stream";
import ImportScript from "./common/importScript";
import "./Order.css";

function Play() {
  let data = useLocation();

  // TODO: Fix this hack
  let hwa = data.state ? data.state.host_wallet_address : "0xe641a324ad3641658251b8d4a3c77b537134f6b0";
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

  // const history = useHistory();
  // const [title, setTitle] = useState("Free Fire");
  // const [subtitle, setSubTitle] = useState(" - Streaming from Anh");
  // const [videoList, setVideoList] = useState([
  //   {
  //     nome: "Free Fire from Hieu",
  //     id: 1,
  //     playing: true,
  //   },
  //   {
  //     nome: "Free Fire from Thanh",
  //     id: 2,
  //     playing: false,
  //   },
  //   {
  //     nome: "Free Fire from Ngoc",
  //     id: 3,
  //     playing: false,
  //   },
  // ]);

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
