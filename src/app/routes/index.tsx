import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../containers/Main";
import DataGrid from "../containers/Output";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
  },
  {
    path: "australia-business",
    element: <DataGrid />
  }
]);
