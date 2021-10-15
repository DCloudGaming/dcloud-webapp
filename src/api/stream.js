import { NavLink } from "react-router-dom";
import axios from "../axios";

export const getStreams = async () => {
  const response = await axios({
    method: "get",
    url: "/apps/discover"
  })
  return response;
}

export const startSession = async (app_name, host_wallet_address) => {
  const response = await axios({
    method: "post",
    url: "/apps/startSession",
    data: {
      max_duration: 0,
      client_wallet_address: localStorage.getItem("wallet_address"),
      host_wallet_address: host_wallet_address,
      app_name: app_name
    },
    withCredentials: true
  })
  return response;
}
