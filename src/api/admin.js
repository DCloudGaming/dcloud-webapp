import axios from "../axios";

export const getAdmin = async () => {
  const response = await axios({
    method: "get",
    url: `/users/getAdminSettings`,
    withCredentials: true,
  });
  return response;
};

export const updateAdmin = async (values) => {
  console.log(values);
  const response = await axios({
    method: "post",
    url: `/users/updateAdminSettings`,
    data: values,
    withCredentials: true,
  });
  return response;
};
