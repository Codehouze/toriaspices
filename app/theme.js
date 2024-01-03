import { createTheme } from "@mui/material/styles";
import { orange, red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#FF6600",
      contrastText: '#FFFFFF'

    },
    secondary: {
      main: "#90C53B",
    },
  },
  typography: {
    fontFamily: [
      "Playfair",
      "Raleway",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
  },
  error: {
    main: red[500],
  },
});

theme.typography.h1 = {};
export default theme;
