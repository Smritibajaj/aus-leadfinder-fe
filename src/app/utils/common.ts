/* eslint-disable @typescript-eslint/no-unused-vars */
import { APP_USER_URLS } from "../constants/urls";

export const getApiResponseErrorMessage = (object: any) => {
  if (object?.errors?.message) return object?.errors?.message;
  else if (Array.isArray(object?.errors?.errors)) {
    return object?.errors?.errors.join(" ");
  }
  return "Something went wrong";
};

export const getResponseFromApiResponse = (object: any): any => {
  const { data, status, headers } = object;
  console.log(status)
  if (data?.meta || data?.data?.length || data?.data?.length == 0) {
 
    return { data: data, meta: data?.meta };
  }
  // Handling for file download
  if (
    headers[`content-type`] &&
    (headers[`content-type`] ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      headers[`content-type`] === "application/pdf")
  ) {
    return { data: data, headers: headers };
  }
  const response = data?.data;
  return response;
};

export const redirectToUrl = (endpoint: string | null = null) => {
  return endpoint ? (window.location.href = `/${endpoint}`) : null;
};

export const getAuthRoute = () => {
  //const { redirect, params } =  checkRegisterRedirection();
  return `${APP_USER_URLS.login}`;
};

export const toastOptions = {
  duration: 4000,
  success: {
    style: {
      background: "#F3FCF4",
      border: "1px solid #4FD564",
      borderRadius: "4px",
    },
  },
  error: {
    style: {
      background: "#FDF6F6",
      border: "1px solid #EC4140",
      borderRadius: "4px",
    },
  },
};

export const ClientType: any = {
  client: "Client",
  freelancer: "Freelancer",
  agency: "Agency",
};

export const ProjectType = (scope: string) => {
  return scope === "small"
    ? "One Time Project"
    : scope === "medium"
    ? "Ongoing Project"
    : "Complex Project";
};
