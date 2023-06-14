import { createTheme } from "@mui/material/styles";
import { blue, orange,red} from "@mui/material/colors";


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      dark:orange[300]
    },
    secondary: {
      main: orange[500],
    },
  },
  error: {
    main: red[500],
  },

  typography: {
    h1: {},
    h2: {},
  },
});

export default theme;
