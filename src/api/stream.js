import { NavLink } from "react-router-dom";
import axios from "../axios";

export const getStreams = async () => {
  const response = await axios({
    method: "get",
    url: "/apps/discover"
  })
  return response;
}
