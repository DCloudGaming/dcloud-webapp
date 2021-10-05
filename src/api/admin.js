import userEvent from "@testing-library/user-event";
import { Dropdown } from "reactstrap";
import axios from "../axios";

export const getAdmin = async () => {
  const response = await axios({
    method: "get",
    url: `/users/getAdminSettings`,
    withCredentials: true
  });
  return response;
}

export const updateAdmin = async (values) => {
  console.log(values);
  const response = await axios({
    method: "post",
    url: `/users/updateAdminSettings`,
    data: values,
    withCredentials: true
  });
  return response;
};

const generateSampleApp = () => {
  const randomId = Date.now() % 1000;
  const date = Date.now();
  do {} while (Date.now() - date < 10);

  return "Notepad " + randomId;
};

const sampleAllowedApps = [
  generateSampleApp(),
  generateSampleApp(),
  generateSampleApp(),
  generateSampleApp(),
  generateSampleApp(),
  generateSampleApp(),
  generateSampleApp(),
  generateSampleApp(),
  generateSampleApp(),
  generateSampleApp(),
  generateSampleApp(),
  generateSampleApp(),
];
