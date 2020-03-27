import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1565c0"
    },
    secondary: {
      main: "#eceff1"
    },
    success: {
      main: "#00C851"
    },
    error: {
      main: "#ff4444"
    },
    background: {
      default: "rgba(0, 0, 0, 1)"
    }
  }
});

export default theme;
