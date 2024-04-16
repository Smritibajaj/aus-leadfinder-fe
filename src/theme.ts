import { createTheme } from "@mui/material";

const font = "Rubik";
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#231454",
      light: "#a7a1bb",
      dark: "#0e0822",
      contrastText: "#f4f3f6",
    },
    secondary: {
      main: "#a50f81",
      light: "#db9fcd",
      dark: "#420634",
      contrastText: "#fbf3f9",
    },
    // error: {
    //   main: "#1976d2",
    //   light: "#42a5f5",
    //   dark: "#1565c0",
    //   contrastText: "#fff",
    // },
    // warning: {
    //   main: "#1976d2",
    //   light: "#42a5f5",
    //   dark: "#1565c0",
    //   contrastText: "#fff",
    // },
    // success: {
    //   main: "#1976d2",
    //   light: "#42a5f5",
    //   dark: "#1565c0",
    //   contrastText: "#fff",
    // },
    // info: {
    //   main: "#1976d2",
    //   light: "#42a5f5",
    //   dark: "#1565c0",
    //   contrastText: "#fff",
    // },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: font,
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        // root: {
        //   transformOrigin: "center",
        // },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
          background: theme.palette.common.white,
          //border: `1px solid ${theme.palette.grey[300]}`,
          borderRadius: theme.shape.borderRadius,
          borderWidth: "1px",
        }),
        input: {
          fontSize: "14px",
          "&.MuiOutlinedInput-input": {
            // height: "1rem",
            // padding: "0.75rem 1rem",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: false,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.common.white,
          borderRadius: "8px",
          fontSize: "1rem",
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});
