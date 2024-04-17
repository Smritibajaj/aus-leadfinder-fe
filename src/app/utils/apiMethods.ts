import axiosInstance from "./axiosInstance";

const apiUrl = "https://aus-leadfinder.vercel.app";

export const postLeadForm = async (data) => {
  const response = await axiosInstance.post(`${apiUrl}/users`, data);
  return response;
};
