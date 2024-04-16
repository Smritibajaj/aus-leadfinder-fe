import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../containers/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
  },
]);
