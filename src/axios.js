import axios from "axios";

const BACKEND_URL = localStorage.getItem("backend_url");
const BACKEND_PROTOCOL = localStorage.getItem("backend_protocol");
// const BACKEND_URL = "https://api.declo.co";

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
  baseURL: `${BACKEND_PROTOCOL}://${BACKEND_URL}/api`
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;
