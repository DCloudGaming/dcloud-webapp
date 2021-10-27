log.setLevel("log.level", "debug");

// let serverHost = "localhost:8080";
let serverHost = localStorage.getItem("backend_url");
socket.connect(location.protocol, `${serverHost}/client`);
