import { createTheme } from "@mui/material/styles";
import { orange, red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    // mode: "dark",
    custom: {
      main: orange[500],
    },
    secondary: {
      main: "#90C53B",
    },
  },
  error: {
    main: red[500],
  },

  typography: {
    h1: {},
    h2: {},
    myVariant:{
      fontSize:4
    }
  },
});

export default theme;
