import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { toastOptions } from "./app/constants";
import { Toaster } from "react-hot-toast";
import { theme } from "./theme";
import MainAppBar from "./app/components/MainAppbar";
import Footer from "./app/components/Footer";

function App() {
  return (
    <div className="h-full w-full">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainAppBar />
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={"calc(100vh - 132px)"}
          mx="6"
          overflow={'auto'}
        >
          <RouterProvider router={router} />
          <Toaster toastOptions={toastOptions} />
        </Box>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
