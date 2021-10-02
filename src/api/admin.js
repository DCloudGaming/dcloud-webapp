import userEvent from "@testing-library/user-event";
import { Dropdown } from "reactstrap";

export const getAdmin = async (id) => {
  return {
    code: 200,
    message: "",
    error: null,
    data: {
      hourlyRate: "12",
      allowedApps: sampleAllowedApps,
    },
  };
};

export const updateAdmin = async (values) => {
  const resp = {
    code: 200,
    message: "Successfully update admin config.",
    error: null,
  };

  return resp;
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
