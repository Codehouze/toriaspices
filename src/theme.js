import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: colors.red[500],
    },
  },
  typography: {
    h1: {},
    h2: {},
  },
});

export default theme;
