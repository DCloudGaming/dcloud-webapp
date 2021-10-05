/**
 * RTCP connection module.
 * @version 1
 */
const rtcp = (() => {
  let connection;
  let inputChannel;
  let mediaStream;
  let candidates = Array();
  let isAnswered = false;
  let isFlushing = false;

  let connected = false;
  let inputReady = false;

  const start = (iceservers) => {
    log.info(`[rtcp] <- received stunturn from worker ${iceservers}`);

    connection = new RTCPeerConnection({
      iceServers: JSON.parse(iceservers),
    });

    mediaStream = new MediaStream();

    // input channel, ordered + reliable, id 0
    // inputChannel = connection.createDataChannel('a', { ordered: true, negotiated: true, id: 0, });
    // recv dataChannel from worker
    connection.ondatachannel = (e) => {
      log.debug(`[rtcp] ondatachannel: ${e.channel.label}`);
      inputChannel = e.channel;
      inputChannel.onopen = () => {
        log.debug("[rtcp] the input channel has opened");
        inputReady = true;
        event.pub(CONNECTION_READY);
      };
      inputChannel.onclose = () =>
        log.debug("[rtcp] the input channel has closed");
    };

    connection.oniceconnectionstatechange = ice.onIceConnectionStateChange;
    connection.onicegatheringstatechange = ice.onIceStateChange;
    connection.onicecandidate = ice.onIcecandidate;
    connection.ontrack = (event) => {
      mediaStream.addTrack(event.track);
    };

    socket.send({
      type: "initwebrtc",
      data: JSON.stringify({ is_mobile: env.isMobileDevice() }),
    });
  };

  const ice = (() => {
    let isGatheringDone = false;
    let timeForIceGathering;

    const ICE_TIMEOUT = 2000;

    return {
      onIcecandidate: (event) => {
        // this trigger when setRemoteDesc success
        // send any candidate to worker
        if (event.candidate != null) {
          candidate = JSON.stringify(event.candidate);
          log.info(`[rtcp] got ice candidate: ${candidate}`);
          socket.send({
            type: "candidate",
            data: btoa(candidate),
          });
        }
      },
      onIceStateChange: (event) => {
        switch (event.target.iceGatheringState) {
          case "gathering":
            log.info("[rtcp] ice gathering");
            timeForIceGathering = setTimeout(() => {
              log.info(
                `[rtcp] ice gathering was aborted due to timeout ${ICE_TIMEOUT}ms`
              );
              // sendCandidates();
            }, ICE_TIMEOUT);
            break;
          case "complete":
            log.info("[rtcp] ice gathering completed");
            if (timeForIceGathering) {
              clearTimeout(timeForIceGathering);
            }
        }
      },
      onIceConnectionStateChange: () => {
        log.info(
          `[rtcp] <- iceConnectionState: ${connection.iceConnectionState}`
        );
        switch (connection.iceConnectionState) {
          case "connected": {
            log.info("[rtcp] connected...");
            connected = true;
            break;
          }
          case "disconnected": {
            log.info("[rtcp] disconnected...");
            connected = false;
            event.pub(CONNECTION_CLOSED);
            break;
          }
          case "failed": {
            log.error("[rtcp] connection failed, retry...");
            connected = false;
            connection
              .createOffer({ iceRestart: true })
              .then((description) =>
                connection.setLocalDescription(description).catch(log.error)
              )
              .catch(log.error);
            break;
          }
        }
      },
    };
  })();

  return {
    start: start,
    setRemoteDescription: async (data, media) => {
      const offer = new RTCSessionDescription(JSON.parse(atob(data)));
      await connection.setRemoteDescription(offer);

      const answer = await connection.createAnswer();
      // Chrome bug https://bugs.chromium.org/p/chromium/issues/detail?id=818180 workaround
      // force stereo params for Opus tracks (a=fmtp:111 ...)
      answer.sdp = answer.sdp.replace(
        /(a=fmtp:111 .*)/g,
        "$1;stereo=1;sprop-stereo=1"
      );
      await connection.setLocalDescription(answer);

      isAnswered = true;
      event.pub(MEDIA_STREAM_CANDIDATE_FLUSH);

      socket.send({ type: "answer", data: btoa(JSON.stringify(answer)) });

      media.srcObject = mediaStream;
    },
    addCandidate: (data) => {
      if (data === "") {
        event.pub(MEDIA_STREAM_CANDIDATE_FLUSH);
      } else {
        candidates.push(data);
      }
    },
    flushCandidate: () => {
      if (isFlushing || !isAnswered) return;
      isFlushing = true;
      candidates.forEach((data) => {
        d = atob(data);
        candidate = new RTCIceCandidate(JSON.parse(d));
        log.debug("[rtcp] add candidate: " + d);
        connection.addIceCandidate(candidate);
      });
      isFlushing = false;
    },
    input: (data) => inputChannel.send(data),
    isConnected: () => connected,
    isInputReady: () => inputReady,
    getConnection: () => connection,
    updateHosts: (hosts) => {
      const tab = document.getElementById("hostAppsTable");
      // const tabBody = document.getElementById("hostAppsTableBody");
      // tabBody.remove();
      var rowCount = tab.rows.length;
      for (var i = 1; i < rowCount; i++) {
        tab.deleteRow(1);
      }
      var parse_hosts = JSON.parse(hosts);

      // Fake data for displaying
      for (let i = 0; i < 14; i++) {
        parse_hosts.push({
          host_id: 1,
          app_paths: ["Garena"]
        })
      }
      console.log(parse_hosts)

      for (let i = 0; i < parse_hosts.length; i++) {
        var chosen_host = parse_hosts[i];
        var host_id = chosen_host["host_id"];
        if (!chosen_host["app_paths"]) {
          chosen_host["app_paths"] = []
        }
        for (let j = 0; j < chosen_host["app_paths"].length; j++) {
          var app = chosen_host["app_paths"][j];
          var tr = document.createElement('tr');
          tr.innerHTML = '<td class="text-center">' + (i + 1) + '</td>' + '<td>' + app + '</td>' + '<td>' + 'GeForce RTX 2080 SUPER' + '</td>' + '<td>' + '4.8/5.0' + '</td>'
          tr.onclick = createClickHandler(host_id, app);
          tab.appendChild(tr);
        }
      }
      // var chosen_host = parse_hosts[0];
      // log.info(`UpdateHosts signal ${hosts}`);
      // if (chosen_host) {
      //   socket.send({
      //     type: "registerBrowserHost",
      //     data: JSON.stringify({host_id: chosen_host["host_id"], app: chosen_host["app_paths"][0]})
      //   });
      // }
    },
  };
})(event, socket, env, log);

var createClickHandler = function (host_id, app) {
  return function () {
    socket.send({
      type: "registerBrowserHost",
      data: JSON.stringify({ host_id, app })
    });
  }
};