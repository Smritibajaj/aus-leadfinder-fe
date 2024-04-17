/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "./axiosInstance";

const apiUrl = "/api";

export const postLeadForm = async (data: any) => {
    try {
  const response = await axiosInstance.post(`${apiUrl}/users`, data);
  return response;
    } catch (error) {
        console.error('Error fetching data:', error);
      }
};