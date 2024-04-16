import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import toast from "react-hot-toast";
//import { history } from '../helpers/history';
import {
  getApiResponseErrorMessage,
  getResponseFromApiResponse,
} from "./common";
import { APP_USER_URLS } from "../constants/urls";

const axiosInstance: AxiosInstance = axios.create();

axios.defaults.baseURL = "";
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const userSessionActive = localStorage.getItem("token");
    if (config.headers) {
      if (!config.headers["Content-Type"]) {
        config.headers["Content-Type"] = "application/json";
      }
      // config.withCredentials = true;
      if (userSessionActive && config.headers) {
        config.headers["Authorization"] = `Bearer ${userSessionActive}`;
      }
    }

    return config;
  }
);
axiosInstance.interceptors.response.use(
  (response): any => {console.log(response)
    return getResponseFromApiResponse(response)},
  (error: AxiosError): Promise<never> => {
    if (error.message && error.message === "Network error" && !error.response) {
      //toast.error("Newtwork error - Make Sure Api is runnung");
    }
    if (error.response) {
      const { status, data }: any = error.response;
      const message = getApiResponseErrorMessage(data);
      if (status === 400 && message) {
        toast.error(message);
      }
      if (error.message && error.message === "Network Error" && !data) {
        //toast.error(error.message)
      }
      if (data?.data?.message) {
        toast.error(data?.data?.message);
      }
      if (status === 404) {
        //window.location.pathname= APP_USER_URLS.notFound;
      }
      if (status === 401 && data?.data?.message) {
        window.location.href = APP_USER_URLS.login;

        toast.error("User Credentials are Invalid or Missing");
        localStorage.clear();
      } else if (status === 403 && !data?.errors?.code) {
        window.location.href = APP_USER_URLS.login;
        toast.error("Forbidden");
      } else if (status === 404) {
        toast.error("404 Not Found");
      } else if (status === 405) {
        toast.error("Method Not Allowed");
      } else if (status === 408) {
        toast.error("Request Timeout");
      } else if (status === 500) {
        toast.error("Internal Server Error");
      } else if (status === 502) {
        toast.error("Bad Gateway");
      } else if (status === 503) {
        toast.error(" Service Unavailable");
      } else if (status === 504) {
        toast.error("Gateway Timeout");
      } else if (status === 417) {
        if (data.errors?.service) {
          const errors = Object.values(data?.errors?.service);
          if (errors) {
            //errors?.map((value: any) => toast.error(value));
          }
        } else {
          //message && toast.error(message);
        }
      } else {
        // message && toast.error(message);
      }
    }
    return Promise.reject({
      status: error?.response?.status,
      message: getApiResponseErrorMessage(error?.response?.data),
    });
  }
);
export default axiosInstance;
